function calcular(){
    let num = Number(prompt(`Digitte um número:`));
    resultado = document.getElementById("resultado");


    let potencia2 = Math.pow(num,2);
    let potencia3 = Math.pow(num,3);

    resultado.innerHTML = `<p> O número a ser analisado é ${num}!</p> <hr>`;
    resultado.innerHTML += `<p> O seu valor absulto é ${Math.abs(num)}!</p>`;
    resultado.innerHTML += `<p> A sua parte inteira é ${Math.trunc(num)}!</p>`;
    resultado.innerHTML += `<p> O valor inteiro mais próximo é ${Math.round(num)}!</p> `;
    resultado.innerHTML += `<p> A sua raiz quadrada é ${Math.sqrt(num)}!</p> `;
    resultado.innerHTML += `<p> A sua raiz cúbica é ${Math.cbrt(num)}!</p> `;
    resultado.innerHTML += `<p> O valor de é ${num}² é ${Math.pow(num,2)}!</p> `;
    resultado.innerHTML += `<p> O valor de é ${num}³ é ${Math.pow(num,3)}!</p> `
  
 
}