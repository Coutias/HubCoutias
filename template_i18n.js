const i18nData = {
    pt: {
        seo_title: "",
        seo_desc: "",
        nav_inicio: "Início",
        nav_servicos: "Serviços",
        nav_duvidas: "Dúvidas",
        nav_localizacao: "Localização",
        nav_agendar: "Agendar",
        hero_badge: "",
        hero_h1_1: "",
        hero_h1_2: "",
        hero_h1_3: "",
        hero_p: "",
        hero_btn_1: "Falar com Especialista",
        hero_btn_2: "Ver Serviços",
        hero_card_name: "Atendimento Rápido",
        hero_card_role: "Suporte 24h",
        hero_float_1: "",
        hero_float_2: "",
        serv_title_1: "Nossos",
        serv_title_2: "Serviços",
        serv_desc: "",
        serv_1_t: "",
        serv_1_d: "",
        serv_2_t: "",
        serv_2_d: "",
        serv_3_t: "",
        serv_3_d: "",
        serv_4_t: "",
        serv_4_d: "",
        serv_5_t: "",
        serv_5_d: "",
        serv_6_t: "",
        serv_6_d: "",
        faq_title_1: "Perguntas",
        faq_title_2: "Frequentes",
        faq_1_q: "",
        faq_1_a: "",
        faq_2_q: "",
        faq_2_a: "",
        faq_3_q: "",
        faq_3_a: "",
        faq_4_q: "",
        faq_4_a: "",
        faq_5_q: "",
        faq_5_a: "",
        contact_title_1: "Fale Conosco.",
        contact_title_2: "Agende Agora",
        form_name: "Seu Nome *",
        form_name_ph: "Digite seu nome",
        form_tel: "WhatsApp *",
        form_tel_ph: "(00) 0 0000-0000",
        form_serv: "Qual serviço precisa? *",
        form_serv_ph: "Selecione...",
        form_serv_1: "Serviço 1",
        form_serv_2: "Serviço 2",
        form_serv_3: "Serviço 3",
        form_serv_4: "Outros",
        form_urg: "Urgência *",
        form_urg_ph: "Selecione...",
        form_urg_1: "Emergência (Agora)",
        form_urg_2: "Esta semana",
        form_det: "Detalhes do problema <span class='char-count' id='char-count'>0/200</span>",
        form_det_ph: "Explique brevemente...",
        form_term: "Aceito os termos e consinto o contato via WhatsApp. *",
        form_btn: "Solicitar Orçamento",
        loc_title: "Onde Estamos",
        loc_address: "Rua Exemplo, 123 - Centro<br>São Paulo - SP",
        loc_waze: "Abrir no Waze",
        loc_maps: "Google Maps",
        footer_rights: "Todos os direitos reservados.",
        footer_made: "Feito com ❤️ por",
        err_nome: "Nome é obrigatório.",
        err_tel: "WhatsApp inválido.",
        err_serv: "Selecione o serviço.",
        err_urg: "Selecione a urgência.",
        err_term: "Você deve aceitar os termos.",
        toast_msg: "Comando protegido por Studio Coutias"
    },
    en: {
        // MUST INCLUDE ALL EXACT KEYS TRANSLATED
    },
    es: {
        // MUST INCLUDE ALL EXACT KEYS TRANSLATED
    }
};

let currentLang = 'pt';
function updateLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang][key]) {
            if (el.tagName === 'META') el.content = i18nData[lang][key];
            else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = i18nData[lang][key];
            else el.innerHTML = i18nData[lang][key];
        }
    });
    document.querySelectorAll('select [data-i18n-opt]').forEach(opt => {
        const key = opt.getAttribute('data-i18n-opt');
        if (i18nData[lang][key]) {
            opt.textContent = i18nData[lang][key];
            opt.value = i18nData[lang][key];
        }
    });
    const flags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
    const texts = { pt: 'PT', en: 'EN', es: 'ES' };
    const currentFlagEl = document.getElementById('currentLangFlag');
    const currentTextEl = document.getElementById('currentLangText');
    if(currentFlagEl) currentFlagEl.textContent = flags[lang];
    if(currentTextEl) currentTextEl.textContent = texts[lang];
}
document.addEventListener('DOMContentLoaded', () => {
    let userLang = navigator.language || navigator.userLanguage || 'en';
    userLang = userLang.toLowerCase().substring(0, 2);
    let initialLang = 'en';
    if (['pt', 'en', 'es'].includes(userLang)) initialLang = userLang;
    updateLanguage(initialLang);
    const langBtn = document.getElementById('currentLangBtn');
    const langDropdown = document.getElementById('langDropdown');
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
            langBtn.setAttribute('aria-expanded', langDropdown.classList.contains('active'));
        });
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
            langBtn.setAttribute('aria-expanded', 'false');
        });
        langDropdown.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                updateLanguage(e.target.closest('button').getAttribute('data-lang'));
            });
        });
    }
});
window.i18nData = i18nData;
window.getCurrentLang = () => currentLang;
