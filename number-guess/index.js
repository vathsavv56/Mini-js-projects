function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const input = document.getElementById("randInp");
const result = document.getElementById("result");
const button = document.getElementById("guess");

const MAX_VALUE = 100;
const MIN_VALUE = 1;
const RANDOM_VALUE = getRandom(MIN_VALUE, MAX_VALUE);

console.log(RANDOM_VALUE);

let MAX_GUESSES = 100;

button.addEventListener("click", () => {

    // No guesses left
    if (MAX_GUESSES <= 0) {
        result.innerHTML = `<p class="text-red-500 text-2xl">No guesses left!</p>`;
        button.disabled = true;
        return;
    }

    // Empty input
    if (input.value.trim() === "") {
        result.innerHTML = `<p class="text-red-500 text-2xl">Enter a number!</p>`;
        return;
    }

    // Read input every click
    const guessValue = Number(input.value.trim());

    MAX_GUESSES--;

    if (guessValue < RANDOM_VALUE) {
        result.innerHTML = `
            <p class="text-red-500 text-2xl">
                Guessed value is lower than generated value.
                <br>Guesses left: ${MAX_GUESSES}
            </p>`;
    }
    else if (guessValue > RANDOM_VALUE) {
        result.innerHTML = `
            <p class="text-red-500 text-2xl">
                Guessed value is greater than generated value.
                <br>Guesses left: ${MAX_GUESSES}
            </p>`;
    }
    else {
        result.innerHTML = `
            <p class="text-green-500 text-2xl">
             Congratulations! You guessed it correctly.
                <br>Guesses used: ${100 - MAX_GUESSES}
            </p>`;

        button.disabled = true;
    }
});