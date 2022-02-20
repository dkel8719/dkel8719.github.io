// tap menu
const tap = document.querySelectorAll('.navbar .tap-menu li a');
const con = document.querySelectorAll('section');

tap.forEach(tap => {tap.addEventListener('click', (event) => {
  event.preventDefault();
  
  con.forEach(con => {
    con.classList.remove('show')
    con.classList.add('hidden');
  })

  const active = tap.getAttribute('href') ;
  document.querySelector(active).classList.remove('hidden');
  document.querySelector(active).classList.add('show');
  })
})

const tapColor = document.querySelectorAll('.navbar .tap-menu li');

tapColor.forEach((tap) => {tap.addEventListener('click', () => {
  tapColor.forEach(tap => tap.classList.remove('active'));
  tap.classList.add('active');
})})
/////////////////////////////


// login form
const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('.greeting');

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add('hidden');
  localStorage.setItem('username', loginInput.value);
  paintGreeting(loginInput.value);
}

function paintGreeting(username) {
  greeting.classList.remove('hidden')
  greeting.innerHTML = `${username}`;
}

const savedUserName = localStorage.getItem('username');

if (!savedUserName) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUserName);
}
///////////////////////////////////


// log-out button
const logOutBtn = document.querySelector('.log-out');

function onLogoutClick(){
  localStorage.clear();
  window.location.reload(); 
}

logOutBtn.addEventListener('click', onLogoutClick)