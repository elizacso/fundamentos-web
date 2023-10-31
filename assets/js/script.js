let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validarNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 2) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validarEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "Email inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "Email válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validarAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length >= 2) {
    txtAssunto.innerHTML = "Digite no máximo 100 caracteres.";
    txtAssunto.style.color = "red";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso.");
  } else {
    alert("Preencha o formulário corretamente antes de enviar.");
  }
}
