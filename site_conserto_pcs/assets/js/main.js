document.addEventListener('DOMContentLoaded', () => {
    const currentYear = Math.max(new Date().getFullYear(), 2024);
    const yrEl = document.getElementById('currentYear');
    if (yrEl) yrEl.textContent = currentYear;

    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-up, .fade-in-right').forEach(el => observer.observe(el));

    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'SVG' || e.target.tagName === 'A') e.preventDefault();
    });

    window.addEventListener('beforeunload', () => sessionStorage.clear());
    window.addEventListener('pagehide', () => sessionStorage.clear());

    const form = document.getElementById('whatsappForm');
    const telInput = document.getElementById('telefone');
    const detalhesInput = document.getElementById('detalhes');
    const charCount = document.getElementById('char-count');

    if (telInput) {
        telInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length > 11) v = v.substring(0, 11);
            if (v.length > 2) v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
            if (v.length > 9) v = `${v.substring(0, 10)}-${v.substring(10)}`;
            if (v.length > 14) v = `${v.substring(0, 10)}${v.substring(11, 15)}`;
            e.target.value = v;
        });
    }

    if (detalhesInput && charCount) {
        detalhesInput.addEventListener('input', (e) => {
            charCount.textContent = `${e.target.value.length}/200`;
        });
        detalhesInput.addEventListener('blur', (e) => {
            let val = e.target.value.trim();
            if (val.length > 0) e.target.value = val.charAt(0).toUpperCase() + val.slice(1);
        });
    }

    const nomeInput = document.getElementById('nome');
    if (nomeInput) {
        const toTitleCase = (str) => str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
        nomeInput.addEventListener('blur', (e) => {
            e.target.value = toTitleCase(e.target.value.trim().replace(/\s+/g, ' '));
        });
    }

    const sanitize = (str) => {
        if (!str) return '';
        return str.replace(/[<>]/g, '').normalize('NFKC').trim();
    };

    const showError = (inputId, msg) => {
        const input = document.getElementById(inputId);
        const errSpan = document.getElementById(`err-${inputId}`);
        if (input) input.setAttribute('aria-invalid', 'true');
        if (errSpan) errSpan.textContent = msg;
    };

    const clearErrors = () => {
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        document.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            const honeypot = document.getElementById('empresa').value;
            if (honeypot) return; 

            let isValid = true;
            let firstErrorInput = null;

            const nome = sanitize(document.getElementById('nome').value);
            if (nome.length < 3) { showError('nome', window.i18nData[window.getCurrentLang()].err_nome); isValid = false; firstErrorInput = firstErrorInput || 'nome'; }

            const telRaw = telInput.value.replace(/\D/g, '');
            if (telRaw.length < 10) { showError('telefone', window.i18nData[window.getCurrentLang()].err_tel); isValid = false; firstErrorInput = firstErrorInput || 'telefone'; }

            const servico = sanitize(document.getElementById('servico').value);
            if (!servico) { showError('servico', window.i18nData[window.getCurrentLang()].err_serv); isValid = false; firstErrorInput = firstErrorInput || 'servico'; }

            const urgencia = sanitize(document.getElementById('urgencia').value);
            if (!urgencia) { showError('urgencia', window.i18nData[window.getCurrentLang()].err_urg); isValid = false; firstErrorInput = firstErrorInput || 'urgencia'; }

            const consentimento = document.getElementById('consentimento').checked;
            if (!consentimento) { showError('consentimento', window.i18nData[window.getCurrentLang()].err_term); isValid = false; firstErrorInput = firstErrorInput || 'consentimento'; }

            if (!isValid) {
                document.getElementById(firstErrorInput).focus();
                return;
            }

            const detalhes = detalhesInput ? sanitize(detalhesInput.value) : '';
            const msg = `Olá! Meu nome é *${nome}*.\nTenho interesse em: *${servico}*.\nPrazo/Urgência: *${urgencia}*.\n${detalhes ? `\nDetalhes/Modelo: ${detalhes}\n` : ''}\nGostaria de um orçamento.`;
            
            const encodedMsg = encodeURIComponent(msg);
            const url = `https://api.whatsapp.com/send/?phone=5511999999999&text=${encodedMsg}`;
            
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            form.reset();
            if(charCount) charCount.textContent = '0/200';
        });
    }
});
