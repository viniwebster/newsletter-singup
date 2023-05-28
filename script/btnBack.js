const btnBack = document.getElementById('btnBack');
btnBack.addEventListener('click', () => window.location.href = '../index.html');

const emailLocalStorage = localStorage.getItem('email')
const email = document.getElementById('email-checked');
email.textContent = emailLocalStorage;
