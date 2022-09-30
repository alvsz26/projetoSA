function calcularparalelo() {
    var n1 = document.querySelector("#num1").value
    var n2 = document.querySelector("#num2").value
    var saida = document.querySelector("#resultadoParalelo")

    var r1 = (1) / (1 / n1 + (1) / 1 / n2)
    saida.textContent = `${r1}`
}


