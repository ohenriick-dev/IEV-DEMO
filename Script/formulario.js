const formulario = document.getElementById("formContato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroMensagem = document.getElementById("erroMensagem");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

/*
 * REGEX PARA E-MAIL
 */
const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/* =====================================================
  VALIDAÇÃO DO NOME
===================================================== */
function validarNome() {
  const valor = nome.value.trim();

  if (valor === "") {
    erroNome.textContent = "Digite seu nome.";
    nome.classList.add("campo-invalido");
    return false;
  }

  if (!regexNome.test(valor)) {
    erroNome.textContent = "Digite um nome válido.";
    nome.classList.add("campo-invalido");
    return false;
  }

  erroNome.textContent = "";
  nome.classList.remove("campo-invalido");
  nome.classList.add("campo-valido");
  return true;
}

/* =====================================================
  VALIDAÇÃO DO EMAIL
===================================================== */
function validarEmail() {
  const valor = email.value.trim();

  if (valor === "") {
    erroEmail.textContent = "Digite seu e-mail.";
    email.classList.add("campo-invalido");
    return false;
  }

  if (!regexEmail.test(valor)) {
    erroEmail.textContent = "Digite um e-mail válido.";
    email.classList.add("campo-invalido");
    return false;
  }

  erroEmail.textContent = "";
  email.classList.remove("campo-invalido");
  email.classList.add("campo-valido");
  return true;
}

/* =====================================================
  VALIDAÇÃO DA MENSAGEM
===================================================== */
function validarMensagem() {
  const valor = mensagem.value.trim();

  if (valor === "") {
    erroMensagem.textContent = "Digite uma mensagem.";
    mensagem.classList.add("campo-invalido");
    return false;
  }

  if (valor.length < 10) {
    erroMensagem.textContent =
      "A mensagem deve possuir pelo menos 10 caracteres.";
    mensagem.classList.add("campo-invalido");
    return false;
  }

  erroMensagem.textContent = "";
  mensagem.classList.remove("campo-invalido");
  mensagem.classList.add("campo-valido");
  return true;
}

/* =====================================================
  VALIDAÇÃO EM TEMPO REAL
===================================================== */
nome.addEventListener("input", validarNome);
email.addEventListener("input", validarEmail);
mensagem.addEventListener("input", validarMensagem);

/* =====================================================
  ENVIO
===================================================== */
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const mensagemValida = validarMensagem();
  if (nomeValido && emailValido && mensagemValida) {
    mensagemSucesso.classList.add("mostrar");
    formulario.reset();
    nome.classList.remove("campo-valido");
    email.classList.remove("campo-valido");
    mensagem.classList.remove("campo-valido");

    setTimeout(function () {
      mensagemSucesso.classList.remove("mostrar");
    }, 5000);
  }
});
