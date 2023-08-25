

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

const loginError = document.getElementById('login-error');
const registerSuccess = document.getElementById('register-success');

loginButton.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (username === 'usuario' && password === 'contraseña') {
    loginError.textContent = '';
    alert('Inicio de sesión exitoso');
    
    window.location.href = 'e-comerce.html'; 
  } else {
    loginError.textContent = 'Credenciales incorrectas';
  }
});

loginButton.addEventListener('mouseover', () => {
  loginButton.style.backgroundColor = '#2980b9';
});

loginButton.addEventListener('mouseout', () => {
  loginButton.style.backgroundColor = '#3498db';
});

registerButton.addEventListener('click', () => {
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;

  
  alert(`Usuario "${newUsername}" registrado exitosamente`);
  registerSuccess.textContent = `Registrado como "${newUsername}"`;
});

registerButton.addEventListener('mouseover', () => {
  registerButton.style.backgroundColor = '#2980b9';
});

registerButton.addEventListener('mouseout', () => {
  registerButton.style.backgroundColor = '#3498db';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (loginForm.contains(document.activeElement)) {
      loginButton.click();
    } else if (registerForm.contains(document.activeElement)) {
      registerButton.click();
    }
  }
});




