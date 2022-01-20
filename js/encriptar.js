function encriptar(texto){
    var vocales = ["e","i","a","o","u"];
    var conversion = ["enter","imes","ai","ober","ufat"];

   for (var i=0;i<=4;i++){
    texto = texto.replace(new RegExp(vocales[i],"g"),conversion[i]);
   }

   return texto;
}