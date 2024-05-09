console.log("Exemplos if");
var idade = 18;

if(idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

var valor = 1000;

if(valor > 1000) {
    console.log("Muito caro!");
} else {
    console.log("Preço bom! Irei levar");
}

console.log("----------------------------------------------------------")

console.log("Exemplos Switch case");
let carro; //sedan, coupe, suv, esportivo
carro = "esportivo";
switch(carro){
    case "sedan": 
    console.log("Carro sedan");
    break

    case "coupe": 
    console.log("Carro coupe");
    break

    case "suv": 
    console.log("Carro suv");
    break

    case "esportivo": 
    console.log("Carro esportivo");
    break

    default: 
    console.log("Carro básico");
}

let login; //sedan, coupe, suv, esportivo
login = "admin";
switch(login){
    case "cliente": 
    console.log("Cliente logado com sucesso!");
    break

    case "admin": 
    console.log("Administrador logado com sucesso!");
    break

    default: 
    console.log("Usuário não identificado!");
}

console.log("----------------------------------------------------------")


console.log("Exemplos For");
for(let i = 1; i <= 8; i++) {
    console.log("O flamengo é o melhor time, pois tem:", i,"títulos do Brasileirão!");
} 

for(let i = 1; i <= 10; i++) { //Mostrar números ímpares
    if(i % 2 ==! 0) {
        console.log("Número ímpar:",i);
    }
}

console.log("----------------------------------------------------------")


console.log("Exemplos While");
console.log("Números ímpares decrescente do 10 até 0:")
let i = 10;
while (i >= 1) {
    if(i % 2 ==! 0) {
        console.log(i);
    }
    i--;
}

console.log("-------TABUADA DO 8-------");
let multiplicação = 0;

while (multiplicação <= 10) {
    let resultado = 8 * multiplicação;
    console.log("8 x",multiplicação,"=",resultado);
    multiplicação++;
}

console.log("----------------------------------------------------------")
