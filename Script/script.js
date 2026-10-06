const btnMenu = document.getElementById("btnMenu");
const btnFecharMenu = document.getElementById("btnFecharMenu");
const barraLateral = document.getElementById("barraLateral");


// Abrir
btnMenu.addEventListener("click", () => {
    barraLateral.classList.add("aberta");
});


// Fechar
btnFecharMenu.addEventListener("click", () => {
    barraLateral.classList.remove("aberta");
});