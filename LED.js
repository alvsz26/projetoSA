var select1 = document.querySelector("#tensaoLed")
var select2 = document.querySelector("#tensaoFonte")
var select3 = document.querySelector("#corrente")
var saida = document.querySelector("span")
var botao = document.querySelector("#cal")
var led 

botao.addEventListener("click", (e) => {

    var tensaoLed = select1.value
    var tensaoFonte = select2.value
    var corrente = select3.value

 led = (tensaoLed-tensaoFonte)/corrente
 saida.innerText = `Valor do resistor ${led}Ω`
    e.preventDefault()
})
