let rad = new body("male", 20, "yes", "yes", "yes", "muscular", "high");

console.log(human.get_population())
console.log(rad.gender)
console.log(rad.age)
console.log(rad.horny)
console.log(rad.virgin)
console.log(rad.gf)
console.log(rad.body_form)
console.log(rad.stamina)
console.log(rad.good_in_bed())
console.log(rad.is_athletic())
console.log(rad.happy())
console.log(rad.sex("yes"))
rad.age = 21
rad.horny = "no"

console.log(rad.age)
console.log(rad.horny)