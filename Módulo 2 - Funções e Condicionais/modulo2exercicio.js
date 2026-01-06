const prompt = require('prompt-sync')(); // importa o prompt-sync

// Ler os números do usuário
const Number1 = Number(prompt("Digite um número inteiro: "));
const Number2 = Number(prompt("Digite outro número inteiro: "));

// Funções matemáticas
const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// Função que mostra os resultados
const mostraResultado = () => {
    console.log(`Soma entre ${Number1} e ${Number2}: ${soma(Number1, Number2)}`);
    console.log(`Subtração entre ${Number1} e ${Number2}: ${subtrai(Number1, Number2)}`);
    console.log(`Multiplicação entre ${Number1} e ${Number2}: ${multiplicar(Number1, Number2)}`);
    console.log(`Divisão entre ${Number1} e ${Number2}: ${dividir(Number1, Number2)}`);
};

// Chamar a função
mostraResultado();
