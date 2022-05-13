let captcha= document.querySelector("#random")
let input= document.querySelector("#captcha")

let text = "";

for (let i = 0; i < 3; i++) {
    text += String.fromCharCode(GenerarNumero(97, 122));
    text += String.fromCharCode(GenerarNumero(48, 57));
}

function GenerarNumero(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
}
captcha.innerHTML = text;

document.querySelector ("#btncaptcha").addEventListener("click", (e) => { 
    e.preventDefault()
    if (text == input.value) {
    document.querySelector ("#validacion").innerHTML="<p class='correcto'> Captcha correcto </p>"
    }
    else {
    document.querySelector ("#validacion").innerHTML="<p class='incorrecto'> Captcha incorrecto </p>"
    }
})
