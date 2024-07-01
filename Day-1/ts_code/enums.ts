enum virginStatus{
    yes,
    no,
    POWER
}

let vergil: virginStatus = virginStatus.POWER
console.log(vergil) // this give the index corresponding to the value assigned, index from virginstatus
console.log(virginStatus[vergil]) // this prints the value of that index