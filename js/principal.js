

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    var mayusculas = /[A-Z]/.test(document.getElementById("input-texto").value);
    let mensaje = document.getElementById("input-texto").value;
    if (!mensaje == mayusculas ) {
    var encriptado = encriptar(mensaje);
    document.getElementById("msg").value = encriptado;
    }
    else {
        alert('no se permiten mayusculas');
    }
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var mayusculas = /[A-Z]/.test(document.getElementById("input-texto").value);
    let mensaje = document.getElementById("input-texto").value;
    if (!mensaje == mayusculas ) {
    var desencriptado = desencriptar(mensaje);
    document.getElementById("msg").value = desencriptado;
    }else {
        alert('no se permiten mayusculas');
    }
});

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiarPortapapeles();
});