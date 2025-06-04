
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('inputNumber').value);
  const feedbackMessage = document.getElementById('feedbackMessage');
  const attemptsMessage = document.getElementById('attemptsMessage');
  const submitBtn = document.getElementById('submitBtn');

  attempts++;

  if (userGuess === secretNumber) {
    feedbackMessage.textContent = `Parabéns! Você acertou o número!`;
    feedbackMessage.style.color = 'green';
    submitBtn.disabled = true;
  } else if (attempts >= maxAttempts) {
    feedbackMessage.textContent = `Você atingiu o número máximo de tentativas. O número secreto era ${secretNumber}.`;
    feedbackMessage.style.color = 'red';
    submitBtn.disabled = true;
  } else {
    feedbackMessage.textContent = `Você errou! Tente novamente.`;
    feedbackMessage.style.color = 'orange';
  }

  attemptsMessage.textContent = `Tentativas restantes: ${maxAttempts - attempts}`;
  
  if (attempts >= maxAttempts) {
    submitBtn.disabled = true;
  }
}
