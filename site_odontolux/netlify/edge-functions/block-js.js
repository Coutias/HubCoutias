export default async (request, context) => {
    const url = new URL(request.url);
    if (url.pathname.endsWith('.js')) {
        const accept = request.headers.get('accept') || '';
        const secFetchDest = request.headers.get('sec-fetch-dest') || '';
        const secFetchMode = request.headers.get('sec-fetch-mode') || '';

        if (accept.includes('text/html') || secFetchDest === 'document' || secFetchMode === 'navigate') {
            return new Response('Acesso negado', {
                status: 403,
                headers: {
                    'Content-Type': 'text/plain',
                    'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
                    'Cache-Control': 'no-store'
                }
            });
        }
    }
    return context.next();
};

export const config = {
    path: "/assets/js/*"
};
