// Seleciona os elementos do DOM
const minElement = document.querySelector(".numberEntre");
const maxElement = document.querySelector(".numberE");
const button = document.querySelector(".sorteButton");
const resultValue = document.getElementById("resultValue");

// Função para sortear um número
function sortear() {
    // Obtém os valores dos elementos e converte para números
    const max = parseInt(maxElement.value, 10);
    const min = parseInt(minElement.value, 10);

    // Gera um número inteiro aleatório dentro do intervalo
    if (!isNaN(max) && !isNaN(min) && max >= min) {
        let randomIntegerInRange = Math.floor(Math.random() * (max - min + 1)) + min;

        // Atualiza o conteúdo do elemento com o resultado
        resultValue.innerHTML = randomIntegerInRange;
    } else {
        // Exibe mensagem de erro no resultado
        resultValue.innerHTML = "Valores inválidos";
    }
}

// Adiciona um evento de clique ao botão
button.addEventListener("click", sortear);
