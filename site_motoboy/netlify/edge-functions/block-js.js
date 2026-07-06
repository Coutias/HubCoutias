export default async (request, context) => {
    const url = new URL(request.url);
    if (url.pathname.endsWith('.js') && !request.headers.has('referer')) {
        return new Response('Forbidden', {
            status: 403,
            headers: {
                'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
                'Cache-Control': 'no-store'
            }
        });
    }
    return context.next();
};
