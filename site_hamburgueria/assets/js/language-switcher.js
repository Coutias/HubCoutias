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
        site_hamburgueria: {
            "pt": {
                        "title": "Burger Craft | Hamburgueria Artesanal Premium",
                        "headerCta": "Ver Cardápio / Pedir",
                        "navServicesLabel": "Cardápio",
                        "heroBadge": "Hambúrgueres Artesanais Grelhados na Chapa",
                        "heroTitle": "SMASH BURGERS COM CARNE SUCOSA E <br><span class=\"text-gradient\">QUEIJO DERRETIDO.</span>",
                        "heroDesc": "Ingredientes frescos selecionados, blend de carne especial moído no dia, pão de batata selado na manteiga e entrega ultra-rápida.",
                        "heroSecondary": "Nosso Menu",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas Comuns",
                        "faqTitle": "Informações sobre ingredientes e entregas.",
                        "faqDesc": "Tire suas dúvidas sobre nosso blend de carne, taxa de entrega, embalagens e formas de pagamento no delivery.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Monte o seu pedido",
                        "contactDesc": "Escolha o hambúrguer, acompanhamentos e bebidas. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Blend Exclusivo",
                        "heroCardDesc": "100% carne bovina fresca moída diariamente",
                        "heroPanelTop": "Maionese Artesanal",
                        "heroPanelMain": "Ingredientes Frescos",
                        "heroPanelBottom": "Entrega Rápida e Quente",
                        "areaLabel": "Escolha o hambúrguer",
                        "areaOptions": {
                                    "classic": "Classic Burger (Carne, queijo, salada)",
                                    "smash": "Duplo Smash (Fininho, queijo cheddar)",
                                    "gourmet": "Gourmet Especial (Bacon, cebola caramelizada)",
                                    "combo": "Combo Completo (Hambúrguer, batata, refri)"
                        },
                        "urgencyLabel": "Forma de entrega",
                        "urgencyOptions": {
                                    "delivery": "Quero receber em casa (Delivery)",
                                    "retirada": "Vou retirar no local",
                                    "consumo": "Consumo no estabelecimento"
                        },
                        "summaryLabel": "Adicionais e Bebidas",
                        "summaryPlaceholder": "Escreva se deseja remover algum ingrediente (ex: cebola, salada) e quais bebidas e maioneses artesanais adicionais quer incluir.",
                        "serviceCards": [
                                    {
                                                "title": "Smash Burgers",
                                                "description": "Carnes prensadas na chapa de alta temperatura, criando aquela crosta crocante e saborosa com muito queijo derretido."
                                    },
                                    {
                                                "title": "Burgers Gourmet",
                                                "description": "Blends de 150g assados na grelha, acompanhados de queijos especiais, molhos artesanais e pães premium selados."
                                    },
                                    {
                                                "title": "Batata e Acompanhamentos",
                                                "description": "Batatas fritas super crocantes com páprica, anéis de cebola dourados e nossas maioneses artesanais exclusivas."
                                    }
                        ],
                        "locationBadge": "Nossa Casa",
                        "locationTitle": "Venha comer seu hambúrguer quentinho.",
                        "locationDesc": "Ambiente moderno com estilo industrial, ideal para reunir os amigos no happy hour com os melhores burgers.",
                        "faq": [
                                    [
                                                "Qual o peso do blend de carne de vocês?",
                                                "Nossos Smash Burgers usam carnes de 70g a 80g prensadas. Já a linha Gourmet conta com blends de 150g a 180g assados na grelha."
                                    ],
                                    [
                                                "Qual o tempo médio de entrega do delivery?",
                                                "Nosso tempo médio de entrega é de 30 a 45 minutos, mantendo a temperatura correta do lanche graças a nossas embalagens térmicas."
                                    ],
                                    [
                                                "Vocês têm opções vegetarianas?",
                                                "Sim! Contamos com hambúrguer à base de plantas e opções de queijo coalho grelhado de excelente sabor."
                                    ],
                                    [
                                                "A maionese verde de vocês é pasteurizada?",
                                                "Sim, nossas maioneses artesanais são feitas diariamente utilizando ovos pasteurizados, garantindo total segurança alimentar."
                                    ],
                                    [
                                                "Como faço para pedir combos promocionais?",
                                                "Selecionando a opção 'Combo Completo' no formulário do WhatsApp, você monta o hambúrguer, batata e bebida com desconto especial."
                                    ]
                        ]
            },
            "en": {
                        "title": "Burger Craft | Premium Smash Burgers",
                        "headerCta": "View Menu / Order",
                        "navServicesLabel": "Menu",
                        "heroBadge": "Flame-Grilled Custom Burgers",
                        "heroTitle": "SMASH BURGERS WITH JUICY BEEF AND <br><span class=\"text-gradient\">MELTED CHEESE.</span>",
                        "heroDesc": "Fresh handpicked ingredients, custom blend beef ground daily, butter-toasted potato buns, and ultra-fast delivery.",
                        "heroSecondary": "Our Menu",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Ingredients & delivery information.",
                        "faqDesc": "Get answers about our beef blend, delivery fees, thermal packaging, and payment options.",
                        "contactBadge": "First contact",
                        "contactTitle": "Assemble your order",
                        "contactDesc": "Choose your burger, sides, and drinks. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Custom Blend",
                        "heroCardDesc": "100% fresh beef ground daily in-house",
                        "heroPanelTop": "House Mayo",
                        "heroPanelMain": "Fresh Ingredients",
                        "heroPanelBottom": "Fast & Hot Delivery",
                        "areaLabel": "Select your burger",
                        "areaOptions": {
                                    "classic": "Classic Burger (Beef, cheese, salad)",
                                    "smash": "Double Smash (Thin patty, cheddar cheese)",
                                    "gourmet": "Gourmet Special (Bacon, caramelized onions)",
                                    "combo": "Full Combo (Burger, fries, soda)"
                        },
                        "urgencyLabel": "Order method",
                        "urgencyOptions": {
                                    "delivery": "Deliver to my home",
                                    "retirada": "Pickup at store",
                                    "consumo": "Eat-in / Dine-in"
                        },
                        "summaryLabel": "Add-ons and Drinks",
                        "summaryPlaceholder": "Note any ingredients to remove (e.g., onions, salad) and specify drinks or extra house sauces you want.",
                        "serviceCards": [
                                    {
                                                "title": "Smash Burgers",
                                                "description": "Patties smashed flat on a screamin' hot griddle, locking in juices and creating a crispy edge with lots of melted cheese."
                                    },
                                    {
                                                "title": "Gourmet Burgers",
                                                "description": "Thick 150g beef blends grilled over open flame, topped with special cheeses, homemade sauces, and premium buns."
                                    },
                                    {
                                                "title": "Fries & Sides",
                                                "description": "Crispy golden french fries seasoned with paprika, battered onion rings, and our exclusive house sauces."
                                    }
                        ],
                        "locationBadge": "Our Place",
                        "locationTitle": "Enjoy your burger fresh off the grill.",
                        "locationDesc": "Modern industrial-style space, perfect for hanging out with friends over the best burgers.",
                        "faq": [
                                    [
                                                "What is the weight of your beef patties?",
                                                "Our Smash Burgers use 70g to 80g patties pressed thin. The Gourmet line features 150g to 180g flame-grilled beef blends."
                                    ],
                                    [
                                                "What is the average delivery time?",
                                                "Our average delivery time is 30 to 45 minutes, keeping the burger hot and crispy using customized thermal bags."
                                    ],
                                    [
                                                "Do you offer vegetarian options?",
                                                "Yes! We offer a high-quality plant-based patty as well as grilled halloumi cheese options that taste amazing."
                                    ],
                                    [
                                                "Is your green mayo pasteurized?",
                                                "Yes, all our homemade sauces are made daily using pasteurized eggs to ensure total food safety."
                                    ],
                                    [
                                                "How do I order discounted combos?",
                                                "By selecting the 'Full Combo' option in the WhatsApp form, you can bundle your burger, fries, and drink with a special discount."
                                    ]
                        ]
            },
            "es": {
                        "title": "Burger Craft | Hamburguesas Artesanales Premium",
                        "headerCta": "Ver Menú / Pedir",
                        "navServicesLabel": "Menú",
                        "heroBadge": "Hamburguesas Artesanales a la Plancha",
                        "heroTitle": "SMASH BURGERS CON CARNE JUGOSA Y <br><span class=\"text-gradient\">QUESO FUNDIDO.</span>",
                        "heroDesc": "Ingredientes frescos seleccionados, blend de carne especial molido en el día, pan de patata tostado con mantequilla y entrega rápida.",
                        "heroSecondary": "Nuestro Menú",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Información sobre ingredientes y entregas.",
                        "faqDesc": "Resuelva sus dudas sobre nuestro blend de carne, tarifas de envío, embalaje térmico y formas de pago.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Arma tu pedido",
                        "contactDesc": "Elige tu hamburguesa, acompañamientos y bebidas. El resumen va directo a nuestro WhatsApp.",
                        "heroCardTitle": "Blend Exclusivo",
                        "heroCardDesc": "100% carne de res fresca molida a diario",
                        "heroPanelTop": "Mayonesa Casera",
                        "heroPanelMain": "Ingredientes Frescos",
                        "heroPanelBottom": "Entrega Rápida y Caliente",
                        "areaLabel": "Elige tu hamburguesa",
                        "areaOptions": {
                                    "classic": "Classic Burger (Carne, queso, ensalada)",
                                    "smash": "Doble Smash (Finito, queso cheddar)",
                                    "gourmet": "Gourmet Especial (Bacon, cebolla caramelizada)",
                                    "combo": "Combo Completo (Hamburguesa, patatas, refresco)"
                        },
                        "urgencyLabel": "Método de entrega",
                        "urgencyOptions": {
                                    "delivery": "Quiero recibirlo en casa (Delivery)",
                                    "retirada": "Recoger en el local",
                                    "consumo": "Consumir en el local"
                        },
                        "summaryLabel": "Adicionales y Bebidas",
                        "summaryPlaceholder": "Escribe si deseas quitar algún ingrediente (ej: cebolla, lechuga) y qué bebidas o salsas adicionales deseas incluir.",
                        "serviceCards": [
                                    {
                                                "title": "Smash Burgers",
                                                "description": "Carnes prensadas en planchas a alta temperatura, creando una costra crujiente y sabrosa con mucho queso fundido."
                                    },
                                    {
                                                "title": "Gourmet Burgers",
                                                "description": "Blends de 150g cocinados a la parrilla, acompañados de quesos especiales, salsas artesanales y panes premium."
                                    },
                                    {
                                                "title": "Patatas y Acompañamientos",
                                                "description": "Patatas fritas super crujientes sazonadas, aros de cebolla dorados y nuestras mayonesas caseras exclusivas."
                                    }
                        ],
                        "locationBadge": "Nuestra Casa",
                        "locationTitle": "Ven a comer tu hamburguesa calientita.",
                        "locationDesc": "Ambiente moderno con estilo industrial, ideal para reunirse con amigos a disfrutar de las mejores hamburguesas.",
                        "faq": [
                                    [
                                                "¿Cuál es el peso de las porciones de carne?",
                                                "Nuestras Smash Burgers usan porciones de 70g a 80g. La línea Gourmet cuenta con blends de 150g a 180g cocinados a la parrilla."
                                    ],
                                    [
                                                "¿Cuál es el tiempo medio de envío a domicilio?",
                                                "El tiempo promedio de entrega es de 30 a 45 minutos, manteniendo los lanchas a la temperatura correcta gracias a los envases térmicos."
                                    ],
                                    [
                                                "¿Tienen opciones vegetarianas?",
                                                "¡Sí! Contamos con hamburguesas a base de plantas y opciones de queso a la plancha de gran sabor."
                                    ],
                                    [
                                                "¿La mayonesa verde de ustedes está pasteurizada?",
                                                "Sí, todas nuestras mayonesas caseras se elaboran a diario con huevos pasteurizados, garantizando la seguridad alimentaria."
                                    ],
                                    [
                                                "¿Cómo pido combos promocionales?",
                                                "Seleccionando la opción 'Combo Completo' en el formulario de WhatsApp, puedes armar tu hamburguesa, patatas y refresco con descuento."
                                    ]
                        ]
            }
},
        site_sushi: {
            "pt": {
                        "title": "Zen Sushi | Delivery de Culinária Japonesa",
                        "headerCta": "Fazer Pedido",
                        "navServicesLabel": "Menu",
                        "heroBadge": "Sushis e Sashimis Frescos",
                        "heroTitle": "CULINÁRIA JAPONESA DE ELITE <br><span class=\"text-gradient\">NO CONFORTO DA SUA CASA.</span>",
                        "heroDesc": "Salmão importado fresco fatiado diariamente, combinados artesanais, temakis maçaricados e yakisobas quentes feitos na hora.",
                        "heroSecondary": "Nosso Menu",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas Frequentes",
                        "faqTitle": "Tudo sobre nosso preparo e delivery.",
                        "faqDesc": "Saiba mais sobre a origem dos nossos peixes, embalagens seguras para transporte e tempo de entrega dos combinados.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Escolha o seu combinado",
                        "contactDesc": "Selecione o tamanho do combinado e envie suas preferências. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Salmão Premium",
                        "heroCardDesc": "Peixes frescos inspecionados diariamente",
                        "heroPanelTop": "Sushiman Chefe",
                        "heroPanelMain": "Preparo Artesanal",
                        "heroPanelBottom": "Shari (Arroz) na Temperatura Correta",
                        "areaLabel": "Escolha o combinado",
                        "areaOptions": {
                                    "temaki": "Temaki Especial (Salmão, cream cheese, cebolinha)",
                                    "combinado1": "Combinado Individual (16 Peças variadas)",
                                    "combinado2": "Combinado Duplo (32 Peças variadas)",
                                    "quente": "Pratos Quentes (Yakisoba, Hot Roll, Teppan)"
                        },
                        "urgencyLabel": "Método de entrega",
                        "urgencyOptions": {
                                    "delivery": "Entregar em casa (Delivery)",
                                    "retirada": "Vou retirar no restaurante"
                        },
                        "summaryLabel": "Restrições ou Observações",
                        "summaryPlaceholder": "Informe se deseja remover o cream cheese, gergelim, cebolinha ou se prefere sushis sem peixe cru (grelhados/maçaricados).",
                        "serviceCards": [
                                    {
                                                "title": "Combinados de Sushi",
                                                "description": "Variedade de niguiris, jotas, uramakis e hossomakis feitos com precisão e peixes da melhor qualidade."
                                    },
                                    {
                                                "title": "Sashimis Selecionados",
                                                "description": "Cortes limpos e precisos de salmão, atum e peixe branco fresco, servidos com shoyu artesanal e wasabi."
                                    },
                                    {
                                                "title": "Pratos Quentes Japoneses",
                                                "description": "Hot rolls super crocantes, yakisobas fumegantes e guiozas douradas na chapa para quem prefere pratos cozidos."
                                    }
                        ],
                        "locationBadge": "Nosso Espaço",
                        "locationTitle": "Venha viver uma experiência oriental.",
                        "locationDesc": "Salão intimista com iluminação aconchegante, ideal para jantares românticos e comemorações com amigos.",
                        "faq": [
                                    [
                                                "Os peixes são frescos mesmo?",
                                                "Sim. Recebemos entregas diárias de salmão fresco do Chile e atum de águas profundas, mantendo rígido controle de temperatura e higiene."
                                    ],
                                    [
                                                "Como os sushis são transportados no delivery?",
                                                "Utilizamos caixas divisórias rígidas que impedem que as peças se movam e bolsas térmicas exclusivas para manter os frios gelados e os pratos quentes aquecidos."
                                    ],
                                    [
                                                "Vocês fazem sushi vegetariano?",
                                                "Sim! Temos opções de uramakis e hossomakis recheados com pepino, manga, cenoura, tomate seco e cream cheese."
                                    ],
                                    [
                                                "O shoyu de vocês é artesanal?",
                                                "Sim, servimos uma receita de shoyu artesanal levemente adocicada e reduzida em sódio que harmoniza perfeitamente com os peixes."
                                    ],
                                    [
                                                "Qual o prazo de entrega no delivery?",
                                                "O tempo médio de preparo e entrega é de 40 a 60 minutos, pois todos os sushis são enrolados na hora após a confirmação do pedido."
                                    ]
                        ]
            },
            "en": {
                        "title": "Zen Sushi | Japanese Restaurant & Delivery",
                        "headerCta": "Place Order",
                        "navServicesLabel": "Menu",
                        "heroBadge": "Fresh Sushi & Sashimi",
                        "heroTitle": "ELITE JAPANESE CUISINE <br><span class=\"text-gradient\">DELIVERED TO YOUR DOOR.</span>",
                        "heroDesc": "Fresh imported salmon sliced daily, artisanal sushi platters, seared temaki rolls, and hot yakisoba dishes made to order.",
                        "heroSecondary": "Our Menu",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Everything about our prep & delivery.",
                        "faqDesc": "Learn about our fish sourcing, safe transport packaging, and delivery times for custom platters.",
                        "contactBadge": "First contact",
                        "contactTitle": "Choose your combo",
                        "contactDesc": "Select your sushi platter size and send your preferences. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Premium Salmon",
                        "heroCardDesc": "Fresh fish inspected and sliced daily",
                        "heroPanelTop": "Head Sushiman",
                        "heroPanelMain": "Handcrafted Prep",
                        "heroPanelBottom": "Shari (Rice) at Correct Temperature",
                        "areaLabel": "Select platter",
                        "areaOptions": {
                                    "temaki": "Special Temaki (Salmon, cream cheese, chives)",
                                    "combinado1": "Individual Combo (16 Assorted pieces)",
                                    "combinado2": "Double Combo (32 Assorted pieces)",
                                    "quente": "Hot Dishes (Yakisoba, Hot Roll, Teppan)"
                        },
                        "urgencyLabel": "Delivery method",
                        "urgencyOptions": {
                                    "delivery": "Deliver to my home",
                                    "retirada": "Pickup at restaurant"
                        },
                        "summaryLabel": "Dietary requests or notes",
                        "summaryPlaceholder": "Specify if you want to remove cream cheese, sesame, green onions, or if you prefer seared/cooked rolls only.",
                        "serviceCards": [
                                    {
                                                "title": "Sushi Combos",
                                                "description": "A rich variety of nigiri, jo, uramaki, and hosomaki rolls crafted with precision and top-grade fish."
                                    },
                                    {
                                                "title": "Fresh Sashimi",
                                                "description": "Clean, precise slices of fresh salmon, tuna, and white fish, served with house-blend soy sauce and wasabi."
                                    },
                                    {
                                                "title": "Hot Japanese Dishes",
                                                "description": "Crispy golden hot rolls, steaming yakisoba, and pan-seared gyoza dumplings for those who prefer cooked meals."
                                    }
                        ],
                        "locationBadge": "Our Lounge",
                        "locationTitle": "Come live an oriental experience.",
                        "locationDesc": "Intimate dining room with soft ambient lighting, perfect for romantic dinners and friends gatherings.",
                        "faq": [
                                    [
                                                "Is the fish really fresh?",
                                                "Yes. We receive daily shipments of fresh Chilean salmon and deep-sea tuna, stored under strict temperature and sanitary control."
                                    ],
                                    [
                                                "How is the sushi transported?",
                                                "We use rigid divided boxes that prevent pieces from sliding, carried in specialized thermal bags to keep raw items cold and hot items warm."
                                    ],
                                    [
                                                "Do you offer vegetarian sushi?",
                                                "Yes! We have vegetarian rolls filled with cucumber, mango, carrots, sun-dried tomatoes, and cream cheese."
                                    ],
                                    [
                                                "Is your soy sauce house-made?",
                                                "Yes, we serve a house-blended shoyu sauce that is slightly sweet and reduced in sodium, matching perfectly with the raw fish."
                                    ],
                                    [
                                                "What is the average delivery time?",
                                                "Average prep and delivery time is 40 to 60 minutes, as all rolls are prepared fresh right after your order is confirmed."
                                    ]
                        ]
            },
            "es": {
                        "title": "Zen Sushi | Restaurante Japonés y Delivery",
                        "headerCta": "Hacer Pedido",
                        "navServicesLabel": "Menú",
                        "heroBadge": "Sushis y Sashimis Frescos",
                        "heroTitle": "COMIDA JAPONESA DE ELITE <br><span class=\"text-gradient\">EN LA COMODIDAD DE TU HOGAR.</span>",
                        "heroDesc": "Salmón importado fresco cortado al día, combinados artesanales, temakis maçaricados y yakisobas calientes hechos al momento.",
                        "heroSecondary": "Nuestro Menú",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Todo sobre nuestro preparado y delivery.",
                        "faqDesc": "Conoce más sobre el origen de nuestros pescados, empaques seguros para transporte y tiempos de entrega.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Elige tu combinado",
                        "contactDesc": "Selecciona el tamaño del combinado y envía tus preferencias. El resumen va directo a nuestro WhatsApp.",
                        "heroCardTitle": "Salmón Premium",
                        "heroCardDesc": "Pescados frescos inspeccionados a diario",
                        "heroPanelTop": "Sushiman Jefe",
                        "heroPanelMain": "Preparación Artesanal",
                        "heroPanelBottom": "Shari (Arroz) a la Temperatura Correcta",
                        "areaLabel": "Elige tu combinado",
                        "areaOptions": {
                                    "temaki": "Temaki Especial (Salmón, queso crema, cebollino)",
                                    "combinado1": "Combinado Individual (16 Piezas variadas)",
                                    "combinado2": "Combinado Doble (32 Piezas variadas)",
                                    "quente": "Platos Calientes (Yakisoba, Hot Roll, Teppan)"
                        },
                        "urgencyLabel": "Método de entrega",
                        "urgencyOptions": {
                                    "delivery": "Entregar en casa (Delivery)",
                                    "retirada": "Recoger en el restaurante"
                        },
                        "summaryLabel": "Restricciones u Observaciones",
                        "summaryPlaceholder": "Informa si deseas quitar el queso crema, sésamo, cebollino o si prefieres sushis cocinados/maçaricados.",
                        "serviceCards": [
                                    {
                                                "title": "Combinados de Sushi",
                                                "description": "Variedad de niguiris, jotas, uramakis y hossomakis hechos con precisión y pescados de la mejor calidad."
                                    },
                                    {
                                                "title": "Sashimis Seleccionados",
                                                "description": "Cortes limpios y precisos de salmón, atún y pescado blanco fresco, servidos con shoyu artesanal y wasabi."
                                    },
                                    {
                                                "title": "Platos Calientes Japoneses",
                                                "description": "Hot rolls muy crujientes, yakisobas humeantes y guiozas doradas a la plancha para quienes prefieren platos cocidos."
                                    }
                        ],
                        "locationBadge": "Nuestro Espacio",
                        "locationTitle": "Ven a vivir una experiencia oriental.",
                        "locationDesc": "Salón íntimo con iluminación acogedora, ideal para cenas románticas y celebraciones con amigos.",
                        "faq": [
                                    [
                                                "¿Los pescados realmente son frescos?",
                                                "Sí. Recibimos entregas diarias de salmón fresco de Chile y atún de aguas profundas, manteniendo un rígido control de temperatura."
                                    ],
                                    [
                                                "¿Cómo se transportan los sushis en el delivery?",
                                                "Utilizamos cajas divisorias rígidas que evitan el movimiento de las piezas y bolsas térmicas para mantener el frío y calor por separado."
                                    ],
                                    [
                                                "¿Hacen sushi vegetariano?",
                                                "Sí. Tenemos opciones de uramakis y hossomakis rellenos de pepino, mango, zanahoria y queso crema."
                                    ],
                                    [
                                                "¿El shoyu de ustedes es artesanal?",
                                                "Sí, servimos un shoyu artesanal ligeramente dulce y reducido en sodio que armoniza de forma ideal con el pescado."
                                    ],
                                    [
                                                "¿Cuál es el tiempo de entrega a domicilio?",
                                                "El tiempo promedio de preparado y entrega es de 40 a 60 minutos, ya que todas las piezas se enrollan en el momento."
                                    ]
                        ]
            }
},
        site_deposito_bebidas: {
            "pt": {
                        "title": "Bebidas Express | Depósito e Distribuidora",
                        "headerCta": "Pedir Distribuidora",
                        "navServicesLabel": "Combos",
                        "heroBadge": "Bebidas Geladas Entrega Rápida",
                        "heroTitle": "SALVE SUA FESTA COM BEBIDAS <br><span class=\"text-gradient\">EM TEMPO RECORDE.</span>",
                        "heroDesc": "Cervejas estúpidamente geladas, carvão, gelo de coco, refrigerantes e combos promocionais de destilados entregues na sua porta.",
                        "heroSecondary": "Nossos Combos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas",
                        "faqTitle": "Dúvidas comuns sobre o depósito.",
                        "faqDesc": "Saiba mais sobre áreas de entrega rápida, taxas de entrega e condições para eventos maiores.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Monte o seu combo",
                        "contactDesc": "Escolha os destilados, refrigerantes e gelo. O resumo vai direto para nosso WhatsApp de entregas.",
                        "heroCardTitle": "Cerveja Gelada",
                        "heroCardDesc": "Bebidas prontas para consumo na temperatura certa",
                        "heroPanelTop": "Entregas Rápidas",
                        "heroPanelMain": "Motoboys Próprios",
                        "heroPanelBottom": "Gelo e Carvão na Hora",
                        "areaLabel": "Escolha o tipo de bebida",
                        "areaOptions": {
                                    "cerveja": "Cervejas (Lata / Garrafa)",
                                    "combo_destilado": "Combos Promocionais (Gin / Whisky / Vodka)",
                                    "sem_alcool": "Refrigerante / Suco / Água / Energético",
                                    "carvao_gelo": "Carvão / Gelo de Coco / Gelo Escama"
                        },
                        "urgencyLabel": "Quantidade do pedido",
                        "urgencyOptions": {
                                    "consumo_imediato": "Consumo Imediato (Salvar a noite)",
                                    "abastecimento": "Abastecer final de semana",
                                    "evento_grande": "Bebidas para Festas / Casamentos"
                        },
                        "summaryLabel": "Bebidas Específicas e Adicionais",
                        "summaryPlaceholder": "Especifique as marcas preferidas de cerveja ou destilados (ex: Heineken, Budweiser, Red Label, Absolut) e quantidade de pacotes de gelo ou carvão.",
                        "serviceCards": [
                                    {
                                                "title": "Cervejas Trincando",
                                                "description": "Heineken, Corona, Amstel e marcas líderes conservadas em câmaras frias prontas para beber."
                                    },
                                    {
                                                "title": "Combos Promocionais",
                                                "description": "Combos completos com garrafa (Whisky, Vodka ou Gin), energéticos de sabor e gelo de coco especial com desconto."
                                    },
                                    {
                                                "title": "Apoio para Festas",
                                                "description": "Fornecimento completo de grades de cerveja, carvão de eucalipto premium e sacos de gelo de escama para o seu churrasco."
                                    }
                        ],
                        "locationBadge": "Onde Fica",
                        "locationTitle": "Retirada rápida em nossa distribuidora.",
                        "locationDesc": "Estrutura otimizada para carregar o porta-malas do seu carro em minutos ou despachar motoboys na hora.",
                        "faq": [
                                    [
                                                "Qual a taxa de entrega do delivery?",
                                                "A taxa de entrega varia de acordo com a distância do bairro, sendo grátis para entregas num raio de até 2km da nossa distribuidora."
                                    ],
                                    [
                                                "As bebidas chegam geladas mesmo?",
                                                "Sim! Nossos estoques são mantidos em câmara fria abaixo de zero. Os motoboys transportam em caixas térmicas com gelo escama."
                                    ],
                                    [
                                                "Vocês alugam freezers ou caixas térmicas?",
                                                "Sim, alugamos freezers verticais e caixas térmicas grandes para eventos de churrasco de acordo com o consumo mínimo de bebidas."
                                    ],
                                    [
                                                "Quais destilados vocês trabalham?",
                                                "Trabalhamos apenas com destilados originais selados com garantia de procedência das melhores marcas (Whisky, Gin, Vodka e Tequila)."
                                    ],
                                    [
                                                "Qual o horário de atendimento do delivery?",
                                                "Nosso delivery funciona em horário estendido, de quinta a sábado até às 03:00 da manhã, e aos domingos até às 22:00."
                                    ]
                        ]
            },
            "en": {
                        "title": "Bebidas Express | Beverage Delivery",
                        "headerCta": "Order Now",
                        "navServicesLabel": "Combos",
                        "heroBadge": "Ice-Cold Drinks Fast Delivery",
                        "heroTitle": "SAVE YOUR PARTY WITH DRINKS <br><span class=\"text-gradient\">IN RECORD TIME.</span>",
                        "heroDesc": "Stupidly cold beers, charcoal, coconut ice, sodas, and promotional liquor combos delivered straight to your door.",
                        "heroSecondary": "Our Combos",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about our depot.",
                        "faqDesc": "Learn about fast delivery zones, delivery fees, and services for larger events.",
                        "contactBadge": "First contact",
                        "contactTitle": "Assemble your drink combo",
                        "contactDesc": "Choose liquors, mixers, and ice. The summary goes straight to our WhatsApp delivery desk.",
                        "heroCardTitle": "Ice-Cold Beer",
                        "heroCardDesc": "Drinks ready for consumption at the right temperature",
                        "heroPanelTop": "Fast Deliveries",
                        "heroPanelMain": "Own Rider Crew",
                        "heroPanelBottom": "Ice & Charcoal Ready",
                        "areaLabel": "Select beverage type",
                        "areaOptions": {
                                    "cerveja": "Beers (Cans / Bottles)",
                                    "combo_destilado": "Liquor Combo (Gin / Whisky / Vodka)",
                                    "sem_alcool": "Soda / Juice / Water / Energy Drink",
                                    "carvao_gelo": "Charcoal / Coconut Ice / Flake Ice"
                        },
                        "urgencyLabel": "Order size",
                        "urgencyOptions": {
                                    "consumo_imediato": "Immediate Consumption (Save the night)",
                                    "abastecimento": "Weekend stocking",
                                    "evento_grande": "Drinks for Parties / Weddings"
                        },
                        "summaryLabel": "Specific Brands & Items",
                        "summaryPlaceholder": "Specify preferred beer or spirit brands (e.g., Heineken, Budweiser, Red Label, Absolut) and quantities of ice or charcoal.",
                        "serviceCards": [
                                    {
                                                "title": "Super Cold Beers",
                                                "description": "Heineken, Corona, Amstel, and major brands stored in sub-zero cold rooms ready to open and drink."
                                    },
                                    {
                                                "title": "Promotional Combos",
                                                "description": "Full liquor bundles featuring bottles (Whisky, Vodka, or Gin), flavored energy drinks, and coconut ice at a discount."
                                    },
                                    {
                                                "title": "Party Supplies",
                                                "description": "Full support with beer crates, premium eucalyptus charcoal, and ice bags for your backyard barbecue."
                                    }
                        ],
                        "locationBadge": "Our Store",
                        "locationTitle": "Quick drive-thru pickup.",
                        "locationDesc": "Optimized warehouse structured to load your trunk in minutes or dispatch riders instantly.",
                        "faq": [
                                    [
                                                "What is the delivery fee?",
                                                "The delivery fee depends on your neighborhood distance. We offer free delivery within a 2km radius of our warehouse."
                                    ],
                                    [
                                                "Are the drinks delivered cold?",
                                                "Yes! Our stock is kept in sub-zero cold rooms. Delivery riders carry them in insulated thermal boxes packed with ice."
                                    ],
                                    [
                                                "Do you rent out freezers or coolers?",
                                                "Yes, we rent out vertical freezers and large party coolers for events, subject to a minimum beverage purchase."
                                    ],
                                    [
                                                "Which spirits do you sell?",
                                                "We exclusively sell original sealed spirits with guaranteed authenticity from top brands (Whisky, Gin, Vodka, and Tequila)."
                                    ],
                                    [
                                                "What are the delivery hours?",
                                                "Our delivery operates extended hours, Thursday through Saturday until 3:00 AM, and Sundays until 10:00 PM."
                                    ]
                        ]
            },
            "es": {
                        "title": "Bebidas Express | Depósito y Distribuidora",
                        "headerCta": "Pedir Distribuidora",
                        "navServicesLabel": "Combos",
                        "heroBadge": "Bebidas Heladas Entrega Rápida",
                        "heroTitle": "SALVA TU FIESTA COM BEBIDAS <br><span class=\"text-gradient\">EN TIEMPO RÉCORD.</span>",
                        "heroDesc": "Cervezas estúpidamente heladas, carbón, hielo de coco, refrescos y combos promocionales de licores entregados en tu puerta.",
                        "heroSecondary": "Nuestros Combos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas",
                        "faqTitle": "Preguntas frecuentes sobre el depósito.",
                        "faqDesc": "Conoce más sobre las zonas de entrega rápida, tarifas y condiciones para eventos grandes.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Arma tu combo",
                        "contactDesc": "Elige las bebidas y el hielo. El resumen va directo a nuestro WhatsApp de entregas.",
                        "heroCardTitle": "Cerveza Helada",
                        "heroCardDesc": "Bebidas listas para consumir a la temperatura adecuada",
                        "heroPanelTop": "Entregas Rápidas",
                        "heroPanelMain": "Motoboys Propios",
                        "heroPanelBottom": "Hielo y Carbón al Instante",
                        "areaLabel": "Elige tu bebida",
                        "areaOptions": {
                                    "cerveja": "Cervezas (Lata / Botella)",
                                    "combo_destilado": "Combos Promocionales (Gin / Whisky / Vodka)",
                                    "sem_alcool": "Refresco / Zumo / Agua / Energizante",
                                    "carvao_gelo": "Carbón / Hielo de Coco / Hielo en Escamas"
                        },
                        "urgencyLabel": "Cantidad del pedido",
                        "urgencyOptions": {
                                    "consumo_imediato": "Consumo Inmediato (Salvar la noche)",
                                    "abastecimento": "Abastecer fin de semana",
                                    "evento_grande": "Bebidas para Fiestas / Bodas"
                        },
                        "summaryLabel": "Bebidas Específicas y Adicionales",
                        "summaryPlaceholder": "Especifica las marcas de cerveza o destilados (ej: Heineken, Budweiser, Red Label, Absolut) y bolsas de hielo o carbón.",
                        "serviceCards": [
                                    {
                                                "title": "Cervezas Heladas",
                                                "description": "Heineken, Corona, Amstel y marcas líderes conservadas en cámaras frigoríficas listas para beber."
                                    },
                                    {
                                                "title": "Combos Promocionales",
                                                "description": "Combos completos con botella (Whisky, Vodka o Gin), energizantes de sabor y hielo de coco con descuento."
                                    },
                                    {
                                                "title": "Apoyo para Fiestas",
                                                "description": "Suministro completo de cajones de cerveza, carbón premium y bolsas de hielo en escamas para tu barbacoa."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Retirada rápida en nuestra distribuidora.",
                        "locationDesc": "Estructura optimizada para cargar la maletera de tu coche en minutos o despachar motoboys al instante.",
                        "faq": [
                                    [
                                                "¿Cuál es la tarifa de envío a domicilio?",
                                                "La tarifa varía según el barrio, siendo gratuita para entregas en un radio de hasta 2 km de nuestra distribuidora."
                                    ],
                                    [
                                                "¿Las bebidas realmente llegan frías?",
                                                "¡Sí! Nuestros stocks se mantienen en cámaras bajo cero. Los repartidores las transportan en cajas térmicas con hielo."
                                    ],
                                    [
                                                "¿Alquilan neveras o cajas térmicas?",
                                                "Sí, alquilamos congeladores verticales y cajas térmicas grandes para barbacoas de acuerdo con el consumo mínimo de bebidas."
                                    ],
                                    [
                                                "¿Con qué licores trabajan?",
                                                "Trabajamos solo con licores originales sellados con garantía de procedencia de las mejores marcas."
                                    ],
                                    [
                                                "¿Cuál es el horario de atención?",
                                                "Nuestro delivery funciona de jueves a sábado hasta las 03:00 de la mañana, y los domingos hasta las 22:00."
                                    ]
                        ]
            }
},
        site_funilaria: {
            "pt": {
                        "title": "Veloce Reparos | Funilaria e Pintura Express",
                        "headerCta": "Orçamento de Reparo",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Reparo Rápido e Martelinho",
                        "heroTitle": "FUNILARIA RÁPIDA E MARTELINHO <br><span class=\"text-gradient\">DE OURO DE ALTA PRECISÃO.</span>",
                        "heroDesc": "Remoção de amassados sem pintar, retoques rápidos de pintura em parachoques e correção de arranhões no mesmo dia.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas",
                        "faqTitle": "Dúvidas comuns sobre funilaria rápida.",
                        "faqDesc": "Saiba mais sobre prazos de entrega, recuperação de peças de plástico e durabilidade da pintura.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Envie fotos da avaria",
                        "contactDesc": "Selecione a peça avariada e envie fotos para avaliação técnica. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Martelinho PDR",
                        "heroCardDesc": "Desamassamos sem danificar a pintura original do veículo",
                        "heroPanelTop": "Funileiros Seniores",
                        "heroPanelMain": "Reparos no Mesmo Dia",
                        "heroPanelBottom": "Estufa de Secagem Rápida UV",
                        "areaLabel": "Área danificada",
                        "areaOptions": {
                                    "martelinho": "Amassado Simples (Sem quebrar pintura)",
                                    "parachoque": "Parachoque Riscado / Quebrado",
                                    "risco": "Risco Profundo / Arranhão de Chave",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Prazo de liberação",
                        "urgencyOptions": {
                                    "hoje": "Preciso do carro pronto hoje",
                                    "semana": "Posso deixar alguns dias esta semana",
                                    "orcamento": "Apenas orçamento para seguro/particular"
                        },
                        "summaryLabel": "Detalhes da Batida ou Risco",
                        "summaryPlaceholder": "Informe se a peça é de plástico ou metal, se há peças quebradas que necessitam de troca e a marca/modelo do veículo.",
                        "serviceCards": [
                                    {
                                                "title": "Martelinho de Ouro",
                                                "description": "Técnica artesanal PDR para remover amassados mantendo a pintura de fábrica e valorização de mercado do carro."
                                    },
                                    {
                                                "title": "Pintura Express",
                                                "description": "Pintura localizada em parachoques ou paralamas utilizando estufa UV especial que permite entregar o carro pronto no mesmo dia."
                                    },
                                    {
                                                "title": "Micropintura de Riscos",
                                                "description": "Correção localizada de riscos profundos com aerógrafo, evitando a necessidade de repintar a peça inteira do veículo."
                                    }
                        ],
                        "locationBadge": "Onde Fica",
                        "locationTitle": "Conheça nossa oficina express.",
                        "locationDesc": "Infraestrutura moderna com laboratório de colorimetria computadorizada para acerto perfeito da cor do seu veículo.",
                        "faq": [
                                    [
                                                "Quanto tempo leva um martelinho de ouro?",
                                                "Amassados pequenos (como batidas de porta em estacionamento) levam de 1 a 3 horas para serem removidos por completo."
                                    ],
                                    [
                                                "A cor da pintura express fica idêntica?",
                                                "Sim. Usamos colorimetria computadorizada e espectrômetro para ler o tom exato atual do verniz do veículo, evitando manchas de tom diferente."
                                    ],
                                    [
                                                "Conserta parachoque de plástico quebrado?",
                                                "Sim. Realizamos solda plástica estrutural interna e acabamento externo, recuperando a peça original sem necessidade de comprar uma nova."
                                    ],
                                    [
                                                "Vocês atendem seguradoras?",
                                                "Sim, fazemos o laudo de vistoria de sinistro com fotos e enviamos a cotação aprovada para todas as principais seguradoras do mercado."
                                    ],
                                    [
                                                "A pintura tem garantia?",
                                                "Sim, oferecemos 1 ano de garantia total sobre a pintura contra descascamento ou perda de brilho do verniz aplicado."
                                    ]
                        ]
            },
            "en": {
                        "title": "Veloce Reparos | Express Body Shop & PDR",
                        "headerCta": "Get Repair Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Express Painting & PDR",
                        "heroTitle": "EXPRESS BODY SHOP AND HIGH <br><span class=\"text-gradient\">PRECISION PAINTLESS DENT REPAIR.</span>",
                        "heroDesc": "Paintless dent removal, fast bumper scratch repairs, and same-day paint touch-ups to restore your car.",
                        "heroSecondary": "Services",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about body repairs.",
                        "faqDesc": "Learn about delivery timeframes, plastic parts restoration, and paint durability warranties.",
                        "contactBadge": "First contact",
                        "contactTitle": "Send photos of the damage",
                        "contactDesc": "Select the damaged panel and upload photos for technical review. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "PDR Technique",
                        "heroCardDesc": "Remove dents without damaging the factory paint layer",
                        "heroPanelTop": "Senior Panel Beaters",
                        "heroPanelMain": "Same-Day Turnaround",
                        "heroPanelBottom": "Fast UV Curing Paint Booth",
                        "areaLabel": "Damaged area",
                        "areaOptions": {
                                    "martelinho": "Simple Dent (No paint cracks)",
                                    "parachoque": "Scratched / Cracked Bumper",
                                    "risco": "Deep Scratch / Key Scratch",
                                    "outro": "Other Damage"
                        },
                        "urgencyLabel": "Timeframe",
                        "urgencyOptions": {
                                    "hoje": "Need the car back today",
                                    "semana": "Can leave it for a few days this week",
                                    "orcamento": "Insurance or private quote only"
                        },
                        "summaryLabel": "Damage Details",
                        "summaryPlaceholder": "Specify if the panel is plastic or metal, if there are parts needing replacement, and the car make/model.",
                        "serviceCards": [
                                    {
                                                "title": "Paintless Dent Repair",
                                                "description": "Artisanal PDR technique to remove dents preserving the factory paint and retaining vehicle market value."
                                    },
                                    {
                                                "title": "Express Painting",
                                                "description": "Spot painting on bumpers or fenders using advanced UV ovens that allow same-day delivery."
                                    },
                                    {
                                                "title": "Scratch Touch-Up",
                                                "description": "Local correction of deep scratches with micro-spray guns, avoiding repainting the entire panel."
                                    }
                        ],
                        "locationBadge": "Our Shop",
                        "locationTitle": "Visit our express facility.",
                        "locationDesc": "Modern infrastructure with computer-aided paint matching system to ensure the exact color mix for your car.",
                        "faq": [
                                    [
                                                "How long does PDR take?",
                                                "Minor dents (like door dings from parking lots) take between 1 to 3 hours to be completely removed."
                                    ],
                                    [
                                                "Will the express paint match perfectly?",
                                                "Yes. We use digital spectrophotometers to analyze the exact shade of your paint, ensuring no color match issues."
                                    ],
                                    [
                                                "Can you repair cracked plastic bumpers?",
                                                "Yes. We perform structural plastic welding inside the bumper and cosmetic refinishing outside, avoiding expensive replacement parts."
                                    ],
                                    [
                                                "Do you work with insurance companies?",
                                                "Yes, we generate digital damage reports and submit quotes directly to all major car insurance providers."
                                    ],
                                    [
                                                "Does the paint carry a warranty?",
                                                "Yes, we offer a 1-year warranty on all paint repairs against peeling, bubbling, or gloss fading."
                                    ]
                        ]
            },
            "es": {
                        "title": "Veloce Reparos | Chapa y Pintura Express",
                        "headerCta": "Presupuesto de Reparación",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Reparo Rápido y Varillero",
                        "heroTitle": "CHAPA RÁPIDA Y VARILLERO <br><span class=\"text-gradient\">DE ALTA PRECISIÓN (PDR).</span>",
                        "heroDesc": "Eliminación de abolladuras sin pintar, retoques rápidos de pintura en parachoques y corrección de rayones en el mismo día.",
                        "heroSecondary": "Servicios",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre chapa rápida.",
                        "faqDesc": "Conoce más sobre plazos de entrega, restauración de parachoques de plástico y garantías.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Envía fotos del daño",
                        "contactDesc": "Selecciona la pieza dañada y envía fotos para la evaluación técnica. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Varillero PDR",
                        "heroCardDesc": "Quitamos abolladuras sin dañar la pintura original",
                        "heroPanelTop": "Chapistas Senior",
                        "heroPanelMain": "Reparación en el Mismo Día",
                        "heroPanelBottom": "Estufa de Secado UV Rápido",
                        "areaLabel": "Área dañada",
                        "areaOptions": {
                                    "martelinho": "Abolladura Simple (Sin dañar pintura)",
                                    "parachoque": "Parachoques Rayado / Roto",
                                    "risco": "Rayón Profundo / Rayonazo",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Plazo deseado",
                        "urgencyOptions": {
                                    "hoje": "Necesito el coche listo hoy",
                                    "semana": "Puedo dejarlo unos días esta semana",
                                    "orcamento": "Solo presupuesto para seguro/particular"
                        },
                        "summaryLabel": "Detalles del Golpe o Rayón",
                        "summaryPlaceholder": "Informa si la pieza es de plástico o metal, si requiere repuestos y la marca/modelo del coche.",
                        "serviceCards": [
                                    {
                                                "title": "Varillero PDR",
                                                "description": "Técnica artesanal para remover abolladuras manteniendo la pintura de fábrica y el valor del coche."
                                    },
                                    {
                                                "title": "Pintura Express",
                                                "description": "Pintura localizada en parachoques con secado rápido mediante estufa UV que permite entregar el coche en el día."
                                    },
                                    {
                                                "title": "Micropintura de Rayas",
                                                "description": "Corrección localizada de rayones profundos con aerógrafo, evitando repintar toda la pieza del coche."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Conoce nuestro taller express.",
                        "locationDesc": "Instalaciones con laboratorio de colorimetría computarizada para conseguir el color exacto del vehículo.",
                        "faq": [
                                    [
                                                "¿Cuánto tiempo toma quitar un golpe con varillas?",
                                                "Golpes pequeños (como portazos en estacionamientos) tardan entre 1 y 3 horas en repararse por completo."
                                    ],
                                    [
                                                "¿El color de la pintura express queda idéntico?",
                                                "Sí. Usamos colorimetría por espectrómetro digital para determinar el tono exacto del vehículo, evitando diferencias de color."
                                    ],
                                    [
                                                "¿Se reparan parachoques rotos?",
                                                "Sí. Realizamos soldadura estructural plástica interna y detallado exterior, recuperando la pieza original sin cambiarla."
                                    ],
                                    [
                                                "¿Trabajan con aseguradoras?",
                                                "Sí, realizamos presupuestos fotográficos digitales aprobados por las principales compañías de seguros del mercado."
                                    ],
                                    [
                                                "¿Tiene garantía la pintura?",
                                                "Sí, ofrecemos 1 año de garantía en todos los trabajos de pintura contra descascaramiento o pérdida de brillo del barniz."
                                    ]
                        ]
            }
},
        site_adegas: {
            "pt": {
                        "title": "Boutique Adega | Vinhos e Bebidas Premium",
                        "headerCta": "Consultar Rótulos",
                        "navServicesLabel": "Vinhos",
                        "heroBadge": "Vinhos e Destilados Exclusivos",
                        "heroTitle": "RÓTULOS SELECIONADOS E KITS <br><span class=\"text-gradient\">GOURMET DE PRESENTES.</span>",
                        "heroDesc": "Curadoria exclusiva de vinhos tintos, brancos, espumantes nacionais e importados, kits de gin artesanal e tábuas de frios especiais.",
                        "heroSecondary": "Catálogo",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas",
                        "faqTitle": "Perguntas frequentes sobre nossa adega.",
                        "faqDesc": "Tire suas dúvidas sobre harmonização de vinhos, frete expresso para presentes e montagem de tábuas de frios.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Escolha o seu rótulo",
                        "contactDesc": "Selecione o tipo de bebida ou kit de presente. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Adega Climatizada",
                        "heroCardDesc": "Vinhos armazenados na temperatura e umidade corretas",
                        "heroPanelTop": "Sommelier",
                        "heroPanelMain": "Curadoria Especial",
                        "heroPanelBottom": "Embalagens Luxuosas de Presente",
                        "areaLabel": "Tipo de produto",
                        "areaOptions": {
                                    "vinho": "Vinho Tinto / Branco / Rosé",
                                    "espumante": "Espumante / Champagne",
                                    "kit_gin": "Kit de Gin / Destilados Premium",
                                    "frios": "Tábua de Frios / Acompanhamentos"
                        },
                        "urgencyLabel": "Finalidade da compra",
                        "urgencyOptions": {
                                    "consumo": "Para consumo próprio (Hoje)",
                                    "presente": "Para presentear alguém especial",
                                    "evento": "Bebidas para jantares / Comemorações"
                        },
                        "summaryLabel": "Preferências de Uva ou País",
                        "summaryPlaceholder": "Informe suas preferências (ex: Cabernet Sauvignon, Malbec, vinhos secos ou suaves) ou detalhes para o cartão de presente.",
                        "serviceCards": [
                                    {
                                                "title": "Vinhos Importados",
                                                "description": "Seleção das melhores vinícolas da Argentina, Chile, Portugal, Itália e França para paladares exigentes."
                                    },
                                    {
                                                "title": "Kits de Gin & Drinks",
                                                "description": "Caixas de madeira personalizadas contendo garrafas premium, taças exclusivas e especiarias selecionadas."
                                    },
                                    {
                                                "title": "Tábuas de Frios",
                                                "description": "Acompanhamentos ideais com queijos finos, salames italianos, geleias artesanais e castanhas frescas."
                                    }
                        ],
                        "locationBadge": "Onde Fica",
                        "locationTitle": "Visite nossa adega física.",
                        "locationDesc": "Venha conversar com nosso sommelier e conhecer nossa área climatizada repleta de rótulos raros.",
                        "faq": [
                                    [
                                                "Como escolher o vinho certo para presente?",
                                                "Nosso sommelier está disponível online para sugerir opções com base no perfil de quem vai receber ou no prato com o qual o vinho será harmonizado."
                                    ],
                                    [
                                                "Qual o tempo de entrega para presentes?",
                                                "Temos frete expresso de até 2 horas para kits de presente e garrafas em embalagens luxuosas de MDF em nossa região comercial."
                                    ],
                                    [
                                                "Vocês entregam o vinho já gelado?",
                                                "Sim! Se solicitado no fechamento do pedido, enviamos espumantes e vinhos brancos na temperatura ideal para consumo imediato."
                                    ],
                                    [
                                                "Como conservar o vinho após aberto?",
                                                "Recomendamos fechar a garrafa com uma tampa a vácuo (vacu vin) e mantê-la na geladeira, consumindo em até 3 dias para preservar o sabor."
                                    ],
                                    [
                                                "Vocês têm kits corporativos para empresas?",
                                                "Sim, montamos caixas de presentes personalizadas com a marca da sua empresa para datas festivas e brindes corporativos de fim de ano."
                                    ]
                        ]
            },
            "en": {
                        "title": "Boutique Adega | Premium Wines & Spirits",
                        "headerCta": "Browse Wines",
                        "navServicesLabel": "Wines",
                        "heroBadge": "Exclusive Wines & Spirits",
                        "heroTitle": "SELECTED WINE LABELS AND <br><span class=\"text-gradient\">GOURMET GIFT BOXES.</span>",
                        "heroDesc": "Exclusive curation of red, white, and sparkling wines, artisanal gin kits, and custom charcuterie boards for gifting or cellaring.",
                        "heroSecondary": "Catalogue",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Frequently asked questions about our cellar.",
                        "faqDesc": "Get answers about wine pairings, express gift delivery, and custom cheese boards.",
                        "contactBadge": "First contact",
                        "contactTitle": "Select your bottle",
                        "contactDesc": "Choose your beverage type or gift set. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Climatized Cellar",
                        "heroCardDesc": "Wines stored under ideal temperature and humidity",
                        "heroPanelTop": "Sommelier",
                        "heroPanelMain": "Special Curation",
                        "heroPanelBottom": "Luxury Gift Wrapping",
                        "areaLabel": "Product type",
                        "areaOptions": {
                                    "vinho": "Red / White / Rosé Wine",
                                    "espumante": "Sparkling Wine / Champagne",
                                    "kit_gin": "Premium Gin / Spirits Gift Set",
                                    "frios": "Charcuterie Board / Sides"
                        },
                        "urgencyLabel": "Purchase purpose",
                        "urgencyOptions": {
                                    "consumo": "Personal consumption (Today)",
                                    "presente": "To gift someone special",
                                    "evento": "Beverages for dinners / Celebrations"
                        },
                        "summaryLabel": "Grape or Country Preferences",
                        "summaryPlaceholder": "Specify your preferences (e.g., Cabernet Sauvignon, Malbec, dry or sweet wines) or gift card message details.",
                        "serviceCards": [
                                    {
                                                "title": "Imported Wines",
                                                "description": "Selection of the finest wineries from Argentina, Chile, Portugal, Italy, and France for demanding palates."
                                    },
                                    {
                                                "title": "Gin & Drink Kits",
                                                "description": "Custom wooden boxes containing premium bottles, exclusive glassware, and selected botanicals."
                                    },
                                    {
                                                "title": "Charcuterie Boards",
                                                "description": "Ideal pairings featuring fine cheeses, Italian salami, gourmet jams, and roasted nuts."
                                    }
                        ],
                        "locationBadge": "Showroom",
                        "locationTitle": "Visit our boutique cellar.",
                        "locationDesc": "Come chat with our sommelier and explore our temperature-controlled vault filled with rare labels.",
                        "faq": [
                                    [
                                                "How do I choose the right wine for a gift?",
                                                "Our online sommelier can suggest the best options based on the recipient's taste profile or the meal it will be paired with."
                                    ],
                                    [
                                                "What is the delivery time for gifts?",
                                                "We offer express 2-hour shipping for gift sets and bottles wrapped in premium wooden boxes within our business area."
                                    ],
                                    [
                                                "Do you deliver white wine cold?",
                                                "Yes! Upon request, we ship sparkling and white wines chilled at the ideal temperature for immediate serving."
                                    ],
                                    [
                                                "How should I store opened wine?",
                                                "We recommend sealing the bottle with a vacuum stopper (vacu vin) and keeping it in the fridge, consuming it within 3 days to preserve notes."
                                    ],
                                    [
                                                "Do you offer corporate gift packages?",
                                                "Yes, we assemble custom gift boxes branded with your logo for corporate events, holidays, and year-end celebrations."
                                    ]
                        ]
            },
            "es": {
                        "title": "Boutique Adega | Vinos y Licores Premium",
                        "headerCta": "Consultar Botellas",
                        "navServicesLabel": "Vinos",
                        "heroBadge": "Vinos y Licores Exclusivos",
                        "heroTitle": "BOTELLAS SELECCIONADAS Y KITS <br><span class=\"text-gradient\">GOURMET DE REGALO.</span>",
                        "heroDesc": "Curaduría exclusiva de vinos tintos, blancos, espumosos nacionales e importados, kits de ginebra artesanal y tablas de embutidos.",
                        "heroSecondary": "Catálogo",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre nuestra bodega.",
                        "faqDesc": "Resuelva sus dudas sobre maridaje, envíos urgentes de regalos y montaje de tablas de quesos.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Elige tu botella",
                        "contactDesc": "Selecciona el tipo de bebida o kit de regalo. El resumen va directo a nuestro WhatsApp.",
                        "heroCardTitle": "Bodega Climatizada",
                        "heroCardDesc": "Vinos almacenados a temperatura y humedad óptimas",
                        "heroPanelTop": "Sommelier",
                        "heroPanelMain": "Curaduría Especial",
                        "heroPanelBottom": "Empaques de Regalo Lujosos",
                        "areaLabel": "Tipo de producto",
                        "areaOptions": {
                                    "vinho": "Vino Tinto / Blanco / Rosado",
                                    "espumante": "Espumoso / Champagne",
                                    "kit_gin": "Kit de Ginebra / Destilados Premium",
                                    "frios": "Tabla de Embutidos / Acompañamientos"
                        },
                        "urgencyLabel": "Finalidad de la compra",
                        "urgencyOptions": {
                                    "consumo": "Para consumo propio (Hoy)",
                                    "presente": "Para regalar a alguien especial",
                                    "evento": "Bebidas para cenas / Celebraciones"
                        },
                        "summaryLabel": "Preferencias de Uva o País",
                        "summaryPlaceholder": "Informa tus preferencias (ej: Cabernet Sauvignon, Malbec, secos o dulces) o dedicatoria para el regalo.",
                        "serviceCards": [
                                    {
                                                "title": "Vinos Importados",
                                                "description": "Selección de las mejores bodegas de Argentina, Chile, Portugal, Italia y Francia para paladares exigentes."
                                    },
                                    {
                                                "title": "Kits de Ginebra y Tragos",
                                                "description": "Cajas de madera personalizadas con botellas premium, copas exclusivas y especias seleccionadas."
                                    },
                                    {
                                                "title": "Tablas de Embutidos",
                                                "description": "Acompañamientos ideales con quesos finos, salames italianos, mermeladas artesanales y frutos secos."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Visita nuestra bodega física.",
                        "locationDesc": "Ven a conversar con nuestro sommelier y conoce nuestra zona climatizada con botellas exclusivas.",
                        "faq": [
                                    [
                                                "¿Cómo elijo el vino ideal para un regalo?",
                                                "Nuestro sommelier en línea está disponible para sugerir opciones según el perfil de la persona o la comida con la que se maridará."
                                    ],
                                    [
                                                "¿Cuál es el tiempo de envío para regalos?",
                                                "Ofrecemos envío exprés de hasta 2 horas para kits de regalo en empaques de madera dentro de nuestra zona comercial."
                                    ],
                                    [
                                                "¿Envían el vino ya frío?",
                                                "¡Sí! Si se solicita al confirmar el pedido, enviamos los espumosos y vinos blancos a la temperatura ideal para beber."
                                    ],
                                    [
                                                "¿Cómo conservo el vino abierto?",
                                                "Recomendamos cerrar la botella con un tapón de vacío y mantenerla en el refrigerador, consumiéndola en un máximo de 3 días."
                                    ],
                                    [
                                                "¿Tienen kits corporativos para empresas?",
                                                "Sí, armamos cajas de regalo personalizadas con la marca de tu empresa para fechas festivas y regalos corporativos."
                                    ]
                        ]
            }
},
        site_insulfilm: {
            "pt": {
                        "title": "SolarFilm | Películas de Controle Solar e Segurança",
                        "headerCta": "Orçamento de Película",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Proteção Térmica e Privacidade",
                        "heroTitle": "REDUZA O CALOR E AUMENTE A <br><span class=\"text-gradient\">SEGURANÇA DOS SEUS VIDROS.</span>",
                        "heroDesc": "Aplicação especializada de películas de controle solar (nano cerâmica), espelhadas e antivandalismo para residências, escritórios e vitrines.",
                        "heroSecondary": "Películas",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas",
                        "faqTitle": "O que você precisa saber sobre películas.",
                        "faqDesc": "Tire suas dúvidas sobre durabilidade, retenção de calor, proteção UV e normas de visibilidade residencial.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Calcule seu projeto",
                        "contactDesc": "Selecione o tipo de película e informe a quantidade de vidros. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Nano Cerâmica",
                        "heroCardDesc": "Até 95% de retenção de raios infravermelhos calor",
                        "heroPanelTop": "Instaladores Próprios",
                        "heroPanelMain": "Aplicação Sem Bolhas",
                        "heroPanelBottom": "Garantia de 5 a 10 Anos contra Desbotamento",
                        "areaLabel": "Tipo de película",
                        "areaOptions": {
                                    "termica": "Película Térmica (Nano Cerâmica / Redução calor)",
                                    "privacidade": "Película Fumê / Espelhada / Jateada",
                                    "seguranca": "Película Antivandalismo (Reforço vidro)",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Quantidade de janelas/portas",
                        "urgencyOptions": {
                                    "pequeno": "Poucos vidros (1 a 3 portas/janelas)",
                                    "medio": "Residencial Médio (Sacada ou casa completa)",
                                    "grande": "Comercial / Fachada completa de empresa"
                        },
                        "summaryLabel": "Medidas Estimadas",
                        "summaryPlaceholder": "Informe a largura e altura aproximada dos vidros (ex: sacada de 3m x 2m) e qual o principal objetivo (privacidade, reduzir calor ou segurança).",
                        "serviceCards": [
                                    {
                                                "title": "Películas Térmicas",
                                                "description": "Alta tecnologia em nano cerâmica que bloqueia o calor solar sem escurecer o ambiente, preservando a vista natural."
                                    },
                                    {
                                                "title": "Privacidade & Estética",
                                                "description": "Opções jateadas, fumês (G5, G20, G35) e espelhadas que impedem a visão externa, garantindo total privacidade interna."
                                    },
                                    {
                                                "title": "Películas de Segurança",
                                                "description": "Camada de poliuretano super resistente (antivandalismo PS4 a PS12) que evita o estilhaçamento do vidro em caso de tentativa de invasão."
                                    }
                        ],
                        "locationBadge": "Onde Fica",
                        "locationTitle": "Atendimento local e visitas técnicas.",
                        "locationDesc": "Agendamos visitas técnicas com catálogo de amostras para você testar a retenção de calor antes de instalar.",
                        "faq": [
                                    [
                                                "Qual a diferença da película de nano cerâmica?",
                                                "Diferente do fumê comum que apenas escurece, a nano cerâmica bloqueia os raios infravermelhos (calor) e UV mantendo o vidro transparente se desejado, reduzindo o calor em até 80%."
                                    ],
                                    [
                                                "A película fica com bolhas com o tempo?",
                                                "Não se for aplicada corretamente por profissionais. Damos garantia total contra bolhas, descolamento ou desbotamento precoce."
                                    ],
                                    [
                                                "Como limpar os vidros após a aplicação?",
                                                "Após o período de cura (72h), use apenas água e sabão neutro com pano macio. Nunca use álcool, produtos ácidos ou espátulas rígidas."
                                    ],
                                    [
                                                "O insulfilm residencial pode ser aplicado por dentro?",
                                                "Sim, na maioria absoluta dos casos a instalação é feita pela face interna do vidro, protegendo a película das intempéries da chuva e poluição."
                                    ],
                                    [
                                                "Quanto tempo dura a instalação de uma sacada?",
                                                "Uma instalação de sacada de tamanho médio leva cerca de 2 a 4 horas para ser concluída com acabamento perfeito nas bordas."
                                    ]
                        ]
            },
            "en": {
                        "title": "SolarFilm | Heat Control & Safety Window Films",
                        "headerCta": "Get Film Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Heat Control & Privacy",
                        "heroTitle": "REDUCE HEAT AND INCREASE THE <br><span class=\"text-gradient\">SAFETY OF YOUR WINDOWS.</span>",
                        "heroDesc": "Specialized installation of solar control (nano ceramic), mirrored, and security window films for homes, offices, and retail windows.",
                        "heroSecondary": "Window Films",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "What you need to know about window films.",
                        "faqDesc": "Get answers about durability, heat rejection, UV protection, and home visibility guidelines.",
                        "contactBadge": "First contact",
                        "contactTitle": "Calculate your project",
                        "contactDesc": "Select your film type and specify window count. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Nano Ceramic",
                        "heroCardDesc": "Up to 95% infrared heat rejection",
                        "heroPanelTop": "In-House Crew",
                        "heroPanelMain": "Bubble-Free Application",
                        "heroPanelBottom": "5 to 10 Years Warranty Against Fading",
                        "areaLabel": "Film type",
                        "areaOptions": {
                                    "termica": "Thermal Film (Nano Ceramic / Heat reduction)",
                                    "privacidade": "Tinted / Mirrored / Frosted Film",
                                    "seguranca": "Security Film (Anti-shatter glass reinforcement)",
                                    "outro": "Other Service"
                        },
                        "urgencyLabel": "Window count",
                        "urgencyOptions": {
                                    "pequeno": "Few windows (1 to 3 panels)",
                                    "medio": "Medium Residential (Balcony or full home)",
                                    "grande": "Commercial / Full office building facade"
                        },
                        "summaryLabel": "Estimated measurements",
                        "summaryPlaceholder": "Specify estimated width and height (e.g., balcony 3m x 2m) and your primary goal (privacy, heat reduction, or security).",
                        "serviceCards": [
                                    {
                                                "title": "Thermal Films",
                                                "description": "High-tech nano ceramic window films blocking solar heat without darkening the room, preserving your natural view."
                                    },
                                    {
                                                "title": "Privacy & Aesthetics",
                                                "description": "Frosted, tinted (G5, G20, G35), and mirrored options blocking outside views, ensuring total indoor privacy."
                                    },
                                    {
                                                "title": "Security Films",
                                                "description": "Heavy-duty polyurethane layer (safety film PS4 to PS12) preventing glass shattering in case of break-in attempts."
                                    }
                        ],
                        "locationBadge": "Showroom",
                        "locationTitle": "Local service and technical visits.",
                        "locationDesc": "We schedule home visits with catalog samples so you can test heat rejection before installation.",
                        "faq": [
                                    [
                                                "What is the benefit of nano ceramic film?",
                                                "Unlike regular tint which only darkens, nano ceramic blocks infrared rays (heat) and UV while keeping glass transparent if desired, reducing heat by up to 80%."
                                    ],
                                    [
                                                "Does the film bubble over time?",
                                                "No, not if applied correctly by certified technicians. We offer a full warranty against bubbles, peeling, or fading."
                                    ],
                                    [
                                                "How do I clean my windows after film installation?",
                                                "After the curing period (72 hours), use only water and mild soap with a soft cloth. Never use alcohol, acidic chemicals, or scrapers."
                                    ],
                                    [
                                                "Is residential film applied from the inside?",
                                                "Yes, in almost all cases the installation is done on the internal surface of the glass, protecting the film from rain and pollution."
                                    ],
                                    [
                                                "How long does a balcony installation take?",
                                                "An average-sized balcony installation takes about 2 to 4 hours to complete with perfect edge cuts."
                                    ]
                        ]
            },
            "es": {
                        "title": "SolarFilm | Láminas de Control Solar y Seguridad",
                        "headerCta": "Presupuesto de Láminas",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Protección Térmica y Privacidad",
                        "heroTitle": "REDUCE EL CALOR Y AUMENTA LA <br><span class=\"text-gradient\">SEGURIDAD DE TUS VIDRIOS.</span>",
                        "heroDesc": "Aplicación de láminas de control solar (nanocerámica), espejo y seguridad para residencias, oficinas y locales comerciales.",
                        "heroSecondary": "Láminas",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Lo que necesitas saber sobre láminas.",
                        "faqDesc": "Resuelva sus dudas sobre durabilidad, retención de calor, protección UV y garantías.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Calcula tu proyecto",
                        "contactDesc": "Selecciona el tipo de lámina e informa la cantidad de vidrios. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Nanocerámica",
                        "heroCardDesc": "Hasta 95% de retención de calor infrarrojo",
                        "heroPanelTop": "Instaladores Propios",
                        "heroPanelMain": "Aplicación Sin Burbujas",
                        "heroPanelBottom": "Garantía de 5 a 10 Años contra Decoloración",
                        "areaLabel": "Tipo de lámina",
                        "areaOptions": {
                                    "termica": "Lámina Térmica (Nanocerámica / Aislamiento térmico)",
                                    "privacidade": "Lámina Ahumada / Espejo / Esmerilada",
                                    "seguranca": "Lámina de Seguridad (Antivandálica PS4 a PS12)",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Cantidad de ventanas",
                        "urgencyOptions": {
                                    "pequeno": "Pocos vidrios (1 a 3 ventanas)",
                                    "medio": "Residencial Medio (Terraza o piso completo)",
                                    "grande": "Comercial / Fachada de oficinas completa"
                        },
                        "summaryLabel": "Medidas Estimadas",
                        "summaryPlaceholder": "Informa el ancho y alto aproximado de los cristales (ej: terraza de 3m x 2m) y tu objetivo principal.",
                        "serviceCards": [
                                    {
                                                "title": "Láminas Térmicas",
                                                "description": "Tecnología en nanocerámica que bloquea el calor solar sin oscurecer las habitaciones, preservando la vista exterior."
                                    },
                                    {
                                                "title": "Privacidad y Estética",
                                                "description": "Opciones esmeriladas, ahumadas e industriales tipo espejo que bloquean la vista exterior, asegurando tu privacidad."
                                    },
                                    {
                                                "title": "Láminas de Seguridad",
                                                "description": "Capa ultra resistente de poliuretano que evita que el vidrio se rompa en fragmentos en caso de intentos de robo."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Asistencia local y visitas técnicas.",
                        "locationDesc": "Programamos visitas con catálogo de muestras para que compruebes el bloqueo de calor antes de la instalación.",
                        "faq": [
                                    [
                                                "¿Cuál es la diferencia de la nanocerámica?",
                                                "A diferencia de las láminas tintadas comunes, la nanocerámica bloquea el calor infrarrojo sin oscurecer necesariamente el vidrio, reduciendo el calor hasta un 80%."
                                    ],
                                    [
                                                "¿La lámina se llena de burbujas?",
                                                "No, si es instalada por profesionales. Garantizamos que no aparecerán burbujas ni se despegará la lámina con el paso del tiempo."
                                    ],
                                    [
                                                "¿Cómo limpio los vidrios tras la instalación?",
                                                "Transcurrido el periodo de curado (72h), limpia solo con agua y jabón neutro con paño suave. No uses productos ácidos ni herramientas duras."
                                    ],
                                    [
                                                "¿Se instala por dentro o por fuera?",
                                                "En casi todos los casos la instalación se realiza en la cara interna del vidrio, protegiendo la lámina del clima y la contaminación."
                                    ],
                                    [
                                                "¿Cuánto dura la instalación en una terraza?",
                                                "Instalar láminas en una terraza de tamaño medio toma alrededor de 2 a 4 horas con acabados perfectos en los bordes."
                                    ]
                        ]
            }
},
        site_automacao: {
            "pt": {
                        "title": "Smart Automation | Automação Residencial e Industrial",
                        "headerCta": "Orçamento de Automação",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Sistemas de Automação Inteligente",
                        "heroTitle": "SUA CASA E SUA EMPRESA NO <br><span class=\"text-gradient\">CONTROLE DA SUA MÃO.</span>",
                        "heroDesc": "Projetos de automação residencial de luxo e controle industrial. Iluminação inteligente, som integrado, climatização e segurança.",
                        "heroSecondary": "Nossos Projetos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas frequentes sobre automação.",
                        "faqDesc": "Tire suas dúvidas sobre integração de sistemas, controle por voz (Alexa/Siri) e cabeamento necessário.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Fale sobre a sua necessidade",
                        "contactDesc": "Selecione o tipo de automação e descreva seu ambiente. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Casa Inteligente",
                        "heroCardDesc": "Controle iluminação, persianas e áudio com um clique",
                        "heroPanelTop": "Engenharia Própria",
                        "heroPanelMain": "Integração Completa",
                        "heroPanelBottom": "Compatível com Alexa, Google Home e Apple Homekit",
                        "areaLabel": "Área de interesse",
                        "areaOptions": {
                                    "residencial": "Automação Residencial (Smart Home)",
                                    "industrial": "Automação Industrial / Painéis",
                                    "audio_video": "Som Ambiente / Home Theater",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Estágio do local",
                        "urgencyOptions": {
                                    "planta": "Em fase de projeto / Planta",
                                    "reforma": "Em reforma / Fiação elétrica",
                                    "pronto": "Ambiente pronto / Acabado"
                        },
                        "summaryLabel": "Detalhes dos Ambientes",
                        "summaryPlaceholder": "Informe quais cômodos deseja automatizar (ex: sala, área gourmet, casa inteira) e se já possui fiação preparada.",
                        "serviceCards": [
                                    {
                                                "title": "Iluminação & Cenários",
                                                "description": "Controle a intensidade e a cor das luzes por painéis de parede, voz ou celular, criando cenários perfeitos para cada momento."
                                    },
                                    {
                                                "title": "Som e Cinema (Home)",
                                                "description": "Sistemas de som embutido no gesso para áreas gourmet e salas de cinema com controle independente por ambiente (Multiroom)."
                                    },
                                    {
                                                "title": "Controle de Acessos",
                                                "description": "Fechaduras biométricas, portões inteligentes e controle de persianas motorizadas integradas no mesmo aplicativo."
                                    }
                        ],
                        "locationBadge": "Showroom",
                        "locationTitle": "Venha testar a tecnologia pessoalmente.",
                        "locationDesc": "Visite nosso showroom tecnológico para experimentar o controle de iluminação, cortinas e áudio em tempo real.",
                        "faq": [
                                    [
                                                "Precisa quebrar paredes para automatizar?",
                                                "Para casas prontas, utilizamos tecnologias de comunicação sem fio (Zigbee/Wi-Fi) que exigem zero quebra de paredes. Para obras novas, planejamos o cabeamento estruturado ideal."
                                    ],
                                    [
                                                "Quais aplicativos de controle vocês usam?",
                                                "Integramos os sistemas com as plataformas líderes mundiais como Home Assistant, Control4 e Tuya, permitindo controle nativo pela Siri, Alexa e Google Assistant."
                                    ],
                                    [
                                                "Se a internet cair, a casa para de funcionar?",
                                                "Não. Toda a automação local (interruptores, automações automáticas e sensores) continua operando normalmente através do hub local, apenas o acesso remoto externo fica temporário off-line."
                                    ],
                                    [
                                                "Vocês automatizam empresas e indústrias?",
                                                "Sim. Desenvolvemos painéis de comando CLP, integração de sensores de produção e automação de iluminação e ar-condicionado comercial para economia de energia."
                                    ],
                                    [
                                                "Qual a garantia dos equipamentos?",
                                                "Oferecemos 1 ano de garantia de instalação e até 3 anos de garantia direta dos fabricantes nos módulos de automação homologados."
                                    ]
                        ]
            },
            "en": {
                        "title": "Smart Automation | Home & Industrial Controls",
                        "headerCta": "Get Automation Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Intelligent Automation Systems",
                        "heroTitle": "YOUR HOME AND YOUR BUSINESS IN <br><span class=\"text-gradient\">THE PALM OF YOUR HAND.</span>",
                        "heroDesc": "Luxury smart home projects and industrial systems. Intelligent lighting, multiroom audio, smart HVAC, and connected security.",
                        "heroSecondary": "Our Projects",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Frequently asked questions about smart homes.",
                        "faqDesc": "Get answers about systems integration, voice control (Alexa/Siri), and wiring requirements.",
                        "contactBadge": "First contact",
                        "contactTitle": "Describe your automation needs",
                        "contactDesc": "Select your automation type and specify your space. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Smart Home",
                        "heroCardDesc": "Control lighting, blinds, and audio with one tap",
                        "heroPanelTop": "In-House Engineering",
                        "heroPanelMain": "Seamless Integration",
                        "heroPanelBottom": "Compatible with Alexa, Google Home, and Apple Homekit",
                        "areaLabel": "Area of interest",
                        "areaOptions": {
                                    "residencial": "Smart Home / Residential",
                                    "industrial": "Industrial Automation / Panels",
                                    "audio_video": "Multiroom Audio / Home Theater",
                                    "outro": "Other Service"
                        },
                        "urgencyLabel": "Property stage",
                        "urgencyOptions": {
                                    "planta": "Blueprint / Design stage",
                                    "reforma": "Under construction / Wiring stage",
                                    "pronto": "Finished property / Ready"
                        },
                        "summaryLabel": "Spaces and details",
                        "summaryPlaceholder": "Specify which rooms you want to automate (e.g., living room, outdoor area, entire house) and if wiring is ready.",
                        "serviceCards": [
                                    {
                                                "title": "Lighting & Scenes",
                                                "description": "Control lights brightness and color via touch panels, voice, or smartphone, creating perfect scenarios for every moment."
                                    },
                                    {
                                                "title": "Multiroom & Theater",
                                                "description": "In-ceiling premium audio systems for outdoor areas and home theater setups with independent volume control per room."
                                    },
                                    {
                                                "title": "Access & Blind Control",
                                                "description": "Biometric smart locks, intelligent garage gates, and motorized blinds integrated into a single user-friendly app."
                                    }
                        ],
                        "locationBadge": "Showroom",
                        "locationTitle": "Come test the technology in person.",
                        "locationDesc": "Visit our tech showroom to experience lighting controls, smart curtains, and theater setups in real time.",
                        "faq": [
                                    [
                                                "Do you need to break walls for installation?",
                                                "For finished homes, we use wireless communication protocols (Zigbee/Wi-Fi) requiring zero masonry work. For new construction, we design structured cabling templates."
                                    ],
                                    [
                                                "Which control apps do you integrate with?",
                                                "We integrate with world-class smart systems like Home Assistant, Control4, and Tuya, allowing native controls via Siri, Alexa, and Google Assistant."
                                    ],
                                    [
                                                "If my internet goes down, will the house stop working?",
                                                "No. All local automation controls (switches, automatic routines, and sensors) continue to run normally via the local smart hub. Only remote access goes off-line."
                                    ],
                                    [
                                                "Do you automate offices and factories?",
                                                "Yes. We design PLC panels, production sensors integration, and commercial lighting/HVAC automation systems for maximum energy savings."
                                    ],
                                    [
                                                "What is the warranty period?",
                                                "We offer a 1-year installation warranty and up to 3 years of direct manufacturer warranty on all certified automation modules."
                                    ]
                        ]
            },
            "es": {
                        "title": "Smart Automation | Automatización Residencial e Industrial",
                        "headerCta": "Presupuesto de Domótica",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Sistemas de Automatización Inteligente",
                        "heroTitle": "TU HOGAR Y TU EMPRESA BAJO <br><span class=\"text-gradient\">EL CONTROL DE TU MANO.</span>",
                        "heroDesc": "Proyectos de domótica residencial de lujo y control industrial. Iluminación inteligente, audio multiroom, climatización y seguridad.",
                        "heroSecondary": "Proyectos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre domótica.",
                        "faqDesc": "Resuelva sus dudas sobre integración de sistemas, control por voz (Alexa/Siri) y cableado necesario.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Cuéntanos sobre tu necesidad",
                        "contactDesc": "Selecciona el tipo de automatización y describe tu espacio. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Hogar Inteligente",
                        "heroCardDesc": "Controla luces, persianas y audio con un solo toque",
                        "heroPanelTop": "Ingeniería Propia",
                        "heroPanelMain": "Integración Completa",
                        "heroPanelBottom": "Compatible con Alexa, Google Home y Apple Homekit",
                        "areaLabel": "Tipo de servicio",
                        "areaOptions": {
                                    "residencial": "Automatización Residencial (Domótica)",
                                    "industrial": "Automatización Industrial / Tableros",
                                    "audio_video": "Sonido Ambiente / Home Cinema",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Estado de la obra",
                        "urgencyOptions": {
                                    "planta": "En fase de proyecto / Plano",
                                    "reforma": "En reforma / Cableado eléctrico",
                                    "pronto": "Ambiente listo / Terminado"
                        },
                        "summaryLabel": "Detalles de los Ambientes",
                        "summaryPlaceholder": "Informa qué habitaciones deseas automatizar (ej: salón, terraza, toda la casa) y si ya cuentas con cableado preparado.",
                        "serviceCards": [
                                    {
                                                "title": "Iluminación y Escenas",
                                                "description": "Controla la intensidad y el color de las luces por paneles, voz o móvil, creando escenarios perfectos para cada momento."
                                    },
                                    {
                                                "title": "Audio y Cine en Casa",
                                                "description": "Sistemas de sonido empotrados en el techo para zonas comunes y salas de cine con control independiente por habitación."
                                    },
                                    {
                                                "title": "Control de Accesos",
                                                "description": "Cerraduras biométricas, portones inteligentes y control de persianas integradas en la misma aplicación."
                                    }
                        ],
                        "locationBadge": "Showroom",
                        "locationTitle": "Ven a probar la tecnología en persona.",
                        "locationDesc": "Visita nuestra exposición tecnológica para experimentar el control de luces, cortinas y audio en tiempo real.",
                        "faq": [
                                    [
                                                "¿Es necesario romper paredes para instalar?",
                                                "Para casas terminadas, utilizamos tecnologías inalámbricas (Zigbee/Wi-Fi) que no requieren obras en paredes. En obras nuevas, planificamos el cableado estruturado ideal."
                                    ],
                                    [
                                                "¿Qué aplicaciones de control utilizan?",
                                                "Integramos con plataformas mundiales como Home Assistant, Control4 y Tuya, permitiendo control nativo por Siri, Alexa y Google Assistant."
                                    ],
                                    [
                                                "¿Si cae el internet, la casa deja de funcionar?",
                                                "No. Todo el control local de interruptores, sensores y rutinas predefinidas sigue funcionando de manera normal mediante el hub local."
                                    ],
                                    [
                                                "¿Automatizan oficinas e industrias?",
                                                "Sí. Diseñamos tableros de control PLC, integración de sensores y automatización de sistemas de clima comercial para ahorro energético."
                                    ],
                                    [
                                                "¿Qué garantía tienen los equipos?",
                                                "Ofrecemos 1 año de garantía en la instalación y hasta 3 años de garantía del fabricante en los módulos homologados."
                                    ]
                        ]
            }
},
        site_lavagem_pressao: {
            "pt": {
                        "title": "SuperWap | Lavagem de Alta Pressão e Restauração de Pisos",
                        "headerCta": "Orçamento de Limpeza",
                        "navServicesLabel": "Limpeza",
                        "heroBadge": "Limpeza Pesada de Fachadas e Calçadas",
                        "heroTitle": "RESTAURAÇÃO PROFISSIONAL DE PISOS, <br><span class=\"text-gradient\">TELHADOS E CALÇADAS.</span>",
                        "heroDesc": "Remoção instantânea de limo, sujeira pesada e manchas químicas pós-obra. Devolvemos a cor original das pedras e fachadas de imediato.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas sobre lavagem de alta pressão.",
                        "faqDesc": "Tire suas dúvidas sobre conservação de pedras, gasto de água e remoção de sujeiras extremas.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Descreva sua área encardida",
                        "contactDesc": "Selecione o tipo de piso e informe o tamanho da área. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Hidrojateamento",
                        "heroCardDesc": "Lavadoras profissionais com pressão regulada para cada tipo de piso",
                        "heroPanelTop": "Equipamentos Próprios",
                        "heroPanelMain": "Remoção de Manchas",
                        "heroPanelBottom": "Químicos Biodegradáveis Regulamentados",
                        "areaLabel": "Tipo de piso/superfície",
                        "areaOptions": {
                                    "pedra": "Pedras Naturais (Miracema, São Tomé, Ardósia)",
                                    "telhado": "Telhado / Fachada de Casa ou Prédio",
                                    "pos_obra": "Limpeza Pós-Obra (Cimento / Tinta)",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Metragem estimada",
                        "urgencyOptions": {
                                    "pequeno": "Área pequena (até 50m²)",
                                    "medio": "Área média (50m² a 150m²)",
                                    "grande": "Área grande (acima de 150m²)"
                        },
                        "summaryLabel": "Estado da Sujeira",
                        "summaryPlaceholder": "Informe se há acúmulo de limo verde escorregadio, manchas de óleo/tinta de obra ou sujeira antiga incrustada.",
                        "serviceCards": [
                                    {
                                                "title": "Limpeza de Calçadas",
                                                "description": "Remoção profunda de lodo e terra acumulada em pedras rústicas e calçadas de concreto, deixando com aspecto novo."
                                    },
                                    {
                                                "title": "Hidrojateamento de Telhados",
                                                "description": "Lavagem com bicos rotativos que eliminam fungos e poluição das telhas sem risco de infiltrações de água."
                                    },
                                    {
                                                "title": "Limpeza Pós-Obra",
                                                "description": "Químicos específicos para desincrustar respingos de cimento, argamassa e tintas residuais sem danificar o piso novo."
                                    }
                        ],
                        "locationBadge": "Onde Atendemos",
                        "locationTitle": "Atendimento rápido na sua região.",
                        "locationDesc": "Levamos toda a estrutura de mangueiras, geradores e químicos diretamente ao local do serviço.",
                        "faq": [
                                    [
                                                "A pressão da água pode quebrar as pedras ou telhas?",
                                                "Não. Nossas lavadoras industriais possuem regulagem precisa de pressão e vazão, além de utilizarmos bicos leque ou rotativos adequados para cada resistência de material."
                                    ],
                                    [
                                                "Essa lavagem gasta muita água?",
                                                "Nossas lavadoras profissionais consomem até 70% menos água do que mangueiras de jardim comuns, pois utilizam a força da pressão do ar para arrastar a sujeira de forma rápida."
                                    ],
                                    [
                                                "Vocês usam produtos químicos fortes?",
                                                "Usamos produtos flotadores biodegradáveis homologados que soltam a sujeira sem agredir o piso e sem prejudicar plantas ou animais domésticos do quintal."
                                    ],
                                    [
                                                "Quanto tempo dura o efeito de calçada limpa?",
                                                "Dependendo da exposição ao sol e umidade, o piso costuma ficar livre de limo por 6 a 12 meses. Oferecemos aplicação de resina seladora opcional para triplicar esse tempo."
                                    ],
                                    [
                                                "Vocês cobram orçamento?",
                                                "Não cobramos taxa de visita em nossa área de atendimento primária. O orçamento é feito na hora baseado na metragem aproximada."
                                    ]
                        ]
            },
            "en": {
                        "title": "SuperWap | Pressure Washing & Surface Restoration",
                        "headerCta": "Get Cleaning Quote",
                        "navServicesLabel": "Cleaning",
                        "heroBadge": "Heavy-Duty Facade & Sidewalk Wash",
                        "heroTitle": "PROFESSIONAL PISOS, ROOF, <br><span class=\"text-gradient\">AND SIDEWALK RESTORATION.</span>",
                        "heroDesc": "Instant removal of mold, grease, and post-construction chemical stains. We restore original stone colors immediately.",
                        "heroSecondary": "Services",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about pressure washing.",
                        "faqDesc": "Get answers about stone care, water usage, and extreme stain removal.",
                        "contactBadge": "First contact",
                        "contactTitle": "Describe your dirty surfaces",
                        "contactDesc": "Select your surface type and size. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Hydro-Jetting",
                        "heroCardDesc": "Industrial equipment calibrated for each surface type",
                        "heroPanelTop": "Own Equipment",
                        "heroPanelMain": "Stain Removal",
                        "heroPanelBottom": "Eco-Friendly Biodegradable Chemicals",
                        "areaLabel": "Surface type",
                        "areaOptions": {
                                    "pedra": "Natural Stone (Slate, Granite, Cobblestone)",
                                    "telhado": "Roof / Facade Cleaning",
                                    "pos_obra": "Post-Construction Clean-Up",
                                    "outro": "Other Service"
                        },
                        "urgencyLabel": "Estimated size",
                        "urgencyOptions": {
                                    "pequeno": "Small area (up to 500 sq ft)",
                                    "medio": "Medium area (500 to 1500 sq ft)",
                                    "grande": "Large area (above 1500 sq ft)"
                        },
                        "summaryLabel": "Stain status",
                        "summaryPlaceholder": "Specify if there is slippery green mold, oil stains, cement splatters, or years of accumulated grime.",
                        "serviceCards": [
                                    {
                                                "title": "Sidewalk Washing",
                                                "description": "Deep removal of mold and mud accumulated on rustic stones and concrete paths, returning them to like-new condition."
                                    },
                                    {
                                                "title": "Roof Jetting",
                                                "description": "Washing with rotary nozzles that eliminate mold, moss, and pollution from roof tiles without any risk of water leaks."
                                    },
                                    {
                                                "title": "Post-Construction Wash",
                                                "description": "Targeted chemicals to dissolve cement splatters, dry mortar, and paint residues without etching new flooring panels."
                                    }
                        ],
                        "locationBadge": "Coverage",
                        "locationTitle": "Fast service in your neighborhood.",
                        "locationDesc": "We bring all high-pressure hoses, chemical sprayers, and safety equipment directly to your site.",
                        "faq": [
                                    [
                                                "Can high pressure break stone or roof tiles?",
                                                "No. Our industrial pressure washers feature precision controls, and we use wide-fan or specialized rotary nozzles matching the durability of each stone."
                                    ],
                                    [
                                                "Does this process waste a lot of water?",
                                                "Our professional equipment actually uses up to 70% less water than standard garden hoses because it leverages extreme air pressure to strip dirt fast."
                                    ],
                                    [
                                                "Are the chemicals you use toxic?",
                                                "We use certified biodegradable cleaning formulas that dissolve grime without damaging surfaces, plants, or pets in your yard."
                                    ],
                                    [
                                                "How long does the clean sidewalk effect last?",
                                                "Depending on sun and moisture exposure, surfaces typically stay clean for 6 to 12 months. We offer optional sealing services to triple this duration."
                                    ],
                                    [
                                                "Do you charge for quotes?",
                                                "No, technical visits and quotes are free of charge within our local business coverage zone."
                                    ]
                        ]
            },
            "es": {
                        "title": "SuperWap | Lavado de Alta Presión y Limpieza de Pisos",
                        "headerCta": "Presupuesto de Limpieza",
                        "navServicesLabel": "Limpieza",
                        "heroBadge": "Limpieza Pesada de Fachadas y Calzadas",
                        "heroTitle": "RESTAURACIÓN PROFESIONAL DE PISOS, <br><span class=\"text-gradient\">TEJADOS Y CALZADAS.</span>",
                        "heroDesc": "Eliminación instantánea de moho, grasa y manchas químicas pos-obra. Devolvemos el color original del piso al momento.",
                        "heroSecondary": "Servicios",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre lavado a presión.",
                        "faqDesc": "Resuelva sus dudas sobre el gasto de agua y la eliminación de suciedades extremas.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Describe tu área sucia",
                        "contactDesc": "Selecciona el tipo de piso e informa el tamaño de la zona. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Hidrolavado",
                        "heroCardDesc": "Hidrolimpiadoras profesionales calibradas para cada tipo de piso",
                        "heroPanelTop": "Equipamiento Propio",
                        "heroPanelMain": "Remoción de Manchas",
                        "heroPanelBottom": "Químicos Biodegradables Homologados",
                        "areaLabel": "Tipo de superficie",
                        "areaOptions": {
                                    "pedra": "Piedras Naturales (Granito, Pizarra, Lajas)",
                                    "telhado": "Tejado / Fachada de Casa o Edificio",
                                    "pos_obra": "Limpieza Pos-Obra (Cemento / Pintura)",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Área estimada",
                        "urgencyOptions": {
                                    "pequeno": "Área pequeña (hasta 50m²)",
                                    "medio": "Área media (50m² a 150m²)",
                                    "grande": "Área grande (más de 150m²)"
                        },
                        "summaryLabel": "Estado de la Suciedad",
                        "summaryPlaceholder": "Informa si hay moho verde resbaladizo, manchas de aceite o restos de obra incrustados.",
                        "serviceCards": [
                                    {
                                                "title": "Limpieza de Aceras",
                                                "description": "Remoción profunda de moho y lodo acumulado en piedras rústicas y calzadas, dejándolas como nuevas."
                                    },
                                    {
                                                "title": "Lavado de Tejados",
                                                "description": "Lavado con boquillas rotativas que eliminan hongos y contaminación de las tejas sin riesgo de filtración de agua."
                                    },
                                    {
                                                "title": "Limpieza de Fin de Obra",
                                                "description": "Químicos especiales para disolver cemento, mortero y restos de pinturas sin dañar el nuevo revestimiento del suelo."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Asistencia rápida en tu región.",
                        "locationDesc": "Llevamos todas las mangueras de presión y productos directamente al lugar del servicio.",
                        "faq": [
                                    [
                                                "¿La presión del agua puede romper las tejas?",
                                                "No. Nuestras hidrolimpiadoras industriales tienen controles precisos y usamos boquillas de abanico adecuadas según el material."
                                    ],
                                    [
                                                "¿Este sistema gasta mucha agua?",
                                                "Nuestros equipos consumen hasta un 70% menos de agua que las mangueras de jardín comunes, ya que aprovechan la presión del aire."
                                    ],
                                    [
                                                "¿Los productos químicos son tóxicos?",
                                                "Utilizamos fórmulas biodegradables homologadas que limpian a fondo sin dañar el suelo, plantas ni mascotas del jardín."
                                    ],
                                    [
                                                "¿Cuánto dura limpia la calzada?",
                                                "Normalmente el suelo permanece libre de moho por 6 a 12 meses. Ofrecemos sellado acrílico opcional para triplicar la duración."
                                    ],
                                    [
                                                "¿Cobran por el presupuesto?",
                                                "No cobramos por visitas técnicas para presupuestos en nuestra zona comercial."
                                    ]
                        ]
            }
},
        site_ar_condicionado: {
            "pt": {
                        "title": "ClimaClean | Higienização e Instalação de Ar-Condicionado",
                        "headerCta": "Orçamento de Ar",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Higienização Química e Instalação split",
                        "heroTitle": "AR MAIS LIMPO E ECONOMIA DE <br><span class=\"text-gradient\">ENERGIA PARA SEU AMBIENTE.</span>",
                        "heroDesc": "Higienização completa com bolsa coletora sem sujeira no local, eliminação de ácaros e fungos, cargas de gás e instalações padrão de fábrica.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas frequentes sobre climatização.",
                        "faqDesc": "Tire suas dúvidas sobre intervalos de limpeza, problemas de mau cheiro e vazamentos de água.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Escolha o serviço de interesse",
                        "contactDesc": "Selecione o tipo de atendimento e informe a quantidade de splits. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Bolsa Coletora",
                        "heroCardDesc": "Higienização realizada na parede sem sujar sua casa",
                        "heroPanelTop": "Técnicos Próprios",
                        "heroPanelMain": "Sem Sujar Paredes",
                        "heroPanelBottom": "Garantia de Instalação e Funcionamento",
                        "areaLabel": "Serviço desejado",
                        "areaOptions": {
                                    "higienizacao": "Higienização Química Completa",
                                    "instalacao": "Instalação Completa de Split",
                                    "reparo_gas": "Conserto / Vazamento / Carga de Gás",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Quantidade de aparelhos",
                        "urgencyOptions": {
                                    "um": "Apenas 1 aparelho split",
                                    "pouco": "Poucos aparelhos (2 a 4 splits)",
                                    "grande": "Muitos aparelhos / Comercial (5+ splits)"
                        },
                        "summaryLabel": "Marca e Sintomas",
                        "summaryPlaceholder": "Informe a marca do ar-condicionado (ex: LG, Samsung, Consul), BTUs (ex: 9000, 12000) e o que está acontecendo (ex: pingando água, não gela, cheiro ruim).",
                        "serviceCards": [
                                    {
                                                "title": "Higienização Química",
                                                "description": "Limpeza da evaporadora na parede usando bolsa coletora, aplicação de bactericida e limpeza completa dos filtros e turbina."
                                    },
                                    {
                                                "title": "Instalações Padrão",
                                                "description": "Instalação profissional utilizando tubulação de cobre isolada, furação correta com serra copo e teste de vácuo obrigatório."
                                    },
                                    {
                                                "title": "Carga de Gás e Reparos",
                                                "description": "Detecção de micro vazamentos de gás com nitrogênio e recarga correta do gás refrigerante ecológico original."
                                    }
                        ],
                        "locationBadge": "Área de Atuação",
                        "locationTitle": "Atendimento rápido residencial e comercial.",
                        "locationDesc": "Equipes preparadas para realizar a limpeza e manutenção sem causar poeira ou bagunça no seu ambiente.",
                        "faq": [
                                    [
                                                "De quanto em quanto tempo devo limpar o ar?",
                                                "Para residências, a higienização química completa deve ser feita a cada 6 ou 12 meses. Filtros de poeira devem ser lavados pelo próprio usuário mensalmente."
                                    ],
                                    [
                                                "Por que meu ar-condicionado está pingando água?",
                                                "O vazamento de água geralmente ocorre pelo entupimento do dreno de escoamento por sujeira ou por falta de limpeza da bandeja coletora de água."
                                    ],
                                    [
                                                "A higienização reduz a conta de luz?",
                                                "Sim. O acúmulo de sujeira na turbina e filtros força o compressor a trabalhar mais para gelar, o que aumenta em até 30% o consumo de energia."
                                    ],
                                    [
                                                "Qual a tubulação usada na instalação?",
                                                "Usamos exclusivamente tubos de cobre de alta qualidade. Não trabalhamos com alumínio, garantindo maior durabilidade contra vazamentos."
                                    ],
                                    [
                                                "Quanto tempo dura a instalação de um split?",
                                                "Uma instalação padrão leva cerca de 2 a 3 horas por aparelho, dependendo da dificuldade de acesso à área externa da condensadora."
                                    ]
                        ]
            },
            "en": {
                        "title": "ClimaClean | AC Cleaning & Installation",
                        "headerCta": "Get AC Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Chemical Cleaning & Installation split",
                        "heroTitle": "CLEANER AIR AND ENERGY <br><span class=\"text-gradient\">SAVINGS FOR YOUR PROPERTY.</span>",
                        "heroDesc": "Full split system cleaning using wall bags with zero mess. Elimination of fungi, gas recharge, and factory-standard installations.",
                        "heroSecondary": "Services",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about AC care.",
                        "faqDesc": "Get answers about cleaning intervals, bad odors, and water leak issues.",
                        "contactBadge": "First contact",
                        "contactTitle": "Select your AC service",
                        "contactDesc": "Choose your service type and specify split unit count. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Water Bag Service",
                        "heroCardDesc": "Cleaning performed on the wall with zero mess inside",
                        "heroPanelTop": "Certified Staff",
                        "heroPanelMain": "No Wall Stains",
                        "heroPanelBottom": "Installation and Sealing Warranty",
                        "areaLabel": "Desired service",
                        "areaOptions": {
                                    "higienizacao": "Full Chemical Deep Cleaning",
                                    "instalacao": "Full Split AC Installation",
                                    "reparo_gas": "Repair / Leak Test / Gas Recharge",
                                    "outro": "Other Service"
                        },
                        "urgencyLabel": "Unit count",
                        "urgencyOptions": {
                                    "um": "Just 1 split unit",
                                    "pouco": "Few units (2 to 4 split systems)",
                                    "grande": "Many units / Commercial (5+ systems)"
                        },
                        "summaryLabel": "AC Brand & Symptoms",
                        "summaryPlaceholder": "Specify AC brand (e.g., LG, Samsung, Consul), BTUs (e.g., 9000, 12000), and the issue (e.g., water dripping, not cooling, bad odor).",
                        "serviceCards": [
                                    {
                                                "title": "Chemical Deep Wash",
                                                "description": "Evaporator wash on the wall using collection bags, applying bactericide, and cleaning filters and blowers."
                                    },
                                    {
                                                "title": "Standard Installation",
                                                "description": "Professional installation using insulated copper tubing, clean core drilling, and mandatory vacuum tests."
                                    },
                                    {
                                                "title": "Gas Recharge & Repairs",
                                                "description": "Detection of micro leaks using pressurized nitrogen and refilling of original ecological refrigerant gas."
                                    }
                        ],
                        "locationBadge": "Coverage",
                        "locationTitle": "Residential and commercial fast response.",
                        "locationDesc": "Teams equipped to clean and repair split systems without creating dust or mess in your property.",
                        "faq": [
                                    [
                                                "How often should I clean my AC unit?",
                                                "For homes, a full chemical deep clean is recommended every 6 to 12 months. Dust filters should be washed monthly by the user."
                                    ],
                                    [
                                                "Why is my AC unit dripping water inside?",
                                                "Water dripping is usually caused by a clogged drain pipe due to dust buildup or dirt accumulation in the internal water tray."
                                    ],
                                    [
                                                "Does deep cleaning reduce electricity bills?",
                                                "Yes. A dirty blower wheel forces the compressor to run longer to cool the room, increasing power consumption by up to 30%."
                                    ],
                                    [
                                                "What pipes do you use for installation?",
                                                "We use high-quality copper tubing only. We do not use aluminum pipes, ensuring maximum durability against gas leaks."
                                    ],
                                    [
                                                "How long does a split installation take?",
                                                "A standard split AC installation takes about 2 to 3 hours per unit, depending on the condenser outdoor unit accessibility."
                                    ]
                        ]
            },
            "es": {
                        "title": "ClimaClean | Higienización e Instalación de Aire",
                        "headerCta": "Presupuesto de Aire",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Higienización Química e Instalación split",
                        "heroTitle": "AIRE MÁS LIMPIO Y AHORRO DE <br><span class=\"text-gradient\">ENERGÍA PARA TU AMBIENTE.</span>",
                        "heroDesc": "Higienización completa con bolsa recolectora sin ensuciar la pared, eliminación de bacterias, cargas de gas e instalaciones de fábrica.",
                        "heroSecondary": "Servicios",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre climatización.",
                        "faqDesc": "Resuelva sus dudas sobre los intervalos de limpieza y problemas de olores.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Elige tu servicio de interés",
                        "contactDesc": "Selecciona el tipo de servicio e informa la cantidad de split. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Bolsa Recolectora",
                        "heroCardDesc": "Limpieza realizada en la pared sin ensuciar tu casa",
                        "heroPanelTop": "Técnicos Propios",
                        "heroPanelMain": "Sin Manchar Paredes",
                        "heroPanelBottom": "Garantía de Instalación y Funcionamiento",
                        "areaLabel": "Servicio deseado",
                        "areaOptions": {
                                    "higienizacao": "Higienización Química Completa",
                                    "instalacao": "Instalación Completa de Split",
                                    "reparo_gas": "Reparación / Fuga / Carga de Gas",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Cantidad de aparatos",
                        "urgencyOptions": {
                                    "um": "Solo 1 aparato split",
                                    "pouco": "Pocos aparatos (2 a 4 splits)",
                                    "grande": "Muchos aparatos / Comercial (5+ splits)"
                        },
                        "summaryLabel": "Marca y Síntomas",
                        "summaryPlaceholder": "Informa la marca del aire (ej: LG, Samsung, Consul), BTUs y el problema (ej: gotea agua, no enfría, mal olor).",
                        "serviceCards": [
                                    {
                                                "title": "Higienización Química",
                                                "description": "Limpieza de la evaporadora en la pared usando bolsa colectora, aplicando bactericida y limpiando turbinas y filtros."
                                    },
                                    {
                                                "title": "Instalación Estándar",
                                                "description": "Instalación profesional utilizando tuberías de cobre aisladas, perforaciones limpias y prueba de vacío obligatoria."
                                    },
                                    {
                                                "title": "Carga de Gas y Reparaciones",
                                                "description": "Detección de fugas de gas con nitrógeno presurizado y recarga de gas refrigerante ecológico original."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Asistencia rápida residencial y comercial.",
                        "locationDesc": "Equipos preparados para realizar la limpieza y el mantenimiento sin causar polvo o desorden en el lugar.",
                        "faq": [
                                    [
                                                "¿Cada cuánto tiempo se debe limpiar el aire?",
                                                "En hogares, se recomienda la limpieza química cada 6 a 12 meses. Los filtros de polvo se deben lavar mensualmente por el usuario."
                                    ],
                                    [
                                                "¿Por qué gotea agua el aire acondicionado?",
                                                "El goteo de agua suele deberse a la obstrucción del tubo de desagüe por acumulación de suciedad en la bandeja colectora."
                                    ],
                                    [
                                                "¿La higienización reduce el consumo eléctrico?",
                                                "Sí. Una turbina sucia obliga al compresor a trabajar más tiempo para enfriar, aumentando un 30% el consumo eléctrico."
                                    ],
                                    [
                                                "¿Qué tubería se usa en la instalación?",
                                                "Usamos solo tuberías de cobre de alta calidad. No utilizamos aluminio, evitando fugas de gas a largo plazo."
                                    ],
                                    [
                                                "¿Cuánto dura la instalación de un split?",
                                                "Instalar un split estándar toma de 2 a 3 horas, dependiendo del acceso al exterior de la unidad condensadora."
                                    ]
                        ]
            }
},
        site_envelopamento: {
            "pt": {
                        "title": "RenovaLar | Envelopamento de Eletrodomésticos e Móveis",
                        "headerCta": "Orçamento de Envelopamento",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Renovação Sem Reforma",
                        "heroTitle": "MUDE O VISUAL DA SUA COZINHA <br><span class=\"text-gradient\">SEM COMPRAR MÓVEIS NOVOS.</span>",
                        "heroDesc": "Envelopamento especializado com vinil adesivo de alta durabilidade para geladeiras, fogões, armários de cozinha e tampos de mesa.",
                        "heroSecondary": "Modelos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Perguntas frequentes sobre envelopamento.",
                        "faqDesc": "Tire suas dúvidas sobre durabilidade do vinil adesivo, resistência ao calor e cuidados pós-aplicação.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Renove seu móvel ou aparelho",
                        "contactDesc": "Informe qual eletrodoméstico ou móvel deseja envelopar e a cor de interesse. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Renovação Rápida",
                        "heroCardDesc": "Mude a cor de geladeiras e armários sem poeira ou sujeira",
                        "heroPanelTop": "Aplicadores Especialistas",
                        "heroPanelMain": "Acabamento Sem Rebarbas",
                        "heroPanelBottom": "Vinil Adesivo Resistente à Umidade e Calor",
                        "areaLabel": "Item a envelopar",
                        "areaOptions": {
                                    "geladeira": "Geladeira (Simples / Duplex / Side by Side)",
                                    "armarios": "Armários de Cozinha (Portas / Gavetas)",
                                    "fogao_micro": "Fogão / Micro-ondas / Máquina de Lavar",
                                    "outro": "Outro Item"
                        },
                        "urgencyLabel": "Textura/Cor desejada",
                        "urgencyOptions": {
                                    "inox": "Aço Inox Escovado (Efeito metalizado)",
                                    "fosco_brilho": "Preto Fosco (Black Matte) ou Brilhante",
                                    "colorido_amadeirado": "Cores Vivas ou Textura Amadeirada"
                        },
                        "summaryLabel": "Estado Atual do Item",
                        "summaryPlaceholder": "Informe se o eletrodoméstico possui pontos de ferrugem, amassados ou se a pintura atual está muito descascada para prepararmos a superfície.",
                        "serviceCards": [
                                    {
                                                "title": "Envelopamento de Geladeiras",
                                                "description": "Transformação completa de geladeiras antigas ou enferrujadas em modelos modernos inox ou preto fosco com durabilidade."
                                    },
                                    {
                                                "title": "Armários de Cozinha",
                                                "description": "Mude totalmente a cor das portas dos seus armários planejados sem gastar com marcenaria nova, com acabamento perfeito nas quinas."
                                    },
                                    {
                                                "title": "Eletros e Portas",
                                                "description": "Aplicação de vinil em portas de quartos, tampos de mesa, fogões e micro-ondas, renovando o ambiente em poucas horas."
                                    }
                        ],
                        "locationBadge": "Onde Atendemos",
                        "locationTitle": "Serviço realizado na sua própria residência.",
                        "locationDesc": "Nossa equipe leva todas as espátulas, vinis e sopradores necessários, realizando o trabalho com rapidez e zero poeira.",
                        "faq": [
                                    [
                                                "Quanto tempo dura o envelopamento?",
                                                "Trabalhamos com vinis adesivos de alta qualidade (Alltak, Imprimax) com durabilidade média de 5 a 7 anos em ambientes internos."
                                    ],
                                    [
                                                "Pode ser aplicado sobre ferrugem?",
                                                "Sim, mas realizamos um lixamento prévio e aplicação de produto convertedor de ferrugem antes da colagem para garantir a aderência do vinil."
                                    ],
                                    [
                                                "Como limpar eletrodomésticos envelopados?",
                                                "Use apenas pano úmido e sabão neutro. Nunca utilize palhas de aço, produtos químicos abrasivos ou limpadores multiuso (veja)."
                                    ],
                                    [
                                                "O vinil resiste ao calor do fogão?",
                                                "Sim. Os adesivos utilizados na linha de eletrodomésticos são resistentes a temperaturas de até 80°C, ideais para laterais de fogão."
                                    ],
                                    [
                                                "Quanto tempo leva a aplicação?",
                                                "O envelopamento completo de uma geladeira duplex leva cerca de 2 a 3 horas. Cozinhas completas levam de 1 a 2 dias."
                                    ]
                        ]
            },
            "site_ppf": {
                        "title": "Shield Auto | PPF e Envelopamento de Luxo",
                        "headerCta": "Orçamento PPF",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Proteção de Pintura Automotiva",
                        "heroTitle": "PROTEÇÃO INVISÍVEL CONTRA RISCOS <br><span class=\"text-gradient\">E PEDRADAS NA ESTRADA (PPF).</span>",
                        "heroDesc": "Aplicação de película regenerativa de poliuretano (PPF) e envelopamento líquido ou vinil fosco de alto padrão para veículos importados e esportivos.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas frequentes sobre PPF.",
                        "faqDesc": "Tire suas dúvidas sobre cura de riscos com calor, proteção UV e remoção segura sem danificar a pintura original.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Proteja seu patrimônio",
                        "contactDesc": "Informe o modelo do veículo e o nível de proteção desejado. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "PPF Regenerativo",
                        "heroCardDesc": "Película autorregenerativa (Self-Healing) com calor",
                        "heroPanelTop": "Aplicadores Certificados",
                        "heroPanelMain": "Recorte Computadorizado",
                        "heroPanelBottom": "Garantia de 5 a 10 Anos contra Amarelamento",
                        "areaLabel": "Tipo de proteção",
                        "areaOptions": {
                                    "ppf_completo": "PPF Completo (Carro Inteiro)",
                                    "ppf_frontal": "Kit Frontal (Capô, parachoque, faróis, retrovisores)",
                                    "envelopamento_cor": "Envelopamento de Cor (Mudar cor/Acabamento fosco)",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Modelo do veículo",
                        "urgencyOptions": {
                                    "esportivo": "Superesportivo (Porsche, Ferrari, Audi RS)",
                                    "premium": "SUV / Sedan Premium (BMW, Mercedes, Volvo)",
                                    "outro": "Outro Modelo / SUV de Médio Porte"
                        },
                        "summaryLabel": "Detalhes do Carro",
                        "summaryPlaceholder": "Informe a marca, modelo, ano do carro, cor atual e se deseja proteção em partes específicas como soleiras, tela interna ou piano black.",
                        "serviceCards": [
                                    {
                                                "title": "Película PPF Ultra",
                                                "description": "Proteção física com filme de poliuretano de alta tecnologia, absorvendo impactos de pedras na estrada e arranhões."
                                    },
                                    {
                                                "title": "Self-Healing (Autocura)",
                                                "description": "Riscos superficiais e marcas circulares na película desaparecem sozinhos ao expor o veículo ao sol ou calor de água morna."
                                    },
                                    {
                                                "title": "Mudança de Acabamento",
                                                "description": "Aplicação de vinil satinado, fosco ou de cores exclusivas para personalização estética mantendo a integridade da lataria."
                                    }
                        ],
                        "locationBadge": "Nosso Estúdio",
                        "locationTitle": "Boxes climatizados com total controle de poeira.",
                        "locationDesc": "Ambiente limpo e iluminação especial LED de alta definição para garantir a colagem sem imperfeições ou poeira sob a película.",
                        "faq": [
                                    [
                                                "O que é PPF e qual a diferença do envelopamento comum?",
                                                "O PPF é feito de Poliuretano Termoplástico (TPU) de alta espessura e flexibilidade, projetado para absorver impactos físicos de pedradas de estrada. O vinil comum apenas altera a cor e protege contra riscos muito leves."
                                    ],
                                    [
                                                "Como funciona a autocura (Self-Healing)?",
                                                "A camada superior da película é composta por polímeros elásticos que se reorganizam ao receber calor (sol ou soprador), fechando riscos superficiais na hora."
                                    ],
                                    [
                                                "O PPF amarela com o tempo?",
                                                "Trabalhamos exclusivamente com marcas líderes de PPF com tecnologia TPU alemã e proteção UV, garantindo resistência total contra amarelamento ou ressecamento por até 10 anos."
                                    ],
                                    [
                                                "Pode ser removido sem estragar a pintura?",
                                                "Sim. O adesivo do PPF de alta qualidade é desenvolvido para não danificar o verniz original de fábrica na hora da remoção, mantendo o carro intacto."
                                    ],
                                    [
                                                "Quanto tempo dura a instalação completa?",
                                                "Um envelopamento de PPF completo leva de 3 a 5 dias úteis, devido à necessidade de desmontagem cuidadosa de frisos e lavagem detalhada de frestas."
                                    ]
                        ]
            },
            "site_papel_parede": {
                        "pt": {
                                    "title": "DecoraWall | Instalação de Papel de Parede e Ripados",
                                    "headerCta": "Orçamento de Instalação",
                                    "navServicesLabel": "Serviços",
                                    "heroBadge": "Decoração de Interiores Rápida",
                                    "heroTitle": "TRANSFORME SUAS PAREDES COM <br><span class=\"text-gradient\">PAPEL DE PAREDE E RIPADOS.</span>",
                                    "heroDesc": "Instalação sem bolhas de papéis de parede vinílicos nacionais e importados, painéis ripados de poliuretano e molduras clássicas Boiserie.",
                                    "heroSecondary": "Modelos",
                                    "servicesTitle": "Especialidades",
                                    "faqBadge": "FAQ",
                                    "faqTitle": "Perguntas comuns sobre instalação.",
                                    "faqDesc": "Tire suas dúvidas sobre preparação de paredes com umidade, cálculo de rolos e tempo de secagem da cola.",
                                    "contactBadge": "Primeiro contato",
                                    "contactTitle": "Planeje sua nova parede",
                                    "contactDesc": "Informe as medidas das paredes e o tipo de material. O resumo vai direto para nosso WhatsApp.",
                                    "heroCardTitle": "Aplicação Perfeita",
                                    "heroCardDesc": "Instaladores com alinhamento milimétrico de estampas",
                                    "heroPanelTop": "Instaladores Experientes",
                                    "heroPanelMain": "Sem Sujar a Casa",
                                    "heroPanelBottom": "Cola Atóxica e Sem Cheiro",
                                    "areaLabel": "Material escolhido",
                                    "areaOptions": {
                                                "papel_parede": "Papel de Parede (Vinílico / TNT / Tecido)",
                                                "painel_ripado": "Painel Ripado (EVA / Poliuretano)",
                                                "boiserie": "Molduras Boiserie (Clássico / Moderno)",
                                                "outro": "Outro Serviço"
                                    },
                                    "urgencyLabel": "Status das paredes",
                                    "urgencyOptions": {
                                                "pronto_liso": "Paredes lisas e já pintadas",
                                                "reboco_textura": "Paredes com textura / Reboco cru",
                                                "umidade_infiltra": "Paredes com problemas de infiltração/umidade"
                                    },
                                    "summaryLabel": "Dimensões das Paredes",
                                    "summaryPlaceholder": "Informe a largura e a altura de cada parede que deseja decorar e se você já possui os rolos de papel de parede comprados.",
                                    "serviceCards": [
                                                {
                                                            "title": "Papel de Parede",
                                                            "description": "Instalação de papéis de parede importados de alto padrão, garantindo emendas invisíveis e corte perfeito em tomadas e frisos."
                                                },
                                                {
                                                            "title": "Painéis Ripados",
                                                            "description": "Aplicação rápida de ripas modernas em paredes de cabeceira ou painéis de TV, dando profundidade e elegância ao cômodo."
                                                },
                                                {
                                                            "title": "Boiserie Clássico",
                                                            "description": "Instalação de molduras clássicas francesas de poliuretano com alinhamento e calafetação impecáveis para pintura posterior."
                                                }
                                    ],
                                    "locationBadge": "Onde Atendemos",
                                    "locationTitle": "Visitas técnicas e consultoria local.",
                                    "locationDesc": "Agendamos visitas técnicas rápidas para avaliar a qualidade da parede e conferir as medidas exatas antes de aplicar a cola.",
                                    "faq": [
                                                [
                                                            "Como calcular a quantidade de rolos necessária?",
                                                            "Geralmente, um rolo padrão de 53cm x 10m cobre cerca de 4,5m² de parede, considerando as perdas para bater as estampas dos desenhos. Nós fazemos o cálculo exato para você no WhatsApp."
                                                ],
                                                [
                                                            "Pode aplicar papel de parede sobre infiltração?",
                                                            "Não recomendamos. Qualquer foco de umidade ou infiltração deve ser tratado previamente, pois a umidade fará a cola descolar e causará mofo sob o papel."
                                                ],
                                                [
                                                            "A cola deixa cheiro ruim na casa?",
                                                            "Não. Usamos cola especial em pó à base de carboximetilcelulose de excelente qualidade, totalmente sem cheiro, atóxica e que não mancha móveis ou tapetes."
                                                ],
                                                [
                                                            "Vocês instalam papel de parede no teto?",
                                                            "Sim, realizamos a aplicação técnica de papéis de parede no teto com equipes preparadas e equipamentos de apoio necessários."
                                                ],
                                                [
                                                            "Quanto tempo dura a instalação em um quarto?",
                                                            "Uma parede de tamanho padrão é instalada em cerca de 2 a 3 horas. Quartos inteiros costumam ser finalizados no mesmo dia."
                                                ]
                                    ]
                        },
                        "en": {
                                    "title": "DecoraWall | Wallpaper & Slat Wall Installation",
                                    "headerCta": "Get Installation Quote",
                                    "navServicesLabel": "Services",
                                    "heroBadge": "Express Wall Makeovers",
                                    "heroTitle": "TRANSFORM YOUR WALLS WITH <br><span class=\"text-gradient\">WALLPAPER AND WOOD SLATS.</span>",
                                    "heroDesc": "Bubble-free installation of national and imported vinyl wallpapers, polyurethane slat walls, and classic Boiserie frames.",
                                    "heroSecondary": "Models",
                                    "servicesTitle": "Specialties",
                                    "faqBadge": "FAQ",
                                    "faqTitle": "Common questions about installation.",
                                    "faqDesc": "Get answers about damp wall prep, roll calculations, and glue drying times.",
                                    "contactBadge": "First contact",
                                    "contactTitle": "Plan your new wall",
                                    "contactDesc": "Specify wall dimensions and your choice of material. The summary goes straight to our WhatsApp.",
                                    "heroCardTitle": "Seamless Application",
                                    "heroCardDesc": "Installers with millimeter alignment of patterns",
                                    "heroPanelTop": "Experienced Installers",
                                    "heroPanelMain": "No Mess at Home",
                                    "heroPanelBottom": "Odorless & Non-Toxic Glue",
                                    "areaLabel": "Material chosen",
                                    "areaOptions": {
                                                "papel_parede": "Wallpaper (Vinyl / Non-Woven / Fabric)",
                                                "painel_ripado": "Slat Wall (EVA / Polyurethane)",
                                                "boiserie": "Boiserie Frames (Classic / Modern)",
                                                "outro": "Other Service"
                                    },
                                    "urgencyLabel": "Wall condition",
                                    "urgencyOptions": {
                                                "pronto_liso": "Smooth, pre-painted walls",
                                                "reboco_textura": "Textured / Raw plaster walls",
                                                "umidade_infiltra": "Walls with moisture/damp issues"
                                    },
                                    "summaryLabel": "Wall dimensions",
                                    "summaryPlaceholder": "Specify estimated width and height of each wall to decorate and if you already purchased the wallpaper rolls.",
                                    "serviceCards": [
                                                {
                                                            "title": "Wallpaper Hanging",
                                                            "description": "Hanging of imported high-end wallpapers, ensuring invisible seams and perfect trimming around outlets and trims."
                                                },
                                                {
                                                            "title": "Slat Wall Panels",
                                                            "description": "Fast installation of modern slatted walls for bed backdrops or TV setups, adding texture and depth to your spaces."
                                                },
                                                {
                                                            "title": "Classic Boiserie",
                                                            "description": "Installation of classic French polyurethane wall frames with clean miter joints and caulking ready for paint."
                                                }
                                    ],
                                    "locationBadge": "Lounge",
                                    "locationTitle": "Technical visits & local support.",
                                    "locationDesc": "We schedule quick technical visits to evaluate wall smoothness and double-check measurements before pasting.",
                                    "faq": [
                                                [
                                                            "How do I calculate the number of wallpaper rolls?",
                                                            "Generally, a standard roll (21 inches x 33 feet) covers about 50 square feet of wall space, considering pattern matching wastage. We calculate the exact amount for you on WhatsApp."
                                                ],
                                                [
                                                            "Can wallpaper be applied on damp walls?",
                                                            "We do not recommend it. Any dampness or leak source must be repaired first, as moisture will dissolve the paste and cause mold under the wallpaper."
                                                ],
                                                [
                                                            "Does the glue smell bad?",
                                                            "No. We use a premium starch-based powder paste that is completely odorless, non-toxic, and won't stain your furniture or rugs."
                                                ],
                                                [
                                                            "Do you install wallpaper on ceilings?",
                                                            "Yes, we perform specialized ceiling wallpaper installations with dedicated scaffolding and experienced crews."
                                                ],
                                                [
                                                            "How long does it take to wallpaper a bedroom?",
                                                            "A single standard accent wall takes about 2 to 3 hours. Full bedrooms are usually completed within the same day."
                                                ]
                                    ]
                        },
                        "es": {
                                    "title": "DecoraWall | Instalación de Papel Pintado y Ripados",
                                    "headerCta": "Presupuesto de Instalación",
                                    "navServicesLabel": "Servicios",
                                    "heroBadge": "Decoración Rápida de Interiores",
                                    "heroTitle": "TRANSFORMA TUS PAREDES CON <br><span class=\"text-gradient\">PAPEL PINTADO Y RIPADOS.</span>",
                                    "heroDesc": "Instalación sin burbujas de papeles pintados vinílicos, paneles ripados de poliuretano y molduras de Boiserie.",
                                    "heroSecondary": "Modelos",
                                    "servicesTitle": "Especialidades",
                                    "faqBadge": "Preguntas Frecuentes",
                                    "faqTitle": "Preguntas comunes sobre la instalación.",
                                    "faqDesc": "Resuelva sus dudas sobre cálculo de rollos y tiempos de secado de la cola.",
                                    "contactBadge": "Primer contacto",
                                    "contactTitle": "Planifica tu nueva pared",
                                    "contactDesc": "Informa las medidas de las paredes y el material. El resumen va directo a WhatsApp.",
                                    "heroCardTitle": "Aplicación Sin Burbujas",
                                    "heroCardDesc": "Instaladores con alineación milimétrica de estampados",
                                    "heroPanelTop": "Instaladores Expertos",
                                    "heroPanelMain": "Sin Ensuciar la Casa",
                                    "heroPanelBottom": "Cola Sin Olor y No Tóxica",
                                    "areaLabel": "Material elegido",
                                    "areaOptions": {
                                                "papel_parede": "Papel Pintado (Vinílico / TNT / Tela)",
                                                "painel_ripado": "Panel Ripado (EVA / Poliuretano)",
                                                "boiserie": "Molduras Boiserie (Clásico / Moderno)",
                                                "outro": "Otro Servicio"
                                    },
                                    "urgencyLabel": "Estado de las paredes",
                                    "urgencyOptions": {
                                                "pronto_liso": "Paredes lisas y ya pintadas",
                                                "reboco_textura": "Paredes con textura / Yeso bruto",
                                                "umidade_infiltra": "Paredes con problemas de humedad/filtración"
                                    },
                                    "summaryLabel": "Medidas de las Paredes",
                                    "summaryPlaceholder": "Informa el ancho y alto de cada pared a decorar y si ya tienes comprados los rollos de papel.",
                                    "serviceCards": [
                                                {
                                                            "title": "Papel Pintado",
                                                            "description": "Instalación de papeles importados de alta calidad, asegurando uniones invisibles y cortes limpios en enchufes."
                                                },
                                                {
                                                            "title": "Paneles Ripados",
                                                            "description": "Aplicación rápida de listones modernos en cabeceras o paneles de TV, dando elegancia a la habitación."
                                                },
                                                {
                                                            "title": "Boiserie Clásico",
                                                            "description": "Instalación de molduras francesas de poliuretano con juntas a inglete limpias y listas para pintar."
                                                }
                                    ],
                                    "locationBadge": "Ubicación",
                                    "locationTitle": "Visitas técnicas y consultoría.",
                                    "locationDesc": "Programamos visitas técnicas para verificar el estado de la pared y tomar las medidas exactas.",
                                    "faq": [
                                                [
                                                            "¿Cómo calculo la cantidad de rollos necesarios?",
                                                            "Generalmente, un rollo estándar (53cm x 10m) cubre unos 4,5m² de pared, considerando las pérdidas por cuadrar los dibujos. Nosotros lo calculamos por ti."
                                                ],
                                                [
                                                            "¿Se puede instalar papel pintado sobre paredes húmedas?",
                                                            "No lo recomendamos. Cualquier foco de humedad debe tratarse previamente, de lo contrario la cola se despegará y aparecerá moho."
                                                ],
                                                [
                                                            "¿La cola deja olor?",
                                                            "No. Usamos colas especiales a base de almidón en polvo que son inodoras, no tóxicas y no manchan suelos ni alfombras."
                                                ],
                                                [
                                                            "¿Instalan papel pintado en techos?",
                                                            "Sí, realizamos aplicaciones técnicas en techos con equipos de apoyo y andamios adecuados."
                                                ],
                                                [
                                                            "¿Cuánto tarda la instalación?",
                                                            "Una pared de acento estándar se instala en 2 o 3 horas. Habitaciones completas se finalizan en el día."
                                                ]
                                    ]
                        }
            }
},
        site_papel_parede: {
            "pt": {
                        "title": "DecoraWall | Instalação de Papel de Parede e Ripados",
                        "headerCta": "Orçamento de Instalação",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Decoração de Interiores Rápida",
                        "heroTitle": "TRANSFORME SUAS PAREDES COM <br><span class=\"text-gradient\">PAPEL DE PAREDE E RIPADOS.</span>",
                        "heroDesc": "Instalação sem bolhas de papéis de parede vinílicos nacionais e importados, painéis ripados de poliuretano e molduras clássicas Boiserie.",
                        "heroSecondary": "Modelos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Perguntas comuns sobre instalação.",
                        "faqDesc": "Tire suas dúvidas sobre preparação de paredes com umidade, cálculo de rolos e tempo de secagem da cola.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Planeje sua nova parede",
                        "contactDesc": "Informe as medidas das paredes e o tipo de material. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Aplicação Perfeita",
                        "heroCardDesc": "Instaladores com alinhamento milimétrico de estampas",
                        "heroPanelTop": "Instaladores Experientes",
                        "heroPanelMain": "Sem Sujar a Casa",
                        "heroPanelBottom": "Cola Atóxica e Sem Cheiro",
                        "areaLabel": "Material escolhido",
                        "areaOptions": {
                                    "papel_parede": "Papel de Parede (Vinílico / TNT / Tecido)",
                                    "painel_ripado": "Painel Ripado (EVA / Poliuretano)",
                                    "boiserie": "Molduras Boiserie (Clássico / Moderno)",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Status das paredes",
                        "urgencyOptions": {
                                    "pronto_liso": "Paredes lisas e já pintadas",
                                    "reboco_textura": "Paredes com textura / Reboco cru",
                                    "umidade_infiltra": "Paredes com problemas de infiltração/umidade"
                        },
                        "summaryLabel": "Dimensões das Paredes",
                        "summaryPlaceholder": "Informe a largura e a altura de cada parede que deseja decorar e se você já possui os rolos de papel de parede comprados.",
                        "serviceCards": [
                                    {
                                                "title": "Papel de Parede",
                                                "description": "Instalação de papéis de parede importados de alto padrão, garantindo emendas invisíveis e corte perfeito em tomadas e frisos."
                                    },
                                    {
                                                "title": "Painéis Ripados",
                                                "description": "Aplicação rápida de ripas modernas em paredes de cabeceira ou painéis de TV, dando profundidade e elegância ao cômodo."
                                    },
                                    {
                                                "title": "Boiserie Clássico",
                                                "description": "Instalação de molduras clássicas francesas de poliuretano com alinhamento e calafetação impecáveis para pintura posterior."
                                    }
                        ],
                        "locationBadge": "Onde Atendemos",
                        "locationTitle": "Visitas técnicas e consultoria local.",
                        "locationDesc": "Agendamos visitas técnicas rápidas para avaliar a qualidade da parede e conferir as medidas exatas antes de aplicar a cola.",
                        "faq": [
                                    [
                                                "Como calcular a quantidade de rolos necessária?",
                                                "Geralmente, um rolo padrão de 53cm x 10m cobre cerca de 4,5m² de parede, considerando as perdas para bater as estampas dos desenhos. Nós fazemos o cálculo exato para você no WhatsApp."
                                    ],
                                    [
                                                "Pode aplicar papel de parede sobre infiltração?",
                                                "Não recomendamos. Qualquer foco de umidade ou infiltração deve ser tratado previamente, pois a umidade fará a cola descolar e causará mofo sob o papel."
                                    ],
                                    [
                                                "A cola deixa cheiro ruim na casa?",
                                                "Não. Usamos cola especial em pós à base de carboximetilcelulose de excelente qualidade, totalmente sem cheiro, atóxica e que não mancha móveis ou tapetes."
                                    ],
                                    [
                                                "Vocês instalam papel de parede no teto?",
                                                "Sim, realizamos a aplicação técnica de papéis de parede no teto com equipes preparadas e equipamentos de apoio necessários."
                                    ],
                                    [
                                                "Quanto tempo dura a instalação em um quarto?",
                                                "Uma parede de tamanho padrão é instalada em cerca de 2 a 3 horas. Quartos inteiros costumam ser finalizados no mesmo dia."
                                    ]
                        ]
            },
            "en": {
                        "title": "DecoraWall | Wallpaper & Slat Wall Installation",
                        "headerCta": "Get Installation Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Express Wall Makeovers",
                        "heroTitle": "TRANSFORM YOUR WALLS WITH <br><span class=\"text-gradient\">WALLPAPER AND WOOD SLATS.</span>",
                        "heroDesc": "Bubble-free installation of national and imported vinyl wallpapers, polyurethane slat walls, and classic Boiserie frames.",
                        "heroSecondary": "Models",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about installation.",
                        "faqDesc": "Get answers about damp wall prep, roll calculations, and glue drying times.",
                        "contactBadge": "First contact",
                        "contactTitle": "Plan your new wall",
                        "contactDesc": "Specify wall dimensions and your choice of material. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Seamless Application",
                        "heroCardDesc": "Installers with millimeter alignment of patterns",
                        "heroPanelTop": "Experienced Installers",
                        "heroPanelMain": "No Mess at Home",
                        "heroPanelBottom": "Odorless & Non-Toxic Glue",
                        "areaLabel": "Material chosen",
                        "areaOptions": {
                                    "papel_parede": "Wallpaper (Vinyl / Non-Woven / Fabric)",
                                    "painel_ripado": "Slat Wall (EVA / Polyurethane)",
                                    "boiserie": "Boiserie Frames (Classic / Modern)",
                                    "outro": "Other Service"
                        },
                        "urgencyLabel": "Wall condition",
                        "urgencyOptions": {
                                    "pronto_liso": "Smooth, pre-painted walls",
                                    "reboco_textura": "Textured / Raw plaster walls",
                                    "umidade_infiltra": "Walls with moisture/damp issues"
                        },
                        "summaryLabel": "Wall dimensions",
                        "summaryPlaceholder": "Specify estimated width and height of each wall to decorate and if you already purchased the wallpaper rolls.",
                        "serviceCards": [
                                    {
                                                "title": "Wallpaper Hanging",
                                                "description": "Hanging of imported high-end wallpapers, ensuring invisible seams and perfect trimming around outlets and trims."
                                    },
                                    {
                                                "title": "Slat Wall Panels",
                                                "description": "Fast installation of modern slatted walls for bed backdrops or TV setups, adding texture and depth to your spaces."
                                    },
                                    {
                                                "title": "Classic Boiserie",
                                                "description": "Installation of classic French polyurethane wall frames with clean miter joints and caulking ready for paint."
                                    }
                        ],
                        "locationBadge": "Lounge",
                        "locationTitle": "Technical visits & local support.",
                        "locationDesc": "We schedule quick technical visits to evaluate wall smoothness and double-check measurements before pasting.",
                        "faq": [
                                    [
                                                "How do I calculate the number of wallpaper rolls?",
                                                "Generally, a standard roll (21 inches x 33 feet) covers about 50 square feet of wall space, considering pattern matching wastage. We calculate the exact amount for you on WhatsApp."
                                    ],
                                    [
                                                "Can wallpaper be applied on damp walls?",
                                                "We do not recommend it. Any dampness or leak source must be repaired first, as moisture will dissolve the paste and cause mold under the wallpaper."
                                    ],
                                    [
                                                "Does the glue smell bad?",
                                                "No. We use a premium starch-based powder paste that is completely odorless, non-toxic, and won't stain your furniture or rugs."
                                    ],
                                    [
                                                "Do you install wallpaper on ceilings?",
                                                "Yes, we perform specialized ceiling wallpaper installations with dedicated scaffolding and experienced crews."
                                    ],
                                    [
                                                "How long does it take to wallpaper a bedroom?",
                                                "A single standard accent wall takes about 2 to 3 hours. Full bedrooms are usually completed within the same day."
                                    ]
                        ]
            },
            "es": {
                        "title": "DecoraWall | Instalación de Papel Pintado y Ripados",
                        "headerCta": "Presupuesto de Instalación",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Decoración Rápida de Interiores",
                        "heroTitle": "TRANSFORMA TUS PAREDES CON <br><span class=\"text-gradient\">PAPEL PINTADO Y RIPADOS.</span>",
                        "heroDesc": "Instalación sin burbujas de papeles pintados vinílicos, paneles ripados de poliuretano y molduras de Boiserie.",
                        "heroSecondary": "Modelos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas comunes sobre la instalación.",
                        "faqDesc": "Resuelva sus dudas sobre cálculo de rollos y tiempos de secado de la cola.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Planifica tu nueva pared",
                        "contactDesc": "Informa las medidas de las paredes y el material. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Aplicación Sin Burbujas",
                        "heroCardDesc": "Instaladores con alineación milimétrica de estampados",
                        "heroPanelTop": "Instaladores Expertos",
                        "heroPanelMain": "Sin Ensuciar la Casa",
                        "heroPanelBottom": "Cola Sin Olor y No Tóxica",
                        "areaLabel": "Material elegido",
                        "areaOptions": {
                                    "papel_parede": "Papel Pintado (Vinílico / TNT / Tela)",
                                    "painel_ripado": "Panel Ripado (EVA / Poliuretano)",
                                    "boiserie": "Molduras Boiserie (Clásico / Moderno)",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Estado de las paredes",
                        "urgencyOptions": {
                                    "pronto_liso": "Paredes lisas y ya pintadas",
                                    "reboco_textura": "Paredes con textura / Yeso bruto",
                                    "umidade_infiltra": "Paredes con problemas de humedad/filtración"
                        },
                        "summaryLabel": "Medidas de las Paredes",
                        "summaryPlaceholder": "Informa el ancho y alto de cada pared a decorar y si ya tienes comprados los rollos de papel.",
                        "serviceCards": [
                                    {
                                                "title": "Papel Pintado",
                                                "description": "Instalación de papeles importados de alta calidad, asegurando uniones invisibles y cortes limpios en enchufes."
                                    },
                                    {
                                                "title": "Paneles Ripados",
                                                "description": "Aplicación rápida de listones modernos en cabeceras o paneles de TV, dando elegancia a la habitación."
                                    },
                                    {
                                                "title": "Boiserie Clássico",
                                                "description": "Instalación de molduras francesas de poliuretano con juntas a inglete limpias y listas para pintar."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Visitas técnicas y consultoría.",
                        "locationDesc": "Programamos visitas técnicas para verificar el estado de la pared y tomar las medidas exactas.",
                        "faq": [
                                    [
                                                "¿Cómo calculo la cantidad de rollos necesarios?",
                                                "Generalmente, un rollo estándar (53cm x 10m) cubre unos 4,5m² de pared, considerando las pérdidas por cuadrar los dibujos. Nosotros lo calculamos por ti."
                                    ],
                                    [
                                                "¿Se puede instalar papel pintado sobre paredes húmedas?",
                                                "No lo recomendamos. Cualquier foco de humedad debe tratarse previamente, de lo contrario la cola se despegará y aparecerá moho."
                                    ],
                                    [
                                                "¿La cola deja olor?",
                                                "No. Usamos colas especiales a base de almidón en polvo que son inodoras, no tóxicas y no manchan suelos ni alfombras."
                                    ],
                                    [
                                                "¿Instalan papel pintado en techos?",
                                                "Sí, realizamos aplicaciones técnicas en techos con equipos de apoyo y andamios adecuados."
                                    ],
                                    [
                                                "¿Cuánto tarda la instalación?",
                                                "Una pared de acento estándar se instala en 2 o 3 horas. Habitaciones completas se finalizan en el día."
                                    ]
                        ]
            }
},
        site_serralheria: {
            "pt": {
                        "title": "Serralheria Artística | Portões e Móveis Industriais",
                        "headerCta": "Orçamento Serralheria",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Serralheria e Estruturas Metálicas",
                        "heroTitle": "SOLUÇÕES EM FERRO E AÇO COM <br><span class=\"text-gradient\">DESIGN E DURABILIDADE.</span>",
                        "heroDesc": "Fabricação de portões basculantes automáticos, guarda-corpos modernos, mezaninos e móveis sob medida em estilo industrial.",
                        "heroSecondary": "Projetos",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Perguntas comuns sobre serralheria.",
                        "faqDesc": "Tire suas dúvidas sobre tipos de pintura contra ferrugem, prazos de entrega e materiais utilizados.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Descreva o seu projeto",
                        "contactDesc": "Informe o tipo de estrutura e as medidas. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Pintura Epóxi",
                        "heroCardDesc": "Tratamento anticorrosivo que evita ferrugem nas soldas",
                        "heroPanelTop": "Serralheiros Seniores",
                        "heroPanelMain": "Solda MIG Alta Resistência",
                        "heroPanelBottom": "Projetos Sob Medida de Arquitetura",
                        "areaLabel": "Tipo de estrutura",
                        "areaOptions": {
                                    "portao": "Portão Basculante / Pivotante / Grade",
                                    "moveis": "Móveis Industriais (Ferro & Madeira)",
                                    "estrutura": "Mezanino / Escadas / Coberturas",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Urgência do projeto",
                        "urgencyOptions": {
                                    "urgente": "Preciso para esta semana",
                                    "planejado": "Estou planejando a instalação em breve",
                                    "orcamento": "Apenas orçamento prévio"
                        },
                        "summaryLabel": "Dimensões e Detalhes",
                        "summaryPlaceholder": "Informe largura, altura estimada, o tipo de material (chapa fechada, tubos vazados) e se precisa de automação de portão.",
                        "serviceCards": [
                                    {
                                                "title": "Portões Modernos",
                                                "description": "Portões automáticos basculantes e pivotantes projetados para total segurança com design que valoriza a fachada."
                                    },
                                    {
                                                "title": "Móveis Industriais",
                                                "description": "Mesas de jantar, prateleiras e adegas fabricadas com tubos de aço soldado e acabamento com tampos de madeira maciça."
                                    },
                                    {
                                                "title": "Mezaninos e Escadas",
                                                "description": "Cálculo e fabricação de escadas metálicas residenciais, corrimãos e estruturas de mezaninos comerciais de alta carga."
                                    }
                        ],
                        "locationBadge": "Nossa Oficina",
                        "locationTitle": "Visite nossa oficina de fabricação.",
                        "locationDesc": "Equipamentos profissionais de corte a plasma, dobradeiras de chapa e soldagem profissional MIG/TIG.",
                        "faq": [
                                    [
                                                "Como evitar que o portão de ferro enferruje?",
                                                "Aplicamos um fundo preparatório fosfatizante (wash primer) e primer epóxi de alta espessura antes da pintura final com tinta poliuretano (PU) automotiva, evitando corrosões."
                                    ],
                                    [
                                                "Qual o prazo de entrega de um portão?",
                                                "O prazo médio de fabricação é de 15 a 20 dias úteis, variando de acordo com a complexidade do desenho e as dimensões da estrutura."
                                    ],
                                    [
                                                "Vocês fazem a instalação no local?",
                                                "Sim. Entregamos a estrutura e realizamos toda a soldagem de fixação e chumbamento no local com nossa equipe especializada."
                                    ],
                                    [
                                                "Trabalham com aço galvanizado?",
                                                "Sim, trabalhamos com perfis e chapas de aço galvanizado, que possuem proteção nativa contra a ferrugem, sendo ideais para áreas externas e litorâneas."
                                    ],
                                    [
                                                "Fazem projetos personalizados de arquitetos?",
                                                "Sim! Fabricamos estruturas seguindo rigorosamente os detalhamentos técnicos e projetos executivos de arquitetura e engenharia civil."
                                    ]
                        ]
            }
},
        site_marmore: {
            "pt": {
                        "title": "Mármore Prime | Polimento e Restauração de Pedras Nobres",
                        "headerCta": "Orçamento de Restauração",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Restauração de Mármores e Granitos",
                        "heroTitle": "DEVOLVEMOS O BRILHO DE ESPELHO <br><span class=\"text-gradient\">AO SEU PISO DE MÁRMORE.</span>",
                        "heroDesc": "Polimento técnico com diamantes, remoção de manchas químicas profundas, impermeabilização contra líquidos e restauração de rejuntes.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas comuns sobre polimento de mármore.",
                        "faqDesc": "Tire suas dúvidas sobre durabilidade do brilho natural, barulho na execução e remoção de riscos.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Descreva o seu piso",
                        "contactDesc": "Selecione o tipo de pedra e a área estimada. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Brilho Natural",
                        "heroCardDesc": "Brilho obtido pelo polimento físico, sem uso de ceras temporárias",
                        "heroPanelTop": "Equipe Própria",
                        "heroPanelMain": "Maquinário Italiano",
                        "heroPanelBottom": "Impermeabilização com Proteção de Longa Duração",
                        "areaLabel": "Tipo de pedra",
                        "areaOptions": {
                                    "marmore": "Mármore (Carrara, Crema Marfil, etc.)",
                                    "granito": "Granito / Quartzo / Silestone",
                                    "porcelanato": "Porcelanato / Piso Cerâmico",
                                    "outro": "Outra Superfície"
                        },
                        "urgencyLabel": "Metragem estimada",
                        "urgencyOptions": {
                                    "pequeno": "Área pequena (até 30m²)",
                                    "medio": "Área média (30m² a 100m²)",
                                    "grande": "Área grande (acima de 100m²)"
                        },
                        "summaryLabel": "Estado do Piso",
                        "summaryPlaceholder": "Informe se há manchas de vinho/limão, rejuntes pretos ou se o piso perdeu completamente o brilho e possui riscos de móveis.",
                        "serviceCards": [
                                    {
                                                "title": "Polimento Diamantado",
                                                "description": "Uso de lixas diamantadas com água para nivelar o piso, remover riscos superficiais e ativar o brilho natural da pedra."
                                    },
                                    {
                                                "title": "Impermeabilização",
                                                "description": "Aplicação de selantes hidro-óleo repelentes que impedem a penetração de água, café, vinhos e gorduras na pedra."
                                    },
                                    {
                                                "title": "Restauração de Rejuntes",
                                                "description": "Limpeza química pesada ou substituição de rejuntes danificados por massas plásticas da cor exata da pedra."
                                    }
                        ],
                        "locationBadge": "Onde Atendemos",
                        "locationTitle": "Atendimento rápido residencial e comercial.",
                        "locationDesc": "Toda a nossa equipe utiliza equipamentos modernos com aspiração de resíduos de água, realizando o trabalho com limpeza.",
                        "faq": [
                                    [
                                                "O polimento faz muita poeira?",
                                                "Não. O polimento diamantado é realizado com água, o que evita 100% de poeira suspensa no ar. O resíduo líquido é aspirado na hora por nossas máquinas."
                                    ],
                                    [
                                                "Quanto tempo dura o brilho do mármore?",
                                                "Com manutenção básica e sem uso de produtos químicos ácidos, o brilho natural ativado dura de 2 a 5 anos antes de necessitar de manutenção."
                                    ],
                                    [
                                                "Como remover manchas de limão ou vinagre?",
                                                "Manchas ácidas corroem a superfície da pedra. Apenas o polimento diamantado técnico consegue remover a camada agredida e devolver o brilho original."
                                    ],
                                    [
                                                "Qual a diferença de cera e polimento natural?",
                                                "Ceras criam uma película plástica temporária que risca fácil e amarela. O polimento diamantado desgasta fisicamente a pedra até que ela brilhe sozinha, sem química superficial."
                                    ],
                                    [
                                                "Quanto tempo leva o serviço?",
                                                "Uma área média de 40m² de sala leva cerca de 2 a 3 dias úteis para ser completamente restaurada, polida e impermeabilizada."
                                    ]
                        ]
            }
},
        site_ppf: {
            "pt": {
                        "title": "Shield Auto | PPF e Envelopamento de Luxo",
                        "headerCta": "Orçamento PPF",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Proteção de Pintura Automotiva",
                        "heroTitle": "PROTEÇÃO INVISÍVEL CONTRA RISCOS <br><span class=\"text-gradient\">E PEDRADAS NA ESTRADA (PPF).</span>",
                        "heroDesc": "Aplicação de película regenerativa de poliuretano (PPF) e envelopamento líquido ou vinil fosco de alto padrão para veículos importados e esportivos.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas frequentes sobre PPF.",
                        "faqDesc": "Tire suas dúvidas sobre cura de riscos com calor, proteção UV e remoção segura sem danificar a pintura original.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Proteja seu patrimônio",
                        "contactDesc": "Informe o modelo do veículo e o nível de proteção desejado. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "PPF Regenerativo",
                        "heroCardDesc": "Película autorregenerativa (Self-Healing) com calor",
                        "heroPanelTop": "Aplicadores Certificados",
                        "heroPanelMain": "Recorte Computadorizado",
                        "heroPanelBottom": "Garantia de 5 a 10 Anos contra Amarelamento",
                        "areaLabel": "Tipo de proteção",
                        "areaOptions": {
                                    "ppf_completo": "PPF Completo (Carro Inteiro)",
                                    "ppf_frontal": "Kit Frontal (Capô, parachoque, faróis, retrovisores)",
                                    "envelopamento_cor": "Envelopamento de Cor (Mudar cor/Acabamento fosco)",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Modelo do veículo",
                        "urgencyOptions": {
                                    "esportivo": "Superesportivo (Porsche, Ferrari, Audi RS)",
                                    "premium": "SUV / Sedan Premium (BMW, Mercedes, Volvo)",
                                    "outro": "Outro Modelo / SUV de Médio Porte"
                        },
                        "summaryLabel": "Detalhes do Carro",
                        "summaryPlaceholder": "Informe a marca, modelo, ano do carro, cor atual e se deseja proteção em partes específicas como soleiras, tela interna ou piano black.",
                        "serviceCards": [
                                    {
                                                "title": "Película PPF Ultra",
                                                "description": "Proteção física com filme de poliuretano de alta tecnologia, absorvendo impactos de pedras na estrada e arranhões."
                                    },
                                    {
                                                "title": "Self-Healing (Autocura)",
                                                "description": "Riscos superficiais e marcas circulares na película desaparecem sozinhos ao expor o veículo ao sol ou calor de água morna."
                                    },
                                    {
                                                "title": "Mudança de Acabamento",
                                                "description": "Aplicação de vinil satinado, fosco ou de cores exclusivas para personalização estética mantendo a integridade da lataria."
                                    }
                        ],
                        "locationBadge": "Nosso Estúdio",
                        "locationTitle": "Boxes climatizados com total controle de poeira.",
                        "locationDesc": "Ambiente limpo e iluminação especial LED de alta definição para garantir a colagem sem imperfeições ou poeira sob a película.",
                        "faq": [
                                    [
                                                "O que é PPF e qual a diferença do envelopamento comum?",
                                                "O PPF é feito de Poliuretano Termoplástico (TPU) de alta espessura e flexibilidade, projetado para absorver impactos físicos de pedradas de estrada. O vinil comum apenas altera a cor e protege contra riscos muito leves."
                                    ],
                                    [
                                                "Como funciona a autocura (Self-Healing)?",
                                                "A camada superior da película é composta por polímeros elásticos que se reorganizam ao receber calor (sol ou soprador), fechando riscos superficiais na hora."
                                    ],
                                    [
                                                "O PPF amarela com o tempo?",
                                                "Trabalhamos exclusivamente com marcas líderes de PPF com tecnologia TPU alemã e proteção UV, garantindo resistência total contra amarelamento ou ressecamento por até 10 anos."
                                    ],
                                    [
                                                "Pode ser removido sem estragar a pintura?",
                                                "Sim. O adesivo do PPF de alta qualidade é desenvolvido para não danificar o verniz original de fábrica na hora da remoção, mantendo o carro intacto."
                                    ],
                                    [
                                                "Quanto tempo dura a instalação completa?",
                                                "Um envelopamento de PPF completo leva de 3 a 5 dias úteis, devido à necessidade de desmontagem cuidadosa de frisos e lavagem detalhada de frestas."
                                    ]
                        ]
            },
            "site_papel_parede": {
                        "pt": {
                                    "title": "DecoraWall | Instalação de Papel de Parede e Ripados",
                                    "headerCta": "Orçamento de Instalação",
                                    "navServicesLabel": "Serviços",
                                    "heroBadge": "Decoração de Interiores Rápida",
                                    "heroTitle": "TRANSFORME SUAS PAREDES COM <br><span class=\"text-gradient\">PAPEL DE PAREDE E RIPADOS.</span>",
                                    "heroDesc": "Instalação sem bolhas de papéis de parede vinílicos nacionais e importados, painéis ripados de poliuretano e molduras clássicas Boiserie.",
                                    "heroSecondary": "Modelos",
                                    "servicesTitle": "Especialidades",
                                    "faqBadge": "FAQ",
                                    "faqTitle": "Perguntas comuns sobre instalação.",
                                    "faqDesc": "Tire suas dúvidas sobre preparação de paredes com umidade, cálculo de rolos e tempo de secagem da cola.",
                                    "contactBadge": "Primeiro contato",
                                    "contactTitle": "Planeje sua nova parede",
                                    "contactDesc": "Informe as medidas das paredes e o tipo de material. O resumo vai direto para nosso WhatsApp.",
                                    "heroCardTitle": "Aplicação Perfeita",
                                    "heroCardDesc": "Instaladores com alinhamento milimétrico de estampas",
                                    "heroPanelTop": "Instaladores Experientes",
                                    "heroPanelMain": "Sem Sujar a Casa",
                                    "heroPanelBottom": "Cola Atóxica e Sem Cheiro",
                                    "areaLabel": "Material escolhido",
                                    "areaOptions": {
                                                "papel_parede": "Papel de Parede (Vinílico / TNT / Tecido)",
                                                "painel_ripado": "Painel Ripado (EVA / Poliuretano)",
                                                "boiserie": "Molduras Boiserie (Clássico / Moderno)",
                                                "outro": "Outro Serviço"
                                    },
                                    "urgencyLabel": "Status das paredes",
                                    "urgencyOptions": {
                                                "pronto_liso": "Paredes lisas e já pintadas",
                                                "reboco_textura": "Paredes com textura / Reboco cru",
                                                "umidade_infiltra": "Paredes com problemas de infiltração/umidade"
                                    },
                                    "summaryLabel": "Dimensões das Paredes",
                                    "summaryPlaceholder": "Informe a largura e a altura de cada parede que deseja decorar e se você já possui os rolos de papel de parede comprados.",
                                    "serviceCards": [
                                                {
                                                            "title": "Papel de Parede",
                                                            "description": "Instalação de papéis de parede importados de alto padrão, garantindo emendas invisíveis e corte perfeito em tomadas e frisos."
                                                },
                                                {
                                                            "title": "Painéis Ripados",
                                                            "description": "Aplicação rápida de ripas modernas em paredes de cabeceira ou painéis de TV, dando profundidade e elegância ao cômodo."
                                                },
                                                {
                                                            "title": "Boiserie Clássico",
                                                            "description": "Instalação de molduras clássicas francesas de poliuretano com alinhamento e calafetação impecáveis para pintura posterior."
                                                }
                                    ],
                                    "locationBadge": "Onde Atendemos",
                                    "locationTitle": "Visitas técnicas e consultoria local.",
                                    "locationDesc": "Agendamos visitas técnicas rápidas para avaliar a qualidade da parede e conferir as medidas exatas antes de aplicar a cola.",
                                    "faq": [
                                                [
                                                            "Como calcular a quantidade de rolos necessária?",
                                                            "Geralmente, um rolo padrão de 53cm x 10m cobre cerca de 4,5m² de parede, considerando as perdas para bater as estampas dos desenhos. Nós fazemos o cálculo exato para você no WhatsApp."
                                                ],
                                                [
                                                            "Pode aplicar papel de parede sobre infiltração?",
                                                            "Não recomendamos. Qualquer foco de umidade ou infiltração deve ser tratado previamente, pois a umidade fará a cola descolar e causará mofo sob o papel."
                                                ],
                                                [
                                                            "A cola deixa cheiro ruim na casa?",
                                                            "Não. Usamos cola especial em pós à base de carboximetilcelulose de excelente qualidade, totalmente sem cheiro, atóxica e que não mancha móveis ou tapetes."
                                                ],
                                                [
                                                            "Vocês instalam papel de parede no teto?",
                                                            "Sim, realizamos a aplicação técnica de papéis de parede no teto com equipes preparadas e equipamentos de apoio necessários."
                                                ],
                                                [
                                                            "Quanto tempo dura a instalação em um quarto?",
                                                            "Uma parede de tamanho padrão é instalada em cerca de 2 a 3 horas. Quartos inteiros costumam ser finalizados no mesmo dia."
                                                ]
                                    ]
                        },
                        "en": {
                                    "title": "DecoraWall | Wallpaper & Slat Wall Installation",
                                    "headerCta": "Get Installation Quote",
                                    "navServicesLabel": "Services",
                                    "heroBadge": "Express Wall Makeovers",
                                    "heroTitle": "TRANSFORM YOUR WALLS WITH <br><span class=\"text-gradient\">WALLPAPER AND WOOD SLATS.</span>",
                                    "heroDesc": "Bubble-free installation of national and imported vinyl wallpapers, polyurethane slat walls, and classic Boiserie frames.",
                                    "heroSecondary": "Models",
                                    "servicesTitle": "Specialties",
                                    "faqBadge": "FAQ",
                                    "faqTitle": "Common questions about installation.",
                                    "faqDesc": "Get answers about damp wall prep, roll calculations, and glue drying times.",
                                    "contactBadge": "First contact",
                                    "contactTitle": "Plan your new wall",
                                    "contactDesc": "Specify wall dimensions and your choice of material. The summary goes straight to our WhatsApp.",
                                    "heroCardTitle": "Seamless Application",
                                    "heroCardDesc": "Installers with millimeter alignment of patterns",
                                    "heroPanelTop": "Experienced Installers",
                                    "heroPanelMain": "No Mess at Home",
                                    "heroPanelBottom": "Odorless & Non-Toxic Glue",
                                    "areaLabel": "Material chosen",
                                    "areaOptions": {
                                                "papel_parede": "Wallpaper (Vinyl / Non-Woven / Fabric)",
                                                "painel_ripado": "Slat Wall (EVA / Polyurethane)",
                                                "boiserie": "Boiserie Frames (Classic / Modern)",
                                                "outro": "Other Service"
                                    },
                                    "urgencyLabel": "Wall condition",
                                    "urgencyOptions": {
                                                "pronto_liso": "Smooth, pre-painted walls",
                                                "reboco_textura": "Textured / Raw plaster walls",
                                                "umidade_infiltra": "Walls with moisture/damp issues"
                                    },
                                    "summaryLabel": "Wall dimensions",
                                    "summaryPlaceholder": "Specify estimated width and height of each wall to decorate and if you already purchased the wallpaper rolls.",
                                    "serviceCards": [
                                                {
                                                            "title": "Wallpaper Hanging",
                                                            "description": "Hanging of imported high-end wallpapers, ensuring invisible seams and perfect trimming around outlets and trims."
                                                },
                                                {
                                                            "title": "Slat Wall Panels",
                                                            "description": "Fast installation of modern slatted walls for bed backdrops or TV setups, adding texture and depth to your spaces."
                                                },
                                                {
                                                            "title": "Classic Boiserie",
                                                            "description": "Installation of classic French polyurethane wall frames with clean miter joints and caulking ready for paint."
                                                }
                                    ],
                                    "locationBadge": "Lounge",
                                    "locationTitle": "Technical visits & local support.",
                                    "locationDesc": "We schedule quick technical visits to evaluate wall smoothness and double-check measurements before pasting.",
                                    "faq": [
                                                [
                                                            "How do I calculate the number of wallpaper rolls?",
                                                            "Generally, a standard roll (21 inches x 33 feet) covers about 50 square feet of wall space, considering pattern matching wastage. We calculate the exact amount for you on WhatsApp."
                                                ],
                                                [
                                                            "Can wallpaper be applied on damp walls?",
                                                            "We do not recommend it. Any dampness or leak source must be repaired first, as moisture will dissolve the paste and cause mold under the wallpaper."
                                                ],
                                                [
                                                            "Does the glue smell bad?",
                                                            "No. We use a premium starch-based powder paste that is completely odorless, non-toxic, and won't stain your furniture or rugs."
                                                ],
                                                [
                                                            "Do you install wallpaper on ceilings?",
                                                            "Yes, we perform specialized ceiling wallpaper installations with dedicated scaffolding and experienced crews."
                                                ],
                                                [
                                                            "How long does it take to wallpaper a bedroom?",
                                                            "A single standard accent wall takes about 2 to 3 hours. Full bedrooms are usually completed within the same day."
                                                ]
                                    ]
                        },
                        "es": {
                                    "title": "DecoraWall | Instalación de Papel Pintado y Ripados",
                                    "headerCta": "Presupuesto de Instalación",
                                    "navServicesLabel": "Servicios",
                                    "heroBadge": "Decoración Rápida de Interiores",
                                    "heroTitle": "TRANSFORMA TUS PAREDES CON <br><span class=\"text-gradient\">PAPEL PINTADO Y RIPADOS.</span>",
                                    "heroDesc": "Instalación sin burbujas de papeles pintados vinílicos, paneles ripados de poliuretano y molduras de Boiserie.",
                                    "heroSecondary": "Modelos",
                                    "servicesTitle": "Especialidades",
                                    "faqBadge": "Preguntas Frecuentes",
                                    "faqTitle": "Preguntas comunes sobre la instalación.",
                                    "faqDesc": "Resuelva sus dudas sobre cálculo de rollos y tiempos de secado de la cola.",
                                    "contactBadge": "Primer contacto",
                                    "contactTitle": "Planifica tu nueva pared",
                                    "contactDesc": "Informa las medidas de las paredes y el material. El resumen va directo a WhatsApp.",
                                    "heroCardTitle": "Aplicación Sin Burbujas",
                                    "heroCardDesc": "Instaladores con alineación milimétrica de estampados",
                                    "heroPanelTop": "Instaladores Expertos",
                                    "heroPanelMain": "Sin Ensuciar la Casa",
                                    "heroPanelBottom": "Cola Sin Olor y No Tóxica",
                                    "areaLabel": "Material elegido",
                                    "areaOptions": {
                                                "papel_parede": "Papel Pintado (Vinílico / TNT / Tela)",
                                                "painel_ripado": "Panel Ripado (EVA / Poliuretano)",
                                                "boiserie": "Molduras Boiserie (Clásico / Moderno)",
                                                "outro": "Otro Servicio"
                                    },
                                    "urgencyLabel": "Estado de las paredes",
                                    "urgencyOptions": {
                                                "pronto_liso": "Paredes lisas y ya pintadas",
                                                "reboco_textura": "Paredes con textura / Yeso bruto",
                                                "umidade_infiltra": "Paredes con problemas de humedad/filtración"
                                    },
                                    "summaryLabel": "Medidas de las Paredes",
                                    "summaryPlaceholder": "Informa el ancho y alto de cada pared a decorar y si ya tienes comprados los rollos de papel.",
                                    "serviceCards": [
                                                {
                                                            "title": "Papel Pintado",
                                                            "description": "Instalación de papeles importados de alta calidad, asegurando uniones invisibles y cortes limpios en enchufes."
                                                },
                                                {
                                                            "title": "Paneles Ripados",
                                                            "description": "Aplicación rápida de listones modernos en cabeceras o paneles de TV, dando elegancia a la habitación."
                                                },
                                                {
                                                            "title": "Boiserie Clásico",
                                                            "description": "Instalación de molduras francesas de poliuretano con juntas a inglete limpias y listas para pintar."
                                                }
                                    ],
                                    "locationBadge": "Ubicación",
                                    "locationTitle": "Visitas técnicas y consultoría.",
                                    "locationDesc": "Programamos visitas técnicas para verificar el estado de la pared y tomar las medidas exactas.",
                                    "faq": [
                                                [
                                                            "¿Cómo calculo la cantidad de rollos necesarios?",
                                                            "Generalmente, un rollo estándar (53cm x 10m) cubre unos 4,5m² de pared, considerando las pérdidas por cuadrar los dibujos. Nosotros lo calculamos por ti."
                                                ],
                                                [
                                                            "¿Se puede instalar papel pintado sobre paredes húmedas?",
                                                            "No lo recomendamos. Cualquier foco de humedad debe tratarse previamente, de lo contrario la cola se despegará y aparecerá moho."
                                                ],
                                                [
                                                            "¿La cola deja olor?",
                                                            "No. Usamos colas especiales a base de almidón en polvo que son inodoras, no tóxicas y no manchan suelos ni alfombras."
                                                ],
                                                [
                                                            "¿Instalan papel pintado en techos?",
                                                            "Sí, realizamos aplicaciones técnicas en techos con equipos de apoyo y andamios adecuados."
                                                ],
                                                [
                                                            "¿Cuánto tarda la instalación?",
                                                            "Una pared de acento estándar se instala en 2 o 3 horas. Habitaciones completas se finalizan en el día."
                                                ]
                                    ]
                        }
            }
},
        site_afiador: {
            "pt": {
                        "title": "Afiart | Afiação Profissional de Lâminas",
                        "headerCta": "Orçamento de Afiação",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Afiação de Alta Precisão",
                        "heroTitle": "RECUPERE O FIO CIRÚRGICO DAS <br><span class=\"text-gradient\">SUAS LÂMINAS E FERRAMENTAS.</span>",
                        "heroDesc": "Afiação especializada para alicates de manicure, tesouras de cabelo, facas de alta gastronomia e lâminas de corte industrial.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas sobre afiação técnica.",
                        "faqDesc": "Tire suas dúvidas sobre conservação de alicates, tipos de afiação e restauração de lâminas danificadas.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Selecione as ferramentas",
                        "contactDesc": "Informe o tipo e a quantidade de ferramentas para afiar. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Fio Cirúrgico",
                        "heroCardDesc": "Afiação refrigerada que não destempera o aço das ferramentas",
                        "heroPanelTop": "Afiadores Especialistas",
                        "heroPanelMain": "Precisão Microscópica",
                        "heroPanelBottom": "Polimento de Fio em Couro (Strop)",
                        "areaLabel": "Tipo de ferramenta",
                        "areaOptions": {
                                    "manicure": "Alicates de Manicure / Espátulas",
                                    "gastronomia": "Facas Gourmet / Chef / Churrasco",
                                    "beleza": "Tesouras de Cabelo / Tosa",
                                    "outro": "Outro Serviço"
                        },
                        "urgencyLabel": "Quantidade estimada",
                        "urgencyOptions": {
                                    "pouco": "Poucas peças (1 a 5 ferramentas)",
                                    "medio": "Lote médio (6 a 15 ferramentas)",
                                    "grande": "Lote grande / Comercial (15+ ferramentas)"
                        },
                        "summaryLabel": "Estado das Ferramentas",
                        "summaryPlaceholder": "Informe se há dentes nas lâminas, alicates tortos ou se precisa de restauração completa de fios antigos.",
                        "serviceCards": [
                                    {
                                                "title": "Alicates de Manicure",
                                                "description": "Afiação fina e precisa que garante corte suave sem puxar a pele, com alinhamento perfeito de pontas."
                                    },
                                    {
                                                "title": "Facas de Alta Gastronomia",
                                                "description": "Afiação com pedras de grãos altíssimos, polimento do fio e teste de corte preciso em legumes e carnes."
                                    },
                                    {
                                                "title": "Tesouras Profissionais",
                                                "description": "Afiação de tesouras fio navalha ou laser de cabeleireiros, garantindo o corte perfeito e suave."
                                    }
                        ],
                        "locationBadge": "Onde Fica",
                        "locationTitle": "Visite nossa oficina técnica.",
                        "locationDesc": "Laboratório equipado com rebolos refrigerados a água e lixadeiras industriais específicas para cutelaria.",
                        "faq": [
                                    [
                                                "O alicate de manicure dura quanto tempo afiado?",
                                                "Com uso correto e esterilização adequada, a afiação de um alicate de boa qualidade (inox) dura de 30 a 50 atendimentos de manicure."
                                    ],
                                    [
                                                "A afiação desgasta muito a ferramenta?",
                                                "Utilizamos rebolos finos refrigerados que removem apenas a camada microscópica danificada do aço, aumentando a vida útil da sua ferramenta."
                                    ],
                                    [
                                                "Consertam alicates com pontas tortas?",
                                                "Sim. Realizamos o desempeno e alinhamento de pontas antes de iniciar o processo de afiação fina."
                                    ],
                                    [
                                                "Como enviar minhas ferramentas?",
                                                "Você pode trazer diretamente à nossa oficina ou solicitar nosso serviço de coleta expressa (leva e traz) para lotes acima de 10 peças."
                                    ],
                                    [
                                                "Vocês afiam ferramentas industriais?",
                                                "Sim. Afiamos serras circulares, fresas de CNC e facas de guilhotina industrial sob consulta técnica prévia."
                                    ]
                        ]
            },
            "en": {
                        "title": "Afiart | Professional Sharpening Services",
                        "headerCta": "Get Sharpening Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "High-Precision Sharpening",
                        "heroTitle": "RESTORE THE SURGICAL EDGE OF <br><span class=\"text-gradient\">YOUR BLADES AND TOOLS.</span>",
                        "heroDesc": "Specialized sharpening for manicure nippers, hair shears, gourmet chef knives, and industrial cutting blades.",
                        "heroSecondary": "Services",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about precision sharpening.",
                        "faqDesc": "Get answers about tool care, sharpening methods, and restoration of damaged edges.",
                        "contactBadge": "First contact",
                        "contactTitle": "Select your tools",
                        "contactDesc": "Specify tool types and quantities. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Surgical Edge",
                        "heroCardDesc": "Water-cooled sharpening preserving steel temper",
                        "heroPanelTop": "Master Bladesmiths",
                        "heroPanelMain": "Microscopic Precision",
                        "heroPanelBottom": "Leather Strop Fining & Polishing",
                        "areaLabel": "Tool type",
                        "areaOptions": {
                                    "manicure": "Manicure Nippers / Pushers",
                                    "gastronomia": "Gourmet / Chef / BBQ Knives",
                                    "beleza": "Hair / Pet Grooming Shears",
                                    "outro": "Other Service"
                        },
                        "urgencyLabel": "Estimated quantity",
                        "urgencyOptions": {
                                    "pouco": "Few pieces (1 to 5 tools)",
                                    "medio": "Medium batch (6 to 15 tools)",
                                    "grande": "Large batch / Commercial (15+ tools)"
                        },
                        "summaryLabel": "Tool condition",
                        "summaryPlaceholder": "Specify if there are chipped edges, bent nippers, or if you need full restoration of old blades.",
                        "serviceCards": [
                                    {
                                                "title": "Manicure Nippers",
                                                "description": "Fine, precise sharpening ensuring clean cuts without pulling skin, featuring perfect tip alignment."
                                    },
                                    {
                                                "title": "Gourmet Chef Knives",
                                                "description": "Sharpening with high-grit stones and leather stropping for clean slicing of vegetables and meats."
                                    },
                                    {
                                                "title": "Professional Shears",
                                                "description": "Sharpening of convex or bevel edge hair styling shears, ensuring smooth cuts without bending hair."
                                    }
                        ],
                        "locationBadge": "Our Shop",
                        "locationTitle": "Visit our technical workshop.",
                        "locationDesc": "Workshop equipped with water-cooled wheels and industrial grinders specific for fine cutlery.",
                        "faq": [
                                    [
                                                "How long does a nipper stay sharp?",
                                                "With proper use and sterilization, a high-quality stainless steel nipper sharpening lasts for 30 to 50 manicure sessions."
                                    ],
                                    [
                                                "Does sharpening shorten tool lifespan?",
                                                "We use fine-grit water-cooled wheels that remove only a microscopic layer of damaged steel, preserving your tools."
                                    ],
                                    [
                                                "Can you fix bent nipper tips?",
                                                "Yes. We perform alignment and tip correction before starting the actual sharpening process."
                                    ],
                                    [
                                                "How can I send my tools?",
                                                "You can drop them off at our shop or request our pickup & delivery service for batches above 10 pieces."
                                    ],
                                    [
                                                "Do you sharpen industrial blades?",
                                                "Yes. We sharpen circular saw blades, CNC router bits, and industrial paper cutter blades under prior technical review."
                                    ]
                        ]
            },
            "es": {
                        "title": "Afiart | Afilado Técnico Profesional",
                        "headerCta": "Presupuesto de Afilado",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Afilado de Alta Precisión",
                        "heroTitle": "RECUPERA EL FILO QUIRÚRGICO DE <br><span class=\"text-gradient\">TUS HOJAS Y HERRAMIENTAS.</span>",
                        "heroDesc": "Afilado especializado de alicates de manicura, tijeras de peluquería, cuchillos gourmet de chef y hojas industriales.",
                        "heroSecondary": "Servicios",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre afilado técnico.",
                        "faqDesc": "Resuelva sus dudas sobre la conservación de alicates y la restauración de hojas dañadas.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Selecciona las herramientas",
                        "contactDesc": "Informa el tipo y la cantidad de herramientas a afilar. El resumo va directo a nuestro WhatsApp.",
                        "heroCardTitle": "Filo Quirúrgico",
                        "heroCardDesc": "Afilado refrigerado por agua que no destempla el acero",
                        "heroPanelTop": "Afiladores Especialistas",
                        "heroPanelMain": "Precisión Microscópica",
                        "heroPanelBottom": "Pulido de Filo en Asentador de Cuero",
                        "areaLabel": "Tipo de herramienta",
                        "areaOptions": {
                                    "manicure": "Alicates de Manicura / Espátulas",
                                    "gastronomia": "Cuchillos de Chef / Barbacoa",
                                    "beleza": "Tijeras de Cabello / Peluquería",
                                    "outro": "Otro Servicio"
                        },
                        "urgencyLabel": "Cantidad estimada",
                        "urgencyOptions": {
                                    "pouco": "Pocas piezas (1 a 5 herramientas)",
                                    "medio": "Lote medio (6 a 15 herramientas)",
                                    "grande": "Lote grande / Comercial (15+ herramientas)"
                        },
                        "summaryLabel": "Estado de las Herramientas",
                        "summaryPlaceholder": "Informa si hay dientes en las hojas, puntas dobladas o si requiere restauración de filos viejos.",
                        "serviceCards": [
                                    {
                                                "title": "Alicates de Manicura",
                                                "description": "Afilado fino y preciso que garantiza corte suave sin tirar de la piel, con alineación perfecta de puntas."
                                    },
                                    {
                                                "title": "Cuchillos de Cocina Finos",
                                                "description": "Afilado con piedras de grano fino y pulido en cuero para cortes perfectos en verduras y carnes."
                                    },
                                    {
                                                "title": "Tijeras Profesionales",
                                                "description": "Afilado de tijeras de filo navaja o láser de peluqueros, garantizando el corte perfecto y suave."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Visita nuestro taller técnico.",
                        "locationDesc": "Laboratorio equipado con muelas refrigeradas por agua y lijadoras industriales de cuchillería.",
                        "faq": [
                                    [
                                                "¿Cuánto tiempo dura afilado un alicate?",
                                                "Con uso y esterilización correctos, el afilado de un alicate de acero inoxidable dura de 30 a 50 servicios de manicura."
                                    ],
                                    [
                                                "¿El afilado desgasta mucho la herramienta?",
                                                "Utilizamos muelas refrigeradas que eliminan solo una capa microscópica del metal dañado, prolongando la vida de tu herramienta."
                                    ],
                                    [
                                                "¿Reparan puntas de alicates dobladas?",
                                                "Sí. Realizamos el enderezado y la alineación de las puntas antes de iniciar el proceso de afilado fino."
                                    ],
                                    [
                                                "¿Cómo puedo enviar mis herramientas?",
                                                "Puedes traerlas a nuestro taller o solicitar recogida a domicilio para lotes mayores a 10 piezas."
                                    ],
                                    [
                                                "¿Afilan cuchillas industriales?",
                                                "Sí. Afilamos sierras circulares, fresas de CNC y cuchillas de cizallas industriales bajo consulta previa."
                                    ]
                        ]
            }
},
        site_chopperia: {
            "pt": {
                        "title": "Beer House | Chopperia e Barzinho Gourmet",
                        "headerCta": "Reservar / Pedir",
                        "navServicesLabel": "Cardápio",
                        "heroBadge": "Chopp Gelado e Espetinhos Premium",
                        "heroTitle": "O HAPPY HOUR PERFEITO COM CHOPP <br><span class=\"text-gradient\">TRINCANDO DE GELADO.</span>",
                        "heroDesc": "Variedade de chopps artesanais locais, espetinhos suculentos assados na brasa, porções quentes crocantes e drinks autorais exclusivos.",
                        "heroSecondary": "Nosso Cardápio",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Perguntas frequentes sobre nossa casa.",
                        "faqDesc": "Tire suas dúvidas sobre reservas de mesas, comemoração de aniversários e nossa variedade de chopps.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Faça sua reserva ou pedido",
                        "contactDesc": "Informe a quantidade de pessoas para reserva ou monte seu pedido de espetos. O resumo vai para nosso WhatsApp.",
                        "heroCardTitle": "Chopp na Caneca",
                        "heroCardDesc": "Servido em canecas congeladas mantendo a temperatura ideal",
                        "heroPanelTop": "Espetos na Brasa",
                        "heroPanelMain": "Carnes Nobres",
                        "heroPanelBottom": "Música ao Vivo aos Fins de Semana",
                        "areaLabel": "Escolha a opção",
                        "areaOptions": {
                                    "reserva": "Reservar Mesa (Aniversário / Evento)",
                                    "happy_hour": "Promoções do Happy Hour",
                                    "delivery": "Delivery de Porções e Espetos",
                                    "outro": "Outro Assunto"
                        },
                        "urgencyLabel": "Quantidade de pessoas",
                        "urgencyOptions": {
                                    "individual": "Individual / Casal (1 a 2 pessoas)",
                                    "grupo": "Grupo pequeno (3 a 6 pessoas)",
                                    "evento": "Grupo grande / Evento (7+ pessoas)"
                        },
                        "summaryLabel": "Detalhes da Reserva ou Pedido",
                        "summaryPlaceholder": "Informe a data, horário estimado da reserva ou quais espetinhos (carne, queijo coalho, coração) e bebidas deseja pedir.",
                        "serviceCards": [
                                    {
                                                "title": "Chopp Artesanal",
                                                "description": "Lagers, IPAs e chopps de vinho servidos direto da chopeira regulada com colarinho cremoso perfeito."
                                    },
                                    {
                                                "title": "Churrasquinho na Brasa",
                                                "description": "Espetos selecionados de picanha, medalhão com bacon, queijo coalho e pão de alho assados no ponto correto."
                                    },
                                    {
                                                "title": "Drinks Autorais",
                                                "description": "Carta de drinks clássicos (Gin Tônica, Caipirinhas) e combinações exclusivas preparadas por nossos bartenders."
                                    }
                        ],
                        "locationBadge": "Onde Fica",
                        "locationTitle": "Venha nos visitar hoje mesmo.",
                        "locationDesc": "Localizado na principal avenida gastronômica, com estacionamento fácil e área externa super agradável.",
                        "faq": [
                                    [
                                                "Como funciona a reserva para aniversário?",
                                                "Oferecemos descontos exclusivos para grupos e uma rodada de chopp por conta da casa para o aniversariante com mesa reservada acima de 10 convidados."
                                    ],
                                    [
                                                "Vocês cobram couvert artístico?",
                                                "Sim, cobramos um valor fixo de couvert artístico apenas nos dias de música ao vivo (quinta a sábado). O valor é informado na entrada."
                                    ],
                                    [
                                                "Quais os estilos de chopp disponíveis?",
                                                "Trabalhamos de forma fixa com Pilsen gelado e temos 3 torneiras rotativas com cervejas especiais (IPA, Stout e Weiss)."
                                    ],
                                    [
                                                "Posso pedir os espetinhos assados para viagem?",
                                                "Sim! Montamos embalagens especiais de alumínio que mantêm o calor dos espetinhos e porções para você saborear em casa."
                                    ],
                                    [
                                                "Vocês aceitam cartões corporativos?",
                                                "Sim, aceitamos todas as principais bandeiras de débito, crédito e os principais vales-refeição do mercado."
                                    ]
                        ]
            },
            "en": {
                        "title": "Beer House | Craft Beer & Taproom",
                        "headerCta": "Book Table / Order",
                        "navServicesLabel": "Menu",
                        "heroBadge": "Cold Beer & Premium Skewers",
                        "heroTitle": "THE PERFECT HAPPY HOUR WITH <br><span class=\"text-gradient\">ICE-COLD DRAFT BEER.</span>",
                        "heroDesc": "Local craft beers on tap, juicy charcoal-grilled skewers, crispy hot portions, and signature drinks made by our bartenders.",
                        "heroSecondary": "Our Menu",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about our pub.",
                        "faqDesc": "Get answers about table bookings, birthday packages, and draft beer selections.",
                        "contactBadge": "First contact",
                        "contactTitle": "Book your table or order",
                        "contactDesc": "Select party size or assemble your skewers order. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Beer Mug",
                        "heroCardDesc": "Served in frozen mugs keeping the ideal temperature",
                        "heroPanelTop": "Charcoal Grill",
                        "heroPanelMain": "Premium Meats",
                        "heroPanelBottom": "Live Music on Weekends",
                        "areaLabel": "Select option",
                        "areaOptions": {
                                    "reserva": "Book a Table (Birthday / Event)",
                                    "happy_hour": "Happy Hour Promotions",
                                    "delivery": "Portions & Skewers Delivery",
                                    "outro": "Other Inquiry"
                        },
                        "urgencyLabel": "Party size",
                        "urgencyOptions": {
                                    "individual": "Individual / Couple (1-2 people)",
                                    "grupo": "Small group (3-6 people)",
                                    "evento": "Large group / Event (7+ people)"
                        },
                        "summaryLabel": "Booking or Order details",
                        "summaryPlaceholder": "Specify date, estimated time for booking, or which skewers (beef, chicken, cheese) and drinks you want to order.",
                        "serviceCards": [
                                    {
                                                "title": "Draft Beer",
                                                "description": "Lagers, IPAs, and red beers served straight from our taproom with a perfect thick foam head."
                                    },
                                    {
                                                "title": "Charcoal Skewers",
                                                "description": "Handpicked sirloin, bacon wraps, halloumi cheese, and garlic bread grilled to perfection over open charcoal."
                                    },
                                    {
                                                "title": "Signature Cocktails",
                                                "description": "A menu of classic cocktails (Gin Tonic, Caipirinhas) and exclusive mixes prepared by our bartenders."
                                    }
                        ],
                        "locationBadge": "Lounge",
                        "locationTitle": "Visit us today.",
                        "locationDesc": "Located in the main culinary avenue, featuring easy parking and a highly cozy outdoor seating area.",
                        "faq": [
                                    [
                                                "How do birthday bookings work?",
                                                "We offer discounts for groups and a free draft beer round for the host on bookings above 10 guests."
                                    ],
                                    [
                                                "Is there a live music cover charge?",
                                                "Yes, a flat cover fee applies only on live music nights (Thursday through Saturday), which is informed at the entrance."
                                    ],
                                    [
                                                "Which beer styles are available?",
                                                "We permanently serve our ice-cold Pilsen draft and have 3 rotating taps with special craft beers (IPA, Stout, and Weiss)."
                                    ],
                                    [
                                                "Can I order grilled skewers to go?",
                                                "Yes! We wrap them in custom aluminum insulation bags that preserve the skewers' temperature and juiciness for takeout."
                                    ],
                                    [
                                                "Do you accept corporate cards?",
                                                "Yes, we accept all major debit, credit, and food voucher cards."
                                    ]
                        ]
            },
            "es": {
                        "title": "Beer House | Cervecería y Bar Gourmet",
                        "headerCta": "Reservar / Pedir",
                        "navServicesLabel": "Menú",
                        "heroBadge": "Cerveza Helada y Brochetas Premium",
                        "heroTitle": "EL HAPPY HOUR PERFECTO CON CERVEZA <br><span class=\"text-gradient\">SÚPER HELADA.</span>",
                        "heroDesc": "Variedad de cervezas artesanales locales, brochetas jugosas a la parrilla, raciones calientes crujientes y cócteles exclusivos.",
                        "heroSecondary": "Menú",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Preguntas frecuentes sobre nuestro local.",
                        "faqDesc": "Tire sus dudas sobre reservas de mesas, celebraciones de cumpleaños y estilos de cerveza.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Haz tu reserva o pedido",
                        "contactDesc": "Informa la cantidad de personas para la reserva o arma tu pedido de brochetas. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Cerveza en Jarra",
                        "heroCardDesc": "Servida en jarras heladas manteniendo la temperatura ideal",
                        "heroPanelTop": "Brochetas al Carbón",
                        "heroPanelMain": "Carnes Nobles",
                        "heroPanelBottom": "Música en Vivo los Fines de Semana",
                        "areaLabel": "Elige tu opción",
                        "areaOptions": {
                                    "reserva": "Reservar Mesa (Cumpleaños / Evento)",
                                    "happy_hour": "Promociones del Happy Hour",
                                    "delivery": "Delivery de Raciones y Brochetas",
                                    "outro": "Otro Asunto"
                        },
                        "urgencyLabel": "Cantidad de personas",
                        "urgencyOptions": {
                                    "individual": "Individual / Pareja (1 a 2 personas)",
                                    "grupo": "Grupo pequeño (3 a 6 personas)",
                                    "evento": "Grupo grande / Evento (7+ personas)"
                        },
                        "summaryLabel": "Detalles de la Reserva o Pedido",
                        "summaryPlaceholder": "Informa la fecha, horario de la reserva o qué brochetas (carne, queso, chorizo) y bebidas deseas pedir.",
                        "serviceCards": [
                                    {
                                                "title": "Cervezas de Barril",
                                                "description": "Lagers, IPAs y cervezas especiales servidas directamente de nuestro barril con espuma perfecta."
                                    },
                                    {
                                                "title": "Brochetas al Carbón",
                                                "description": "Brochetas de picanha, panceta, queso y pan de ajo cocinadas a la brasa en su punto exacto."
                                    },
                                    {
                                                "title": "Cócteles de Autor",
                                                "description": "Carta de cócteles clásicos y combinaciones exclusivas preparadas por nuestros bartenders en el momento."
                                    }
                        ],
                        "locationBadge": "Ubicación",
                        "locationTitle": "Ven a visitarnos hoy mismo.",
                        "locationDesc": "Ubicado en la principal avenida gastronómica, con fácil estacionamiento y zona exterior muy agradable.",
                        "faq": [
                                    [
                                                "¿Cómo funciona la reserva para cumpleaños?",
                                                "Ofrecemos descuentos para grupos y una ronda de cerveza gratis para el cumpleañero en mesas de más de 10 invitados."
                                    ],
                                    [
                                                "¿Cobran por la música en vivo?",
                                                "Sí, cobramos un cargo fijo por espectáculo solo los días con música en vivo (de jueves a sábado)."
                                    ],
                                    [
                                                "¿Qué estilos de cerveza de barril tienen?",
                                                "Servimos de manera fija nuestra Pilsen helada y contamos con 3 grifos rotativos de cervezas artesanales especiales (IPA, Stout y Weiss)."
                                    ],
                                    [
                                                "¿Puedo pedir las brochetas para llevar?",
                                                "¡Sí! Las empacamos en envases térmicos especiales de aluminio que conservan el calor y sabor de las brochetas."
                                    ],
                                    [
                                                "¿Aceptan tarjetas corporativas?",
                                                "Sí, aceptamos las principales tarjetas de débito, crédito y vales de alimentación del mercado."
                                    ]
                        ]
            }
},
        site_acaiteria: {
            "pt": {
                        "title": "Açaí Concept | Açaí Gourmet & Sobremesas",
                        "headerCta": "Pedir Açaí",
                        "navServicesLabel": "Copos",
                        "heroBadge": "Açaí Selecionado de Alta Qualidade",
                        "heroTitle": "O MELHOR AÇAÍ DA REGIÃO <br><span class=\"text-gradient\">COM CREMES ESPECIAIS.</span>",
                        "heroDesc": "Açaí puro cremoso batido na hora, combinado com cremes artesanais de pistache, Nutella, frutas frescas e acompanhamentos gourmet à sua escolha.",
                        "heroSecondary": "Cardápio",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas",
                        "faqTitle": "Dúvidas comuns sobre nosso açaí.",
                        "faqDesc": "Tire suas dúvidas sobre conservação no delivery, tamanhos de copos, adicionais e combos promocionais.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Monte o seu copo",
                        "contactDesc": "Escolha o tamanho do copo e adicione seus cremes e toppings preferidos. O resumo vai para nosso WhatsApp.",
                        "heroCardTitle": "Açaí Puro",
                        "heroCardDesc": "Sem adição de xaropes industriais ou corantes",
                        "heroPanelTop": "Cremes Especiais",
                        "heroPanelMain": "Pistache e Ninho",
                        "heroPanelBottom": "Frutas Frescas Cortadas na Hora",
                        "areaLabel": "Escolha o tamanho",
                        "areaOptions": {
                                    "300ml": "Copo de 300ml",
                                    "500ml": "Copo de 500ml",
                                    "700ml": "Copo de 700ml",
                                    "barca": "Barca Especial (Para compartilhar)"
                        },
                        "urgencyLabel": "Forma de entrega",
                        "urgencyOptions": {
                                    "delivery": "Quero receber em casa (Delivery)",
                                    "retirada": "Vou retirar no balcão"
                        },
                        "summaryLabel": "Cremes e Acompanhamentos Adicionais",
                        "summaryPlaceholder": "Informe quais cremes (Nutella, Leite Ninho, Pistache) e toppings (Leite em pó, banana, morango, granola) deseja incluir no seu copo.",
                        "serviceCards": [
                                    {
                                                "title": "Copos Montados",
                                                "description": "Monte seu copo em camadas alternadas de açaí e seus recheios favoritos para saborear até a última colher."
                                    },
                                    {
                                                "title": "Cremes Artesanais",
                                                "description": "Cremes premium desenvolvidos em nossa cozinha: Ninho trufado, Pistache italiano, Cupuaçu e chocolate Belga."
                                    },
                                    {
                                                "title": "Barcas de Açaí",
                                                "description": "A opção perfeita para compartilhar com a família, servida com uma generosa porção de frutas, chocolates e caldas."
                                    }
                        ],
                        "locationBadge": "Nossa Loja",
                        "locationTitle": "Venha nos visitar e saborear na hora.",
                        "locationDesc": "Ambiente climatizado, agradável e perfeito para curtir uma sobremesa gelada com a família.",
                        "faq": [
                                    [
                                                "O açaí de vocês contém glúten ou lactose?",
                                                "Nosso açaí puro é 100% natural, sem glúten e sem lactose. Contudo, alguns acompanhamentos (como cremes de leite e chocolates) contêm lactose."
                                    ],
                                    [
                                                "Como o açaí chega firme no delivery?",
                                                "Utilizamos copos térmicos selados e bolsas de gelo seco no transporte dos motoboys, garantindo que o açaí chegue firme e gelado na sua casa."
                                    ],
                                    [
                                                "Vocês usam xarope de guaraná?",
                                                "Utilizamos uma fórmula exclusiva com teor reduzido de açúcar, mantendo o sabor original e a cremosidade natural da fruta sem excesso de doçura."
                                    ],
                                    [
                                                "Quais as frutas mais pedidas?",
                                                "Morango e banana cortados na hora são os campeões, seguidos por kiwi e manga fresca."
                                    ],
                                    [
                                                "Posso pedir adicionais extras?",
                                                "Sim! Você pode selecionar quantos adicionais desejar no formulário do WhatsApp para montar o copo perfeito."
                                    ]
                        ]
            },
            "en": {
                        "title": "Açaí Concept | Gourmet Açaí & Desserts",
                        "headerCta": "Order Açaí",
                        "navServicesLabel": "Cups",
                        "heroBadge": "Premium Selected Açaí",
                        "heroTitle": "THE BEST AÇAÍ IN TOWN <br><span class=\"text-gradient\">WITH ARTISAN CREAMS.</span>",
                        "heroDesc": "Pure creamy açaí blended fresh, layered with gourmet creams like pistachio, Nutella, fresh fruits, and premium toppings of your choice.",
                        "heroSecondary": "Our Menu",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about our açaí.",
                        "faqDesc": "Get answers about delivery temperature control, cup sizes, premium toppings, and promotions.",
                        "contactBadge": "First contact",
                        "contactTitle": "Assemble your cup",
                        "contactDesc": "Choose your cup size and pick your favorite creams and toppings. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Pure Açaí",
                        "heroCardDesc": "No artificial syrups or food colorings",
                        "heroPanelTop": "Artisan Creams",
                        "heroPanelMain": "Pistachio & Milk Powder",
                        "heroPanelBottom": "Freshly Cut Fruits",
                        "areaLabel": "Select cup size",
                        "areaOptions": {
                                    "300ml": "300ml Cup (Small)",
                                    "500ml": "500ml Cup (Medium)",
                                    "700ml": "700ml Cup (Large)",
                                    "barca": "Special Boat (To share)"
                        },
                        "urgencyLabel": "Delivery method",
                        "urgencyOptions": {
                                    "delivery": "Deliver to my home",
                                    "retirada": "Pickup at store"
                        },
                        "summaryLabel": "Extra Creams and Toppings",
                        "summaryPlaceholder": "Specify which creams (Nutella, Milk Powder cream, Pistachio) and toppings (banana, strawberry, granola) you want in your cup.",
                        "serviceCards": [
                                    {
                                                "title": "Layered Cups",
                                                "description": "Assemble your cup in alternating layers of rich açaí and your favorite fillings to enjoy every single scoop."
                                    },
                                    {
                                                "title": "Homemade Creams",
                                                "description": "Premium creams developed in our kitchen: Truffled Milk Powder, Italian Pistachio, and Belgian chocolate."
                                    },
                                    {
                                                "title": "Açaí Boats",
                                                "description": "The perfect option for sharing, served with a generous variety of fresh fruits, chocolates, and syrups."
                                    }
                        ],
                        "locationBadge": "Our Store",
                        "locationTitle": "Visit our store to enjoy it fresh.",
                        "locationDesc": "Cozy air-conditioned space, perfect for sharing a cold dessert with your family.",
                        "faq": [
                                    [
                                                "Is your açaí gluten-free and dairy-free?",
                                                "Our pure açaí is 100% natural, gluten-free, and dairy-free. However, some toppings (like milk creams and chocolates) contain dairy."
                                    ],
                                    [
                                                "How does the açaí stay frozen during delivery?",
                                                "We use sealed thermal cups and ice packs in our delivery bags, ensuring the açaí arrives firm and cold at your door."
                                    ],
                                    [
                                                "Do you use heavy guarana syrup?",
                                                "We use a customized recipe with reduced sugar, preserving the natural fruit flavor and creamy texture without excess sweetness."
                                    ],
                                    [
                                                "Which fruits are the most popular?",
                                                "Morango (strawberry) and banana cut fresh daily are the top favorites, followed by kiwi and fresh mango."
                                    ],
                                    [
                                                "Can I order extra toppings?",
                                                "Yes! You can choose as many extra toppings as you want in the WhatsApp form to build your perfect dessert."
                                    ]
                        ]
            },
            "es": {
                        "title": "Açaí Concept | Açaí Gourmet y Postres",
                        "headerCta": "Pedir Açaí",
                        "navServicesLabel": "Copas",
                        "heroBadge": "Açaí Seleccionado de Alta Calidad",
                        "heroTitle": "EL MEJOR AÇAÍ DE LA CIUDAD <br><span class=\"text-gradient\">CON CREMAS ARTESANALES.</span>",
                        "heroDesc": "Açaí puro y cremoso batido al momento, combinado con cremas de pistacho, Nutella, frutas frescas y toppings a tu elección.",
                        "heroSecondary": "Menú",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Dúvidas comunes sobre nuestro açaí.",
                        "faqDesc": "Resuelva sus dudas sobre la temperatura de envío, tamaños de copas y combos promocionales.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Arma tu copa",
                        "contactDesc": "Elige el tamaño de copa y añade tus cremas y toppings favoritos. El resumen va directo a nuestro WhatsApp.",
                        "heroCardTitle": "Açaí Puro",
                        "heroCardDesc": "Sin adición de jarabes artificiales ni colorantes",
                        "heroPanelTop": "Cremas Especiales",
                        "heroPanelMain": "Pistacho y Ninho",
                        "heroPanelBottom": "Frutas Frescas Cortadas al Instante",
                        "areaLabel": "Elige el tamaño",
                        "areaOptions": {
                                    "300ml": "Copa de 300ml",
                                    "500ml": "Copa de 500ml",
                                    "700ml": "Copa de 700ml",
                                    "barca": "Barca Especial (Para compartir)"
                        },
                        "urgencyLabel": "Método de entrega",
                        "urgencyOptions": {
                                    "delivery": "Quiero recibirlo en casa (Delivery)",
                                    "retirada": "Recoger en tienda"
                        },
                        "summaryLabel": "Cremas y Acompañamientos Adicionales",
                        "summaryPlaceholder": "Informa qué cremas (Nutella, crema de leche Ninho, Pistacho) y toppings (plátano, fresa, granola) deseas incluir.",
                        "serviceCards": [
                                    {
                                                "title": "Copas en Capas",
                                                "description": "Arma tu copa en capas alternas de açaí y tus rellenos favoritos para saborear hasta la última cucharada."
                                    },
                                    {
                                                "title": "Cremas Caseras",
                                                "description": "Cremas premium desarrolladas en nuestra cocina: crema Ninho, Pistacho italiano y chocolate Belga."
                                    },
                                    {
                                                "title": "Barcas de Açaí",
                                                "description": "La opción perfecta para compartir, servida con una generosa porción de frutas, chocolates y jarabes."
                                    }
                        ],
                        "locationBadge": "Nuestra Tienda",
                        "locationTitle": "Ven a visitarnos y saborea al instante.",
                        "locationDesc": "Ambiente climatizado y agradable, perfecto para disfrutar de un postre helado con tu familia.",
                        "faq": [
                                    [
                                                "¿El açaí de ustedes contiene gluten o lactosa?",
                                                "Nuestro açaí puro es 100% natural, sin gluten y sin lactosa. Sin embargo, algunos aditamentos de leche o chocolate sí contienen lactosa."
                                    ],
                                    [
                                                "¿Cómo se mantiene firme el açaí en el delivery?",
                                                "Utilizamos vasos térmicos sellados y bolsas con gel refrigerante en el transporte, garantizando que llegue firme y helado."
                                    ],
                                    [
                                                "¿Utilizan jarabe de guaraná industrial?",
                                                "Utilizamos una receta exclusiva con azúcar reducido, manteniendo la cremosidad y el sabor natural de la fruta sin exceso de dulzor."
                                    ],
                                    [
                                                "¿Cuáles son las frutas más solicitadas?",
                                                "Fresa y plátano cortados al día son los favoritos, seguidos de kiwi y mango fresco."
                                    ],
                                    [
                                                "¿Puedo pedir ingredientes adicionales?",
                                                "¡Sí! Puedes seleccionar todos los ingredientes adicionales que desees en el formulario de WhatsApp para armar la copa perfecta."
                                    ]
                        ]
            }
},
        site_marcenaria: {
            "pt": {
                        "title": "Marcenaria Design | Móveis Planejados Sob Medida",
                        "headerCta": "Orçamento de Móveis",
                        "navServicesLabel": "Móveis",
                        "heroBadge": "Móveis Planejados de Alto Padrão",
                        "heroTitle": "MÓVEIS EXCLUSIVOS QUE TRANSFORMAM <br><span class=\"text-gradient\">SEUS AMBIENTES.</span>",
                        "heroDesc": "Projetos de cozinhas, closets, salas e escritórios sob medida, unindo design moderno, ergonomia e durabilidade vitalícia.",
                        "heroSecondary": "Nossas Linhas",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Dúvidas Frequentes",
                        "faqTitle": "Dúvidas comuns sobre móveis planejados.",
                        "faqDesc": "Tire suas dúvidas sobre materiais, ferragens, processo de projeto e montagem de móveis sob medida.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Agende seu projeto",
                        "contactDesc": "Informe os ambientes que deseja planejar e o prazo estimado. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "MDF Premium",
                        "heroCardDesc": "Chapas com proteção contra umidade e cupins",
                        "heroPanelTop": "Marceneiros Próprios",
                        "heroPanelMain": "Execução Sem Terceirizar",
                        "heroPanelBottom": "Ferragens com Amortecimento",
                        "areaLabel": "Ambiente desejado",
                        "areaOptions": {
                                    "cozinha": "Cozinha Planejada",
                                    "closet": "Closet / Dormitório",
                                    "corporativo": "Escritório / Comercial",
                                    "outro": "Outro Ambiente"
                        },
                        "urgencyLabel": "Estágio da obra",
                        "urgencyOptions": {
                                    "planta": "Tenho apenas a planta",
                                    "reforma": "Em fase de reforma / Construção",
                                    "pronto": "Ambiente pronto para medição"
                        },
                        "summaryLabel": "Detalhes dos Móveis e Medidas",
                        "summaryPlaceholder": "Informe se já possui o projeto 3D de arquiteto ou se precisa que façamos a modelagem inicial.",
                        "serviceCards": [
                                    {
                                                "title": "Cozinhas Planejadas",
                                                "description": "Aproveitamento máximo de espaço com gaveteiros aramados, portas com amortecedor e acabamentos premium."
                                    },
                                    {
                                                "title": "Closets e Quartos",
                                                "description": "Divisões internas inteligentes planejadas para sapatos, cabides longos e acessórios com iluminação LED embutida."
                                    },
                                    {
                                                "title": "Móveis Comerciais",
                                                "description": "Balcões de recepção, expositores e escritórios planejados para transmitir o profissionalismo da sua empresa."
                                    }
                        ],
                        "locationBadge": "Nosso Ateliê",
                        "locationTitle": "Venha ver de perto a qualidade.",
                        "locationDesc": "Conheça nossas amostras de padrões de MDF, cores e sistemas de ferragens importadas em nosso showroom.",
                        "faq": [
                                    [
                                                "Qual o prazo de entrega dos móveis planejados?",
                                                "Nosso prazo médio de fabricação e montagem é de 25 a 35 dias úteis após a aprovação final do projeto executivo e medição técnica no local."
                                    ],
                                    [
                                                "Vocês usam MDF ou MDP?",
                                                "Trabalhamos exclusivamente com MDF de alta densidade revestido de marcas líderes (Duratex, Arauco), garantindo maior resistência e acabamento superior."
                                    ],
                                    [
                                                "As ferragens têm garantia?",
                                                "Sim. Usamos ferragens importadas (Blum, FGVTN) com amortecimento de portas e gavetas que possuem garantia contra defeitos de fábrica."
                                    ],
                                    [
                                                "Vocês fazem a modelagem 3D?",
                                                "Sim. Desenvolvemos o projeto 3D de forma personalizada para você visualizar como ficará o ambiente antes da fabricação."
                                    ],
                                    [
                                                "Como funciona o pagamento dos móveis?",
                                                "Oferecemos condições facilitadas de sinal + parcelamento durante a fabricação ou financiamento especial de móveis planejado."
                                    ]
                        ]
            },
            "en": {
                        "title": "Carpentry Design | Custom Furniture & Cabinets",
                        "headerCta": "Get Cabinet Quote",
                        "navServicesLabel": "Furniture",
                        "heroBadge": "High-End Custom Furniture",
                        "heroTitle": "EXCLUSIVE FURNITURE TRANSFORMING <br><span class=\"text-gradient\">YOUR LIVING SPACES.</span>",
                        "heroDesc": "Tailored kitchens, closets, living rooms, and office projects combining modern design, ergonomics, and lifetime durability.",
                        "heroSecondary": "Our Lines",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common questions about custom furniture.",
                        "faqDesc": "Get answers about materials, hardware options, design stages, and installation processes.",
                        "contactBadge": "First contact",
                        "contactTitle": "Schedule your project",
                        "contactDesc": "Tell us which rooms you want to design and the estimated timeframe. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Premium MDF",
                        "heroCardDesc": "Board panels with moisture and pest protection",
                        "heroPanelTop": "In-House Carpenters",
                        "heroPanelMain": "No Third-Party Labor",
                        "heroPanelBottom": "Soft-Close Hardware",
                        "areaLabel": "Desired room",
                        "areaOptions": {
                                    "cozinha": "Custom Kitchen",
                                    "closet": "Closet / Bedroom",
                                    "corporativo": "Office / Commercial",
                                    "outro": "Other Space"
                        },
                        "urgencyLabel": "Renovation stage",
                        "urgencyOptions": {
                                    "planta": "I have blueprints only",
                                    "reforma": "Under construction / Renovation",
                                    "pronto": "Space ready for measurements"
                        },
                        "summaryLabel": "Furniture details & sizes",
                        "summaryPlaceholder": "Specify if you already have 3D designs from an architect or need us to do the initial modeling.",
                        "serviceCards": [
                                    {
                                                "title": "Custom Kitchens",
                                                "description": "Maximum space efficiency with wire drawer organizers, soft-close doors, and premium finishes."
                                    },
                                    {
                                                "title": "Closets & Bedrooms",
                                                "description": "Smart internal storage dividers planned for shoes, long hangers, and accessories with integrated LED lighting."
                                    },
                                    {
                                                "title": "Commercial Furniture",
                                                "description": "Reception desks, retail displays, and offices planned to reflect your business professionalism."
                                    }
                        ],
                        "locationBadge": "Our Shop",
                        "locationTitle": "Come check our quality in person.",
                        "locationDesc": "Discover our MDF pattern samples, color collections, and imported hardware systems in our showroom.",
                        "faq": [
                                    [
                                                "What is the delivery time for custom furniture?",
                                                "Our average manufacturing and assembly timeframe is 25 to 35 business days after final blueprint approval and local technical measurements."
                                    ],
                                    [
                                                "Do you use MDF or MDP?",
                                                "We exclusively work with premium high-density MDF from leading brands, ensuring superior durability and edge finishing."
                                    ],
                                    [
                                                "Does the hardware have a warranty?",
                                                "Yes. We use imported heavy-duty hardware (Blum, FGVTN) with soft-close mechanisms that carry a factory warranty."
                                    ],
                                    [
                                                "Do you create the 3D renders?",
                                                "Yes. We design custom 3D renders for you to visualize exactly how your spaces will look before manufacturing starts."
                                    ],
                                    [
                                                "What are the payment options?",
                                                "We offer flexible payment terms with a down payment + monthly installments during production or special financing options."
                                    ]
                        ]
            },
            "es": {
                        "title": "Carpintería de Diseño | Muebles a Medida Planeados",
                        "headerCta": "Presupuesto de Muebles",
                        "navServicesLabel": "Muebles",
                        "heroBadge": "Muebles a Medida de Alta Calidad",
                        "heroTitle": "MUEBLES EXCLUSIVOS QUE TRANSFORMAN <br><span class=\"text-gradient\">TUS AMBIENTES.</span>",
                        "heroDesc": "Proyectos de cocinas, armarios, salas y oficinas a medida, combinando diseño moderno, ergonomía y durabilidad de por vida.",
                        "heroSecondary": "Nuestras Líneas",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Dúvidas comunes sobre muebles planeados.",
                        "faqDesc": "Resuelva sus dudas sobre materiales, herrajes, proceso de diseño y montaje de sus muebles a medida.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Programa tu proyecto",
                        "contactDesc": "Informa los ambientes que deseas planificar y el plazo estimado. El resumen va directo a nuestro WhatsApp.",
                        "heroCardTitle": "MDF Premium",
                        "heroCardDesc": "Paneles con protección contra humedad y plagas",
                        "heroPanelTop": "Carpinteros Propios",
                        "heroPanelMain": "Ejecución Sin Terceros",
                        "heroPanelBottom": "Herrajes con Amortiguación",
                        "areaLabel": "Ambiente deseado",
                        "areaOptions": {
                                    "cozinha": "Cocina a Medida",
                                    "closet": "Vestidor / Dormitorio",
                                    "corporativo": "Oficina / Comercial",
                                    "outro": "Otro Ambiente"
                        },
                        "urgencyLabel": "Etapa de la obra",
                        "urgencyOptions": {
                                    "planta": "Solo tengo el plano",
                                    "reforma": "En fase de reforma / Construcción",
                                    "pronto": "Ambiente listo para medición"
                        },
                        "summaryLabel": "Detalles de Muebles y Medidas",
                        "summaryPlaceholder": "Informa si ya tienes el diseño 3D del arquitecto o si necesitas que hagamos el modelado inicial.",
                        "serviceCards": [
                                    {
                                                "title": "Cocinas a Medida",
                                                "description": "Aprovechamiento máximo del espacio con organizadores metálicos, puertas con cierre suave y acabados premium."
                                    },
                                    {
                                                "title": "Vestidores y Dormitorios",
                                                "description": "Divisiones internas inteligentes diseñadas para zapatos, perchas largas y accesorios con iluminación LED integrada."
                                    },
                                    {
                                                "title": "Muebles Comerciales",
                                                "description": "Mostradores de recepción, expositores y oficinas diseñadas para transmitir el profesionalismo de tu empresa."
                                    }
                        ],
                        "locationBadge": "Nuestro Taller",
                        "locationTitle": "Ven a ver de cerca la calidad.",
                        "locationDesc": "Conoce nuestras muestras de patrones de MDF, colores y sistemas de herrajes importados en nuestra exposición.",
                        "faq": [
                                    [
                                                "¿Cuál es el plazo de entrega de los muebles?",
                                                "Nuestro plazo promedio de fabricación y montaje es de 25 a 35 días hábiles tras la aprobación final del diseño y medición en el sitio."
                                    ],
                                    [
                                                "¿Utilizan MDF o MDP?",
                                                "Trabajamos exclusivamente con MDF de alta densidad de marcas líderes, garantizando mayor resistencia y un acabado superior."
                                    ],
                                    [
                                                "¿Los herrajes tienen garantía?",
                                                "Sí. Usamos herrajes importados de alta gama con amortiguación de puertas y cajones que cuentan con garantía de fábrica."
                                    ],
                                    [
                                                "¿Realizan el modelado 3D?",
                                                "Sí. Desarrollamos el diseño 3D de forma personalizada para que puedas visualizar cómo quedará el ambiente antes de fabricarlo."
                                    ],
                                    [
                                                "¿Cómo funciona el pago de los muebles?",
                                                "Ofrecemos condiciones facilitadas de anticipo + cuotas durante la fabricación o financiación especial de muebles a medida."
                                    ]
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
        },
        site_refrigeracao: {
            "pt": {
                        "title": "FrioTec Prime | Refrigeração Comercial e Residencial",
                        "headerCta": "Solicitar Orçamento",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Refrigeração Técnica",
                        "heroTitle": "CLIMATIZAÇÃO E REFRIGERAÇÃO <br><span class=\"text-gradient\">SEM IMPROVISO.</span>",
                        "heroDesc": "Instalação, manutenção preventiva e reparo de geladeiras, freezers, câmaras frias e sistemas de ar com diagnóstico técnico e atendimento rápido.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Dúvidas comuns sobre refrigeração.",
                        "faqDesc": "Entenda sinais de vazamento de gás, falha de compressor, limpeza preventiva e quando vale reparar ou substituir o equipamento.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Descreva o equipamento",
                        "contactDesc": "Informe modelo, sintoma e urgência. O resumo vai direto para nosso WhatsApp para triagem técnica.",
                        "heroCardTitle": "Diagnóstico Técnico",
                        "heroCardDesc": "Pressão, temperatura e consumo avaliados com precisão",
                        "heroPanelTop": "Técnico Especialista",
                        "heroPanelMain": "Reparo Seguro",
                        "heroPanelBottom": "Gás, compressor e vedação com procedimento correto",
                        "areaLabel": "Tipo de equipamento",
                        "areaOptions": {
                                    "geladeira": "Geladeira / freezer residencial",
                                    "camara": "Câmara fria / balcão refrigerado",
                                    "ar": "Ar-condicionado / split",
                                    "outro": "Outro equipamento"
                        },
                        "urgencyLabel": "Urgência",
                        "urgencyOptions": {
                                    "parado": "Equipamento parado agora",
                                    "perdendo": "Gelando pouco ou perdendo rendimento",
                                    "preventiva": "Manutenção preventiva"
                        },
                        "summaryLabel": "Sintoma e detalhes",
                        "summaryPlaceholder": "Ex: freezer não baixa de -5°C, faz barulho no compressor, formou gelo no evaporador ou vazou água.",
                        "serviceCards": [
                                    {
                                                "title": "Reparo de Geladeiras e Freezers",
                                                "description": "Troca de sensores, ventiladores, relés, borrachas, termostatos e correção de falhas que fazem o equipamento perder rendimento."
                                    },
                                    {
                                                "title": "Câmaras Frias e Balcões",
                                                "description": "Atendimento técnico para comércio, adegas, açougues e restaurantes com foco em estabilidade de temperatura e segurança dos produtos."
                                    },
                                    {
                                                "title": "Instalação e Higienização",
                                                "description": "Instalação correta, limpeza de condensadora, verificação de pressão e prevenção de vazamentos para aumentar a vida útil."
                                    }
                        ],
                        "locationBadge": "Onde Atendemos",
                        "locationTitle": "Atendimento técnico com deslocamento rápido.",
                        "locationDesc": "Nossa equipe atende residências e comércios com ferramentas de medição, manifold e peças de reposição para diagnóstico no local.",
                        "faq": [
                                    [
                                                "Colocar gás resolve sempre?",
                                                "Não. Se o sistema perdeu gás, existe vazamento. Primeiro localizamos e corrigimos o ponto de fuga para o problema não voltar."
                                    ],
                                    [
                                                "Por que minha geladeira forma gelo demais?",
                                                "Pode ser falha de sensor, resistência de degelo, ventilação interna ou vedação da porta. O diagnóstico evita trocar peças desnecessárias."
                                    ],
                                    [
                                                "Quando vale consertar o compressor?",
                                                "Depende do valor do equipamento, idade e tipo de defeito. Fazemos a análise antes de indicar troca de compressor ou substituição."
                                    ],
                                    [
                                                "Manutenção preventiva economiza energia?",
                                                "Sim. Condensadora suja, ventilador travado e borracha ruim fazem o motor trabalhar mais e aumentam o consumo."
                                    ],
                                    [
                                                "Atendem comércio com urgência?",
                                                "Sim. Priorizamos equipamentos com produtos perecíveis para reduzir perdas e restabelecer a temperatura o quanto antes."
                                    ]
                        ]
            },
            "en": {
                        "title": "FrioTec Prime | Commercial and Home Refrigeration",
                        "headerCta": "Request Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Technical Refrigeration",
                        "heroTitle": "COOLING AND REFRIGERATION <br><span class=\"text-gradient\">WITHOUT GUESSWORK.</span>",
                        "heroDesc": "Installation, preventive maintenance and repair for refrigerators, freezers, cold rooms and AC systems with technical diagnosis and fast service.",
                        "heroSecondary": "Services",
                        "servicesTitle": "Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Common refrigeration questions.",
                        "faqDesc": "Understand gas leaks, compressor issues, preventive cleaning and when repair is worth it.",
                        "contactBadge": "First contact",
                        "contactTitle": "Describe the equipment",
                        "contactDesc": "Share model, symptoms and urgency. The summary goes straight to our WhatsApp for technical triage.",
                        "heroCardTitle": "Technical Diagnosis",
                        "heroCardDesc": "Pressure, temperature and consumption checked accurately",
                        "heroPanelTop": "Specialist Technician",
                        "heroPanelMain": "Safe Repair",
                        "heroPanelBottom": "Gas, compressor and sealing done properly",
                        "areaLabel": "Equipment type",
                        "areaOptions": {
                                    "geladeira": "Home refrigerator / freezer",
                                    "camara": "Cold room / refrigerated counter",
                                    "ar": "Air conditioner / split unit",
                                    "outro": "Other equipment"
                        },
                        "urgencyLabel": "Urgency",
                        "urgencyOptions": {
                                    "parado": "Equipment is stopped now",
                                    "perdendo": "Cooling poorly or losing performance",
                                    "preventiva": "Preventive maintenance"
                        },
                        "summaryLabel": "Symptoms and details",
                        "summaryPlaceholder": "Example: freezer will not go below -5°C, compressor noise, ice on evaporator or water leak.",
                        "serviceCards": [
                                    {
                                                "title": "Refrigerator and Freezer Repair",
                                                "description": "Replacement of sensors, fans, relays, door gaskets and thermostat issues that reduce cooling performance."
                                    },
                                    {
                                                "title": "Cold Rooms and Counters",
                                                "description": "Technical service for stores, wine cellars, butcher shops and restaurants focused on stable temperature and product safety."
                                    },
                                    {
                                                "title": "Installation and Cleaning",
                                                "description": "Correct installation, condenser cleaning, pressure checks and leak prevention to extend useful life."
                                    }
                        ],
                        "locationBadge": "Service Area",
                        "locationTitle": "Fast technical on-site service.",
                        "locationDesc": "Our team serves homes and businesses with measuring tools, manifold gauges and parts for on-site diagnosis.",
                        "faq": [
                                    [
                                                "Does adding gas always solve it?",
                                                "No. If the system lost gas, there is a leak. We first find and fix the leak so the problem does not return."
                                    ],
                                    [
                                                "Why does my refrigerator create too much ice?",
                                                "It can be a sensor, defrost heater, airflow or door seal issue. Diagnosis prevents unnecessary part replacement."
                                    ],
                                    [
                                                "When is compressor repair worth it?",
                                                "It depends on equipment value, age and defect type. We analyze before recommending compressor replacement or a new unit."
                                    ],
                                    [
                                                "Does preventive maintenance save energy?",
                                                "Yes. Dirty condensers, stuck fans and bad gaskets make the motor work harder and increase consumption."
                                    ],
                                    [
                                                "Do you handle urgent commercial calls?",
                                                "Yes. We prioritize equipment with perishable goods to reduce losses and restore temperature as soon as possible."
                                    ]
                        ]
            },
            "es": {
                        "title": "FrioTec Prime | Refrigeración Comercial y Residencial",
                        "headerCta": "Solicitar Presupuesto",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Refrigeración Técnica",
                        "heroTitle": "CLIMATIZACIÓN Y REFRIGERACIÓN <br><span class=\"text-gradient\">SIN IMPROVISOS.</span>",
                        "heroDesc": "Instalación, mantenimiento preventivo y reparación de refrigeradores, freezers, cámaras frías y sistemas de aire con diagnóstico técnico.",
                        "heroSecondary": "Servicios",
                        "servicesTitle": "Especialidades",
                        "faqBadge": "FAQ",
                        "faqTitle": "Preguntas comunes sobre refrigeración.",
                        "faqDesc": "Entiende fugas de gas, fallas de compresor, limpieza preventiva y cuándo conviene reparar.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Describe el equipo",
                        "contactDesc": "Informa modelo, síntoma y urgencia. El resumen va directo a WhatsApp para evaluación técnica.",
                        "heroCardTitle": "Diagnóstico Técnico",
                        "heroCardDesc": "Presión, temperatura y consumo evaluados con precisión",
                        "heroPanelTop": "Técnico Especialista",
                        "heroPanelMain": "Reparación Segura",
                        "heroPanelBottom": "Gas, compresor y sellado con procedimiento correcto",
                        "areaLabel": "Tipo de equipo",
                        "areaOptions": {
                                    "geladeira": "Refrigerador / freezer residencial",
                                    "camara": "Cámara fría / mostrador refrigerado",
                                    "ar": "Aire acondicionado / split",
                                    "outro": "Otro equipo"
                        },
                        "urgencyLabel": "Urgencia",
                        "urgencyOptions": {
                                    "parado": "Equipo parado ahora",
                                    "perdendo": "Enfría poco o pierde rendimiento",
                                    "preventiva": "Mantenimiento preventivo"
                        },
                        "summaryLabel": "Síntoma y detalles",
                        "summaryPlaceholder": "Ej.: freezer no baja de -5°C, ruido en compresor, hielo en evaporador o fuga de agua.",
                        "serviceCards": [
                                    {
                                                "title": "Reparación de Refrigeradores",
                                                "description": "Cambio de sensores, ventiladores, relés, burletes y termostatos que hacen perder rendimiento."
                                    },
                                    {
                                                "title": "Cámaras Frías y Mostradores",
                                                "description": "Servicio técnico para comercios, bodegas, carnicerías y restaurantes con foco en temperatura estable."
                                    },
                                    {
                                                "title": "Instalación e Higienización",
                                                "description": "Instalación correcta, limpieza de condensadora, verificación de presión y prevención de fugas."
                                    }
                        ],
                        "locationBadge": "Dónde Atendemos",
                        "locationTitle": "Atención técnica con desplazamiento rápido.",
                        "locationDesc": "Nuestro equipo atiende hogares y comercios con herramientas de medición, manifold y repuestos para diagnóstico local.",
                        "faq": [
                                    [
                                                "¿Cargar gas siempre resuelve?",
                                                "No. Si el sistema perdió gas, hay una fuga. Primero localizamos y corregimos el punto para que no vuelva."
                                    ],
                                    [
                                                "¿Por qué mi refrigerador forma demasiado hielo?",
                                                "Puede ser sensor, resistencia de deshielo, ventilación interna o burlete de puerta. El diagnóstico evita cambios innecesarios."
                                    ],
                                    [
                                                "¿Cuándo conviene cambiar el compresor?",
                                                "Depende del valor del equipo, antigüedad y tipo de defecto. Analizamos antes de indicar cambio o sustitución."
                                    ],
                                    [
                                                "¿El mantenimiento preventivo ahorra energía?",
                                                "Sí. Condensadora sucia, ventilador trabado y burlete dañado hacen que el motor trabaje más."
                                    ],
                                    [
                                                "¿Atienden comercios con urgencia?",
                                                "Sí. Priorizamos equipos con productos perecederos para reducir pérdidas y recuperar temperatura cuanto antes."
                                    ]
                        ]
            }
},
        site_vidracaria: {
            "pt": {
                        "title": "Vitra Prime | Vidraçaria e Box Sob Medida",
                        "headerCta": "Solicitar Orçamento",
                        "navServicesLabel": "Serviços",
                        "heroBadge": "Vidros Sob Medida",
                        "heroTitle": "VIDROS, BOX E ESPELHOS <br><span class=\"text-gradient\">COM ACABAMENTO LIMPO.</span>",
                        "heroDesc": "Projetos sob medida para box de banheiro, guarda-corpo, espelhos, portas de vidro e fechamento de sacadas com medição precisa e instalação segura.",
                        "heroSecondary": "Serviços",
                        "servicesTitle": "Nossas Especialidades",
                        "faqBadge": "Dúvidas Frequentes",
                        "faqTitle": "Dúvidas antes de contratar a vidraçaria.",
                        "faqDesc": "Veja respostas sobre vidro temperado, medição, prazo de instalação, manutenção e segurança no uso diário.",
                        "contactBadge": "Primeiro contato",
                        "contactTitle": "Conte qual vidro você precisa",
                        "contactDesc": "Informe ambiente, medidas aproximadas e tipo de instalação. O resumo vai direto para nosso WhatsApp.",
                        "heroCardTitle": "Medição Precisa",
                        "heroCardDesc": "Projeto sob medida para evitar folgas e retrabalho",
                        "heroPanelTop": "Vidraceiro Especialista",
                        "heroPanelMain": "Instalação Segura",
                        "heroPanelBottom": "Ferragens, vedação e alinhamento profissional",
                        "areaLabel": "Tipo de serviço",
                        "areaOptions": {
                                    "box": "Box de banheiro",
                                    "espelho": "Espelho sob medida",
                                    "sacada": "Sacada / guarda-corpo",
                                    "porta": "Porta ou divisória de vidro"
                        },
                        "urgencyLabel": "Etapa do projeto",
                        "urgencyOptions": {
                                    "medicao": "Preciso de medição",
                                    "troca": "Troca ou manutenção",
                                    "instalacao": "Já tenho as medidas"
                        },
                        "summaryLabel": "Medidas e detalhes",
                        "summaryPlaceholder": "Ex: box de banheiro em L, largura aproximada, altura desejada, se já existe nicho ou ponto de fixação.",
                        "serviceCards": [
                                    {
                                                "title": "Box de Banheiro",
                                                "description": "Box de vidro temperado com ferragens adequadas, vedação correta e instalação alinhada para uso diário com segurança."
                                    },
                                    {
                                                "title": "Espelhos Sob Medida",
                                                "description": "Espelhos lapidados para banheiros, salas, academias e lojas, com fixação limpa e acabamento elegante."
                                    },
                                    {
                                                "title": "Sacadas e Guarda-corpos",
                                                "description": "Fechamentos e proteções em vidro pensados para segurança, transparência e valorização do ambiente."
                                    }
                        ],
                        "locationBadge": "Nossa Loja",
                        "locationTitle": "Venha conhecer nosso atendimento em vidros.",
                        "locationDesc": "Atendimento com orientação técnica, amostras de ferragens e agenda de medição para residências, lojas e condomínios.",
                        "faq": [
                                    [
                                                "Qual vidro é mais seguro para box?",
                                                "O vidro temperado é o mais usado porque passa por tratamento térmico e, em caso extremo de quebra, fragmenta em pedaços menores."
                                    ],
                                    [
                                                "Vocês fazem medição no local?",
                                                "Sim. A medição técnica evita erro de folga, desalinhamento e problemas na instalação das ferragens."
                                    ],
                                    [
                                                "Quanto tempo leva para instalar?",
                                                "Depois da medição aprovada, o prazo depende da peça, mas box e espelhos simples costumam ser concluídos em poucos dias úteis."
                                    ],
                                    [
                                                "O box precisa de manutenção?",
                                                "Sim. É importante revisar roldanas, trilhos, puxadores e silicone para manter o fechamento seguro e sem vazamento."
                                    ],
                                    [
                                                "Instalam espelho grande sem moldura?",
                                                "Sim. Definimos o tipo de fixação conforme peso, parede e acabamento para deixar o visual limpo e seguro."
                                    ]
                        ]
            },
            "en": {
                        "title": "Vitra Prime | Custom Glass and Shower Enclosures",
                        "headerCta": "Request Quote",
                        "navServicesLabel": "Services",
                        "heroBadge": "Custom Glasswork",
                        "heroTitle": "GLASS, SHOWER ENCLOSURES AND MIRRORS <br><span class=\"text-gradient\">WITH A CLEAN FINISH.</span>",
                        "heroDesc": "Custom projects for shower glass, railings, mirrors, glass doors and balcony enclosures with precise measuring and safe installation.",
                        "heroSecondary": "Services",
                        "servicesTitle": "Our Specialties",
                        "faqBadge": "FAQ",
                        "faqTitle": "Questions before hiring a glass shop.",
                        "faqDesc": "Answers about tempered glass, measuring, installation timeline, maintenance and daily safety.",
                        "contactBadge": "First contact",
                        "contactTitle": "Tell us what glass you need",
                        "contactDesc": "Share the room, approximate dimensions and installation type. The summary goes straight to our WhatsApp.",
                        "heroCardTitle": "Precise Measuring",
                        "heroCardDesc": "Custom sizing to avoid gaps and rework",
                        "heroPanelTop": "Glass Specialist",
                        "heroPanelMain": "Safe Installation",
                        "heroPanelBottom": "Hardware, sealing and professional alignment",
                        "areaLabel": "Service type",
                        "areaOptions": {
                                    "box": "Shower enclosure",
                                    "espelho": "Custom mirror",
                                    "sacada": "Balcony / glass railing",
                                    "porta": "Glass door or partition"
                        },
                        "urgencyLabel": "Project stage",
                        "urgencyOptions": {
                                    "medicao": "I need measuring",
                                    "troca": "Replacement or maintenance",
                                    "instalacao": "I already have measurements"
                        },
                        "summaryLabel": "Measurements and details",
                        "summaryPlaceholder": "Example: L-shaped shower enclosure, approximate width, desired height, existing niche or fixing point.",
                        "serviceCards": [
                                    {
                                                "title": "Shower Enclosures",
                                                "description": "Tempered glass shower enclosures with proper hardware, sealing and alignment for safe daily use."
                                    },
                                    {
                                                "title": "Custom Mirrors",
                                                "description": "Polished mirrors for bathrooms, living rooms, gyms and stores with clean fastening and elegant finishing."
                                    },
                                    {
                                                "title": "Balconies and Railings",
                                                "description": "Glass enclosures and protections designed for safety, transparency and higher property value."
                                    }
                        ],
                        "locationBadge": "Our Shop",
                        "locationTitle": "Visit our glass service desk.",
                        "locationDesc": "Technical guidance, hardware samples and measuring appointments for homes, stores and condominiums.",
                        "faq": [
                                    [
                                                "Which glass is safer for showers?",
                                                "Tempered glass is most common because it is heat-treated and, in an extreme breakage event, fragments into smaller pieces."
                                    ],
                                    [
                                                "Do you measure on site?",
                                                "Yes. Technical measuring avoids wrong gaps, misalignment and hardware installation issues."
                                    ],
                                    [
                                                "How long does installation take?",
                                                "After approved measuring, timing depends on the piece, but simple showers and mirrors are often completed in a few business days."
                                    ],
                                    [
                                                "Does a shower enclosure need maintenance?",
                                                "Yes. Rollers, tracks, handles and silicone should be checked to keep closing safe and leak-free."
                                    ],
                                    [
                                                "Can you install a large frameless mirror?",
                                                "Yes. We define fastening based on weight, wall and finish to keep the look clean and safe."
                                    ]
                        ]
            },
            "es": {
                        "title": "Vitra Prime | Vidriería y Box a Medida",
                        "headerCta": "Solicitar Presupuesto",
                        "navServicesLabel": "Servicios",
                        "heroBadge": "Vidrios a Medida",
                        "heroTitle": "VIDRIOS, BOX Y ESPEJOS <br><span class=\"text-gradient\">CON ACABADO LIMPIO.</span>",
                        "heroDesc": "Proyectos a medida para box de baño, barandas, espejos, puertas de vidrio y cerramientos con medición precisa e instalación segura.",
                        "heroSecondary": "Servicios",
                        "servicesTitle": "Nuestras Especialidades",
                        "faqBadge": "Preguntas Frecuentes",
                        "faqTitle": "Dudas antes de contratar la vidriería.",
                        "faqDesc": "Respuestas sobre vidrio templado, medición, plazo de instalación, mantenimiento y seguridad diaria.",
                        "contactBadge": "Primer contacto",
                        "contactTitle": "Cuéntanos qué vidrio necesitas",
                        "contactDesc": "Informa ambiente, medidas aproximadas y tipo de instalación. El resumen va directo a WhatsApp.",
                        "heroCardTitle": "Medición Precisa",
                        "heroCardDesc": "Proyecto a medida para evitar holguras y retrabajo",
                        "heroPanelTop": "Vidriero Especialista",
                        "heroPanelMain": "Instalación Segura",
                        "heroPanelBottom": "Herrajes, sellado y alineación profesional",
                        "areaLabel": "Tipo de servicio",
                        "areaOptions": {
                                    "box": "Box de baño",
                                    "espelho": "Espejo a medida",
                                    "sacada": "Balcón / baranda",
                                    "porta": "Puerta o división de vidrio"
                        },
                        "urgencyLabel": "Etapa del proyecto",
                        "urgencyOptions": {
                                    "medicao": "Necesito medición",
                                    "troca": "Cambio o mantenimiento",
                                    "instalacao": "Ya tengo las medidas"
                        },
                        "summaryLabel": "Medidas y detalles",
                        "summaryPlaceholder": "Ej.: box de baño en L, ancho aproximado, altura deseada, si existe nicho o punto de fijación.",
                        "serviceCards": [
                                    {
                                                "title": "Box de Baño",
                                                "description": "Box de vidrio templado con herrajes adecuados, sellado correcto e instalación alineada para uso diario seguro."
                                    },
                                    {
                                                "title": "Espejos a Medida",
                                                "description": "Espejos pulidos para baños, salas, gimnasios y tiendas con fijación limpia y acabado elegante."
                                    },
                                    {
                                                "title": "Balcones y Barandas",
                                                "description": "Cerramientos y protecciones en vidrio pensados para seguridad, transparencia y valorización del ambiente."
                                    }
                        ],
                        "locationBadge": "Nuestra Tienda",
                        "locationTitle": "Ven a conocer nuestro servicio en vidrios.",
                        "locationDesc": "Atención con orientación técnica, muestras de herrajes y agenda de medición para residencias, tiendas y condominios.",
                        "faq": [
                                    [
                                                "¿Qué vidrio es más seguro para box?",
                                                "El vidrio templado es el más usado porque pasa por tratamiento térmico y, en caso extremo de rotura, se fragmenta en piezas menores."
                                    ],
                                    [
                                                "¿Hacen medición en el lugar?",
                                                "Sí. La medición técnica evita errores de holgura, desalineación y problemas al instalar herrajes."
                                    ],
                                    [
                                                "¿Cuánto tarda la instalación?",
                                                "Después de aprobar la medición, el plazo depende de la pieza, pero box y espejos simples suelen completarse en pocos días hábiles."
                                    ],
                                    [
                                                "¿El box necesita mantenimiento?",
                                                "Sí. Conviene revisar rodamientos, rieles, tiradores y silicona para mantener el cierre seguro y sin filtraciones."
                                    ],
                                    [
                                                "¿Instalan espejo grande sin marco?",
                                                "Sí. Definimos la fijación según peso, pared y acabado para dejar un visual limpio y seguro."
                                    ]
                        ]
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
    const getSiteKey = () => siteKey;

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
        const content = getSiteText();
        if (content && content.brandName) return content.brandName;
        if (content && content.title) {
            return content.title.split('|')[0].trim();
        }
        return 'Studio Coutias';
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
        
        const placeholderOption = Array.from(select.options).find(opt => !opt.value);
        const placeholderText = placeholderOption ? placeholderOption.textContent : emptyText;
        
        select.innerHTML = '';
        
        const newPlaceholder = document.createElement('option');
        newPlaceholder.value = '';
        newPlaceholder.textContent = placeholderText;
        select.appendChild(newPlaceholder);
        
        if (items) {
            for (const [val, label] of Object.entries(items)) {
                const opt = document.createElement('option');
                opt.value = val;
                opt.textContent = label;
                select.appendChild(opt);
            }
        }
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


    const applyVisualAssets = () => {
        const content = getSiteText();
        const heroLabel = [content.heroPanelMain, content.heroPanelBottom].filter(Boolean).join(', ') || getFooterBusinessName();
        const hero = document.querySelector('.hero-person');
        if (hero) {
            hero.setAttribute('src', 'assets/img/hero-professional.png');
            hero.setAttribute('alt', heroLabel);
            hero.setAttribute('width', '1024');
            hero.setAttribute('height', '1536');
            hero.setAttribute('decoding', 'async');
        }
        const avatar = document.querySelector('.floating-card-1 .avatar');
        if (avatar) {
            avatar.setAttribute('src', 'assets/img/hero-professional-avatar.png');
            avatar.setAttribute('alt', '');
            avatar.setAttribute('width', '640');
            avatar.setAttribute('height', '640');
            avatar.setAttribute('loading', 'lazy');
            avatar.setAttribute('decoding', 'async');
        }
        document.querySelectorAll('.services-floating-asset, .floating-faq-asset').forEach((img) => {
            img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async');
            img.setAttribute('alt', '');
            img.setAttribute('aria-hidden', 'true');
        });
    };

    const getSvgIcon = (name) => {
        const pathMap = {
            glass: '<path d="M2 2h20M5 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2"/>',
            circle: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>',
            layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/>',
            wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
            thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>',
            home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
            package: '<polygon points="12 22 12 12 3 9 3 19 12 22"/><polygon points="12 22 12 12 21 9 21 19 12 22"/><polygon points="12 12 3 9 12 6 21 9 12 12"/>',
            feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/>',
            utensils: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>',
            flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
            coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/>',
            heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
            droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
            gift: '<rect x="2" y="7" width="20" height="5"/><path d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>',
            wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
            shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7s0 6 8 10z"/>',
            brush: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"/>',
            tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>',
            cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/>',
            lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
            sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>',
            eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
            sparkles: '<path d="M12 3v1M12 20v1M3 12h1M20 12h1"/>',
            scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="9.8" y1="8.2" x2="20" y2="17"/><line x1="9.8" y1="15.8" x2="20" y2="7"/>',
            sword: '<polyline points="14.5 17.5 3 6 6 3 17.5 14.5"/>',
            tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0z"/>',
            layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/>',
            hammer: '<path d="M15 11l-3 3-5-5 3-3 5 5z"/>',
            database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
            truck: '<rect x="1" y="3" width="15" height="13"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
            heartbeat: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'
        };
        const path = pathMap[name] || pathMap.heartbeat;
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
    };

    const applyServiceTranslations = (serviceCards) => {
        if (!Array.isArray(serviceCards) || !serviceCards.length) return;
        
        const mappings = {
            site_vidracaria: ['glass', 'circle', 'layers'],
            site_refrigeracao: ['wind', 'database', 'thermometer'],
            site_marcenaria: ['home', 'package', 'feather'],
            site_hamburgueria: ['utensils', 'flame', 'package'],
            site_acaiteria: ['coffee', 'droplet', 'heart'],
            site_sushi: ['utensils', 'scissors', 'package'],
            site_chopperia: ['coffee', 'flame', 'glass'],
            site_deposito_bebidas: ['package', 'droplet', 'truck'],
            site_adegas: ['glass', 'gift', 'package'],
            site_funilaria: ['wrench', 'shield', 'brush'],
            site_automacao: ['tv', 'cpu', 'lock'],
            site_insulfilm: ['shield', 'sun', 'eye'],
            site_lavagem_pressao: ['droplet', 'wind', 'sparkles'],
            site_afiador: ['scissors', 'sword', 'tool'],
            site_ar_condicionado: ['wind', 'tool', 'droplet'],
            site_envelopamento: ['layers', 'home', 'brush'],
            site_ppf: ['shield', 'sparkles', 'brush'],
            site_papel_parede: ['layers', 'layout', 'brush'],
            site_marmore: ['sparkles', 'shield', 'brush'],
            site_serralheria: ['tool', 'hammer', 'shield']
        };
        
        const siteKey = getSiteKey();
        const iconNames = mappings[siteKey] || ['heartbeat', 'wrench', 'brush'];
        
        const cards = Array.from(document.querySelectorAll('.services-grid .service-card'));
        cards.forEach((card, index) => {
            const copy = serviceCards[index];
            if (!copy) return;
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const iconBox = card.querySelector('.icon-box');
            if (title) title.textContent = copy.title;
            if (description) description.textContent = copy.description;
            if (iconBox && iconNames[index]) {
                iconBox.innerHTML = getSvgIcon(iconNames[index]);
            }
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
        const brand = getFooterBusinessName();
        if (footerParagraphs[0] && yearEl) {
            footerParagraphs[0].innerHTML = `&copy; <span ${yearEl.hasAttribute('data-current-year') ? 'data-current-year' : 'data-current-date'}>${yearEl.textContent}</span> <span id="footer-brand">${brand}</span>. ${common.footerRights || 'Todos os direitos reservados.'}`;
        }
        if (footerParagraphs[1] && footerLink) {
            footerParagraphs[1].innerHTML = `${common.footerMadeWith} ❤️ ${common.footerBy} `;
            footerParagraphs[1].appendChild(footerLink);
        }
        
        // Dynamic Navbar Logo update
        const logoSpan = document.querySelector('.logo span');
        if (logoSpan) {
            logoSpan.textContent = brand;
        }

        // Apply Theme Color dynamically based on siteKey
        const siteKey = getSiteKey();
        const colors = {
            site_mecanica_luxo: { primary: '#dc2626', light: '#ef4444', theme: 'dark' },
            site_estetica_automotiva: { primary: '#dc2626', light: '#ef4444', theme: 'dark' },
            site_vidracaria: { primary: '#0284c7', light: '#38bdf8', theme: 'light' },
            site_refrigeracao: { primary: '#0ea5e9', light: '#38bdf8', theme: 'light' },
            site_marcenaria: { primary: '#ca8a04', light: '#f59e0b', theme: 'light' },
            site_hamburgueria: { primary: '#ea580c', light: '#f97316', theme: 'light' },
            site_acaiteria: { primary: '#a855f7', light: '#c084fc', theme: 'light' }, // Vibrant violet purple for high contrast
            site_sushi: { primary: '#e11d48', light: '#fb7185', theme: 'light' },
            site_chopperia: { primary: '#d97706', light: '#f59e0b', theme: 'light' },
            site_deposito_bebidas: { primary: '#2563eb', light: '#60a5fa', theme: 'light' },
            site_adegas: { primary: '#8b5cf6', light: '#a78bfa', theme: 'light' },
            site_funilaria: { primary: '#dc2626', light: '#ef4444', theme: 'light' },
            site_automacao: { primary: '#0d9488', light: '#2dd4bf', theme: 'dark' },
            site_insulfilm: { primary: '#4b5563', light: '#9ca3af', theme: 'dark' },
            site_lavagem_pressao: { primary: '#06b6d4', light: '#22d3ee', theme: 'light' },
            site_afiador: { primary: '#4b5563', light: '#9ca3af', theme: 'light' },
            site_ar_condicionado: { primary: '#0ea5e9', light: '#38bdf8', theme: 'light' },
            site_envelopamento: { primary: '#2563eb', light: '#60a5fa', theme: 'light' },
            site_ppf: { primary: '#111827', light: '#374151', theme: 'dark' },
            site_papel_parede: { primary: '#db2777', light: '#f472b6', theme: 'light' },
            site_marmore: { primary: '#0d9488', light: '#2dd4bf', theme: 'light' },
            site_serralheria: { primary: '#d97706', light: '#f59e0b', theme: 'light' }
        };
        const config = colors[siteKey] || { primary: '#dc2626', light: '#ef4444', theme: 'dark' };
        const primaryHex = config.primary;
        const hexVal = primaryHex.replace('#', '');
        const bigint = parseInt(hexVal, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        document.documentElement.style.setProperty('--primary', primaryHex);
        document.documentElement.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);
        document.documentElement.style.setProperty('--primary-light', config.light);
        document.documentElement.style.setProperty('--primary-glow', `rgba(${r}, ${g}, ${b}, 0.4)`);

        if (config.theme === 'light') {
            document.documentElement.style.setProperty('--bg-dark', '#faf9f6');
            document.documentElement.style.setProperty('--bg-light', '#f4f3ee');
            document.documentElement.style.setProperty('--text-main', '#1c1917');
            document.documentElement.style.setProperty('--text-muted', '#6b6661');
            document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.75)');
            document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.08)');
            document.documentElement.style.setProperty('--header-bg', 'rgba(250, 249, 246, 0.8)');
            document.documentElement.style.setProperty('--overlay-dark', 'rgba(250, 249, 246, 0.98)');
            document.documentElement.style.setProperty('--overlay-med', 'rgba(250, 249, 246, 0.82)');
            document.documentElement.style.setProperty('--overlay-light', 'rgba(250, 249, 246, 0.36)');
            document.documentElement.style.setProperty('--input-bg', 'rgba(0, 0, 0, 0.03)');
            document.documentElement.style.setProperty('--input-focus-bg', 'rgba(0, 0, 0, 0.05)');
            document.documentElement.style.setProperty('--hero-bg-gradient', 'linear-gradient(120deg, rgba(250, 249, 246, 0.98) 0%, rgba(244, 243, 238, 0.96) 54%, rgba(250, 249, 246, 0.99) 100%)');
            document.documentElement.style.setProperty('--panel-bg', 'linear-gradient(180deg, rgba(244, 243, 238, 0.78), rgba(250, 249, 246, 0.96))');
        } else {
            document.documentElement.style.setProperty('--bg-dark', '#09090B');
            document.documentElement.style.setProperty('--bg-light', '#27272A');
            document.documentElement.style.setProperty('--text-main', '#f8fafc');
            document.documentElement.style.setProperty('--text-muted', '#94a3b8');
            document.documentElement.style.setProperty('--glass-bg', 'rgba(39, 39, 42, 0.6)');
            document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.08)');
            document.documentElement.style.setProperty('--header-bg', 'rgba(9, 9, 11, 0.8)');
            document.documentElement.style.setProperty('--overlay-dark', 'rgba(9, 9, 11, 0.98)');
            document.documentElement.style.setProperty('--overlay-med', 'rgba(9, 9, 11, 0.82)');
            document.documentElement.style.setProperty('--overlay-light', 'rgba(9, 9, 11, 0.36)');
            document.documentElement.style.setProperty('--input-bg', 'rgba(9, 9, 11, 0.62)');
            document.documentElement.style.setProperty('--input-focus-bg', 'rgba(9, 9, 11, 0.78)');
            document.documentElement.style.setProperty('--hero-bg-gradient', 'linear-gradient(120deg, rgba(9, 9, 11, 0.98) 0%, rgba(20, 20, 24, 0.96) 54%, rgba(9, 9, 11, 0.99) 100%)');
            document.documentElement.style.setProperty('--panel-bg', 'linear-gradient(180deg, rgba(39, 39, 42, 0.78), rgba(9, 9, 11, 0.96))');
        }
    };


    const PREMIUM_THEMES = {
        site_acaiteria: { primary: '#7c3aed', light: '#a78bfa', theme: 'light' },
        site_adegas: { primary: '#be123c', light: '#fb7185', theme: 'dark' },
        site_afiador: { primary: '#475569', light: '#94a3b8', theme: 'light' },
        site_ar_condicionado: { primary: '#0284c7', light: '#38bdf8', theme: 'light' },
        site_automacao: { primary: '#14b8a6', light: '#5eead4', theme: 'dark' },
        site_chopperia: { primary: '#d97706', light: '#fbbf24', theme: 'dark' },
        site_deposito_bebidas: { primary: '#2563eb', light: '#60a5fa', theme: 'light' },
        site_envelopamento: { primary: '#2563eb', light: '#60a5fa', theme: 'dark' },
        site_funilaria: { primary: '#dc2626', light: '#f87171', theme: 'dark' },
        site_hamburgueria: { primary: '#ea580c', light: '#fb923c', theme: 'light' },
        site_insulfilm: { primary: '#64748b', light: '#cbd5e1', theme: 'dark' },
        site_lavagem_pressao: { primary: '#0891b2', light: '#22d3ee', theme: 'light' },
        site_marcenaria: { primary: '#b45309', light: '#f59e0b', theme: 'light' },
        site_marmore: { primary: '#0d9488', light: '#2dd4bf', theme: 'light' },
        site_mecanica_luxo: { primary: '#dc2626', light: '#f87171', theme: 'dark' },
        site_papel_parede: { primary: '#db2777', light: '#f472b6', theme: 'light' },
        site_ppf: { primary: '#3b82f6', light: '#93c5fd', theme: 'dark' },
        site_refrigeracao: { primary: '#0284c7', light: '#38bdf8', theme: 'light' },
        site_serralheria: { primary: '#d97706', light: '#fbbf24', theme: 'dark' },
        site_sushi: { primary: '#e11d48', light: '#fb7185', theme: 'light' },
        site_vidracaria: { primary: '#0284c7', light: '#7dd3fc', theme: 'light' }
    };

    const applyPremiumTheme = () => {
        const config = PREMIUM_THEMES[getSiteKey()] || { primary: '#dc2626', light: '#f87171', theme: 'dark' };
        const hex = config.primary.replace('#', '');
        const rgb = parseInt(hex, 16);
        const r = (rgb >> 16) & 255;
        const g = (rgb >> 8) & 255;
        const b = rgb & 255;
        const root = document.documentElement;
        root.dataset.visualTheme = config.theme;
        root.style.colorScheme = config.theme;
        root.style.setProperty('--primary', config.primary);
        root.style.setProperty('--primary-rgb', r + ', ' + g + ', ' + b);
        root.style.setProperty('--primary-light', config.light);
        root.style.setProperty('--primary-glow', 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (config.theme === 'light' ? '0.24' : '0.42') + ')');
        if (config.theme === 'light') {
            root.style.setProperty('--bg-dark', '#f8fafc');
            root.style.setProperty('--bg-light', '#eef2f7');
            root.style.setProperty('--text-main', '#0f172a');
            root.style.setProperty('--text-muted', '#334155');
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.86)');
            root.style.setProperty('--glass-border', 'rgba(15, 23, 42, 0.13)');
            root.style.setProperty('--header-bg', 'rgba(248, 250, 252, 0.9)');
            root.style.setProperty('--overlay-dark', 'rgba(248, 250, 252, 0.98)');
            root.style.setProperty('--overlay-med', 'rgba(226, 232, 240, 0.88)');
            root.style.setProperty('--overlay-light', 'rgba(248, 250, 252, 0.45)');
            root.style.setProperty('--input-bg', 'rgba(255, 255, 255, 0.82)');
            root.style.setProperty('--input-focus-bg', 'rgba(255, 255, 255, 0.98)');
            root.style.setProperty('--hero-bg-gradient', 'linear-gradient(120deg, rgba(248, 250, 252, 0.99) 0%, rgba(238, 242, 247, 0.98) 54%, rgba(255, 255, 255, 0.99) 100%)');
            root.style.setProperty('--hero-overlay-gradient', 'linear-gradient(90deg, rgba(248, 250, 252, 0.98) 0%, rgba(248, 250, 252, 0.82) 48%, rgba(248, 250, 252, 0.22) 100%)');
            root.style.setProperty('--panel-bg', 'linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(241, 245, 249, 0.98))');
            root.style.setProperty('--card-hover-bg', 'rgba(255, 255, 255, 0.98)');
            root.style.setProperty('--placeholder-color', 'rgba(51, 65, 85, 0.72)');
            root.style.setProperty('--switcher-bg', 'rgba(255, 255, 255, 0.92)');
            root.style.setProperty('--switcher-menu-bg', 'rgba(255, 255, 255, 0.96)');
            root.style.setProperty('--switcher-option-bg', 'rgba(15, 23, 42, 0.035)');
            root.style.setProperty('--switcher-shadow', '0 18px 34px rgba(15, 23, 42, 0.16)');
        } else {
            root.style.setProperty('--bg-dark', '#07080c');
            root.style.setProperty('--bg-light', '#111827');
            root.style.setProperty('--text-main', '#f8fafc');
            root.style.setProperty('--text-muted', '#cbd5e1');
            root.style.setProperty('--glass-bg', 'rgba(17, 24, 39, 0.72)');
            root.style.setProperty('--glass-border', 'rgba(226, 232, 240, 0.12)');
            root.style.setProperty('--header-bg', 'rgba(7, 8, 12, 0.88)');
            root.style.setProperty('--overlay-dark', 'rgba(7, 8, 12, 0.98)');
            root.style.setProperty('--overlay-med', 'rgba(7, 8, 12, 0.84)');
            root.style.setProperty('--overlay-light', 'rgba(7, 8, 12, 0.34)');
            root.style.setProperty('--input-bg', 'rgba(7, 8, 12, 0.68)');
            root.style.setProperty('--input-focus-bg', 'rgba(15, 23, 42, 0.94)');
            root.style.setProperty('--hero-bg-gradient', 'linear-gradient(120deg, rgba(7, 8, 12, 0.99) 0%, rgba(17, 24, 39, 0.98) 54%, rgba(3, 7, 18, 0.99) 100%)');
            root.style.setProperty('--hero-overlay-gradient', 'linear-gradient(90deg, rgba(7, 8, 12, 0.98) 0%, rgba(7, 8, 12, 0.82) 48%, rgba(7, 8, 12, 0.30) 100%)');
            root.style.setProperty('--panel-bg', 'linear-gradient(180deg, rgba(17, 24, 39, 0.88), rgba(7, 8, 12, 0.98))');
            root.style.setProperty('--card-hover-bg', 'rgba(30, 41, 59, 0.94)');
            root.style.setProperty('--placeholder-color', 'rgba(203, 213, 225, 0.74)');
            root.style.setProperty('--switcher-bg', 'rgba(15, 23, 42, 0.92)');
            root.style.setProperty('--switcher-menu-bg', 'rgba(15, 23, 42, 0.96)');
            root.style.setProperty('--switcher-option-bg', 'rgba(255, 255, 255, 0.05)');
            root.style.setProperty('--switcher-shadow', '0 18px 34px rgba(0, 0, 0, 0.34)');
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
        applyPremiumTheme();
        applyVisualAssets();
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
