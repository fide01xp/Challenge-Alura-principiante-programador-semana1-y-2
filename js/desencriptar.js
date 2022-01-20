function desencriptar(texto){
    var encriptado = ["enter","imes","ai","ober","ufat"];
    var conversion = ["e","i","a","o","u"];
   for (var i=0;i<=4;i++){
    texto = texto.replace(new RegExp(encriptado[i],"g"),conversion[i]);
   }

   return texto;
}