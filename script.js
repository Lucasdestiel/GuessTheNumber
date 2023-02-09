// Gerar o número alvo
const target = Math.floor(Math.random() * 100) + 1;

// Obtenha os elementos do formulário e do resultado
const form = document.querySelector("form");
const result = document.querySelector("#result");

// Lidar com envios de formulários
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtenha o palpite do usuário
  const guess = parseInt(form.elements.guess.value);

  // Verifique o palpite
  if (guess === target) {
    result.textContent = "Parabéns! Você adivinhou o número!";
  } else if (guess < target) {
    result.textContent = "Seu palpite é muito baixo. Tente novamente.";
  } else if (guess > target) {
    result.textContent = "Seu palpite é muito alto. Tente novamente.";
  }
});
