const botaoCopiar = document.getElementById("copiarPix");

botaoCopiar.addEventListener("click", function () {
  const chavePix = "26.726.738/0001-24";

  navigator.clipboard.writeText(chavePix);

  botaoCopiar.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';

  setTimeout(function () {
    botaoCopiar.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
  }, 2000);
});
