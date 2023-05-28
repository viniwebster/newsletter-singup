const input = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = input.value;
  localStorage.setItem("email", email);

  window.location.href = "../checked.html";
});

const typesOfError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

let messages = {
  email: {
    typeMismatch: "Insira um email no formato válido",
    valueMissing: "Insira um email",
    tooShort: "Insira um email válido",
  },
};

input.addEventListener("blur", () => emailValidity(input));
input.addEventListener("invalid", (evento) => evento.preventDefault());

function emailValidity(input) {
  let message = "";
  input.setCustomValidity("");
  input.style = "";

  typesOfError.forEach((erro) => {
    if (input.validity[erro]) {
      message = messages[input.name][erro];
      changeColor(input);
    }
  });
  error.textContent = message;
}

function changeColor(input) {
  input.style.borderColor = "hsl(4, 100%, 67%)";
  input.style.color = "hsl(4, 100%, 67%)";
  input.style.outlineColor = "hsl(4, 100%, 67%)";
  input.style.backgroundColor = "hsl(7, 100%, 96%)";
}
