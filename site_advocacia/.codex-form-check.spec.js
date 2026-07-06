const { test, expect } = require('@playwright/test');
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.png', 'image/png']
]);

let server;
let baseUrl;

test.beforeAll(async () => {
  server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
    const filePath = path.resolve(root, `.${decodeURIComponent(requestedPath)}`);

    if (!filePath.startsWith(root)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404).end('Not found');
        return;
      }

      res.writeHead(200, {
        'Content-Type': types.get(path.extname(filePath).toLowerCase()) || 'application/octet-stream',
        Date: new Date('2026-06-29T12:00:00Z').toUTCString()
      });
      res.end(data);
    });
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

test.afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test('formats client contact form and builds WhatsApp message', async ({ page }) => {
  let capturedWhatsappUrl = '';
  await page.route('https://wa.me/**', async (route) => {
    capturedWhatsappUrl = route.request().url();
    await route.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><title>ok</title>' });
  });

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await expect(page.locator('.hero-front-panel')).toContainText('Dr. Rafael Mendes');
  await expect(page.locator('.hero-front-panel')).toContainText('OAB/SP 123.456');
  await expect(page.locator('svg use[href="#icon-google-maps"]')).toHaveCount(1);
  await expect(page.locator('svg use[href="#icon-waze"]')).toHaveCount(1);

  await page.fill('#lead-name', 'maria da silva');
  await expect(page.locator('#lead-name')).toHaveValue('Maria Da Silva');
  await page.fill('#lead-phone', '11999999999');
  await expect(page.locator('#lead-phone')).toHaveValue('(11) 9 9999-9999');
  await page.fill('#lead-summary', 'estou com um problema de família e quero entender os próximos passos.');
  await expect(page.locator('#lead-summary')).toHaveValue('Estou com um problema de família e quero entender os próximos passos.');
  await page.selectOption('#lead-area', 'familia');
  await page.selectOption('#lead-urgency', 'hoje');
  await page.click('.form-submit');
  await page.waitForURL(/wa\.me/, { timeout: 5000 });

  const message = decodeURIComponent(new URL(capturedWhatsappUrl || page.url()).searchParams.get('text') || '');
  expect(message).toContain('Nome: Maria Da Silva');
  expect(message).toContain('WhatsApp informado: (11) 9 9999-9999');
  expect(message).toContain('Resumo do caso:\nEstou com um problema');
  await expect(page.locator('[data-current-year]')).toHaveText('2026');
});
