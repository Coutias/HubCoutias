export default async (request, context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  const isJavaScriptAsset = pathname.startsWith("/assets/js/") && pathname.endsWith(".js");
  const fetchDest = request.headers.get("sec-fetch-dest") || "";
  const fetchMode = request.headers.get("sec-fetch-mode") || "";
  const accept = request.headers.get("accept") || "";
  
  const looksLikeDocumentNavigation =
    fetchDest === "document" ||
    fetchMode === "navigate" ||
    accept.includes("text/html");

  if (isJavaScriptAsset && looksLikeDocumentNavigation) {
    return new Response("Acesso negado.", {
      status: 403,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
        "Cache-Control": "no-store"
      }
    });
  }
};

export const config = {
  path: "/assets/js/*"
};
