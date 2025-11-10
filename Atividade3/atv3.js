// 3 - Desenvolva um algoritmo que calcule a distância percorrida de um veículo
// conforme os dados informados: Tempo em horas e velocidade média.
let tempo = parseFloat(prompt("Q3: Digite o tempo em horas:"));
let velocidade = parseFloat(prompt("Q3: Digite a velocidade média (km/h):"));
let distancia = tempo * velocidade;
alert("A distância percorrida foi: " + distancia + " km");