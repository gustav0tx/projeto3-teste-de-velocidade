let veiculo1 = 'Captuh'
let veiculo2 = 'Oroch'
let veiculo1VL = 10
let veiculo2VL = 10
if (veiculo1VL > veiculo2VL) {
    console.log(`O ${veiculo1} está a ${veiculo1VL}km , e está mais rapido que o ${veiculo2} \n, que está a ${veiculo2VL}km`)
} else if (veiculo2VL > veiculo1VL) {
    console.log(`o ${veiculo2} está a ${veiculo2VL}km , e está mais rapido que o ${veiculo1} \n , que está a ${veiculo1VL}`)
} else {
    console.log(`tanto ${veiculo1} quanto ${veiculo2} estão na mesma velocidade de ${veiculo1VL}`)
}
