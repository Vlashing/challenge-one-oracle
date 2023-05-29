
    // document.getElementById("textocopiado").style.display = "none";
    document.getElementById("btn-copiar").style.display = "none";
    document.getElementById("ningun-mensaje").style.display = "none";


function encriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();

    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("ingrese-mensaje").style.display = "none";
    document.getElementById("ningun-mensaje").style.display = "none";


    document.getElementById("textocopiado").innerHTML = textoCifrado;
    document.getElementById("textocopiado").style.display = textoCifrado;
    document.getElementById("ningun-mensaje").innerHTML = textoCifrado;
    document.getElementById("ingrese-mensaje").innerHTML = textoCifrado;

    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}


function desencriptar(){
    let texto = document.getElementById("texto").value.toLowerCase();

    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    
    document.getElementById("textocopiado").innerHTML = textoCifrado;

    document.getElementById("munheco").style.display = "none";

    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}


function copy() {
    let texto = document.getElementById("textocopiado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textocopiado.textContent);
    let copy = document.getElementById("btn-copiar");
}


 
//    
