// Solicita ao usuário que insira o nome e a experiência (XP) do herói
const nomeHeroi = prompt("Digite o nome do herói: ");
const experienciaHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói: "));

let nivel;

// Define o nível do herói com base na experiência (XP)
if (experienciaHeroi < 1000) {
  nivel = "Ferro";
} else if (experienciaHeroi >= 1000 && experienciaHeroi <= 2000) {
  nivel = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
  nivel = "Prata";
} else if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000) {
  nivel = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
  nivel = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
  nivel = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
