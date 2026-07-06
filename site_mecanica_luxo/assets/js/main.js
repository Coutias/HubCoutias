document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer para Animações
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // 2. Proteção Anti-Inspeção e Anti-Cópia
    setupSecurity();
    
    // 3. Scroll para o topo ao carregar
    window.scrollTo(0, 0);

    // 4. Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 5. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Fecha os outros
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Abre/fecha o clicado
            item.classList.toggle('active');
        });
    });

    // 6. Atualizar o ano do rodapé automaticamente
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// 3. Lógica de Abertura do WhatsApp (Anti-bloqueio Firefox)
function openWhatsApp(message) {
    const phoneNumber = "5575981886263"; // Número oficial
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    let whatsappOpened = false;

    // MÉTODO 1: window.open (Chrome, Edge, Safari)
    try {
        const win = window.open(url, "_blank");
        if (win && !win.closed) whatsappOpened = true;
    } catch (e) {}

    // MÉTODO 2: <a>.click() invisível (fallback)
    if (!whatsappOpened) {
        try {
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            whatsappOpened = true;
        } catch (e2) {}
    }

    // MÉTODO 3: Redirecionar a própria aba (Firefox - último recurso garantido)
    if (!whatsappOpened) {
        window.location.href = url;
    }
}

// 4. Funções de Segurança
function setupSecurity() {
    // Bloquear clique direito
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showSecurityToast("✅ O conteúdo deste site é protegido.");
    });

    // Bloquear atalhos de desenvolvedor
    document.addEventListener('keydown', (e) => {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            showSecurityToast("✅ Acesso a ferramentas de desenvolvedor bloqueado.");
        }
        
        // Ctrl/Cmd + Shift + I / J / C
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            showSecurityToast("✅ Acesso a ferramentas de desenvolvedor bloqueado.");
        }

        // Ctrl/Cmd + U (Ver código fonte)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            showSecurityToast("✅ A visualização do código fonte é protegida.");
        }

        // Ctrl/Cmd + S (Salvar site)
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            showSecurityToast("✅ O salvamento desta página é bloqueado.");
        }
    });

    // Anti-Drag
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
}

function showSecurityToast(message) {
    const toast = document.getElementById('securityToast');
    if (!toast) return;

    toast.innerText = message;
    toast.classList.add('show');

    // Remove classes after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 5. Proteção de Dados Temporários (CiberSegurança SaaS)
window.clearSessionData = function() {
    // Proibido localStorage para dados de usuários, usar apenas sessionStorage para rascunhos.
    sessionStorage.clear();
};

window.addEventListener('beforeunload', () => {
    window.clearSessionData();
    window.scrollTo(0, 0);
});

window.addEventListener('pagehide', window.clearSessionData);
