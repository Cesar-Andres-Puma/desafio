const indice = 13;
let soma = 0;
let K = 0;

while(K < indice){
    K = K + 1;
    soma = soma + K;
}
console.log(soma)

//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
let numero = 5;
let fibonacci_1 = 0;
let fibonacci_2 = 1;

let pertenceFibonacci = false;

let sequenciaFibonacci = [fibonacci_1];

while (fibonacci_2 <= numero) {
    if (fibonacci_2 === numero) {
        pertenceFibonacci = true;
        break;
    }
    sequenciaFibonacci.push(fibonacci_2);
    let proximoFibonacci = fibonacci_1 + fibonacci_2;
    fibonacci_1 = fibonacci_2;
    fibonacci_2 = proximoFibonacci;
}

console.log("Sequência de Fibonacci até", numero, ":", sequenciaFibonacci);

if (pertenceFibonacci) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

/*
3) Descubra a lógica e complete o próximo elemento:
R: aqui e a soma 2 com o anterior
a) 1, 3, 5, 7, 9

R:2 * 2 = 4 * 2 = 8
b) 2, 4, 8, 16, 32, 64, 128

R:Esta sequência e uma progressão de números que estão sendo elevados ao quadrado
c) 0, 1, 4, 9, 16, 25, 36, 42

R: 2 * 2 = 4, 4 * 4= 16 
d) 4, 16, 36, 64, 100

R: soma com o valor anterior
e) 1, 1, 2, 3, 5, 8, 13

R: diferenca 2 entre 10 e 8 e por ai vai
f) 2, 10, 12, 16, 17, 18, 19, 20

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
R:Liga um interruptor por 5 minutos e quando o tempo acabar desliga ele e liga outro, quando for para a sala se a lâmpada estiver ligada já sabemos qual o interruptor certo, caso esteja apagada basta por a mão nas lâmpadas, a que estiver quente foi a do interruptor que ligamos primeiro
 */

//5) Escreva um programa que inverta os caracteres de um string.
let stringOriginal = "Frase reversa"

let caracteres = stringOriginal.split('');

caracteres.reverse();

let stringInvertida = caracteres.join('');

console.log("Frase invertida:", stringInvertida);