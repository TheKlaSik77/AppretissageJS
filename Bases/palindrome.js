const isPalindrome = function (word){
    word = word.toUpperCase()
    for (let i = 0 ; i < (word.length / 2) ; i++){
        if(word.charAt(i) !== word.charAt((word.length - 1) - i)){
            return false
        }
    }
    return true
}

const words = {
    kayak: true,
    SOS: true,
    Kayak: true,
    Bonjour: false,
}

for(let word in words) {
    if (isPalindrome(word) !== words[word]) {
        console.error("test of isPalindrome(" + word + ") is not correct")
    } else {
        console.log("test of isPalindrome(" + word + ") is correct")
    }
}
console.log("The programme is finished")