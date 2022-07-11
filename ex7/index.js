function calularMedia (){
    let nome = prompt('Qual o nome do aluno?');
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));
    let media = (nota1 + nota2) / 2

    resultado = document.getElementById("resultado");

    resultado.innerHTML = `<p> Calculando a média de ${nome}!</p>`;
    resultado.innerHTML += `<p> As notas obtidas foram ${nota1} e ${nota2}!</p>`;
    resultado.innerHTML += `<p> A média final será ${media}!</p>`;
}