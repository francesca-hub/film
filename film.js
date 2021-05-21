// JavaScript film
function save() {
    var nome = document.getElementById('nomeInput').value;
    var cognome = document.getElementById('cognomeInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    localStorage.setItem('Nome', nome);
    localStorage.setItem('Cognome', cognome);
    localStorage.setItem('Emil', email);
    localStorage.setItem('Password', password);

    check();
}

function check() {
    var nome = localStorage.getItem('Nome');
    var cognome = localStorage.getItem('Cognome');
    var email = localStorage.getItem('Email');
    var password = localStorage.getItem('Password');
    if (nome !== null &&  cognome!==null && email!== null && password !== null) {
        change();
    }
}
function change() {
 
    let loginForm = document.getElementById('loginForm'); 
    loginForm.style.display = "none";


    let loginButton = document.getElementById('loginButton');
    loginButton.style.display = "none";

    
    let logoutButton = document.getElementById('logoutButton');
    logoutButton.style.display = "";
}

function logOut() {
    var loginButton = document.getElementById('loginButton');
    var logoutButton = document.getElementById('logoutButton');
    if (localStorage.getItem('Nome') !== null && localStorage.getItem('Cognome') !== null
        && localStorage.getItem('Email') !== null && localStorage.getItem('Password') !== null ) {

       
        let loginForm = document.getElementById('loginForm'); 
        loginForm.style.display = '';

        
        logoutButton.style.display = "none";

       
        loginButton.style.display = "";
        loginButton.style.display = disabled;


        localStorage.clear(); 
    }
}

function hello() {
    var nome = document.getElementById('nomeInput')
    if (nome !== null) {
        alert('Benvenuto' + name);
    }
}

