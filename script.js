let vehicle1 = 'Captuh'
let vehicle2 = 'Oroch'
let vehicle1VL = 10
let vehicle2VL = 10
if (vehicle1VL > vehicle2VL) {
    console.log(`O ${vehicle1} está a ${vehicle1VL}km , e está mais rapido que o ${vehicle2} \n, que está a ${vehicle2VL}km`)
} else if (vehicle2VL > vehicle1VL) {
    console.log(`o ${vehicle2} está a ${vehicle2VL}km , e está mais rapido que o ${vehicle1} \n , que está a ${vehicle1VL}`)
} else {
    console.log(`tanto ${vehicle1} quanto ${vehicle2} estão na mesma velocidade de ${vehicle1VL}`)
}
