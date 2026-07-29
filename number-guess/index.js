
function getRandom(min , max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1))
}


const input = document.getElementById("randInp");
const result = document.getElementById("result");

const MAX_VALUE = 100;
const MIN_VALLUE = 1;
const RANDOM_VALUE = getRandom(MIN_VALLUE , MAX_VALUE);
const MAX_GUESSES = 100;

while(MAX_GUESSES != 0){
    if(input.value.trim() < RANDOM_VALUE){
        result.innerHTML = `<p class="text-red-500 text-2xl"> Guessed value is lower than generated value</p>`
    }
    else if(input.value.trim() > RANDOM_VALUE){
        result.innerHTML = `<p class="text-2xl text-red-500">Guessed value is greater than generated value </p>`
    }

    else{
        result.innerHTML = `<p class="text-green-500 text-2xl">Guess is correct</p>`
    }
}


