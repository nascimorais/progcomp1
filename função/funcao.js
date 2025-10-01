//exercício 1
function mostrarDobro(x){
  console.log('Dobro do número: ${x*2}')
}
function calcularQuadrado(x){
    return x * x
}
function MediaDeviceInfo(){
    let a = Number(prompt("Informe um numero"))
    mostrarDobro(a)
    console.log('Quadrado ${calcularQuadrado(a)}')
}

//exerccio 2
function alterarVetor(v) {
    v[0] = 100

}
function main(){
    let vetor = [10, 20, 30]
    alterarVetor(vetor)
    console.log(vetor)
}
main()