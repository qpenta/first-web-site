// let phrase = "Eu quero viver o amor"
// console.log(phrase.includes("amor"))

// let word = "paralalepipedo"
// console.log(typeof(word))

// function getScore(score){
// let scoreA = score >= 90 && score <=100
// let scoreB = score >= 80 && score <=89
// let scoreC = score >= 70 && score <=79
// let scoreD = score >= 60 && score <=69
// let scoreF = score < 60 && score >= 0

// let scoreFinal


// if (scoreA) {
//     scoreFinal ="A"
// } else if (scoreB){
//     scoreFinal="B"
// } else if (scoreC){
//     scoreFinal="C"
// } else if (scoreD){
//     scoreFinal="D"
// } else if (scoreF){
//     scoreFinal="F"
// } else{
//     scoreFinal = "Nota inválida"
// }   

// return scoreFinal
// }

// console.log(getScore(90))
// console.log(getScore(200))
// console.log(getScore(299))
// console.log(getScore(50))
// console.log(getScore(70))
// console.log(getScore(79))


// let family = {
//     incomes:[2500, 3200, 250.43, 360.45],
//     expenses:[320.34, 128.45, 176.87, 1450.00]
// }

// function sum(array) {
//     let total = 0;

//     for(let value of array){
//         total += value
//     }

//     return total

// }

// function calculateBalance() {
//     const calculateIncomes = sum(family.incomes)
//     const calculateExpenses = sum (family.expenses)

//     const total = calculateIncomes - calculateExpenses

//     const itsOk = total >= 0

//     let balanceText = "Negativo"
     
//     if (itsOk) {
//         balanceText = "Positivo "
//     }    

//     console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

// }

// calculateBalance()


//transformDegree ('50F')

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    // fluuxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não indentificado')
         
    }   

    //fluxo ideal, F -> C

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));  
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSing ='C'

    //fluxo alternativo C->
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSing = 'F'
    }

    return formula(updatedDegree) + degreeSing
}

try {
    console.log(transformDegree('10C')) 
    console.log(transformDegree('50F')) 
    transformDegree('10z') 
    
} catch (error) {
    console.log(error.message)
    
}