document.addEventListener("DOMContentLoaded", function() {
    const min = 1;
    const max = 100;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;

    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const feedback = document.getElementById("feedback");
    const attemptsSpan = document.getElementById("attempts");
    const restartButton = document.getElementById("restartButton");

    guessButton.addEventListener("click", function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < min || userGuess > max) {
            feedback.textContent = `Please enter a number between ${min} and ${max}.`;
        } else if (userGuess < randomNumber) {
            feedback.textContent = "Your number is less";
            feedback.style.backgroundColor = "red";
        } else if (userGuess > randomNumber) {
            feedback.textContent = "Your number is High";
               feedback.style.backgroundColor = "green"
        
        } else {
            feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            guessButton.disabled = true;
            restartButton.classList.remove("hidden");
        }

        attemptsSpan.textContent = attempts;
        guessInput.value = '';
    });

    restartButton.addEventListener("click", function() {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        attempts = 0;
        attemptsSpan.textContent = attempts;
        feedback.textContent = '';
        guessInput.value = '';
        guessButton.disabled = false;
        restartButton.classList.add("hidden");
    });
});
