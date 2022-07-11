alert('Seja bem-vindo(a) ao meu site!');

function clicou (){
    let num = Number(prompt('Digite um número:'));
    resultado = document.getElementById("resultado");

    let dobro = num * 2;
    let metade = num / 2;

    resultado.innerHTML = `<p> O dobro de ${num} é ${dobro} e a metade é ${metade}!</p>`;
}