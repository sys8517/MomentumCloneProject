const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); //document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
    //const username = localStorage.getItem(USER) 인수를 받지 않고, 여기서만 찾는 형식으로도 가능하지만, localStorage를 두 번 열어봐야함
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings(savedUsername);
}
