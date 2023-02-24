const sentence = "Bonjour, bonjour et BONJOUR et boonjour, bonjour"

const nbOccurenceOf = function (word,sentence){
    const wordMaj = word.toUpperCase();
    const sentenceMaj = sentence.toUpperCase();
    let cpt = 0;
    let wordFind = true;

    for (let i = 0 ; i < sentenceMaj.length - (wordMaj.length - 1) ; i++){
        
        wordFind = true

        if (sentenceMaj.substring(i,i+wordMaj.length) !== wordMaj){
            wordFind = false;
            console.log("Coucou")
            
        }
        if (wordFind === true){
            cpt++;
        }
    }
    return cpt;
}

console.log(nbOccurenceOf("et",sentence))