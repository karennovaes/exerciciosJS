function clicou (){
    let nome = prompt('Qual é seu nome?');
    resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> Olá, ${nome}!É um grande prazer te conhecer!</p>`;
}