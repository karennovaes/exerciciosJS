function somar (){
    let num1 = Number(prompt('Digite um número:'));
    let num2 = Number(prompt('Digite outro número:'));
    resultado = document.getElementById("resultado");

    let soma = num1 + num2;
    resultado.innerHTML = `<p> A soma de ${num1} e ${num2} é ${soma}!</p>`;
}