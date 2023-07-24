
const form = document.getElementById('login');
form.addEventListener('submit', (event) => {
    event.preventDefault();
   const correo = document.getElementById('correo').value;
   const contasena = document.getElementById('contrasena').value;
   
   
   
    fetch(`http://localhost:3000/login?correo=${correo}&contasena=${contasena}`)
    .then(response => response.json())
    .then(data => {
if(data.length === 0){
    
        alert("No existes bro registrate o usuario / contraseña incorrecta");
        
    }else{
    console.log(data);
    window.location.href = "Principal.html";
    }

})
});
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

