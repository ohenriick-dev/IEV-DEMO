document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os wrappers de carrossel na página
  const todosOsCarrosseis = document.querySelectorAll(".carrossel-wrapper");

  todosOsCarrosseis.forEach((wrapper) => {
    // Busca os elementos DENTRO deste wrapper específico
    const container = wrapper.querySelector(".carrossel-container");
    const slides = wrapper.querySelectorAll(".carrossel-slide");
    const btnPrev = wrapper.querySelector(".btn-carrossel.prev");
    const btnNext = wrapper.querySelector(".btn-carrossel.next");
    const indicadoresContainer = wrapper.querySelector(
      ".carrossel-indicadores",
    );

    if (!container || slides.length === 0) return;

    let indexAtual = 0;
    let autoplayTimer = null;
    const tempoAutoplay = 3000;

    // 1. Criar as bolinhas apenas se o container de indicadores existir
    if (indicadoresContainer) {
      slides.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("ativo");
        dot.addEventListener("click", () => irParaSlide(index));
        indicadoresContainer.appendChild(dot);
      });
    }

    const dots = indicadoresContainer
      ? indicadoresContainer.querySelectorAll("span")
      : [];

    // Função de navegação restrita a ESTE carrossel
    function irParaSlide(index) {
      if (index < 0) {
        indexAtual = slides.length - 1;
      } else if (index >= slides.length) {
        indexAtual = 0;
      } else {
        indexAtual = index;
      }

      const larguraSlide = container.clientWidth;
      container.scrollTo({
        left: larguraSlide * indexAtual,
        behavior: "smooth",
      });

      atualizarIndicadores();
    }

    function atualizarIndicadores() {
      dots.forEach((dot, i) => {
        dot.classList.toggle("ativo", i === indexAtual);
      });
    }

    // Eventos dos botões
    if (btnNext)
      btnNext.addEventListener("click", () => irParaSlide(indexAtual + 1));
    if (btnPrev)
      btnPrev.addEventListener("click", () => irParaSlide(indexAtual - 1));

    // Evento de rolagem/swipe manual
    container.addEventListener("scroll", () => {
      const larguraSlide = container.clientWidth;
      if (larguraSlide > 0) {
        const novoIndex = Math.round(container.scrollLeft / larguraSlide);
        if (novoIndex !== indexAtual) {
          indexAtual = novoIndex;
          atualizarIndicadores();
        }
      }
    });

    // Autoplay individual
    function iniciarAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(
        () => irParaSlide(indexAtual + 1),
        tempoAutoplay,
      );
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }

    // Pausa o autoplay deste carrossel quando o mouse está sobre ele
    wrapper.addEventListener("mouseenter", stopAutoplay);
    wrapper.addEventListener("mouseleave", iniciarAutoplay);

    iniciarAutoplay();
  });
});
