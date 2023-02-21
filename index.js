let inputs = document.querySelectorAll("input");

// Add event listeners to all non-password inputs
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].required == true && inputs[i].type != "password") {
    inputs[i].addEventListener("input", check);
  }
}

// Add confirmation check or x depending on if user wrote any input
function check (e) {
  console.log(e.target.value);
  if (e.target.value != "") {
    e.target.classList.add("confirmation");
  }
  else {
    e.target.classList.remove("confirmation");
  }
}

let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirmation");
let create = document.querySelector("#create");
let form = document.querySelector("form")

// Client-side password validation, with shaking animation if invalid
form.addEventListener("submit", confirm);
function confirm (e) {
  if (password.value != confirmation.value) {
    e.preventDefault();
    setTimeout((() => {
      create.classList.add("shake");
      create.textContent = "Passwords must match";
      }), 0);

    setTimeout((() => {
      create.classList.remove("shake");
      create.textContent = "Create Account";
      }), 300);
    return false;
  }

  return true;
}

let login = document.querySelector("#login");
let question = document.querySelector("#question");

// Letting user know this website is for a non-existent service
login.addEventListener("click", jk);
function jk (e) {
  e.target.textContent = "";
  question.textContent = "Too bad, this service doesn't actually exist";

  setTimeout((() => {
  e.target.textContent = "Log in";
  question.textContent = "Already have an account?";
    }), 1000);
}