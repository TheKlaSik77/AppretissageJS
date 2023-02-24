const nbMystere = parseInt(Math.random() * 10)

console.log("nbMystère = " + nbMystere)

const isRight = function (nbPropose, nbMystere) {
    return nbPropose === nbMystere
}

const guess = function (){
    return prompt("Devinez le nombre entre 0 et 10!") * 1
}

for (let i = 0 ; i < 3 ; i++){
    console.log("Essai n." + (i+1))
    if (isRight(guess(),nbMystere)){
        console.log("Bravo, vous avez trouvé")
    } else if (i === 2){
        console.log("Vous avez perdu!")
    }
}

