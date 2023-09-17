/*
operadores ternario

? if (se)
: else (se não)
&& (if sem else)

serve para pequenos retornos passou uma linha usar
if e else e não o ternario

*/

const salary = 5000

if(salary < 3000) {
    console.log("o colaborador é junior")
} else {
    console.log("ele é senior")
}

salary < 3000 ? console.log("o colaborador é junior") : console.log("ele é senior")




const salary = 11000

if(salary < 3000) {
    console.log("o colaborador é junior")
} else if(salary >= 3000 && salary < 10000) {
    console.log("ele é senior")
} else {
    console.log("ele é diretor")
}