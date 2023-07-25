formElment = document.getElementById('register');
formElment.addEventListener('submit', (event) => {  
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const dni = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    console.log(nombre);
    console.log(apellido);
    
    fetch(`http://localhost:3000/register?nombre=${nombre}&apellido=${apellido}&email=${email}&dni=${dni}&password=${password}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.status == 200){
            alert("Registro exitoso");
            window.location.href = "Principal.html";
        }else{
            alert("Registro fallido");
        }
    })
});

