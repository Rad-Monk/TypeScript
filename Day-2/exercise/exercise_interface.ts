interface Loan{
    principal: number,
    interestRate: number,
}

interface ConventionalLoad extends Loan{
    months: number
}

function calculateInterestOnlyLoan(loanTerms: Loan): string{
    let interest = loanTerms.interestRate / 1200
    let payment = loanTerms.principal * interest
    return "interest only payment is: " + payment.toFixed(2)
}

let interestOnlyPayment = calculateInterestOnlyLoan({principal: 30000, interestRate: 10})
console.log(interestOnlyPayment)

function calculateConventionalLoan(loanTerms: ConventionalLoad): string{
    let interest = loanTerms.interestRate / 1200
    let payment = loanTerms.principal * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)))
    return "conventional loan payment is: " + payment.toFixed(2)
}

let conventionalPayment = calculateConventionalLoan({principal: 30000, interestRate: 10, months: 180})
console.log(conventionalPayment)