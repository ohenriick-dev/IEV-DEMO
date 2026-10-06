
document.addEventListener("DOMContentLoaded", () => {
    const imagem = document.getElementById("hero-slide");
    const indicadores = document.getElementById("hero-indicadores");

    if (!imagem || !indicadores) return;

    // Adicione ou remova imagens nesta lista.
    const slides = [
        {
            src: "/Assets/Img/hero_foto.jpg",
            alt: "Criança participando de atividade do Instituto Espaço Vida"
        },
        {
            src: "/Assets/Img/evento2.jpeg",
            alt: "Atividade realizada pelo Instituto Espaço Vida"
        },
        {
            src: "/Assets/Img/servico3.jpeg",
            alt: "Participantes de uma ação do Instituto Espaço Vida"
        },
        {
            src: "/Assets/Img/projeto2.jpeg",
            alt: "Projeto de inclusão do Instituto Espaço Vida"
        }
    ];

    const intervalo = 5000;
    let slideAtual = 0;
    let temporizador;

    // Cria os indicadores conforme a quantidade de imagens.
    indicadores.innerHTML = "";

    slides.forEach((slide, indice) => {
        const bolinha = document.createElement("span");

        if (indice === 0) {
            bolinha.classList.add("ativo");
        }

        indicadores.appendChild(bolinha);

        // Permite clicar nas bolinhas para mudar de imagem.
        bolinha.addEventListener("click", () => {
            mostrarSlide(indice);
            reiniciarTemporizador();
        });
    });

    const bolinhas = indicadores.querySelectorAll("span");

    function mostrarSlide(indice) {
        slideAtual = indice;

        // Pré-carrega a próxima imagem antes de exibi-la.
        const novaImagem = new Image();
        novaImagem.src = slides[slideAtual].src;

        novaImagem.onload = () => {
            imagem.src = slides[slideAtual].src;
            imagem.alt = slides[slideAtual].alt;
        };

        // Atualiza a bolinha ativa.
        bolinhas.forEach((bolinha, i) => {
            bolinha.classList.toggle("ativo", i === slideAtual);
        });
    }

    function proximoSlide() {
        const proximo = (slideAtual + 1) % slides.length;
        mostrarSlide(proximo);
    }

    function reiniciarTemporizador() {
        clearInterval(temporizador);
        temporizador = setInterval(proximoSlide, intervalo);
    }

    // Inicia a troca automática a cada 5 segundos.
    temporizador = setInterval(proximoSlide, intervalo);
});