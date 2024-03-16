const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});
email.addEventListener("blur", () => {
  checkInputEmail();
});
password.addEventListener("blur", () => {
  checkInputPassword();
});
passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
})

function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha o nome de usuário!");
  } else {
    correctInput(username);
  }
}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "Preencha o seu E-mail!");
  } else {
    correctInput(email);
  }
}

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "Preencha sua senha!");
  } else if(passwordValue.length < 8){
    errorInput(password, "Sua senha deve ter no mínimo 8 caracteres!");
  } else {
    correctInput(password);
  }
}

function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if(passwordConfirmationValue === ""){
    errorInput(passwordConfirmation, "Preencha a confirmação de senha!");
  } else if(passwordConfirmationValue !== passwordValue){
    errorInput(passwordConfirmation, "As duas senhas devem ser iguais!");
  } else {
    correctInput(passwordConfirmation);
  }
}

function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content")

  const isValide = [...formItems].every( (item) =>{
    return item.className === "form-content"
  });

  if(isValide){
    alert("Usuário cadastrado com sucesso!!");
  }
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error"
}

function correctInput(input){
  const formItem = input.parentElement;
  formItem.className = "form-content"
}