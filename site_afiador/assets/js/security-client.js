// ==========================================
// CLIENT SECURITY (ANTI-INSPECTION)
// ==========================================
(function() {
  function showSecurityToast() {
    let toast = document.getElementById('security-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'security-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.textContent = 'Comando proibido para nossa segurança por Studio Coutias';
      toast.style.cssText = 'position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 12px 24px; border-radius: 8px; font-family: sans-serif; font-size: 14px; z-index: 2147483647; box-shadow: 0 4px 12px rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s ease; pointer-events: none; text-align: center; white-space: nowrap; font-weight: 500;';
      document.body.appendChild(toast);
    }
    
    toast.style.opacity = '1';
    
    if (toast.timeoutId) {
      clearTimeout(toast.timeoutId);
    }
    
    toast.timeoutId = setTimeout(() => {
      toast.style.opacity = '0';
    }, 3000);
  }

  function handleForbidden(e) {
    e.preventDefault();
    showSecurityToast();
    return false;
  }

  document.addEventListener("keydown", function(e) {
    const isCtrl = e.ctrlKey || e.metaKey;
    
    // ATALHOS LIBERADOS
    // Ctrl+C
    if (isCtrl && !e.shiftKey && (e.key === 'c' || e.key === 'C')) return;
    // Ctrl+V
    if (isCtrl && !e.shiftKey && (e.key === 'v' || e.key === 'V')) return;
    // Ctrl+R
    if (isCtrl && !e.shiftKey && (e.key === 'r' || e.key === 'R')) return;
    // F5 e Ctrl+F5
    if (e.key === 'F5' && !e.shiftKey) return;
    
    // ATALHOS BLOQUEADOS (DEVTOOLS E SOURCE)
    if (e.key === 'F12') return handleForbidden(e);
    if (e.shiftKey && e.key === 'F5') return handleForbidden(e);
    if (isCtrl && (e.key === 'u' || e.key === 'U')) return handleForbidden(e);
    if (isCtrl && (e.key === 's' || e.key === 'S')) return handleForbidden(e);
    if (isCtrl && e.shiftKey && (e.key === 'I' || e.key === 'i')) return handleForbidden(e);
    if (isCtrl && e.shiftKey && (e.key === 'C' || e.key === 'c')) return handleForbidden(e);
    if (isCtrl && e.shiftKey && (e.key === 'J' || e.key === 'j')) return handleForbidden(e);
    if (isCtrl && e.shiftKey && (e.key === 'K' || e.key === 'k')) return handleForbidden(e);
  });

  document.addEventListener("contextmenu", function(e) {
    // Permite clique direito em inputs e textareas para facilitar o colar
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    return handleForbidden(e);
  });
})();
