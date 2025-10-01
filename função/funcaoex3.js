
function leitura(){
    vet = ["André, Pi, Jason, Jorge, Lucas"]
}
function maiuscula(vet){
    for(let i = 0; i < vet.lenght; i++){
        vet[i] = vet[i].toUpperCase()
    }
}
function anonimo(vet){
    for(let i = 0; i < vet.lenght; i++){
    if (vet[i][0] == 'A'){
    vet[i] = "ANÔNIMO"
    }
}
}
function mostra(vet){
    console.log(vet)
}
function main(){
    let nomes = []
    leitura(nomes)
    maiuscula(nomes)
    anonimo(nomes)
    mostra(nomes)

}
