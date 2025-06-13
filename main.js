const randomPokemon =
document.getElementById("btn1");
randomPokemon.addEventListener("click", randomPokemonNumber);

function randomPokemonNumber() {
    const randomNumber = 
    Math.floor(Math.random()*1025)+1;

    const randomNumberElement =
    document.getElementById("random-number");
    randomNumberElement.innerText =
    randomNumber;
}