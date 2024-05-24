// Atividade Operadores lógicos 
//
console.log("1. Escreva um programa que receba duas variáveis de números inteiros e realize as quatro operações básicas")
console.log("(adição, subtração, multiplicação e divisão). Mostre os resultados;")
//
var numeroInteiro = 10 
var numeroInteiro2 = 30 

console.log(numeroInteiro, "+", numeroInteiro2, " = ", numeroInteiro + numeroInteiro2)
console.log(numeroInteiro, "-", numeroInteiro2, " = ", numeroInteiro - numeroInteiro2)
console.log(numeroInteiro, "x", numeroInteiro2, " = ", numeroInteiro * numeroInteiro2)
console.log(numeroInteiro, "/", numeroInteiro2, " = ", numeroInteiro / numeroInteiro2)
console.log("\n")

console.log("-------------------------------------------------------------------------")
console.log("\n")

console.log("2. Crie um programa que converta uma temperatura de Fahrenheit  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8")
var fahrenheit = 75
var celsius = ((fahrenheit - 32) / 1.8)

console.log("A temperatura em Fahrenheit é ", fahrenheit ,"e em celsius então ficaria ", celsius, "Graus")
console.log("\n")

console.log("-------------------------------------------------------------------------")
console.log("\n")
console.log("3. Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = C x (9/5) + 32")
console.log("\n")
var celsius = 35
var fahrenheit = celsius * (9/5) + 32
console.log("A temperatura em celsius é ", celsius ,"e em Fahrenheit então ficaria ", fahrenheit,)

console.log("\n")
console.log("--------------------------------------------------------------------------")
console.log("4. Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros")
console.log("\n")
var metros = 1 
var centimetros = (metros * 100)

console.log("O valor em metros é:", metros , )
console.log("Então o valor em centimetros é: " , centimetros,)

console.log("\n")
console.log("--------------------------------------------------------------------------")
console.log("\n")
console.log("5. Crie um programa que calcule o preço final de um produto após um desconto de 10%, a variável deve receber o valor total da venda")
console.log("\n")

var valorTotal = 100
var valorComDesconto = (valorTotal * 0.9)
console.log("O Valor do produto é:", valorTotal , "E com desconto fica:" , valorComDesconto)

