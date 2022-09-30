
function calcularSerie() {
    //Pega os atributos do html
    var num1 = document.querySelector('#num1').value
    var num2 = document.querySelector('#num2').value
    var num3 = document.querySelector('#num3').value
    var saida = document.querySelector("span")

    //converter para number
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    //calculo
    var soma = num1 + num2 + num3;

    //mostra na tela 
    saida.innerHTML = `${soma} Ω`
}




