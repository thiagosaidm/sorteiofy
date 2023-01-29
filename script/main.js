/// Capturei os elementos usando variadas formas:
/*
   getElementById - para os inputs, aproveitando que os inputs foram criados junto com os ids
   querySelector - para as classes e elementos
*/

let myMax = document.getElementById("max");
let btn = document.querySelector("button");
let numeroSorteado = document.querySelector(".numero");
let congrats = document.querySelector(".congrats");

/// Declarei a função antes do button escutar o evento, mesmo que exista o conceito de hoisting, acredito que fica mais legível

/*

A função à seguir chamada sortearNumero, recebe como parâmetro, dois numeros. max e min e retorna um numero
gerado pela função Math.floor e Math.Random. 

* Primeiro verifica se os numeros do input, digitados pelo usuário é maior q 0, se sim, executa o Math.floor;
* O Math.Random gera um numero, que é multiplicado pela resto do max - min + 1, para incluir o limite superior e + min o limite inferior;
* Assim podemos gerar valores que estejam dentro dos limites especificados;
* Arredondamos o numero com Math.floor  

* Caso o valor do input seja menor que 0, retorna undefined;

*/

function sortearNumero(max) {
  return max > 0 
    ? Math.floor(Math.random() * (max - 1 + 1) + 1)
    : undefined;
}

// Adicionando a função no botão

/*
* Recebemos o valor de max e min
* Atribuimos o valor de result ao resultado da função;
* Caso o valor seja undefined, alertamos o usuário.
* Em caso de entrada de valores: Inserimos o numero gerado dentro do elemento numeroSorteado e uma mensagem de congratulação ao ganhador!

*/

btn.addEventListener("click", () => {
  let max = Number(myMax.value);
  let result = sortearNumero(max);
  result === undefined
    ? alert("Digite o número de participantes")
    : ((numeroSorteado.innerHTML = result),
      (congrats.innerHTML = "Parabéns ao ganhador!"));
});
