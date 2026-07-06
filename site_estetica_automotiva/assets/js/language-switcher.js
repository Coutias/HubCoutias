(() => {
    const STORAGE_KEY = 'studiocoutias-site-locale';
    const DEFAULT_LOCALE = 'pt';
    const LOCALES = {
        pt: {
            flag: '🇧🇷',
            label: 'PT',
            lang: 'pt-BR',
            ddi: '+55',
            ddiDigits: '55',
            localDigits: 11,
            maxLength: 19,
            format(digits) {
                const area = digits.slice(0, 2);
                const first = digits.slice(2, 7);
                const last = digits.slice(7, 11);
                if (!digits) return '';
                if (digits.length <= 2) return `+55 (${area}`;
                if (digits.length <= 7) return `+55 (${area}) ${first}`;
                return `+55 (${area}) ${first}-${last}`;
            },
            placeholder: '+55 (11) 98765-4321'
        },
        en: {
            flag: '🇺🇸',
            label: 'EN',
            lang: 'en-US',
            ddi: '+1',
            ddiDigits: '1',
            localDigits: 10,
            maxLength: 18,
            format(digits) {
                const area = digits.slice(0, 3);
                const first = digits.slice(3, 6);
                const last = digits.slice(6, 10);
                if (!digits) return '';
                if (digits.length <= 3) return `+1 (${area}`;
                if (digits.length <= 6) return `+1 (${area}) ${first}`;
                return `+1 (${area}) ${first}-${last}`;
            },
            placeholder: '+1 (201) 555-0123'
        },
        es: {
            flag: '🇪🇸',
            label: 'ES',
            lang: 'es-ES',
            ddi: '+34',
            ddiDigits: '34',
            localDigits: 9,
            maxLength: 17,
            format(digits) {
                const first = digits.slice(0, 3);
                const second = digits.slice(3, 5);
                const third = digits.slice(5, 7);
                const fourth = digits.slice(7, 9);
                if (!digits) return '';
                if (digits.length <= 3) return `+34 ${first}`;
                if (digits.length <= 5) return `+34 ${first} ${second}`;
                if (digits.length <= 7) return `+34 ${first} ${second} ${third}`;
                return `+34 ${first} ${second} ${third} ${fourth}`;
            },
            placeholder: '+34 612 34 56 78'
        }
    };

    const COMMON_TEXT = {
        pt: {
            navHome: 'Início',
            navServices: 'Serviços',
            navFaq: 'FAQ',
            navLocation: 'Localização',
            headerCta: 'Orçamento',
            heroPrimary: 'Fale com um Especialista',
            heroSecondary: 'Nossos Serviços',
            heroCardTitle: 'Diagnóstico Rápido',
            heroCardDesc: 'Reparo muitas vezes no mesmo dia',
            heroPanelTop: 'Técnico Certificado',
            heroPanelMain: 'Especialista Apple',
            heroPanelBottom: 'Reparo Avançado',
            fieldName: 'Nome',
            fieldNamePlaceholder: 'Seu nome',
            fieldPhone: 'WhatsApp',
            fieldArea: 'Especialidade',
            fieldUrgency: 'Urgência',
            chooseOption: 'Escolha uma opção',
            checkbox: 'Autorizo montar a mensagem com esses dados para envio pelo WhatsApp.',
            submit: 'Enviar Solicitação',
            summaryCounterSuffix: 'caracteres',
            waze: 'Rota pelo Waze',
            maps: 'Google Maps',
            footerRights: 'Todos os direitos reservados.',
            footerMadeWith: 'Feito com',
            footerBy: 'por',
            feedbackSuccess: 'Abrindo o WhatsApp com os dados preenchidos...',
            blockedError: 'Não foi possível enviar agora. Tente novamente em alguns minutos.',
            nameError: 'Informe seu nome.',
            phoneError: 'Informe um WhatsApp válido no formato selecionado.',
            areaError: 'Escolha a especialidade desejada.',
            urgencyError: 'Escolha a urgência.',
            summaryError: 'Escreva os detalhes com pelo menos 20 caracteres.',
            consentError: 'Autorize o envio para continuar.',
            leadIntro: 'Olá, vim pelo site e preenchi o formulário.',
            leadName: 'Nome',
            leadPhone: 'WhatsApp informado',
            leadArea: 'Especialidade',
            leadUrgency: 'Urgência',
            leadSummaryTitle: 'Detalhes enviados',
            leadClose: 'Poderiam me passar mais informações?'
        },
        en: {
            navHome: 'Home',
            navServices: 'Services',
            navFaq: 'FAQ',
            navLocation: 'Location',
            headerCta: 'Quote',
            heroPrimary: 'Talk to a Specialist',
            heroSecondary: 'Our Services',
            heroCardTitle: 'Fast Diagnosis',
            heroCardDesc: 'Same-day repair in many cases',
            heroPanelTop: 'Certified Technician',
            heroPanelMain: 'Apple Specialist',
            heroPanelBottom: 'Advanced Repair',
            fieldName: 'Name',
            fieldNamePlaceholder: 'Your name',
            fieldPhone: 'WhatsApp',
            fieldArea: 'Service',
            fieldUrgency: 'Urgency',
            chooseOption: 'Choose an option',
            checkbox: 'I authorize sending this information through WhatsApp.',
            submit: 'Send Request',
            summaryCounterSuffix: 'characters',
            waze: 'Route via Waze',
            maps: 'Google Maps',
            footerRights: 'All rights reserved.',
            footerMadeWith: 'Made with',
            footerBy: 'by',
            feedbackSuccess: 'Opening WhatsApp with your details...',
            blockedError: 'Unable to send right now. Please try again in a few minutes.',
            nameError: 'Please enter your name.',
            phoneError: 'Please enter a valid WhatsApp number in the selected format.',
            areaError: 'Choose the service you need.',
            urgencyError: 'Choose the urgency level.',
            summaryError: 'Please add at least 20 characters with more details.',
            consentError: 'Please authorize the message before continuing.',
            leadIntro: 'Hello, I came through the website and filled out the form.',
            leadName: 'Name',
            leadPhone: 'WhatsApp number',
            leadArea: 'Service',
            leadUrgency: 'Urgency',
            leadSummaryTitle: 'Submitted details',
            leadClose: 'Could you please send me more information?'
        },
        es: {
            navHome: 'Inicio',
            navServices: 'Servicios',
            navFaq: 'FAQ',
            navLocation: 'Ubicación',
            headerCta: 'Presupuesto',
            heroPrimary: 'Habla con un Especialista',
            heroSecondary: 'Nuestros Servicios',
            heroCardTitle: 'Diagnóstico Rápido',
            heroCardDesc: 'Reparación muchas veces el mismo día',
            heroPanelTop: 'Técnico Certificado',
            heroPanelMain: 'Especialista Apple',
            heroPanelBottom: 'Reparación Avanzada',
            fieldName: 'Nombre',
            fieldNamePlaceholder: 'Tu nombre',
            fieldPhone: 'WhatsApp',
            fieldArea: 'Servicio',
            fieldUrgency: 'Urgencia',
            chooseOption: 'Elige una opción',
            checkbox: 'Autorizo el envío de estos datos por WhatsApp.',
            submit: 'Enviar Solicitud',
            summaryCounterSuffix: 'caracteres',
            waze: 'Ruta por Waze',
            maps: 'Google Maps',
            footerRights: 'Todos los derechos reservados.',
            footerMadeWith: 'Hecho con',
            footerBy: 'por',
            feedbackSuccess: 'Abriendo WhatsApp con tus datos...',
            blockedError: 'No fue posible enviar ahora. Inténtalo nuevamente en unos minutos.',
            nameError: 'Ingresa tu nombre.',
            phoneError: 'Ingresa un número de WhatsApp válido en el formato seleccionado.',
            areaError: 'Elige el servicio que necesitas.',
            urgencyError: 'Elige la urgencia.',
            summaryError: 'Escribe al menos 20 caracteres con más detalles.',
            consentError: 'Autoriza el envío para continuar.',
            leadIntro: 'Hola, llegué por el sitio web y completé el formulario.',
            leadName: 'Nombre',
            leadPhone: 'WhatsApp informado',
            leadArea: 'Servicio',
            leadUrgency: 'Urgencia',
            leadSummaryTitle: 'Detalles enviados',
            leadClose: '¿Podrían enviarme más información?'
        }
    };

    const SITE_TEXT = {
        site_apple: {
            pt: {
                title: 'Apple Repair Premium | Excelência e Rapidez',
                heroBadge: 'Assistência Técnica Especializada',
                heroTitle: 'REPARE SEU APPLE COM <br><span class="text-gradient">EXCELÊNCIA.</span>',
                heroDesc: 'A tela quebrou ou o Mac falhou? Devolva a performance original ao seu equipamento com peças premium e diagnóstico preciso, sem dor de cabeça.',
                servicesTitle: 'Nossas Especialidades',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'Dúvidas antes de trazer seu aparelho.',
                faqDesc: 'O medo de perder dados ou ter um conserto mal feito trava muita gente. Veja as respostas mais comuns de quem busca um reparo definitivo.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'Qual problema seu aparelho apresenta?',
                contactDesc: 'Conte o que está acontecendo. O site envia tudo direto para nosso WhatsApp com a mensagem pronta para nossos técnicos avaliarem.',
                areaLabel: 'Equipamento',
                areaOptions: {
                    iphone: 'iPhone (Tela, bateria, câmera)',
                    mac: 'MacBook ou iMac',
                    ipad: 'iPad ou Apple Watch',
                    placa: 'Não liga / Placa Lógica'
                },
                urgencyLabel: 'Urgência',
                urgencyOptions: {
                    hoje: 'Estou sem aparelho, urgente!',
                    semana: 'Pode ser nesta semana',
                    apenas_orcamento: 'Quero apenas um orçamento'
                },
                summaryLabel: 'Detalhes do problema',
                summaryPlaceholder: 'Conte qual o modelo do seu Apple e o que aconteceu...',
                serviceCards: [
                    {
                        title: 'Conserto de iPhone',
                        description: 'A bateria viciou ou a tela rachou? Seu iPhone reparado com agilidade, sem perder seus dados ou a qualidade do touch original.'
                    },
                    {
                        title: 'Manutenção de Mac',
                        description: 'Seu MacBook ou iMac está lento e superaquecendo? Fazemos upgrade, limpeza interna e reparo avançado de placa lógica.'
                    },
                    {
                        title: 'Reparo de Apple Watch',
                        description: 'Tela quebrada ou coroa digital travando? Devolvemos a funcionalidade e o estilo do seu relógio inteligente com precisão.'
                    },
                    {
                        title: 'Limpeza de AirPods',
                        description: 'Som baixo, bateria descarregando rápido ou problemas de pareamento? Restauramos a qualidade sonora dos seus fones.'
                    }
                ],
                locationBadge: 'Nossa Loja',
                locationTitle: 'Venha conhecer nosso laboratório Apple.',
                locationDesc: 'Estrutura premium no coração da cidade, com equipamentos de ponta para cuidar do seu aparelho com total segurança e precisão.'
            },
            en: {
                title: 'Apple Repair Premium | Excellence and Speed',
                heroBadge: 'Specialized Technical Assistance',
                heroTitle: 'REPAIR YOUR APPLE WITH <br><span class="text-gradient">EXCELLENCE.</span>',
                heroDesc: 'Broken screen or failing Mac? Restore the original performance of your device with premium parts and precise diagnostics.',
                servicesTitle: 'Our Specialties',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'Questions before bringing your device.',
                faqDesc: 'Many people delay repairs because they fear data loss or poor workmanship. Here are the most common answers.',
                contactBadge: 'First contact',
                contactTitle: 'What issue is your device having?',
                contactDesc: 'Tell us what is happening. The site sends everything directly to our WhatsApp with a ready message for our technicians.',
                areaLabel: 'Device',
                areaOptions: {
                    iphone: 'iPhone (Screen, battery, camera)',
                    mac: 'MacBook or iMac',
                    ipad: 'iPad or Apple Watch',
                    placa: 'No power / Logic board'
                },
                urgencyLabel: 'Urgency',
                urgencyOptions: {
                    hoje: 'I am without my device, urgent!',
                    semana: 'This week works for me',
                    apenas_orcamento: 'I only want a quote'
                },
                summaryLabel: 'Problem details',
                summaryPlaceholder: 'Tell us your Apple model and what happened...',
                serviceCards: [
                    {
                        title: 'iPhone Repair',
                        description: 'Worn-out battery or cracked screen? Get your iPhone repaired quickly without losing data or touch quality.'
                    },
                    {
                        title: 'Mac Maintenance',
                        description: 'Is your MacBook or iMac slow and overheating? We handle upgrades, internal cleaning and advanced logic board repair.'
                    },
                    {
                        title: 'Apple Watch Repair',
                        description: 'Broken screen or stuck digital crown? We restore the function and style of your smartwatch with precision.'
                    },
                    {
                        title: 'AirPods Cleaning',
                        description: 'Low sound, fast battery drain or pairing issues? We restore the audio quality of your earbuds.'
                    }
                ],
                locationBadge: 'Our Store',
                locationTitle: 'Visit our Apple lab.',
                locationDesc: 'Premium structure in the heart of the city with advanced equipment for precise and safe repairs.'
            },
            es: {
                title: 'Apple Repair Premium | Excelencia y Rapidez',
                heroBadge: 'Asistencia Técnica Especializada',
                heroTitle: 'REPARA TU APPLE CON <br><span class="text-gradient">EXCELENCIA.</span>',
                heroDesc: '¿Pantalla rota o Mac con fallas? Recupera el rendimiento original de tu equipo con piezas premium y diagnóstico preciso.',
                servicesTitle: 'Nuestras Especialidades',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Dudas antes de traer tu equipo.',
                faqDesc: 'Muchas personas frenan la reparación por miedo a perder datos o a un mal trabajo. Aquí están las respuestas más comunes.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué problema presenta tu equipo?',
                contactDesc: 'Cuéntanos qué está pasando. El sitio envía todo directamente a nuestro WhatsApp con el mensaje listo para el técnico.',
                areaLabel: 'Equipo',
                areaOptions: {
                    iphone: 'iPhone (Pantalla, batería, cámara)',
                    mac: 'MacBook o iMac',
                    ipad: 'iPad o Apple Watch',
                    placa: 'No enciende / Placa lógica'
                },
                urgencyLabel: 'Urgencia',
                urgencyOptions: {
                    hoje: 'Estoy sin equipo, ¡urgente!',
                    semana: 'Puede ser esta semana',
                    apenas_orcamento: 'Solo quiero un presupuesto'
                },
                summaryLabel: 'Detalles del problema',
                summaryPlaceholder: 'Cuéntanos el modelo de tu Apple y lo que ocurrió...',
                serviceCards: [
                    {
                        title: 'Reparación de iPhone',
                        description: '¿Batería agotada o pantalla rota? Reparamos tu iPhone con agilidad, sin perder datos ni calidad táctil.'
                    },
                    {
                        title: 'Mantenimiento de Mac',
                        description: '¿Tu MacBook o iMac está lento y se sobrecalienta? Hacemos upgrade, limpieza interna y reparación avanzada de placa lógica.'
                    },
                    {
                        title: 'Reparación de Apple Watch',
                        description: '¿Pantalla rota o corona digital trabada? Recuperamos la funcionalidad y el estilo de tu reloj con precisión.'
                    },
                    {
                        title: 'Limpieza de AirPods',
                        description: '¿Sonido bajo, batería descargando rápido o problemas de emparejamiento? Restauramos la calidad sonora de tus auriculares.'
                    }
                ],
                locationBadge: 'Nuestra Tienda',
                locationTitle: 'Ven a conocer nuestro laboratorio Apple.',
                locationDesc: 'Estructura premium en el corazón de la ciudad con equipos de alto nivel para reparar tu dispositivo con seguridad.'
            }
        },
        site_advocacia: {
            pt: {
                title: 'Mendes Advocacia | Defesa Estratégica',
                headerCta: 'Consultar Caso',
                navServicesLabel: 'Especialidades',
                heroBadge: 'Advocacia Estratégica',
                heroTitle: 'PROTEJA SEUS DIREITOS COM <br><span class="text-gradient">ESTRATÉGIA.</span>',
                heroDesc: 'Atuação precisa para casos sensíveis, negociações complexas e defesas que exigem posicionamento técnico e resposta rápida.',
                heroSecondary: 'Áreas de Atuação',
                servicesTitle: 'Especialidades com foco em segurança.',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'Antes de expor o seu caso, saiba disso.',
                faqDesc: 'Quem procura um advogado normalmente chega pressionado por prazo, risco e insegurança. Aqui estão as respostas mais comuns.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'O que você precisa resolver agora?',
                contactDesc: 'Explique o cenário. O site envia seu resumo direto para nosso WhatsApp para uma análise inicial objetiva.',
                heroCardTitle: 'Análise Estratégica',
                heroCardDesc: 'Leitura inicial com foco em risco e urgência',
                heroPanelTop: 'Atendimento Reservado',
                heroPanelMain: 'Advocacia Estratégica',
                heroPanelBottom: 'Família e Patrimônio | OAB/SP 123.456',
                areaLabel: 'Área do caso',
                areaOptions: {
                    familia: 'Divórcio / Guarda / Pensão',
                    patrimonio: 'Proteção Patrimonial',
                    sucessao: 'Inventário / Sucessão',
                    urgente: 'Medida urgente'
                },
                urgencyLabel: 'Momento do caso',
                urgencyOptions: {
                    imediato: 'Preciso agir agora',
                    semana: 'Quero alinhar ainda esta semana',
                    avaliacao: 'Quero entender o melhor caminho'
                },
                summaryLabel: 'Resumo do caso',
                summaryPlaceholder: 'Explique o cenário, o que já aconteceu e o que precisa proteger.',
                serviceCards: [
                    {
                        title: 'Direito de Família',
                        description: 'Separações complexas, guarda, pensão e medidas urgentes conduzidas com firmeza, leitura técnica do risco e proteção da sua posição desde o início.'
                    },
                    {
                        title: 'Proteção Patrimonial',
                        description: 'Estruturação preventiva para reduzir exposição, organizar ativos e blindar decisões importantes antes que o conflito fique caro demais.'
                    },
                    {
                        title: 'Inventário e Sucessão',
                        description: 'Planejamento sucessório e inventários com estratégia documental, menos atrito familiar e mais previsibilidade sobre prazo e patrimônio.'
                    }
                ],
                locationBadge: 'Nosso Escritório',
                locationTitle: 'Atendimento jurídico com discrição e clareza.',
                locationDesc: 'Estrutura preparada para reuniões presenciais e acompanhamento estratégico em casos de alta sensibilidade.'
            },
            en: {
                title: 'Mendes Law Firm | Strategic Defense',
                headerCta: 'Review Case',
                navServicesLabel: 'Specialties',
                heroBadge: 'Strategic Legal Counsel',
                heroTitle: 'PROTECT YOUR RIGHTS WITH <br><span class="text-gradient">STRATEGY.</span>',
                heroDesc: 'Precise work for sensitive cases, complex negotiations and defenses that require technical positioning and fast response.',
                heroSecondary: 'Practice Areas',
                servicesTitle: 'Practice areas focused on protection.',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'Before sharing your case, know this.',
                faqDesc: 'People looking for a lawyer usually arrive under pressure from deadlines, risk and uncertainty. Here are the most common answers.',
                contactBadge: 'First contact',
                contactTitle: 'What do you need to solve right now?',
                contactDesc: 'Explain the situation. The site sends your summary directly to our WhatsApp for an objective first review.',
                heroCardTitle: 'Strategic Assessment',
                heroCardDesc: 'Initial review focused on risk and urgency',
                heroPanelTop: 'Private Service',
                heroPanelMain: 'Strategic Counsel',
                heroPanelBottom: 'Family and Asset Protection | OAB/SP 123.456',
                areaLabel: 'Case area',
                areaOptions: {
                    familia: 'Divorce / Custody / Support',
                    patrimonio: 'Asset Protection',
                    sucessao: 'Probate / Succession',
                    urgente: 'Urgent measure'
                },
                urgencyLabel: 'Case stage',
                urgencyOptions: {
                    imediato: 'I need to act now',
                    semana: 'This week works for me',
                    avaliacao: 'I want to understand the best path'
                },
                summaryLabel: 'Case summary',
                summaryPlaceholder: 'Explain the situation, what already happened and what you need to protect.',
                serviceCards: [
                    {
                        title: 'Family Law',
                        description: 'Complex separations, custody, support and urgent measures handled with firmness, technical risk reading and protection from the start.'
                    },
                    {
                        title: 'Asset Protection',
                        description: 'Preventive structuring to reduce exposure, organize assets and protect major decisions before conflict becomes too expensive.'
                    },
                    {
                        title: 'Probate and Succession',
                        description: 'Succession planning and probate with documentary strategy, less family friction and more predictability on timeline and assets.'
                    }
                ],
                locationBadge: 'Our Office',
                locationTitle: 'Legal support with discretion and clarity.',
                locationDesc: 'A structure prepared for in-person meetings and strategic follow-up on highly sensitive cases.'
            },
            es: {
                title: 'Mendes Abogados | Defensa Estratégica',
                headerCta: 'Consultar Caso',
                navServicesLabel: 'Especialidades',
                heroBadge: 'Abogacía Estratégica',
                heroTitle: 'PROTEGE TUS DERECHOS CON <br><span class="text-gradient">ESTRATEGIA.</span>',
                heroDesc: 'Actuación precisa para casos sensibles, negociaciones complejas y defensas que exigen criterio técnico y rapidez.',
                heroSecondary: 'Áreas de Actuación',
                servicesTitle: 'Especialidades con foco en seguridad.',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Antes de exponer tu caso, debes saber esto.',
                faqDesc: 'Quien busca un abogado normalmente llega con presión por plazo, riesgo e inseguridad. Aquí están las respuestas más comunes.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué necesitas resolver ahora?',
                contactDesc: 'Explica la situación. El sitio envía tu resumen directamente a nuestro WhatsApp para una revisión inicial objetiva.',
                heroCardTitle: 'Análisis Estratégico',
                heroCardDesc: 'Lectura inicial enfocada en riesgo y urgencia',
                heroPanelTop: 'Atención Reservada',
                heroPanelMain: 'Abogacía Estratégica',
                heroPanelBottom: 'Familia y Patrimonio | OAB/SP 123.456',
                areaLabel: 'Área del caso',
                areaOptions: {
                    familia: 'Divorcio / Custodia / Pensión',
                    patrimonio: 'Protección Patrimonial',
                    sucessao: 'Inventario / Sucesión',
                    urgente: 'Medida urgente'
                },
                urgencyLabel: 'Momento del caso',
                urgencyOptions: {
                    imediato: 'Necesito actuar ahora',
                    semana: 'Puede ser esta semana',
                    avaliacao: 'Quiero entender el mejor camino'
                },
                summaryLabel: 'Resumen del caso',
                summaryPlaceholder: 'Explica la situación, lo que ya ocurrió y lo que necesitas proteger.',
                serviceCards: [
                    {
                        title: 'Derecho de Familia',
                        description: 'Separaciones complejas, custodia, pensión y medidas urgentes tratadas con firmeza, lectura técnica del riesgo y protección desde el inicio.'
                    },
                    {
                        title: 'Protección Patrimonial',
                        description: 'Estructuración preventiva para reducir exposición, organizar activos y blindar decisiones importantes antes de que el conflicto escale.'
                    },
                    {
                        title: 'Inventario y Sucesión',
                        description: 'Planificación sucesoria e inventarios con estrategia documental, menos fricción familiar y más previsibilidad sobre plazo y patrimonio.'
                    }
                ],
                locationBadge: 'Nuestra Oficina',
                locationTitle: 'Atención jurídica con discreción y claridad.',
                locationDesc: 'Estructura preparada para reuniones presenciales y seguimiento estratégico en casos de alta sensibilidad.'
            }
        },
        site_arquitetura: {
            pt: {
                title: 'Prado Arquitetura | Projetos de Alto Padrão',
                headerCta: 'Pedir Estudo',
                navServicesLabel: 'Projetos',
                navLocationLabel: 'Estúdio',
                heroBadge: 'Arquitetura Sob Medida',
                heroTitle: 'TRANSFORME SEU ESPAÇO COM <br><span class="text-gradient">PRECISÃO.</span>',
                heroDesc: 'Projetos residenciais e comerciais com leitura técnica, estética refinada e decisões alinhadas ao seu uso real do espaço.',
                heroSecondary: 'Ver Projetos',
                servicesTitle: 'Projetos pensados para valorizar rotina e patrimônio.',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'Antes de iniciar seu projeto, veja isso.',
                faqDesc: 'Quem vai reformar ou construir precisa evitar erro caro, retrabalho e decisões sem direção. Aqui estão as dúvidas mais comuns.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'Que tipo de projeto você quer tirar do papel?',
                contactDesc: 'Informe o contexto do espaço e o objetivo. O site envia tudo direto para nosso WhatsApp para um primeiro alinhamento.',
                heroCardTitle: 'Briefing Preciso',
                heroCardDesc: 'Direção clara antes de investir na obra',
                heroPanelTop: 'Arquiteta Responsável',
                heroPanelMain: 'Projetos Autorais',
                heroPanelBottom: 'Detalhamento Executivo',
                areaLabel: 'Tipo de projeto',
                areaOptions: {
                    residencial: 'Casa ou Apartamento',
                    interiores: 'Interiores Premium',
                    comercial: 'Projeto Comercial',
                    reforma: 'Reforma Estratégica'
                },
                urgencyLabel: 'Momento do projeto',
                urgencyOptions: {
                    inicio: 'Ainda estou no início',
                    terreno: 'Já tenho terreno/imóvel',
                    obra: 'Preciso destravar uma obra'
                },
                summaryLabel: 'Resumo',
                summaryPlaceholder: 'Conte metragem, objetivo do espaço e o que precisa resolver agora.',
                serviceCards: [
                    {
                        title: 'Casas Autorais',
                        description: 'Projetos residenciais com linguagem contemporânea, implantação inteligente e decisões formais que entregam presença sem sacrificar conforto real.'
                    },
                    {
                        title: 'Interiores Premium',
                        description: 'Ambientes integrados, materialidade consistente e desenho sob medida para transformar metragem em experiência de uso e percepção de valor.'
                    },
                    {
                        title: 'Reforma com Direção',
                        description: 'Estudo, compatibilização e detalhamento para evitar obra improvisada, desperdício de material e decisões caras tomadas no canteiro.'
                    }
                ],
                locationBadge: 'Nosso Estúdio',
                locationTitle: 'Venha conhecer o estúdio e alinhar seu projeto.',
                locationDesc: 'Atendimento em ambiente reservado com foco em briefing, funcionalidade, estética e viabilidade da obra.'
            },
            en: {
                title: 'Prado Architecture | High-End Projects',
                headerCta: 'Request Study',
                navServicesLabel: 'Projects',
                navLocationLabel: 'Studio',
                heroBadge: 'Tailored Architecture',
                heroTitle: 'TRANSFORM YOUR SPACE WITH <br><span class="text-gradient">PRECISION.</span>',
                heroDesc: 'Residential and commercial projects with technical clarity, refined aesthetics and decisions aligned with real use.',
                heroSecondary: 'View Projects',
                servicesTitle: 'Projects designed to elevate routine and long-term value.',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'Before starting your project, read this.',
                faqDesc: 'Anyone renovating or building needs to avoid expensive mistakes, rework and directionless decisions. Here are the common questions.',
                contactBadge: 'First contact',
                contactTitle: 'What kind of project do you want to build?',
                contactDesc: 'Share the context of the space and your goal. The site sends everything directly to our WhatsApp for a first alignment.',
                heroCardTitle: 'Precise Brief',
                heroCardDesc: 'Clear direction before investing in the build',
                heroPanelTop: 'Lead Architect',
                heroPanelMain: 'Signature Projects',
                heroPanelBottom: 'Executive Detailing',
                areaLabel: 'Project type',
                areaOptions: {
                    residencial: 'House or Apartment',
                    interiores: 'Premium Interiors',
                    comercial: 'Commercial Project',
                    reforma: 'Strategic Renovation'
                },
                urgencyLabel: 'Project stage',
                urgencyOptions: {
                    inicio: 'I am still at the beginning',
                    terreno: 'I already have the property',
                    obra: 'I need to unblock a project'
                },
                summaryLabel: 'Summary',
                summaryPlaceholder: 'Tell us the square footage, project goal and what must be solved now.',
                serviceCards: [
                    {
                        title: 'Signature Homes',
                        description: 'Residential projects with contemporary language, smart placement and formal decisions that create presence without sacrificing real comfort.'
                    },
                    {
                        title: 'Premium Interiors',
                        description: 'Integrated environments, consistent materiality and bespoke design that turn square footage into experience and perceived value.'
                    },
                    {
                        title: 'Guided Renovation',
                        description: 'Study, coordination and detailing to avoid improvised construction, material waste and costly site decisions.'
                    }
                ],
                locationBadge: 'Our Studio',
                locationTitle: 'Visit the studio and align your project.',
                locationDesc: 'Private service environment focused on briefing, functionality, aesthetics and project viability.'
            },
            es: {
                title: 'Prado Arquitectura | Proyectos de Alto Nivel',
                headerCta: 'Solicitar Estudio',
                navServicesLabel: 'Proyectos',
                navLocationLabel: 'Estudio',
                heroBadge: 'Arquitectura a Medida',
                heroTitle: 'TRANSFORMA TU ESPACIO CON <br><span class="text-gradient">PRECISIÓN.</span>',
                heroDesc: 'Proyectos residenciales y comerciales con lectura técnica, estética refinada y decisiones alineadas al uso real del espacio.',
                heroSecondary: 'Ver Proyectos',
                servicesTitle: 'Proyectos pensados para valorizar rutina y patrimonio.',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Antes de iniciar tu proyecto, revisa esto.',
                faqDesc: 'Quien va a reformar o construir debe evitar errores caros, retrabajo y decisiones sin dirección. Aquí están las dudas más comunes.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué tipo de proyecto quieres hacer realidad?',
                contactDesc: 'Comparte el contexto del espacio y el objetivo. El sitio envía todo directamente a nuestro WhatsApp para una primera alineación.',
                heroCardTitle: 'Briefing Preciso',
                heroCardDesc: 'Dirección clara antes de invertir en la obra',
                heroPanelTop: 'Arquitecta Responsable',
                heroPanelMain: 'Proyectos de Autor',
                heroPanelBottom: 'Detalle Ejecutivo',
                areaLabel: 'Tipo de proyecto',
                areaOptions: {
                    residencial: 'Casa o Apartamento',
                    interiores: 'Interiores Premium',
                    comercial: 'Proyecto Comercial',
                    reforma: 'Reforma Estratégica'
                },
                urgencyLabel: 'Momento del proyecto',
                urgencyOptions: {
                    inicio: 'Todavía estoy al inicio',
                    terreno: 'Ya tengo terreno/inmueble',
                    obra: 'Necesito destrabar una obra'
                },
                summaryLabel: 'Resumen',
                summaryPlaceholder: 'Cuéntanos los metros, el objetivo del espacio y lo que necesitas resolver ahora.',
                serviceCards: [
                    {
                        title: 'Casas de Autor',
                        description: 'Proyectos residenciales con lenguaje contemporáneo, implantación inteligente y decisiones formales que dan presencia sin sacrificar confort real.'
                    },
                    {
                        title: 'Interiores Premium',
                        description: 'Ambientes integrados, materialidad consistente y diseño a medida para transformar metros en experiencia de uso y valor percibido.'
                    },
                    {
                        title: 'Reforma con Dirección',
                        description: 'Estudio, compatibilización y detalle para evitar obra improvisada, desperdicio de material y decisiones caras en el sitio.'
                    }
                ],
                locationBadge: 'Nuestro Estudio',
                locationTitle: 'Ven a conocer el estudio y alinear tu proyecto.',
                locationDesc: 'Atención en un ambiente reservado con foco en briefing, funcionalidad, estética y viabilidad de la obra.'
            }
        },
        site_clinico_geral: {
            pt: {
                title: 'Mendes Clínica Médica | Cuidado Integral',
                headerCta: 'Agendar Consulta',
                navServicesLabel: 'Especialidades',
                heroBadge: 'Clínica Médica Humanizada',
                heroTitle: 'CUIDE DA SUA SAÚDE COM <br><span class="text-gradient">ATENÇÃO REAL.</span>',
                heroDesc: 'Consultas particulares com olhar clínico completo, acompanhamento próximo e condutas baseadas no que seu quadro realmente exige.',
                heroSecondary: 'Nossas Áreas',
                servicesTitle: 'Especialidades',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'O que pacientes costumam perguntar primeiro.',
                faqDesc: 'Antes de agendar, é normal querer entender tempo de consulta, exames, retorno e acompanhamento. Aqui estão as respostas principais.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'Como podemos te ajudar hoje?',
                contactDesc: 'Descreva sintomas, objetivo da consulta ou necessidade de acompanhamento. O resumo vai direto para nosso WhatsApp.',
                heroCardTitle: 'Avaliação Clínica',
                heroCardDesc: 'Consulta particular com leitura completa do quadro',
                heroPanelTop: 'Médico Responsável',
                heroPanelMain: 'Clínica Integral',
                heroPanelBottom: 'Acompanhamento Próximo',
                areaLabel: 'Tipo de atendimento',
                areaOptions: {
                    checkup: 'Check-up Preventivo',
                    sintomas: 'Sintomas e Dores',
                    acompanhamento: 'Acompanhamento Crônico',
                    outros: 'Outros motivos'
                },
                urgencyLabel: 'Quando deseja ser atendido?',
                urgencyOptions: {
                    hoje: 'Preciso de atendimento urgente',
                    semana: 'Pode ser nesta semana',
                    planejamento: 'Estou apenas agendando rotina'
                },
                summaryLabel: 'Detalhes do seu quadro de saúde',
                summaryPlaceholder: 'Descreva brevemente os sintomas que está sentindo ou as condições de saúde que deseja acompanhar.',
                serviceCards: [
                    {
                        title: 'Check-up Preventivo',
                        description: 'Evite surpresas desagradáveis. Realizamos exames completos para identificar precocemente condições silenciosas antes que virem doenças.'
                    },
                    {
                        title: 'Acompanhamento Clínico',
                        description: 'Sofrendo com sintomas vagos e sem resposta? Investigamos a fundo sua saúde para trazer alívio e qualidade de vida constante.'
                    },
                    {
                        title: 'Doenças Crônicas',
                        description: 'O controle inadequado agrava o quadro. Estabelecemos protocolos avançados para gerenciar hipertensão, diabetes e colesterol.'
                    }
                ],
                locationBadge: 'Acesso Facilitado',
                locationTitle: 'Venha conhecer nossa clínica.',
                locationDesc: 'Infraestrutura moderna e acolhedora no centro médico da cidade, com estacionamento privativo e fácil acesso.'
            },
            en: {
                title: 'Mendes Medical Clinic | Comprehensive Care',
                headerCta: 'Book Consultation',
                navServicesLabel: 'Specialties',
                heroBadge: 'Human-Centered Medical Clinic',
                heroTitle: 'TAKE CARE OF YOUR HEALTH WITH <br><span class="text-gradient">REAL ATTENTION.</span>',
                heroDesc: 'Private consultations with complete clinical assessment, close follow-up and conduct based on what your case really requires.',
                heroSecondary: 'Our Specialties',
                servicesTitle: 'Specialties',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'What patients usually ask first.',
                faqDesc: 'Before booking, it is natural to understand consultation time, exams, follow-up and return visits. Here are the main answers.',
                contactBadge: 'First contact',
                contactTitle: 'How can we help you today?',
                contactDesc: 'Describe symptoms, your consultation goal or follow-up needs. The summary goes directly to our WhatsApp.',
                heroCardTitle: 'Clinical Assessment',
                heroCardDesc: 'Private consultation with a complete case review',
                heroPanelTop: 'Lead Physician',
                heroPanelMain: 'Comprehensive Care',
                heroPanelBottom: 'Close Follow-up',
                areaLabel: 'Visit type',
                areaOptions: {
                    checkup: 'Preventive Check-up',
                    sintomas: 'Symptoms and Pain',
                    acompanhamento: 'Chronic Follow-up',
                    outros: 'Other reasons'
                },
                urgencyLabel: 'Preferred timing',
                urgencyOptions: {
                    hoje: 'I need urgent care',
                    semana: 'This week works for me',
                    planejamento: 'I am just booking routine care'
                },
                summaryLabel: 'Health details',
                summaryPlaceholder: 'Briefly describe your symptoms or the health condition you want to monitor.',
                serviceCards: [
                    {
                        title: 'Preventive Check-up',
                        description: 'Avoid unpleasant surprises. We run complete exams to identify silent conditions early before they become disease.'
                    },
                    {
                        title: 'Clinical Follow-up',
                        description: 'Dealing with vague symptoms and no answers? We investigate your health in depth to bring relief and steady quality of life.'
                    },
                    {
                        title: 'Chronic Conditions',
                        description: 'Poor control worsens the condition. We establish advanced protocols to manage hypertension, diabetes and cholesterol.'
                    }
                ],
                locationBadge: 'Easy Access',
                locationTitle: 'Visit our clinic.',
                locationDesc: 'Modern and welcoming infrastructure in the medical center with private parking and easy access.'
            },
            es: {
                title: 'Mendes Clínica Médica | Atención Integral',
                headerCta: 'Agendar Consulta',
                navServicesLabel: 'Especialidades',
                heroBadge: 'Clínica Médica Humanizada',
                heroTitle: 'CUIDA TU SALUD CON <br><span class="text-gradient">ATENCIÓN REAL.</span>',
                heroDesc: 'Consultas privadas con evaluación clínica completa, seguimiento cercano y conductas basadas en lo que tu caso realmente necesita.',
                heroSecondary: 'Nuestras Especialidades',
                servicesTitle: 'Especialidades',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Lo que los pacientes suelen preguntar primero.',
                faqDesc: 'Antes de agendar es normal querer entender tiempo de consulta, exámenes, retorno y acompañamiento. Aquí están las respuestas principales.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Cómo podemos ayudarte hoy?',
                contactDesc: 'Describe síntomas, objetivo de la consulta o necesidad de seguimiento. El resumen va directo a nuestro WhatsApp.',
                heroCardTitle: 'Evaluación Clínica',
                heroCardDesc: 'Consulta privada con lectura completa del cuadro',
                heroPanelTop: 'Médico Responsable',
                heroPanelMain: 'Clínica Integral',
                heroPanelBottom: 'Seguimiento Cercano',
                areaLabel: 'Tipo de atención',
                areaOptions: {
                    checkup: 'Chequeo Preventivo',
                    sintomas: 'Síntomas y Dolores',
                    acompanhamento: 'Seguimiento Crónico',
                    outros: 'Otros motivos'
                },
                urgencyLabel: '¿Cuándo quieres ser atendido?',
                urgencyOptions: {
                    hoje: 'Necesito atención urgente',
                    semana: 'Puede ser esta semana',
                    planejamento: 'Solo estoy agendando rutina'
                },
                summaryLabel: 'Detalles de salud',
                summaryPlaceholder: 'Describe brevemente los síntomas que sientes o la condición de salud que deseas acompañar.',
                serviceCards: [
                    {
                        title: 'Chequeo Preventivo',
                        description: 'Evita sorpresas desagradables. Realizamos exámenes completos para identificar precozmente condiciones silenciosas antes de que se agraven.'
                    },
                    {
                        title: 'Seguimiento Clínico',
                        description: '¿Tienes síntomas vagos y sin respuesta? Investigamos tu salud a fondo para llevar alivio y calidad de vida constante.'
                    },
                    {
                        title: 'Enfermedades Crónicas',
                        description: 'Un control inadecuado empeora el cuadro. Definimos protocolos avanzados para manejar hipertensión, diabetes y colesterol.'
                    }
                ],
                locationBadge: 'Acceso Fácil',
                locationTitle: 'Ven a conocer nuestra clínica.',
                locationDesc: 'Infraestructura moderna y acogedora en el centro médico de la ciudad, con estacionamiento privado y fácil acceso.'
            }
        },
        site_dentista: {
            pt: {
                title: 'Coutias Odontologia | Sorrisos com Precisão',
                headerCta: 'Agendar Avaliação',
                navServicesLabel: 'Tratamentos',
                heroBadge: 'Odontologia Premium',
                heroTitle: 'TRANSFORME SEU SORRISO COM <br><span class="text-gradient">SEGURANÇA.</span>',
                heroDesc: 'Estética, função e planejamento para quem busca um sorriso bonito, natural e conduzido com técnica séria.',
                heroSecondary: 'Nossos Tratamentos',
                servicesTitle: 'Especialidades',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'Antes de marcar sua avaliação, veja isso.',
                faqDesc: 'Quem busca dentista quer previsibilidade, conforto e clareza sobre etapas e investimento. Aqui estão as respostas mais comuns.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'O que você deseja melhorar no seu sorriso?',
                contactDesc: 'Conte seu objetivo. O site envia tudo direto para nosso WhatsApp para uma avaliação inicial mais assertiva.',
                heroCardTitle: 'Planejamento do Sorriso',
                heroCardDesc: 'Avaliação estética e funcional com direção clara',
                heroPanelTop: 'Dentista Responsável',
                heroPanelMain: 'Odontologia Premium',
                heroPanelBottom: 'Estética e Função',
                areaLabel: 'Tratamento desejado',
                areaOptions: {
                    implante: 'Implantes Dentários',
                    faceta: 'Facetas de Porcelana',
                    avaliacao: 'Avaliação Geral'
                },
                urgencyLabel: 'Momento do atendimento',
                urgencyOptions: {
                    hoje: 'Quero agendar essa semana',
                    dor: 'Tenho dor / Urgência',
                    pesquisa: 'Estou apenas pesquisando'
                },
                summaryLabel: 'Detalhes do seu caso',
                summaryPlaceholder: 'Conte brevemente o que você deseja melhorar no seu sorriso.',
                serviceCards: [
                    {
                        title: 'Implantes Dentários',
                        description: 'Recupere a segurança ao mastigar com implantes modernos, indolores e de rápida cicatrização para o seu conforto.'
                    },
                    {
                        title: 'Facetas em Porcelana',
                        description: 'Sorriso de estrela com planejamento digital. Corrija cor, tamanho e formato dos dentes com resultados extremamente naturais.'
                    },
                    {
                        title: 'Reabilitação Oral',
                        description: 'Tratamento completo para restabelecer a saúde, a função mastigatória e a estética do seu sorriso de forma integrada.'
                    }
                ],
                locationBadge: 'Chegue com Facilidade',
                locationTitle: 'Venha tomar um café e conhecer nossa clínica.',
                locationDesc: 'Estamos localizados em uma região de fácil acesso, com infraestrutura moderna, estacionamento privativo e conforto total para você.'
            },
            en: {
                title: 'Coutias Dentistry | Precision Smiles',
                headerCta: 'Book Evaluation',
                navServicesLabel: 'Treatments',
                heroBadge: 'Premium Dentistry',
                heroTitle: 'TRANSFORM YOUR SMILE WITH <br><span class="text-gradient">CONFIDENCE.</span>',
                heroDesc: 'Aesthetic care, function and planning for patients who want a beautiful, natural smile handled with serious technique.',
                heroSecondary: 'Our Treatments',
                servicesTitle: 'Specialties',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'Before scheduling your evaluation, read this.',
                faqDesc: 'People looking for a dentist want predictability, comfort and clarity about steps and investment. Here are the most common answers.',
                contactBadge: 'First contact',
                contactTitle: 'What would you like to improve in your smile?',
                contactDesc: 'Tell us your goal. The site sends everything directly to our WhatsApp for a more assertive first evaluation.',
                heroCardTitle: 'Smile Planning',
                heroCardDesc: 'Aesthetic and functional evaluation with clear direction',
                heroPanelTop: 'Lead Dentist',
                heroPanelMain: 'Premium Dentistry',
                heroPanelBottom: 'Aesthetics and Function',
                areaLabel: 'Desired treatment',
                areaOptions: {
                    implante: 'Dental Implants',
                    faceta: 'Porcelain Veneers',
                    avaliacao: 'General Evaluation'
                },
                urgencyLabel: 'Timing',
                urgencyOptions: {
                    hoje: 'I want to book this week',
                    dor: 'I have pain / urgent need',
                    pesquisa: 'I am only researching'
                },
                summaryLabel: 'Case details',
                summaryPlaceholder: 'Briefly describe what you would like to improve in your smile.',
                serviceCards: [
                    {
                        title: 'Dental Implants',
                        description: 'Recover confidence while chewing with modern implants, low-discomfort procedures and fast healing for your comfort.'
                    },
                    {
                        title: 'Porcelain Veneers',
                        description: 'A celebrity smile with digital planning. Correct color, size and shape with highly natural-looking results.'
                    },
                    {
                        title: 'Oral Rehabilitation',
                        description: 'Complete treatment to restore health, chewing function and smile aesthetics in an integrated way.'
                    }
                ],
                locationBadge: 'Easy Arrival',
                locationTitle: 'Come for a coffee and visit our clinic.',
                locationDesc: 'We are in an easy-access area with modern infrastructure, private parking and complete comfort.'
            },
            es: {
                title: 'Coutias Odontología | Sonrisas con Precisión',
                headerCta: 'Agendar Evaluación',
                navServicesLabel: 'Tratamientos',
                heroBadge: 'Odontología Premium',
                heroTitle: 'TRANSFORMA TU SONRISA CON <br><span class="text-gradient">SEGURIDAD.</span>',
                heroDesc: 'Estética, función y planificación para quienes buscan una sonrisa bonita, natural y conducida con técnica seria.',
                heroSecondary: 'Nuestros Tratamientos',
                servicesTitle: 'Especialidades',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Antes de agendar tu evaluación, revisa esto.',
                faqDesc: 'Quien busca dentista quiere previsibilidad, comodidad y claridad sobre etapas e inversión. Aquí están las respuestas más comunes.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué quieres mejorar en tu sonrisa?',
                contactDesc: 'Cuéntanos tu objetivo. El sitio envía todo directamente a nuestro WhatsApp para una evaluación inicial más precisa.',
                heroCardTitle: 'Planificación de la Sonrisa',
                heroCardDesc: 'Evaluación estética y funcional con dirección clara',
                heroPanelTop: 'Dentista Responsable',
                heroPanelMain: 'Odontología Premium',
                heroPanelBottom: 'Estética y Función',
                areaLabel: 'Tratamiento deseado',
                areaOptions: {
                    implante: 'Implantes Dentales',
                    faceta: 'Carillas de Porcelana',
                    avaliacao: 'Evaluación General'
                },
                urgencyLabel: 'Momento de atención',
                urgencyOptions: {
                    hoje: 'Quiero agendar esta semana',
                    dor: 'Tengo dolor / urgencia',
                    pesquisa: 'Solo estoy investigando'
                },
                summaryLabel: 'Detalles de tu caso',
                summaryPlaceholder: 'Cuéntanos brevemente lo que deseas mejorar en tu sonrisa.',
                serviceCards: [
                    {
                        title: 'Implantes Dentales',
                        description: 'Recupera seguridad al masticar con implantes modernos, procedimientos cómodos y cicatrización rápida para tu confort.'
                    },
                    {
                        title: 'Carillas de Porcelana',
                        description: 'Sonrisa de alto nivel con planificación digital. Corrige color, tamaño y forma con resultados extremadamente naturales.'
                    },
                    {
                        title: 'Rehabilitación Oral',
                        description: 'Tratamiento completo para restablecer la salud, la función masticatoria y la estética de tu sonrisa de forma integrada.'
                    }
                ],
                locationBadge: 'Llega con Facilidad',
                locationTitle: 'Ven a tomar un café y conocer nuestra clínica.',
                locationDesc: 'Estamos en una zona de fácil acceso, con infraestructura moderna, estacionamiento privado y comodidad total para ti.'
            }
        },
        site_estetica: {
            pt: {
                title: 'Aurora Estética | Beleza com Técnica',
                headerCta: 'Agendar Avaliação',
                navServicesLabel: 'Tratamentos',
                heroBadge: 'Estética Avançada',
                heroTitle: 'REALCE SUA BELEZA COM <br><span class="text-gradient">SOFISTICAÇÃO.</span>',
                heroDesc: 'Protocolos faciais com leitura individual, naturalidade no resultado e execução técnica pensada para valorizar sua imagem.',
                heroSecondary: 'Nossos Protocolos',
                servicesTitle: 'Tratamentos Premium',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'Antes da sua avaliação, saiba disso.',
                faqDesc: 'Quem busca estética quer resultado bonito sem exagero, com segurança e plano claro. Estas são as perguntas mais comuns.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'O que você quer melhorar agora?',
                contactDesc: 'Explique o que te incomoda ou o que deseja realçar. O resumo segue direto para nosso WhatsApp.',
                heroCardTitle: 'Avaliação Estética',
                heroCardDesc: 'Leitura facial com plano de harmonização sob medida',
                heroPanelTop: 'Especialista Responsável',
                heroPanelMain: 'Estética Avançada',
                heroPanelBottom: 'Naturalidade no Resultado',
                areaLabel: 'Procedimento',
                areaOptions: {
                    botox: 'Botox Preventivo/Corretivo',
                    harmonizacao: 'Harmonização Facial',
                    bioestimuladores: 'Bioestimuladores de Colágeno',
                    consulta: 'Quero uma avaliação geral'
                },
                urgencyLabel: 'Momento ideal',
                urgencyOptions: {
                    hoje: 'O quanto antes',
                    semana: 'Ainda este mês',
                    planejamento: 'Estou apenas pesquisando'
                },
                summaryLabel: 'O que mais te incomoda hoje?',
                summaryPlaceholder: 'Conte brevemente o que você gostaria de melhorar ou realçar no seu rosto.',
                serviceCards: [
                    {
                        title: 'Aplicação de Botox',
                        description: 'Suavização de rugas dinâmicas, prevenindo marcas profundas e devolvendo o aspecto descansado.'
                    },
                    {
                        title: 'Harmonização Facial',
                        description: 'Preenchimento estratégico para realçar contornos, devolver volume e equilibrar proporções simetricamente.'
                    },
                    {
                        title: 'Bioestimuladores',
                        description: 'Tratamento avançado de flacidez para uma pele firme, luminosa e rejuvenescida de dentro para fora.'
                    }
                ],
                locationBadge: 'Chegue com Facilidade',
                locationTitle: 'Venha tomar um café em nossa clínica.',
                locationDesc: 'Ambiente luxuoso, atendimento VIP e total conforto e discrição para o seu momento de autocuidado.'
            },
            en: {
                title: 'Aurora Aesthetics | Beauty with Technique',
                headerCta: 'Book Evaluation',
                navServicesLabel: 'Treatments',
                heroBadge: 'Advanced Aesthetics',
                heroTitle: 'ENHANCE YOUR BEAUTY WITH <br><span class="text-gradient">SOPHISTICATION.</span>',
                heroDesc: 'Facial protocols with individual assessment, natural-looking results and technical execution designed to elevate your image.',
                heroSecondary: 'Our Protocols',
                servicesTitle: 'Premium Treatments',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'Before your evaluation, know this.',
                faqDesc: 'People seeking aesthetics want beautiful results without excess, with safety and a clear plan. These are the common questions.',
                contactBadge: 'First contact',
                contactTitle: 'What would you like to improve right now?',
                contactDesc: 'Explain what bothers you or what you want to enhance. The summary goes directly to our WhatsApp.',
                heroCardTitle: 'Aesthetic Evaluation',
                heroCardDesc: 'Facial assessment with a tailored harmonization plan',
                heroPanelTop: 'Lead Specialist',
                heroPanelMain: 'Advanced Aesthetics',
                heroPanelBottom: 'Natural-Looking Results',
                areaLabel: 'Procedure',
                areaOptions: {
                    botox: 'Preventive/Corrective Botox',
                    harmonizacao: 'Facial Harmonization',
                    bioestimuladores: 'Collagen Biostimulators',
                    consulta: 'I want a general evaluation'
                },
                urgencyLabel: 'Preferred timing',
                urgencyOptions: {
                    hoje: 'As soon as possible',
                    semana: 'Still this month',
                    planejamento: 'I am only researching'
                },
                summaryLabel: 'What bothers you the most today?',
                summaryPlaceholder: 'Briefly tell us what you would like to improve or highlight on your face.',
                serviceCards: [
                    {
                        title: 'Botox Application',
                        description: 'Softens dynamic wrinkles, prevents deeper marks and brings back a rested look.'
                    },
                    {
                        title: 'Facial Harmonization',
                        description: 'Strategic filler work to enhance contours, restore volume and balance proportions symmetrically.'
                    },
                    {
                        title: 'Biostimulators',
                        description: 'Advanced laxity treatment for firmer, brighter and rejuvenated skin from the inside out.'
                    }
                ],
                locationBadge: 'Easy Arrival',
                locationTitle: 'Come visit our clinic for a coffee.',
                locationDesc: 'Luxurious environment, VIP service and complete comfort and discretion for your self-care moment.'
            },
            es: {
                title: 'Aurora Estética | Belleza con Técnica',
                headerCta: 'Agendar Evaluación',
                navServicesLabel: 'Tratamientos',
                heroBadge: 'Estética Avanzada',
                heroTitle: 'REALZA TU BELLEZA CON <br><span class="text-gradient">SOFISTICACIÓN.</span>',
                heroDesc: 'Protocolos faciales con lectura individual, naturalidad en el resultado y ejecución técnica pensada para valorizar tu imagen.',
                heroSecondary: 'Nuestros Protocolos',
                servicesTitle: 'Tratamientos Premium',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Antes de tu evaluación, debes saber esto.',
                faqDesc: 'Quien busca estética quiere un resultado bonito sin exceso, con seguridad y un plan claro. Estas son las preguntas más comunes.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué quieres mejorar ahora?',
                contactDesc: 'Explica lo que te incomoda o lo que deseas realzar. El resumen va directo a nuestro WhatsApp.',
                heroCardTitle: 'Evaluación Estética',
                heroCardDesc: 'Lectura facial con plan de armonización a medida',
                heroPanelTop: 'Especialista Responsable',
                heroPanelMain: 'Estética Avanzada',
                heroPanelBottom: 'Naturalidad en el Resultado',
                areaLabel: 'Procedimiento',
                areaOptions: {
                    botox: 'Botox Preventivo/Correctivo',
                    harmonizacao: 'Armonización Facial',
                    bioestimuladores: 'Bioestimuladores de Colágeno',
                    consulta: 'Quiero una evaluación general'
                },
                urgencyLabel: 'Momento ideal',
                urgencyOptions: {
                    hoje: 'Lo antes posible',
                    semana: 'Todavía este mes',
                    planejamento: 'Solo estoy investigando'
                },
                summaryLabel: '¿Qué es lo que más te molesta hoy?',
                summaryPlaceholder: 'Cuéntanos brevemente qué te gustaría mejorar o resaltar en tu rostro.',
                serviceCards: [
                    {
                        title: 'Aplicación de Botox',
                        description: 'Suaviza arrugas dinámicas, previene marcas profundas y devuelve un aspecto descansado.'
                    },
                    {
                        title: 'Armonización Facial',
                        description: 'Relleno estratégico para realzar contornos, devolver volumen y equilibrar proporciones de forma simétrica.'
                    },
                    {
                        title: 'Bioestimuladores',
                        description: 'Tratamiento avanzado de flacidez para una piel más firme, luminosa y rejuvenecida desde dentro.'
                    }
                ],
                locationBadge: 'Llega con Facilidad',
                locationTitle: 'Ven a tomar un café en nuestra clínica.',
                locationDesc: 'Ambiente lujoso, atención VIP y total comodidad y discreción para tu momento de autocuidado.'
            }
        },
        site_mecanica_luxo: {
            pt: {
                title: 'Stuttgart Motors | Centro Automotivo Premium',
                headerCta: 'Agendar Serviço',
                navServicesLabel: 'Serviços',
                heroBadge: 'Mecânica Especializada',
                heroTitle: 'CUIDE DO SEU ESPORTIVO COM <br><span class="text-gradient">PRECISÃO.</span>',
                heroDesc: 'Diagnóstico avançado, manutenção premium e execução técnica para veículos que exigem padrão elevado em cada detalhe.',
                heroSecondary: 'Nossos Serviços',
                servicesTitle: 'Especialidades',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'O que motoristas exigentes perguntam antes.',
                faqDesc: 'Quem confia um carro premium a uma oficina quer clareza, rastreabilidade e critério técnico. Aqui estão as respostas principais.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'O que seu veículo precisa agora?',
                contactDesc: 'Informe modelo, sintomas e objetivo da manutenção. O resumo vai direto para nosso WhatsApp.',
                heroCardTitle: 'Diagnóstico OEM',
                heroCardDesc: 'Leitura precisa antes de qualquer intervenção',
                heroPanelTop: 'Equipe Especializada',
                heroPanelMain: 'Mecânica Premium',
                heroPanelBottom: 'Rigor de Fábrica',
                areaLabel: 'Serviço desejado',
                areaOptions: {
                    revisao: 'Revisão premium',
                    diagnostico: 'Diagnóstico eletrônico',
                    performance: 'Performance / Upgrade',
                    outro: 'Outro Serviço'
                },
                urgencyLabel: 'Situação atual',
                urgencyOptions: {
                    parado: 'Carro parado (Urgente)',
                    agendamento: 'Quero agendar (Preventiva)',
                    cotacao: 'Apenas cotação'
                },
                summaryLabel: 'Detalhes do Veículo e Situação',
                summaryPlaceholder: 'Informe a marca, modelo, ano do carro e os sintomas que ele apresenta.',
                serviceCards: [
                    {
                        title: 'Diagnóstico Avançado',
                        description: 'Equipamentos originais (OEM) para leitura profunda dos módulos do seu veículo, identificando falhas ocultas antes que causem prejuízos.'
                    },
                    {
                        title: 'Mecânica Premium',
                        description: 'Manutenção preventiva e corretiva seguindo rigorosamente o manual do fabricante, utilizando apenas fluidos homologados e peças genuínas.'
                    },
                    {
                        title: 'Performance & Preparação',
                        description: 'Otimização de ECU, upgrades de suspensão e freios para extrair o máximo de potência e estabilidade do seu superesportivo.'
                    }
                ],
                locationBadge: 'Chegue com Facilidade',
                locationTitle: 'Traga seu veículo para nosso centro automotivo.',
                locationDesc: 'Infraestrutura completa com equipamentos de última geração, ambiente climatizado e total segurança para o seu esportivo.'
            },
            en: {
                title: 'Stuttgart Motors | Premium Automotive Center',
                headerCta: 'Schedule Service',
                navServicesLabel: 'Services',
                heroBadge: 'Specialized Mechanics',
                heroTitle: 'TAKE CARE OF YOUR SPORTS CAR WITH <br><span class="text-gradient">PRECISION.</span>',
                heroDesc: 'Advanced diagnostics, premium maintenance and technical execution for vehicles that demand high standards in every detail.',
                heroSecondary: 'Our Services',
                servicesTitle: 'Specialties',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'What demanding drivers ask first.',
                faqDesc: 'Anyone trusting a premium car to a workshop wants clarity, traceability and technical criteria. Here are the main answers.',
                contactBadge: 'First contact',
                contactTitle: 'What does your vehicle need right now?',
                contactDesc: 'Share the model, symptoms and maintenance goal. The summary goes straight to our WhatsApp.',
                heroCardTitle: 'OEM Diagnostics',
                heroCardDesc: 'Precise reading before any intervention',
                heroPanelTop: 'Specialized Team',
                heroPanelMain: 'Premium Mechanics',
                heroPanelBottom: 'Factory-Level Rigor',
                areaLabel: 'Desired service',
                areaOptions: {
                    revisao: 'Premium inspection',
                    diagnostico: 'Electronic diagnostics',
                    performance: 'Performance / Upgrade',
                    outro: 'Other service'
                },
                urgencyLabel: 'Current situation',
                urgencyOptions: {
                    parado: 'Car is stopped (Urgent)',
                    agendamento: 'I want to schedule preventive work',
                    cotacao: 'Quote only'
                },
                summaryLabel: 'Vehicle and situation details',
                summaryPlaceholder: 'Tell us the brand, model, year and symptoms your car is showing.',
                serviceCards: [
                    {
                        title: 'Advanced Diagnostics',
                        description: 'OEM-grade equipment for deep module reading, identifying hidden faults before they become expensive problems.'
                    },
                    {
                        title: 'Premium Mechanics',
                        description: 'Preventive and corrective maintenance following the manufacturer manual with approved fluids and genuine parts only.'
                    },
                    {
                        title: 'Performance & Setup',
                        description: 'ECU optimization plus suspension and brake upgrades to extract maximum power and stability from your sports car.'
                    }
                ],
                locationBadge: 'Easy Arrival',
                locationTitle: 'Bring your vehicle to our automotive center.',
                locationDesc: 'Complete infrastructure with state-of-the-art equipment, climate-controlled environment and full safety for your sports car.'
            },
            es: {
                title: 'Stuttgart Motors | Centro Automotriz Premium',
                headerCta: 'Agendar Servicio',
                navServicesLabel: 'Servicios',
                heroBadge: 'Mecánica Especializada',
                heroTitle: 'CUIDA TU DEPORTIVO CON <br><span class="text-gradient">PRECISIÓN.</span>',
                heroDesc: 'Diagnóstico avanzado, mantenimiento premium y ejecución técnica para vehículos que exigen alto nivel en cada detalle.',
                heroSecondary: 'Nuestros Servicios',
                servicesTitle: 'Especialidades',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Lo que los conductores exigentes preguntan primero.',
                faqDesc: 'Quien confía un coche premium a un taller quiere claridad, trazabilidad y criterio técnico. Aquí están las respuestas principales.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué necesita tu vehículo ahora?',
                contactDesc: 'Indica modelo, síntomas y objetivo del mantenimiento. El resumen va directo a nuestro WhatsApp.',
                heroCardTitle: 'Diagnóstico OEM',
                heroCardDesc: 'Lectura precisa antes de cualquier intervención',
                heroPanelTop: 'Equipo Especializado',
                heroPanelMain: 'Mecánica Premium',
                heroPanelBottom: 'Rigor de Fábrica',
                areaLabel: 'Servicio deseado',
                areaOptions: {
                    revisao: 'Revisión premium',
                    diagnostico: 'Diagnóstico electrónico',
                    performance: 'Performance / Upgrade',
                    outro: 'Otro servicio'
                },
                urgencyLabel: 'Situación actual',
                urgencyOptions: {
                    parado: 'Coche parado (Urgente)',
                    agendamento: 'Quiero agendar preventiva',
                    cotacao: 'Solo cotización'
                },
                summaryLabel: 'Detalles del vehículo y situación',
                summaryPlaceholder: 'Indica marca, modelo, año del coche y los síntomas que presenta.',
                serviceCards: [
                    {
                        title: 'Diagnóstico Avanzado',
                        description: 'Equipos OEM para lectura profunda de los módulos del vehículo, identificando fallas ocultas antes de que generen pérdidas.'
                    },
                    {
                        title: 'Mecánica Premium',
                        description: 'Mantenimiento preventivo y correctivo siguiendo el manual del fabricante, con fluidos homologados y piezas genuinas.'
                    },
                    {
                        title: 'Performance y Preparación',
                        description: 'Optimización de ECU y mejoras de suspensión y frenos para extraer el máximo de potencia y estabilidad de tu deportivo.'
                    }
                ],
                locationBadge: 'Llega con Facilidad',
                locationTitle: 'Trae tu vehículo a nuestro centro automotriz.',
                locationDesc: 'Infraestructura completa con equipos de última generación, ambiente climatizado y total seguridad para tu deportivo.'
            }
        },
        site_estetica_automotiva: {
            pt: {
                title: 'Veloce Detailing | Estética Automotiva Premium',
                headerCta: 'Agendar Avaliação',
                navServicesLabel: 'Serviços',
                heroBadge: 'Detalhamento Automotivo de Elite',
                heroTitle: 'PROTEÇÃO E BRILHO ABSOLUTO PARA O SEU <br><span class="text-gradient">VEÍCULO.</span>',
                heroDesc: 'Vitrificação de pintura homologada, polimento técnico corretivo e higienização detalhada sob medida para motoristas exigentes.',
                heroSecondary: 'Nossos Serviços',
                servicesTitle: 'Especialidades',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'O que você precisa saber antes do detalhamento.',
                faqDesc: 'Cuidar de um veículo de alto padrão exige técnicas específicas e produtos de pH neutro. Veja as respostas para as principais dúvidas.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'Qual cuidado seu carro precisa?',
                contactDesc: 'Informe o modelo do veículo e o estado atual dele. O resumo vai direto para nosso WhatsApp com a mensagem pronta.',
                heroCardTitle: 'Proteção Ativa',
                heroCardDesc: 'Brilho espelhado e blindagem contra intempéries',
                heroPanelTop: 'Detailer Chefe',
                heroPanelMain: 'Marcelo Couto',
                heroPanelBottom: 'Estética de Luxo',
                areaLabel: 'Serviço de interesse',
                areaOptions: {
                    vitrificacao: 'Vitrificação / Proteção cerâmica',
                    polimento: 'Polimento técnico / Correção de pintura',
                    higienizacao: 'Higienização detalhada interna',
                    outro: 'Outro Serviço'
                },
                urgencyLabel: 'Prazo desejado',
                urgencyOptions: {
                    urgente: 'Gostaria de agendar para esta semana',
                    planejado: 'Quero planejar para o próximo mês',
                    orcamento: 'Apenas orçamento inicial'
                },
                summaryLabel: 'Detalhes do Veículo e Desejo',
                summaryPlaceholder: 'Informe a marca, modelo, ano do carro e qual o estado atual dele ou o que gostaria de melhorar.',
                serviceCards: [
                    {
                        title: 'Vitrificação de Pintura',
                        description: 'Aplicação de revestimento cerâmico (glass coating) de alta performance. Protege contra raios UV, seiva de árvore, fezes de pássaros e riscos leves, garantindo efeito hidrofóbico e brilho profundo.'
                    },
                    {
                        title: 'Polimento Técnico',
                        description: 'Correção profunda de pintura para remoção de hologramas, riscos superficiais e imperfeições do verniz, devolvendo o reflexo espelhado original do carro.'
                    },
                    {
                        title: 'Higienização Detalhada',
                        description: 'Limpeza minuciosa do interior com produtos alemães de pH neutro, hidratação de couros e higienização do sistema de ar-condicionado por oxi-sanitização.'
                    }
                ],
                locationBadge: 'Visite nosso Estúdio',
                locationTitle: 'Conheça nossa estrutura de estética automotiva.',
                locationDesc: 'Cabinas com iluminação técnica de alta definição, controle de temperatura e poeira, e segurança monitorada 24h para o seu veículo.',
                faq: [
                    ["A vitrificação realmente protege contra riscos?", "A vitrificação cria uma camada de dureza 9H que protege contra riscos leves de lavagem e pequenos atritos do dia a dia, mas não impede riscos profundos de pedradas ou vandalismo."],
                    ["Quanto tempo o carro precisa ficar no estúdio?", "Para serviços como vitrificação e polimento corretivo, estimamos de 2 a 3 dias úteis. Isso garante o tempo correto de cura do verniz e dos produtos químicos aplicados."],
                    ["Como devo lavar o carro após o detalhamento?", "Recomendamos lavagem com shampoo automotivo de pH neutro, uso de luva de microfibra e secagem sem atrito para manter a proteção cerâmica ativa por anos."],
                    ["Vocês fazem avaliação por fotos?", "Podemos fazer uma estimativa inicial por fotos ou vídeo, mas a avaliação técnica com medidor de espessura de verniz sob iluminação especial é indispensável para o orçamento final definitivo."],
                    ["O polimento técnico diminui a vida útil do verniz do meu carro?", "Medimos a espessura do verniz antes de qualquer polimento. Usamos técnicas e compostos de corte leve para remover as marcas sem comprometer a integridade e segurança da pintura original."]
                ]
            },
            en: {
                title: 'Veloce Detailing | Premium Car Detailing',
                headerCta: 'Book Evaluation',
                navServicesLabel: 'Services',
                heroBadge: 'Elite Automotive Detailing',
                heroTitle: 'PROTECTION AND ABSOLUTE SHINE FOR YOUR <br><span class="text-gradient">VEHICLE.</span>',
                heroDesc: 'Certified paint ceramic coating, technical corrective polishing, and detailed interior detailing tailored for demanding drivers.',
                heroSecondary: 'Our Services',
                servicesTitle: 'Specialties',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'What you need to know before detailing.',
                faqDesc: 'Caring for a high-end vehicle requires specific techniques and pH-neutral products. Here are the answers to the main questions.',
                contactBadge: 'First contact',
                contactTitle: 'What care does your car need?',
                contactDesc: 'Share the vehicle model and its current condition. The summary goes straight to our WhatsApp.',
                heroCardTitle: 'Active Protection',
                heroCardDesc: 'Mirror shine and shielding against weather elements',
                heroPanelTop: 'Head Detailer',
                heroPanelMain: 'Marcelo Couto',
                heroPanelBottom: 'Luxury Aesthetics',
                areaLabel: 'Service of interest',
                areaOptions: {
                    vitrificacao: 'Ceramic coating / Paint protection',
                    polimento: 'Technical polishing / Paint correction',
                    higienizacao: 'Detailed interior cleaning',
                    outro: 'Other Service'
                },
                urgencyLabel: 'Desired timeframe',
                urgencyOptions: {
                    urgente: 'I would like to book for this week',
                    planejado: 'I want to plan for next month',
                    orcamento: 'Initial quote only'
                },
                summaryLabel: 'Vehicle and Status Details',
                summaryPlaceholder: 'Tell us the brand, model, year, current status of the vehicle and what you would like to improve.',
                serviceCards: [
                    {
                        title: 'Ceramic Coating',
                        description: 'Application of high-performance glass coating. Protects against UV rays, tree sap, bird droppings and light scratches, ensuring hydrophobic effect and deep gloss.'
                    },
                    {
                        title: 'Technical Polishing',
                        description: "Deep paint correction to remove holograms, light scratches and varnish imperfections, restoring the car's original mirror-like reflection."
                    },
                    {
                        title: 'Detailed Cleaning',
                        description: 'Meticulous interior cleaning with German pH-neutral products, leather conditioning, and A/C system sanitization via ozone treatment.'
                    }
                ],
                locationBadge: 'Visit Our Studio',
                locationTitle: 'Discover our automotive aesthetics facility.',
                locationDesc: 'High-definition detailing bays, temperature and dust control, and 24/7 monitored security for your vehicle.',
                faq: [
                    ["Does ceramic coating really protect against scratches?", "Ceramic coating creates a 9H hardness layer that shields against light washing swirls and minor daily friction, but it won't prevent deep scratches from flying stones or vandalism."],
                    ["How long does the car need to stay in the studio?", "For services like ceramic coating and corrective polishing, we estimate 2 to 3 business days. This guarantees the correct curing time for the paint clear coat and applied chemicals."],
                    ["How should I wash the car after detailing?", "We recommend washing with a pH-neutral automotive shampoo, using a microfiber wash mitt, and drying without friction to keep the ceramic protection active for years."],
                    ["Do you perform inspections via photos?", "We can provide an initial estimate through photos or video, but a technical evaluation with a paint depth gauge under special lighting is essential for the final definitive quote."],
                    ["Does technical polishing shorten the lifespan of my car's paint?", "We measure the clear coat thickness before any polishing. We use light cutting techniques and compounds to remove marks without compromising the integrity and safety of the original paint."]
                ]
            },
            es: {
                title: 'Veloce Detailing | Estética Automotriz Premium',
                headerCta: 'Reservar Evaluación',
                navServicesLabel: 'Servicios',
                heroBadge: 'Detallado Automotriz de Elite',
                heroTitle: 'PROTECCIÓN Y BRILLO ABSOLUTO PARA TU <br><span class="text-gradient">VEHÍCULO.</span>',
                heroDesc: 'Vitrificado de pintura homologado, pulido técnico correctivo e higienización detallada a medida para conductores exigentes.',
                heroSecondary: 'Nuestros Servicios',
                servicesTitle: 'Especialidades',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Lo que necesitas saber antes del detallado.',
                faqDesc: 'Cuidar un vehículo de alta gama exige técnicas específicas y productos de pH neutro. Aquí tienes las respuestas a las principales dudas.',
                contactBadge: 'Primer contacto',
                contactTitle: '¿Qué cuidado necesita tu coche?',
                contactDesc: 'Informa el modelo del vehículo y su estado actual. El resumen va directo a nuestro WhatsApp.',
                heroCardTitle: 'Protección Activa',
                heroCardDesc: 'Brillo de espejo y blindaje contra la intemperie',
                heroPanelTop: 'Detailer Jefe',
                heroPanelMain: 'Marcelo Couto',
                heroPanelBottom: 'Estética de Lujo',
                areaLabel: 'Servicio de interés',
                areaOptions: {
                    vitrificacao: 'Vitrificado / Protección cerámica',
                    polimento: 'Pulido técnico / Corrección de pintura',
                    higienizacao: 'Higienización detallada interna',
                    outro: 'Otro Servicio'
                },
                urgencyLabel: 'Plazo deseado',
                urgencyOptions: {
                    urgente: 'Me gustaría programar para esta semana',
                    planejado: 'Quero planificar para el próximo mes',
                    orcamento: 'Solo presupuesto inicial'
                },
                summaryLabel: 'Detalles del Vehículo y Estado',
                summaryPlaceholder: 'Informa la marca, modelo, año del coche y su estado actual o qué te gustaría mejorar.',
                serviceCards: [
                    {
                        title: 'Vitrificado de Pintura',
                        description: 'Aplicación de recubrimiento cerámico de alto rendimiento. Protege contra rayos UV, savia de árboles, excrementos de aves y rayones leves, garantizando efecto hidrófobo y brillo profundo.'
                    },
                    {
                        title: 'Pulido Técnico',
                        description: 'Corrección profunda de pintura para eliminar hologramas, rayones superficiales e imperfecciones del barniz, devolviendo el reflejo de espejo original del coche.'
                    },
                    {
                        title: 'Higienización Detalhada',
                        description: 'Limpieza minuciosa del interior con productos alemanes de pH neutro, acondicionamiento de cuero e higienización del sistema de aire acondicionado mediante ozono.'
                    }
                ],
                locationBadge: 'Visita Nuestro Estudio',
                locationTitle: 'Conoce nuestra estrutura de estética automotriz.',
                locationDesc: 'Cabinas con iluminación técnica de alta definición, control de temperatura y polvo, y seguridad monitoreada las 24 horas para tu vehículo.',
                faq: [
                    ["¿El vitrificado realmente protege contra rayones?", "El vitrificado crea una capa de dureza 9H que protege contra rayones leves de lavado y pequeñas fricciones diarias, pero no evitará rayones profundos por piedras o vandalismo."],
                    ["¿Cuánto tiempo debe quedarse el coche en el estudio?", "Para servicios como vitrificado y pulido correctivo, estimamos de 2 a 3 días hábiles. Esto garantiza el tiempo correcto de curado del barniz y los productos químicos aplicados."],
                    ["¿Cómo debo lavar el coche después del detallado?", "Recomendamos lavar con un champú automotriz de pH neutro, usar un guante de microfibra y secar sin fricción para mantener activa la protección cerámica durante años."],
                    ["¿Hacen evaluaciones por fotos?", "Podemos dar una estimación inicial por fotos o video, pero una evaluación técnica con un medidor de espesor de pintura bajo iluminación especial es indispensable para el presupuesto final definitivo."],
                    ["¿El pulido técnico reduce la vida útil del barniz de mi coche?", "Medimos el espesor del barniz antes de cualquier pulido. Utilizaremos técnicas y compuestos de corte suave para eliminar las marcas sin comprometer la integridad y seguridad de la pintura original."]
                ]
            }
        },
        site_solar: {
            pt: {
                title: 'Lumina Solar | Energia Inteligente',
                headerCta: 'Solicitar Simulação',
                navServicesLabel: 'Soluções',
                heroBadge: 'Energia Solar Premium',
                heroTitle: 'ECONOMIZE COM <br><span class="text-gradient">ENERGIA SOLAR.</span>',
                heroDesc: 'Projetos fotovoltaicos com análise de consumo, retorno financeiro e instalação pensada para máxima eficiência.',
                heroSecondary: 'Nossas Soluções',
                servicesTitle: 'Soluções Corporativas e Residenciais',
                faqBadge: 'Dúvidas Frequentes',
                faqTitle: 'O que você precisa saber antes de investir.',
                faqDesc: 'Quem está estudando energia solar quer previsibilidade de economia, prazo e viabilidade técnica. Aqui estão as respostas mais comuns.',
                contactBadge: 'Primeiro contato',
                contactTitle: 'Seu projeto solar começa por aqui.',
                contactDesc: 'Informe seu perfil de consumo e o tipo de imóvel. O site envia tudo direto para nosso WhatsApp.',
                heroCardTitle: 'Simulação Inteligente',
                heroCardDesc: 'Consumo, retorno e viabilidade numa leitura rápida',
                heroPanelTop: 'Engenharia Solar',
                heroPanelMain: 'Projeto Eficiente',
                heroPanelBottom: 'Economia Real',
                areaLabel: 'Tipo de projeto',
                areaOptions: {
                    residencial: 'Residencial',
                    comercial: 'Comercial / Empresa',
                    industrial: 'Indústria',
                    rural: 'Propriedade Rural'
                },
                urgencyLabel: 'Conta média de energia',
                urgencyOptions: {
                    ate500: 'Até R$ 500',
                    ate1500: 'R$ 500 a R$ 1.500',
                    acima1500: 'Acima de R$ 1.500'
                },
                summaryLabel: 'Algum detalhe adicional? (Opcional)',
                summaryPlaceholder: 'Ex: Telhado de fibrocimento, quero energia para 2 casas, etc.',
                serviceCards: [
                    {
                        title: 'Economia Real e Imediata',
                        description: 'Sua conta de luz se transforma num investimento com retorno rápido. Pague o sistema usando o dinheiro que já ia para a concessionária.'
                    },
                    {
                        title: 'Instalação Padrão Ouro',
                        description: 'Preservamos a estética e estrutura do seu imóvel. Sem fios aparentes, sem quebra-quebra, com a máxima discrição arquitetônica.'
                    },
                    {
                        title: 'Garantia e Durabilidade',
                        description: 'Sistemas com mais de 25 anos de vida útil. Previsibilidade total para o seu bolso e zero dor de cabeça a longo prazo.'
                    }
                ],
                locationBadge: 'Nossa Sede',
                locationTitle: 'Venha conhecer nossa estrutura.',
                locationDesc: 'Estamos localizados em um polo tecnológico com showroom completo das soluções em energia solar.'
            },
            en: {
                title: 'Lumina Solar | Smart Energy',
                headerCta: 'Request Simulation',
                navServicesLabel: 'Solutions',
                heroBadge: 'Premium Solar Energy',
                heroTitle: 'SAVE WITH <br><span class="text-gradient">SOLAR ENERGY.</span>',
                heroDesc: 'Photovoltaic projects with consumption analysis, financial return and installation planned for maximum efficiency.',
                heroSecondary: 'Our Solutions',
                servicesTitle: 'Corporate and Residential Solutions',
                faqBadge: 'Frequently Asked Questions',
                faqTitle: 'What you need to know before investing.',
                faqDesc: 'People considering solar energy want predictable savings, timeline and technical feasibility. Here are the most common answers.',
                contactBadge: 'First contact',
                contactTitle: 'Your solar project starts here.',
                contactDesc: 'Share your consumption profile and property type. The site sends everything directly to our WhatsApp.',
                heroCardTitle: 'Smart Simulation',
                heroCardDesc: 'Consumption, return and feasibility in a quick reading',
                heroPanelTop: 'Solar Engineering',
                heroPanelMain: 'Efficient Project',
                heroPanelBottom: 'Real Savings',
                areaLabel: 'Project type',
                areaOptions: {
                    residencial: 'Residential',
                    comercial: 'Commercial / Business',
                    industrial: 'Industrial',
                    rural: 'Rural Property'
                },
                urgencyLabel: 'Average energy bill',
                urgencyOptions: {
                    ate500: 'Up to R$ 500',
                    ate1500: 'R$ 500 to R$ 1,500',
                    acima1500: 'Above R$ 1,500'
                },
                summaryLabel: 'Any extra details? (Optional)',
                summaryPlaceholder: 'Example: Fiber cement roof, I want energy for 2 houses, etc.',
                serviceCards: [
                    {
                        title: 'Real Immediate Savings',
                        description: 'Your electric bill turns into an investment with quick payback. Finance the system with money that was already going to the utility.'
                    },
                    {
                        title: 'Gold-Standard Installation',
                        description: 'We preserve the look and structure of your property. No exposed wires, no destructive work, with maximum architectural discretion.'
                    },
                    {
                        title: 'Warranty and Durability',
                        description: 'Systems with more than 25 years of useful life. Full predictability for your budget and no long-term headaches.'
                    }
                ],
                locationBadge: 'Our Headquarters',
                locationTitle: 'Visit our structure.',
                locationDesc: 'We are located in a technology hub with a complete showroom of solar energy solutions.'
            },
            es: {
                title: 'Lumina Solar | Energía Inteligente',
                headerCta: 'Solicitar Simulación',
                navServicesLabel: 'Soluciones',
                heroBadge: 'Energía Solar Premium',
                heroTitle: 'AHORRA CON <br><span class="text-gradient">ENERGÍA SOLAR.</span>',
                heroDesc: 'Proyectos fotovoltaicos con análisis de consumo, retorno financiero e instalación pensada para máxima eficiencia.',
                heroSecondary: 'Nuestras Soluciones',
                servicesTitle: 'Soluciones Corporativas y Residenciales',
                faqBadge: 'Preguntas Frecuentes',
                faqTitle: 'Lo que necesitas saber antes de invertir.',
                faqDesc: 'Quien está evaluando energía solar quiere previsibilidad de ahorro, plazo y viabilidad técnica. Aquí están las respuestas más comunes.',
                contactBadge: 'Primer contacto',
                contactTitle: 'Tu proyecto solar empieza aquí.',
                contactDesc: 'Indica tu perfil de consumo y el tipo de inmueble. El sitio envía todo directamente a nuestro WhatsApp.',
                heroCardTitle: 'Simulación Inteligente',
                heroCardDesc: 'Consumo, retorno y viabilidad en una lectura rápida',
                heroPanelTop: 'Ingeniería Solar',
                heroPanelMain: 'Proyecto Eficiente',
                heroPanelBottom: 'Ahorro Real',
                areaLabel: 'Tipo de proyecto',
                areaOptions: {
                    residencial: 'Residencial',
                    comercial: 'Comercial / Empresa',
                    industrial: 'Industria',
                    rural: 'Propiedad Rural'
                },
                urgencyLabel: 'Factura media de energía',
                urgencyOptions: {
                    ate500: 'Hasta R$ 500',
                    ate1500: 'R$ 500 a R$ 1.500',
                    acima1500: 'Más de R$ 1.500'
                },
                summaryLabel: '¿Algún detalle adicional? (Opcional)',
                summaryPlaceholder: 'Ej.: Techo de fibrocemento, quiero energía para 2 casas, etc.',
                serviceCards: [
                    {
                        title: 'Ahorro Real e Inmediato',
                        description: 'Tu factura eléctrica se convierte en inversión con retorno rápido. Paga el sistema con el dinero que ya iba a la distribuidora.'
                    },
                    {
                        title: 'Instalación Estándar Oro',
                        description: 'Preservamos la estética y estructura del inmueble. Sin cables visibles ni obra agresiva, con máxima discreción arquitectónica.'
                    },
                    {
                        title: 'Garantía y Durabilidad',
                        description: 'Sistemas con más de 25 años de vida útil. Previsibilidad total para tu bolsillo y cero dolor de cabeza a largo plazo.'
                    }
                ],
                locationBadge: 'Nuestra Sede',
                locationTitle: 'Ven a conocer nuestra estructura.',
                locationDesc: 'Estamos ubicados en un polo tecnológico con showroom completo de soluciones de energía solar.'
            }
        }
    };

    const FAQ_COPY = {
        pt: [
            ['Quanto tempo leva?', 'Depende do serviço, mas sempre passamos uma previsão clara antes de seguir.'],
            ['Tem garantia?', 'Sim. Trabalhamos com garantia de acordo com o tipo de atendimento realizado.'],
            ['Preciso levar documentos ou informações?', 'Se possível, envie o máximo de contexto para facilitar o atendimento inicial.'],
            ['Posso falar pelo WhatsApp primeiro?', 'Sim. O formulário já abre o WhatsApp com a mensagem pronta.'],
            ['Vocês atendem com hora marcada?', 'Sim, o ideal é agendar para garantir atendimento sem espera desnecessária.']
        ],
        en: [
            ['How long does it take?', 'It depends on the service, but we always give a clear estimate before moving forward.'],
            ['Is there a warranty?', 'Yes. Warranty depends on the type of service performed.'],
            ['Do I need to bring documents or information?', 'If possible, send as much context as you can to help the first assessment.'],
            ['Can I talk on WhatsApp first?', 'Yes. The form opens WhatsApp with the message already prepared.'],
            ['Do you work by appointment?', 'Yes, scheduling is the best way to avoid unnecessary waiting.']
        ],
        es: [
            ['¿Cuánto tiempo tarda?', 'Depende del servicio, pero siempre damos una previsión clara antes de avanzar.'],
            ['¿Tiene garantía?', 'Sí. La garantía depende del tipo de servicio realizado.'],
            ['¿Debo llevar documentos o información?', 'Si es posible, envía el mayor contexto para facilitar la evaluación inicial.'],
            ['¿Puedo hablar primero por WhatsApp?', 'Sí. El formulario abre WhatsApp con el mensaje ya preparado.'],
            ['¿Atienden con cita previa?', 'Sí, lo ideal es agendar para evitar esperas innecesarias.']
        ]
    };

    let currentLocale = DEFAULT_LOCALE;
    let switcherRoot = null;
    let footerBusinessName = '';

    const detectSiteKey = () => {
        const explicitSiteKey =
            document.documentElement.dataset.siteKey ||
            document.body?.dataset.siteKey ||
            document.querySelector('meta[name="site-key"]')?.getAttribute('content');
        if (explicitSiteKey) {
            return String(explicitSiteKey).toLowerCase();
        }
        const match = window.location.pathname.match(/(site_[^/]+)/i);
        return match ? match[1].toLowerCase() : 'site_apple';
    };

    const siteKey = detectSiteKey();

    const normalizeLocale = (value) => {
        const raw = String(value || '').toLowerCase();
        if (raw.startsWith('pt')) return 'pt';
        if (raw.startsWith('es')) return 'es';
        if (raw.startsWith('en')) return 'en';
        return DEFAULT_LOCALE;
    };

    const getSavedLocale = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? normalizeLocale(saved) : null;
        } catch {
            return null;
        }
    };

    const detectBrowserLocale = () => normalizeLocale(
        navigator.language ||
        (Array.isArray(navigator.languages) ? navigator.languages[0] : '') ||
        DEFAULT_LOCALE
    );

    const saveLocale = (locale) => {
        try {
            localStorage.setItem(STORAGE_KEY, locale);
        } catch {}
    };

    const getLocaleMeta = () => LOCALES[currentLocale] || LOCALES[DEFAULT_LOCALE];

    const getSiteText = () => {
        const site = SITE_TEXT[siteKey] || SITE_TEXT.site_apple;
        return site[currentLocale] || site[DEFAULT_LOCALE];
    };

    const getFaqCopy = () => {
        const content = getSiteText();
        return content.faq || FAQ_COPY[currentLocale] || FAQ_COPY[DEFAULT_LOCALE];
    };

    const getCommonText = () => COMMON_TEXT[currentLocale] || COMMON_TEXT[DEFAULT_LOCALE];

    const getFooterBusinessName = () => {
        if (footerBusinessName) return footerBusinessName;
        const footerText = document.querySelector('.footer p')?.textContent?.replace(/\s+/g, ' ').trim() || '';
        const match = footerText.match(/^©?\s*\d{4}\s+(.*?)\.\s+Todos os direitos reservados\.$/);
        footerBusinessName = match ? match[1] : 'Studio Coutias';
        return footerBusinessName;
    };

    const setText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el && typeof text === 'string') {
            el.textContent = text;
        }
    };

    const setTextAny = (selectors, text) => {
        if (typeof text !== 'string') return;
        selectors.forEach((selector) => {
            const el = document.querySelector(selector);
            if (el) {
                el.textContent = text;
            }
        });
    };

    const setHtml = (selector, html) => {
        const el = document.querySelector(selector);
        if (el && typeof html === 'string') {
            el.innerHTML = html;
        }
    };

    const setButtonText = (selector, text) => {
        const button = document.querySelector(selector);
        if (!button || typeof text !== 'string') return;

        let label = button.querySelector(':scope > .button-label');
        if (!label) {
            const svg = Array.from(button.childNodes).find((node) => node.nodeType === Node.ELEMENT_NODE && node.tagName === 'svg');
            label = document.createElement('span');
            label.className = 'button-label';
            button.textContent = '';
            if (svg) {
                button.appendChild(svg);
            }
            button.appendChild(label);
        }

        label.textContent = text;
    };

    const setOptionTexts = (selector, items, emptyText) => {
        const select = document.querySelector(selector);
        if (!select) return;
        Array.from(select.options).forEach((option) => {
            if (!option.value) {
                option.textContent = emptyText;
                return;
            }
            if (items && items[option.value]) {
                option.textContent = items[option.value];
            }
        });
    };

    const setCheckboxText = (text) => {
        const label = document.querySelector('label[for="lead-auth"]');
        const input = document.querySelector('#lead-auth');
        if (!label || !input || typeof text !== 'string') return;
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${text}`));
    };

    const sanitizeText = (value, maxLength) => String(value || '')
        .normalize('NFKC')
        .replace(/[\u0000-\u001F\u007F<>]/g, ' ')
        .replace(/\s+/g, ' ')
        .slice(0, maxLength)
        .trim();

    const sanitizeDigits = (value) => String(value || '').replace(/\D/g, '');

    const getPhoneLocalDigits = (value) => {
        const meta = getLocaleMeta();
        let digits = sanitizeDigits(value);
        if (digits.startsWith(meta.ddiDigits)) {
            digits = digits.slice(meta.ddiDigits.length);
        }
        return digits.slice(0, meta.localDigits);
    };

    const formatPhone = (value) => getLocaleMeta().format(getPhoneLocalDigits(value));

    const isValidPhone = (value) => getPhoneLocalDigits(value).length === getLocaleMeta().localDigits;

    const getOwnerWhatsappPhone = () => {
        const whatsappLink = document.querySelector('.floating-socials .whatsapp-fab')?.getAttribute('href') || '';
        const match = whatsappLink.match(/phone=(\d+)/i);
        return match ? match[1] : '5575981886263';
    };

    const setFeedback = (message, type = 'error') => {
        const formFeedback = document.querySelector('[data-form-feedback]');
        if (!formFeedback) return;
        formFeedback.textContent = message;
        formFeedback.dataset.type = type;
    };

    const markInvalid = (fieldName) => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field) {
            field.setAttribute('aria-invalid', 'true');
            field.focus();
        }
    };

    const clearInvalid = () => {
        document.querySelectorAll('[aria-invalid="true"]').forEach((field) => {
            field.removeAttribute('aria-invalid');
        });
    };

    const formatName = (value) => {
        const lang = getLocaleMeta().lang;
        return sanitizeText(value, 80)
            .toLocaleLowerCase(lang)
            .replace(/(^|\s)(\S)/g, (_, space, char) => `${space}${char.toLocaleUpperCase(lang)}`);
    };

    const formatSummary = (value) => {
        const text = sanitizeText(value, 600);
        if (!text) return '';
        return `${text.charAt(0).toLocaleUpperCase(getLocaleMeta().lang)}${text.slice(1)}`;
    };

    const buildMessage = (lead) => {
        const common = getCommonText();
        return [
            common.leadIntro,
            '',
            `${common.leadName}: ${lead.name}`,
            `${common.leadPhone}: ${lead.phone}`,
            `${common.leadArea}: ${lead.area}`,
            `${common.leadUrgency}: ${lead.urgency}`,
            '',
            `${common.leadSummaryTitle}:`,
            lead.summary || '-',
            '',
            common.leadClose
        ].join('\n');
    };

    const applyPhonePresentation = () => {
        const common = getCommonText();
        const phoneField = document.querySelector('#lead-phone');
        const nameField = document.querySelector('#lead-name');
        if (phoneField) {
            phoneField.placeholder = getLocaleMeta().placeholder;
            phoneField.maxLength = getLocaleMeta().maxLength;
            if (phoneField.value) {
                phoneField.value = formatPhone(phoneField.value);
            }
        }
        if (nameField) {
            nameField.placeholder = common.fieldNamePlaceholder;
        }
    };

    const applyFaqTranslations = () => {
        const faqItems = Array.from(document.querySelectorAll('#faq .faq-item'));
        const faqCopy = getFaqCopy();
        faqItems.forEach((item, index) => {
            const pair = faqCopy[index];
            if (!pair) return;
            const summary = item.querySelector('summary');
            const paragraph = item.querySelector('p');
            if (summary) summary.textContent = pair[0];
            if (paragraph) paragraph.textContent = pair[1];
        });
    };

    const applyHeroTranslations = () => {
        const common = getCommonText();
        const content = getSiteText();
        setText('.floating-card-1 h4', content.heroCardTitle || common.heroCardTitle);
        setText('.floating-card-1 p', content.heroCardDesc || common.heroCardDesc);
        setText('.hero-front-panel span', content.heroPanelTop || common.heroPanelTop);
        setText('.hero-front-panel strong', content.heroPanelMain || common.heroPanelMain);
        setText('.hero-front-panel small', content.heroPanelBottom || common.heroPanelBottom);
    };

    const applyServiceTranslations = (serviceCards) => {
        if (!Array.isArray(serviceCards) || !serviceCards.length) return;
        const cards = Array.from(document.querySelectorAll('.services-grid .service-card'));
        cards.forEach((card, index) => {
            const copy = serviceCards[index];
            if (!copy) return;
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            if (title) title.textContent = copy.title;
            if (description) description.textContent = copy.description;
        });
    };

    const applySummaryCounterTranslation = () => {
        const common = getCommonText();
        const hint = document.querySelector('.form-hint');
        const count = document.querySelector('[data-summary-count]');
        if (!hint || !count) return;
        hint.innerHTML = '';
        hint.appendChild(count);
        hint.appendChild(document.createTextNode(`/600 ${common.summaryCounterSuffix}`));
    };

    const applyFooterTranslations = () => {
        const common = getCommonText();
        const footerParagraphs = document.querySelectorAll('.footer p');
        const yearEl = document.querySelector('[data-current-date], [data-current-year]');
        const footerLink = document.querySelector('.footer a');
        if (footerParagraphs[0] && yearEl) {
            footerParagraphs[0].innerHTML = `&copy; <span ${yearEl.hasAttribute('data-current-year') ? 'data-current-year' : 'data-current-date'}>${yearEl.textContent}</span> ${getFooterBusinessName()}. ${common.footerRights}`;
        }
        if (footerParagraphs[1] && footerLink) {
            footerParagraphs[1].innerHTML = `${common.footerMadeWith} ❤️ ${common.footerBy} `;
            footerParagraphs[1].appendChild(footerLink);
        }
    };

    const updateSwitcherButton = () => {
        const current = getLocaleMeta();
        const flag = switcherRoot?.querySelector('[data-lang-flag]');
        const label = switcherRoot?.querySelector('[data-lang-label]');
        if (flag) flag.textContent = current.flag;
        if (label) label.textContent = current.label;
        switcherRoot?.querySelectorAll('[data-lang-option]').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.langOption === currentLocale));
        });
    };

    const setSwitcherOpen = (isOpen) => {
        const trigger = switcherRoot?.querySelector('.language-switcher-trigger');
        const menu = switcherRoot?.querySelector('.language-switcher-menu');
        if (trigger) {
            trigger.setAttribute('aria-expanded', String(isOpen));
        }
        if (menu) {
            menu.hidden = !isOpen;
        }
        switcherRoot?.classList.toggle('is-open', isOpen);
    };

    const ensureSwitcher = () => {
        if (switcherRoot) return;
        switcherRoot = document.createElement('div');
        switcherRoot.className = 'language-switcher-fab';
        switcherRoot.innerHTML = `
            <button class="language-switcher-trigger" type="button" aria-expanded="false" aria-label="Selecionar idioma">
                <span class="language-chip-flag" data-lang-flag>🇧🇷</span>
                <span class="language-chip-label" data-lang-label>PT</span>
                <span class="language-chip-caret">▾</span>
            </button>
            <div class="language-switcher-menu" hidden>
                <button type="button" class="language-switcher-option" data-lang-option="pt"><span>🇧🇷</span><strong>PT</strong></button>
                <button type="button" class="language-switcher-option" data-lang-option="en"><span>🇺🇸</span><strong>EN</strong></button>
                <button type="button" class="language-switcher-option" data-lang-option="es"><span>🇪🇸</span><strong>ES</strong></button>
            </div>
        `;
        document.body.appendChild(switcherRoot);

        const trigger = switcherRoot.querySelector('.language-switcher-trigger');

        trigger?.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const isOpen = trigger.getAttribute('aria-expanded') === 'true';
            setSwitcherOpen(!isOpen);
        });

        switcherRoot.querySelectorAll('[data-lang-option]').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                setLocale(button.dataset.langOption || DEFAULT_LOCALE, true);
                setSwitcherOpen(false);
            });
        });

        document.addEventListener('pointerdown', (event) => {
            if (!switcherRoot?.contains(event.target)) {
                setSwitcherOpen(false);
            }
        });

        setSwitcherOpen(false);
    };

    const applyTranslations = () => {
        const common = getCommonText();
        const content = getSiteText();

        document.documentElement.lang = getLocaleMeta().lang;
        document.title = content.title;

        setTextAny(['.nav a[href="#inicio"]'], common.navHome);
        setTextAny(['.nav a[href="#servicos"]', '.nav a[href="#solucoes"]', '.nav a[href="#especialidades"]'], content.navServicesLabel || common.navServices);
        setTextAny(['.nav a[href="#faq"]'], common.navFaq);
        setTextAny(['.nav a[href="#localizacao"]'], content.navLocationLabel || common.navLocation);
        setButtonText('.header .btn-outline', content.headerCta || common.headerCta);

        setText('#inicio .badge', content.heroBadge);
        setHtml('#inicio .hero-title', content.heroTitle);
        setText('#inicio .hero-desc', content.heroDesc);
        setButtonText('#inicio .hero-buttons .btn-primary', content.heroPrimary || common.heroPrimary);
        setText('#inicio .hero-buttons .btn-ghost', content.heroSecondary || common.heroSecondary);
        applyHeroTranslations();

        setTextAny(['#servicos .section-title', '#solucoes .section-title', '#especialidades .section-title'], content.servicesTitle);
        applyServiceTranslations(content.serviceCards);

        setText('#faq .faq-intro .badge', content.faqBadge);
        setText('#faq .faq-intro .section-title', content.faqTitle);
        const faqIntroParagraph = document.querySelector('#faq .faq-intro p');
        if (faqIntroParagraph) {
            faqIntroParagraph.textContent = content.faqDesc;
        }
        applyFaqTranslations();

        setText('#contato .contact-copy .badge', content.contactBadge);
        setText('#contato .contact-copy .section-title', content.contactTitle);
        const contactParagraph = document.querySelector('#contato .contact-copy p');
        if (contactParagraph) {
            contactParagraph.textContent = content.contactDesc;
        }

        setText('label[for="lead-name"]', common.fieldName);
        setText('label[for="lead-phone"]', common.fieldPhone);
        setText('label[for="lead-area"]', content.areaLabel || common.fieldArea);
        setText('label[for="lead-urgency"]', content.urgencyLabel || common.fieldUrgency);
        setText('label[for="lead-summary"]', content.summaryLabel);

        const summaryField = document.querySelector('#lead-summary');
        if (summaryField) {
            summaryField.placeholder = content.summaryPlaceholder;
        }

        setOptionTexts('#lead-area', content.areaOptions, common.chooseOption);
        setOptionTexts('#lead-urgency', content.urgencyOptions, common.chooseOption);
        setCheckboxText(common.checkbox);
        setButtonText('.form-submit', content.submit || common.submit);
        applySummaryCounterTranslation();

        setText('#localizacao .badge', content.locationBadge);
        setText('#localizacao .section-title', content.locationTitle);
        const locationParagraph = document.querySelector('#localizacao .location-desc');
        if (locationParagraph) {
            locationParagraph.textContent = content.locationDesc;
        }
        setButtonText('.btn-waze', common.waze);
        setButtonText('.btn-maps', common.maps);

        applyPhonePresentation();
        applyFooterTranslations();
        updateSwitcherButton();
    };

    const setLocale = (locale, persist = false) => {
        currentLocale = normalizeLocale(locale);
        if (persist) {
            saveLocale(currentLocale);
        }
        applyTranslations();
        document.dispatchEvent(new CustomEvent('site:localechange', {
            detail: { locale: currentLocale }
        }));
    };

    const bindPhoneField = () => {
        const phoneField = document.querySelector('#lead-phone');
        if (!phoneField) return;

        phoneField.addEventListener('input', (event) => {
            event.stopImmediatePropagation();
            phoneField.value = formatPhone(phoneField.value);
        }, true);

        phoneField.addEventListener('blur', (event) => {
            event.stopImmediatePropagation();
            phoneField.value = formatPhone(phoneField.value);
        }, true);
    };

    const bindNameField = () => {
        const nameField = document.querySelector('#lead-name');
        if (!nameField) return;
        nameField.addEventListener('blur', (event) => {
            event.stopImmediatePropagation();
            nameField.value = formatName(nameField.value);
        }, true);
    };

    const bindSummaryField = () => {
        const summaryField = document.querySelector('#lead-summary');
        const summaryCount = document.querySelector('[data-summary-count]');
        if (!summaryField) return;

        summaryField.addEventListener('blur', () => {
            summaryField.value = formatSummary(summaryField.value);
            if (summaryCount) {
                summaryCount.textContent = String(summaryField.value.length);
            }
        }, true);
    };

    const bindFormSubmit = () => {
        const form = document.querySelector('[data-whatsapp-form]');
        if (!form) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            clearInvalid();
            setFeedback('');

            const common = getCommonText();
            const name = formatName(form.elements.name?.value || '');
            const phone = formatPhone(form.elements.phone?.value || '');
            const area = form.elements.area?.value || '';
            const urgency = form.elements.urgency?.value || '';
            const areaText = form.elements.area?.selectedOptions?.[0]?.textContent?.trim() || '';
            const urgencyText = form.elements.urgency?.selectedOptions?.[0]?.textContent?.trim() || '';
            const summary = formatSummary(form.elements.summary?.value || '');
            const company = sanitizeText(form.elements.company?.value || '', 80);
            const consent = Boolean(form.elements.auth?.checked);
            const summaryMinLength = Number(form.elements.summary?.getAttribute('minlength') || '0');
            const summaryRequired = form.elements.summary?.hasAttribute('required');

            form.elements.name.value = name;
            form.elements.phone.value = phone;
            if (form.elements.summary) {
                form.elements.summary.value = summary;
            }

            if (company) {
                setFeedback(common.blockedError);
                return;
            }
            if (name.length < 2) {
                setFeedback(common.nameError);
                markInvalid('name');
                return;
            }
            if (!isValidPhone(phone)) {
                setFeedback(common.phoneError);
                markInvalid('phone');
                return;
            }
            if (!area) {
                setFeedback(common.areaError);
                markInvalid('area');
                return;
            }
            if (!urgency) {
                setFeedback(common.urgencyError);
                markInvalid('urgency');
                return;
            }
            if (!consent) {
                setFeedback(common.consentError);
                markInvalid('auth');
                return;
            }
            if (summaryRequired && summary.length < summaryMinLength) {
                setFeedback(common.summaryError);
                markInvalid('summary');
                return;
            }

            const whatsappUrl = `https://api.whatsapp.com/send/?phone=${getOwnerWhatsappPhone()}&text=${encodeURIComponent(buildMessage({
                name,
                phone,
                area: areaText,
                urgency: urgencyText,
                summary
            }))}`;

            setFeedback(common.feedbackSuccess, 'success');
            window.location.href = whatsappUrl;
        }, true);
    };

    const init = () => {
        currentLocale = getSavedLocale() || detectBrowserLocale();
        ensureSwitcher();
        bindPhoneField();
        bindNameField();
        bindSummaryField();
        bindFormSubmit();
        setLocale(currentLocale, false);
    };

    window.LocaleSite = {
        getCurrentLocale: () => currentLocale,
        getLangTag: () => getLocaleMeta().lang,
        formatPhone,
        getPhoneLocalDigits,
        isValidPhone,
        setLocale
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
