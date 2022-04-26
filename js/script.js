/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var textoIgresado = document.querySelector("#mensaje-ingresado").value;

var botonEncriptar = document
  .querySelector("#btn-encriptar").addEventListener('click', encriptar)
  

var botonDesencriptar = document
  .querySelector("#btn-desencriptar").addEventListener('click', desencriptar)
 
var copiar = document.querySelector("#btn-copy").addEventListener('click', copiar);
var mensaje = document.querySelector("#msg");


function encriptar(event) {
  event.preventDefault();
  textoIgresado = document.querySelector("#mensaje-ingresado").value;
  let textoEncriptado = textoIgresado
    .toLowerCase()
    .replace("a", "ai")
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("o", "ober")
    .replace("u", "ufat");
  mensaje.value = textoEncriptado;
}

function desencriptar(event) {
  event.preventDefault();

  textoIgresado = textoIgresado
    .toLowerCase()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  var msg = mensaje;
  msg.value = textoIgresado;
}

function copiar(){
    let mensajeCopiado = mensaje;
    mensajeCopiado.select();
    document.execCommand("copy");
}
