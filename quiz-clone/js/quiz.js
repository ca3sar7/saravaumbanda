/* ==========================================================================
   Quiz Mapa Mental da Umbanda - 100% Decompiled Engine + Tracking
   Meta Pixel ID: 930805762847596
   Microsoft Clarity ID: ybpxgzxrai
   UTM Forwarding to Checkout: https://pay.wiapy.com/ANIyBmA8dQ
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Helper to build checkout URL with current page's UTM parameters
  function getCheckoutURL() {
    const baseUrl = 'https://pay.wiapy.com/ANIyBmA8dQ';
    const currentParams = new URLSearchParams(window.location.search);
    if ([...currentParams.keys()].length === 0) {
      return baseUrl;
    }
    const separator = baseUrl.includes('?') ? '&' : '?';
    return baseUrl + separator + currentParams.toString();
  }

  // Helper to track Facebook Pixel events safely
  function trackPixelEvent(eventName, params = {}) {
    if (typeof window.fbq === 'function') {
      try {
        if (eventName.startsWith('Custom_') || eventName.startsWith('Step_')) {
          window.fbq('trackCustom', eventName, params);
        } else {
          window.fbq('track', eventName, params);
        }
      } catch (e) {
        console.log('Pixel tracking notice:', e);
      }
    }
  }

  // Decompiled Exact Questions Dataset (Array Ar from index-9duUyA9k.js)
  const quizQuestions = [
    {
      id: 1,
      question: 'Você sabe qual é o principal fundamento da religião da Umbanda?',
      options: [
        { text: 'Os Orixás', image: 'assets/option-orixas-BJo4pGll.png' },
        { text: 'Os Preto Velhos', image: 'assets/option-preto-velhos-CQh7x9tk.png' },
        { text: 'A Caridade', image: 'assets/option-caridade-CVJE28jO.png' },
        { text: 'Não tenho certeza' }
      ],
      correctAnswer: 2,
      explanation: "A Caridade é o principal fundamento da Umbanda. A religião é baseada na prática do bem e no auxílio espiritual ao próximo, seguindo o lema 'Dar de graça o que de graça recebestes'."
    },
    {
      id: 2,
      question: 'Você conhece as principais entidades espirituais que trabalham nos terreiros?',
      questionImage: 'assets/question-entidades-DMFtjsZs.png',
      options: [
        { text: 'Sim, todas!' },
        { text: 'Conheço algumas.' },
        { text: 'Ainda estou aprendendo.' },
        { text: 'Não conheço nenhuma!' }
      ],
      correctAnswer: 0,
      explanation: 'As principais entidades da Umbanda são os Orixás, Caboclos, Preto Velhos, Erês, Exus e Pombagiras. Cada linha tem sua função específica no auxílio espiritual aos consulentes.'
    },
    {
      id: 3,
      question: 'O que são pontos riscados na Umbanda?',
      questionImage: 'assets/question-pontos-riscados-DSbgj6ry.png',
      options: [
        { text: 'Desenhos para identificar entidades' },
        { text: 'Um tipo de oferenda' },
        { text: 'Não sei, mas estou curioso!' }
      ],
      correctAnswer: 0,
      explanation: 'Os pontos riscados são desenhos sagrados que representam e identificam as entidades espirituais. Cada símbolo carrega a assinatura energética de um guia ou Orixá.'
    },
    {
      id: 4,
      question: 'Você sente que tem dificuldades para entender ou organizar os aprendizados sobre a Umbanda?',
      questionImage: 'assets/question-dificuldades-Dl1jNYxa.gif',
      options: [
        { text: 'Sim, sinto falta de um material organizado.' },
        { text: 'Um pouco, mas consigo aprender.' },
        { text: 'Não, eu aprendo facilmente.' }
      ],
      correctAnswer: 0,
      explanation: 'Muitos iniciantes sentem dificuldade em organizar os conhecimentos da Umbanda. O APP Mapa Mental da Umbanda foi criado justamente para facilitar essa jornada de aprendizado.'
    },
    {
      id: 5,
      question: 'Você gostaria de ter acesso a um APLICATIVO que explica de forma prática e visual todos os fundamentos da Umbanda?',
      questionImage: 'assets/question-aplicativo-DY88zYaI.png',
      options: [
        { text: 'Sim, seria incrível!', image: 'assets/result-option-sim-CeTr9lC_.png' },
        { text: 'Talvez, dependendo do material.', image: 'assets/option-talvez-DPJvBUqf.png' },
        { text: 'Não tenho certeza ainda.', image: 'assets/option-incerteza-BRhgOzPW.png' }
      ],
      correctAnswer: 0,
      explanation: 'O APP Mapa Mental da Umbanda foi criado exatamente para isso! Um aplicativo que ensina de forma visual e prática todos os fundamentos da religião.'
    },
    {
      id: 6,
      question: 'Você conhece os principais arquétipos de cada Orixá?',
      questionImage: 'assets/question-orixas-CFli7e6m.png',
      options: [
        { text: 'Sim, conheço e entendo.' },
        { text: 'Conheço alguns, mas ainda tenho dúvidas.' },
        { text: 'Não, gostaria de aprender mais.' }
      ],
      correctAnswer: 0,
      explanation: 'Os Orixás são divindades que representam forças da natureza e arquétipos universais. Cada um possui características, cores, elementos e domínios específicos.'
    },
    {
      id: 7,
      question: 'Como você se sente em relação aos rituais básicos da Umbanda?',
      questionImage: 'assets/question-rituais-CbJQp2Lx.png',
      options: [
        { text: 'Confiante, já sei como realizar.' },
        { text: 'Um pouco inseguro(a), mas gostaria de aprender.' },
        { text: 'Perdido(a), preciso de ajuda.' }
      ],
      correctAnswer: 0,
      explanation: 'Os rituais básicos da Umbanda incluem oferendas, firmezas, defumações e trabalhos espirituais. É importante aprender com orientação de pessoas experientes.'
    },
    {
      id: 8,
      question: 'Você sabe como montar um altar simples para conectar-se aos Orixás em casa?',
      questionImage: 'assets/question-altar-CvW1ySTd.png',
      options: [
        { text: 'Sim, já tenho um altar.' },
        { text: 'Tenho dúvidas sobre como fazer corretamente.' },
        { text: 'Não, mas adoraria aprender.' }
      ],
      correctAnswer: 0,
      explanation: 'O altar doméstico é um espaço sagrado para conexão espiritual. Pode incluir imagens de santos, Orixás, velas, flores e elementos que representem sua devoção.'
    },
    {
      id: 9,
      question: 'Você entende como os Orixás se relacionam com os elementos da natureza?',
      questionImage: 'assets/question-elementos-DQvYZev0.png',
      options: [
        { text: 'Sim, conheço essa relação profundamente.' },
        { text: 'Conheço um pouco, mas ainda tenho muito a aprender.' },
        { text: 'Não, mas acho fascinante e quero saber mais.' }
      ],
      correctAnswer: 0,
      explanation: 'Cada Orixá está ligado a elementos da natureza: água (Oxum, Iemanjá), terra (Ossaim, Oxóssi), ar (Iansã) e fogo (Xangô). Essa conexão é fundamental na Umbanda.'
    }
  ];

  // 10 Special Bonuses Dataset
  const bonusItems = [
    { tag: 'Bônus 1', title: 'Formação Fundamental da Doutrina Umbandista', image: 'assets/bonus-1-C8Q0zK5Z.png' },
    { tag: 'Bônus 2', title: 'Audiobook Experience - Imersão Guiada de Todo o Conteúdo', image: 'assets/bonus-2-C4A5njPY.png' },
    { tag: 'Bônus 3', title: 'Biblioteca Hierárquica dos Tronos e Regências Divinas', image: 'assets/bonus-3-Cm0f-TZ4.png' },
    { tag: 'Bônus 4', title: 'Atlas Energético das 95 Ervas Sagradas', image: 'assets/bonus-4-Be6u0da-.png' },
    { tag: 'Bônus 5', title: 'Manual Vibracional do Reino Mineral e Pedras Sagradas', image: 'assets/bonus-6-mais-B82pbZGs.png' },
    { tag: 'Bônus 6', title: 'Ritual Guiado de Defumação para Limpeza e Proteção Espiritual', image: 'assets/bonus-6-mais-B82pbZGs.png' },
    { tag: 'Bônus 7', title: 'Compêndio Estruturado de Práticas Ritualísticas Conscientes', image: 'assets/bonus-6-mais-B82pbZGs.png' },
    { tag: 'Bônus 8', title: 'Coletânea Curada de Pontos Cantados Essenciais', image: 'assets/bonus-6-mais-B82pbZGs.png' },
    { tag: 'Bônus 9', title: 'Coleção Oficial de Iconografia Sagrada da Umbanda', image: 'assets/bonus-6-mais-B82pbZGs.png' },
    { tag: 'Bônus 10', title: 'Círculo Fechado de Estudos Umbandistas - WhatsApp', image: 'assets/bonus-6-mais-B82pbZGs.png' }
  ];

  // State Management
  let currentState = 'intro'; // intro | quiz | analyzing | result | offer | howToReceive | bonus | frontDuplo
  let currentQuestionIdx = 0; // 0..8
  let isNavigating = false;

  // DOM Elements
  const progressPillBadge = document.getElementById('progress-pill-badge');
  const contentWrapper = document.getElementById('content-wrapper');

  // Helper for Footer Banner Image
  function getFooterBannerHTML() {
    return `
      <div style="width: 100%; margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
        <img src="assets/rodape-apoio-wiapy.png" alt="Apoio: Mãe Célia de Oxossi, Terreiro Cavaleiros de Aruanda - Salvador/BA, Wiapy" class="footer-banner-img" />
      </div>
    `;
  }

  // Main Render Engine
  function renderState() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentWrapper.innerHTML = '';
    contentWrapper.className = 'content-wrapper fade-in';
    isNavigating = false;

    // Track Pixel Event on state render
    trackPixelEvent(`Step_${currentState}`);

    // Calculate Progress Pill Percentage
    let pct = 6;
    if (currentState === 'intro') {
      pct = 6;
    } else if (currentState === 'quiz') {
      pct = Math.round(((currentQuestionIdx + 1) / quizQuestions.length) * 100);
    } else {
      pct = 100;
    }

    if (progressPillBadge) {
      progressPillBadge.textContent = pct + '%';
      progressPillBadge.style.left = `calc(${pct}% - 24px)`;
      if (pct < 10) progressPillBadge.style.left = '0%';
    }

    // 1. STATE: intro (EXACT 2 COLUMNS SIDE-BY-SIDE)
    if (currentState === 'intro') {
      contentWrapper.innerHTML = `
        <div class="warning-box">
          <span>⚠️</span> <span class="warning-red">Mas atenção!</span> Continue apenas se você tem o interesse e respeito genuíno em aprender sobre a religião.
        </div>

        <h2 class="subtitle-red">
          Você é iniciante ou já é Umbandista?
        </h2>

        <div class="intro-cards-container">
          <div class="intro-card-item" data-level="iniciante">
            <img src="assets/personagem-iniciante-novo-CPEGKlyv.png" alt="Iniciante" class="intro-card-image" />
            <span class="intro-card-title">Iniciante</span>
          </div>

          <div class="intro-card-item" data-level="umbandista">
            <img src="assets/personagem-umbandista-novo-CFD7hGAP.png" alt="Umbandista" class="intro-card-image" />
            <span class="intro-card-title">Umbandista</span>
          </div>
        </div>

        ${getFooterBannerHTML()}
      `;

      contentWrapper.querySelectorAll('.intro-card-item').forEach(card => {
        card.addEventListener('click', (e) => {
          if (isNavigating) return;
          isNavigating = true;

          const clickedCard = e.currentTarget;
          clickedCard.style.borderColor = '#e85a5a';
          clickedCard.style.backgroundColor = '#fef2f2';

          setTimeout(() => {
            currentState = 'quiz';
            currentQuestionIdx = 0;
            renderState();
          }, 350);
        });
      });
      return;
    }

    // 2. STATE: quiz (EXACT DECOMPILED QUESTIONS & INSTANT TOUCH-TO-ADVANCE)
    if (currentState === 'quiz') {
      const qData = quizQuestions[currentQuestionIdx];

      const optionsHTML = qData.options.map((opt, i) => `
        <button class="option-card-btn" data-index="${i}">
          ${opt.image ? `<img src="${opt.image}" alt="Icon" class="option-card-icon" />` : ''}
          <span class="option-card-label">${opt.text}</span>
        </button>
      `).join('');

      contentWrapper.innerHTML = `
        <h2 style="font-size: 1.25rem; font-weight: 900; text-align: center; color: var(--text-dark); margin-bottom: 12px; line-height: 1.35;">
          ${qData.question}
        </h2>

        ${qData.questionImage ? `
          <div style="width: 100%; max-width: 260px; margin: 0 auto 16px; display: flex; justify-content: center;">
            <img src="${qData.questionImage}" alt="Ilustração" style="width: 100%; height: auto; max-height: 220px; object-fit: contain; border-radius: 16px;" />
          </div>
        ` : ''}

        <div class="quiz-options-list">
          ${optionsHTML}
        </div>

        ${getFooterBannerHTML()}
      `;

      const optionBtns = contentWrapper.querySelectorAll('.option-card-btn');
      optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (isNavigating) return;
          isNavigating = true;

          optionBtns.forEach(b => {
            b.style.pointerEvents = 'none';
          });

          const clickedBtn = e.currentTarget;
          clickedBtn.classList.add('selected');

          setTimeout(() => {
            if (currentQuestionIdx < quizQuestions.length - 1) {
              currentQuestionIdx++;
              renderState();
            } else {
              currentState = 'analyzing';
              renderState();
            }
          }, 350);
        });
      });
      return;
    }

    // 3. STATE: analyzing
    if (currentState === 'analyzing') {
      contentWrapper.innerHTML = `
        <div class="spinner-box fade-in">
          <div class="spinner-circle"></div>
          <h2 style="font-size: 1.2rem; font-weight: 900; color: var(--text-dark);">Calculando seu nível de conhecimento...</h2>
          <p id="status-text" style="font-size: 0.9rem; font-weight: 600; color: var(--text-gray); margin-top: 8px;">Analisando suas respostas nos fundamentos...</p>
          
          <div class="progress-track" style="max-width: 300px; margin: 20px auto; height: 12px;">
            <div id="loading-bar" style="height: 100%; width: 0%; background: #3d9970; border-radius: 9999px; transition: width 0.4s ease;"></div>
          </div>
        </div>
        ${getFooterBannerHTML()}
      `;

      const statusText = document.getElementById('status-text');
      const loadingBar = document.getElementById('loading-bar');
      let p = 0;

      const timer = setInterval(() => {
        p += 25;
        loadingBar.style.width = p + '%';

        if (p === 50) {
          statusText.textContent = 'Mapeando grau de afinidade espiritual...';
        } else if (p === 75) {
          statusText.textContent = 'Preparando seu resumo de aprendizado...';
        } else if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            currentState = 'result';
            renderState();
          }, 400);
        }
      }, 600);
      return;
    }

    // 4. STATE: result
    if (currentState === 'result') {
      trackPixelEvent('Lead');

      contentWrapper.innerHTML = `
        <div class="fade-in" style="text-align: center;">
          <h2 style="font-size: 1.3rem; font-weight: 900; color: #2d7555; margin-bottom: 8px;">
            Saravá, meu filho! Parabéns por completar a jornada de conhecimento!
          </h2>
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-gray); margin-bottom: 16px;">
            Você demonstrou dedicação e amor pela Umbanda. Agora, responda:
          </p>

          <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <img src="assets/personagem-guia-3d-C5LUUTbc.png" alt="Guia" style="width: 110px; height: auto; margin-bottom: 12px;" />
            <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
              Você gostaria de ter acesso a um material que organizasse todo o conhecimento essencial da Umbanda em um só lugar?
            </h3>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              <button class="option-card-btn btn-result-option">
                <img src="assets/result-option-sim-CeTr9lC_.png" alt="Sim" class="option-card-icon" />
                <span class="option-card-label">Sim, com certeza!</span>
              </button>

              <button class="option-card-btn btn-result-option">
                <img src="assets/option-talvez-DPJvBUqf.png" alt="Quero aprender mais" class="option-card-icon" />
                <span class="option-card-label">Quero aprender mais</span>
              </button>
            </div>
          </div>
        </div>
        ${getFooterBannerHTML()}
      `;

      contentWrapper.querySelectorAll('.btn-result-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (isNavigating) return;
          isNavigating = true;

          e.currentTarget.classList.add('selected');
          setTimeout(() => {
            currentState = 'offer';
            renderState();
          }, 350);
        });
      });
      return;
    }

    // 5. STATE: offer
    if (currentState === 'offer') {
      trackPixelEvent('ViewContent', { content_name: 'Mapa Mental da Umbanda App' });

      contentWrapper.innerHTML = `
        <div class="fade-in">
          <h2 style="font-size: 1.25rem; font-weight: 900; text-align: center; color: var(--text-dark); margin-bottom: 8px;">
            Independente do seu nível de conhecimento, uma coisa é certa:
          </h2>
          <p style="font-size: 0.9rem; font-weight: 600; text-align: center; color: var(--text-gray); margin-bottom: 16px;">
            Para dominar os fundamentos da Umbanda, você precisa de um material que seja prático, visual e direto ao ponto.
          </p>

          <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <h3 style="font-size: 1.25rem; font-weight: 900; color: #2d7555; margin-bottom: 10px;">
              Aplicativo do Mapa Mental da Umbanda
            </h3>
            <img src="assets/question-aplicativo-DY88zYaI.png" alt="Aplicativo" style="width: 100%; max-width: 250px; height: auto; margin: 12px auto; display: block;" />
            <p style="font-size: 0.925rem; color: var(--text-dark); line-height: 1.5; margin-bottom: 20px;">
              O Aplicativo do Mapa Mental da Umbanda é mais do que um guia — é a maneira mais fácil e eficaz de organizar tudo o que você precisa saber sobre a religião.
            </p>

            <button id="btn-to-receive" class="btn-action">
              Ver Como Vou Receber
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        ${getFooterBannerHTML()}
      `;

      document.getElementById('btn-to-receive').addEventListener('click', () => {
        currentState = 'howToReceive';
        renderState();
      });
      return;
    }

    // 6. STATE: howToReceive (WITH 2 VIMEO MICRO-VSLS)
    if (currentState === 'howToReceive') {
      contentWrapper.innerHTML = `
        <div class="fade-in">
          <h2 style="font-size: 1.25rem; font-weight: 900; text-align: center; color: var(--text-dark); margin-bottom: 8px;">
            Agora meu filho, deixe-me explicar como você vai receber...
          </h2>
          <p style="font-size: 0.9rem; font-weight: 600; text-align: center; color: var(--text-gray); margin-bottom: 16px;">
            Após a confirmação do pagamento, você receberá um acesso individual no seu e-mail para baixar o aplicativo. O material é digital e em PDF. Você pode imprimir ou estudar nos seus dispositivos.
          </p>

          <h3 style="font-size: 1.1rem; font-weight: 900; text-align: center; color: var(--text-dark); margin: 24px 0 14px; line-height: 1.35;">
            Veja abaixo uma <span style="text-decoration: underline;">PRÉVIA</span>: O Aplicativo do Mapa Mental da Umbanda que você irá OBTER ACESSO!
          </h3>

          <!-- Micro VSL 1 -->
          <div class="vimeo-embed-box">
            <iframe 
              src="https://player.vimeo.com/video/1180197671?badge=0&autopause=0&player_id=0&app_id=58479" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              title="APP Mapa - Apresentação">
            </iframe>
          </div>

          <h3 style="font-size: 1.1rem; font-weight: 900; text-align: center; color: var(--text-dark); margin: 24px 0 14px;">
            Mapa Mental Impresso e Encadernado
          </h3>

          <!-- Micro VSL 2 -->
          <div class="vimeo-embed-box">
            <iframe 
              src="https://player.vimeo.com/video/1180197942?badge=0&autopause=0&player_id=0&app_id=58479" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              title="Mapa Mental Impresso">
            </iframe>
          </div>

          <button id="btn-to-bonus" class="btn-action" style="margin-top: 16px;">
            OK, entendi!
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        ${getFooterBannerHTML()}
      `;

      document.getElementById('btn-to-bonus').addEventListener('click', () => {
        currentState = 'bonus';
        renderState();
      });
      return;
    }

    // 7. STATE: bonus
    if (currentState === 'bonus') {
      const bonusListHTML = bonusItems.map(b => `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px; display: flex; gap: 14px; align-items: center; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <img src="${b.image}" alt="${b.title}" style="width: 70px; height: 70px; object-fit: contain; border-radius: 10px; background: #f8fafc; flex-shrink: 0;" />
          <div>
            <span style="background: #fffbeb; color: #d97706; font-size: 0.725rem; font-weight: 800; padding: 2px 8px; border-radius: 9999px; display: inline-block; margin-bottom: 4px;">${b.tag}</span>
            <div style="font-size: 0.9rem; font-weight: 800; color: var(--text-dark); line-height: 1.3;">${b.title}</div>
          </div>
        </div>
      `).join('');

      contentWrapper.innerHTML = `
        <div class="fade-in">
          <h2 style="font-size: 1.25rem; font-weight: 900; text-align: center; color: var(--text-dark); margin-bottom: 8px;">
            Aproveite, meu filho! Escolhendo o COMBO COMPLETO:
          </h2>
          <p style="font-size: 0.9rem; font-weight: 600; text-align: center; color: var(--text-gray); margin-bottom: 16px;">
            Além do Aplicativo do Mapa Mental da Umbanda, você receberá também de presente 9 BÔNUS ESPECIAIS! São materiais exclusivos preparados com todo carinho para acelerar sua evolução espiritual!
          </p>

          <div style="margin: 16px 0;">
            ${bonusListHTML}
          </div>

          <button id="btn-to-checkout" class="btn-action">
            Ver Oferta Especial
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        ${getFooterBannerHTML()}
      `;

      document.getElementById('btn-to-checkout').addEventListener('click', () => {
        currentState = 'frontDuplo';
        renderState();
      });
      return;
    }

    // 8. STATE: frontDuplo (FINAL CHECKOUT OFFER PAGE WITH UTM FORWARDING)
    if (currentState === 'frontDuplo') {
      const finalCheckoutUrl = getCheckoutURL();
      trackPixelEvent('InitiateCheckout', { value: 37.00, currency: 'BRL' });

      contentWrapper.innerHTML = `
        <div style="background: linear-gradient(90deg, #d14a4a, #b91c1c); color: white; text-align: center; font-size: 0.8rem; font-weight: 800; padding: 10px 14px; margin: -20px -18px 16px; width: calc(100% + 36px); text-transform: uppercase;">
          🔥 SOMENTE HOJE: 97% DAS PESSOAS OPTAM POR ESTA OFERTA
        </div>

        <div class="fade-in">
          <h2 style="font-size: 1.3rem; font-weight: 900; text-align: center; color: var(--text-dark); margin-bottom: 8px;">
            Aplicativo do Mapa Mental da Umbanda
          </h2>
          <p style="font-size: 0.9rem; font-weight: 600; text-align: center; color: var(--text-gray); margin-bottom: 16px;">
            Você vai evoluir investindo no Aplicativo do Mapa Mental da Umbanda com o material completo pelo valor promocional de apenas 37 reais. Mas com ACESSO VITALÍCIO!
          </p>

          <img src="assets/super-mockup-oferta-ZDvK5T8y.png" alt="Super Oferta Mockup" style="width: 100%; max-width: 360px; height: auto; border-radius: 16px; margin: 12px auto; display: block;" />

          <div style="display: flex; align-items: center; gap: 14px; background: #e8f5ee; border: 1px solid #6bc9a0; border-radius: 16px; padding: 16px; margin: 16px 0;">
            <div style="width: 46px; height: 46px; background: #3d9970; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 900; flex-shrink: 0;">60</div>
            <div>
              <h4 style="font-weight: 800; font-size: 0.95rem; color: var(--text-dark);">60 dias de Garantia</h4>
              <p style="font-size: 0.825rem; color: var(--text-gray);">Satisfação garantida ou 100% do seu dinheiro de volta.</p>
            </div>
          </div>

          <div style="background: linear-gradient(180deg, #ffffff 0%, #fffbeb 100%); border: 2px solid #f59e0b; border-radius: 20px; padding: 20px; text-align: center; margin: 20px 0; box-shadow: 0 8px 24px rgba(245, 158, 11, 0.15);">
            <div style="font-size: 0.95rem; color: var(--text-gray); text-decoration: line-through;">De R$ 197,00 por apenas:</div>
            <div style="font-size: 2.4rem; font-weight: 900; color: #2d7555; margin: 4px 0;">R$ 37,00</div>
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-dark);">Acesso Vitalício + 10 Bônus Especiais Inclusos</div>
          </div>

          <a href="${finalCheckoutUrl}" target="_blank" class="btn-action btn-buy">
            Quero comprar o Material Completo e receber agora!
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          ${getFooterBannerHTML()}
        </div>
      `;
      return;
    }
  }

  // Initialize App State
  renderState();
});
