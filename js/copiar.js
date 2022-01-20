function copiarPortapapeles(){
    event.preventDefault();
    var contentenido = document.getElementById("msg");
    contentenido.select();
    document.execCommand('copy');
    alert('copiado'); 
}
