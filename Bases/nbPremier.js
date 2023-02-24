const estPremier = function (n){
    if (n === 0 || n === 1){
        return false
    } else {
        for (let i = 2 ; i <= n / 2 ; i ++){
            if (n % i === 0){
                return false
            }
        }
        return true
    }
  
}

console.log(estPremier(0))
console.log(estPremier(1))
console.log(estPremier(2))
console.log(estPremier(7))
console.log(estPremier(11))
console.log(estPremier(12))
console.log(estPremier(761))