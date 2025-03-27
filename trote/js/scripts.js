function calcular(){
//recupera o valor da ação social digitado
// decaração variável sem tipo
let soma = 0
let acaoSocial = document.getElementById("acaoSocial").value
soma = soma + Number(acaoSocial)

let homenagem = document.getElementById("homenagem").value
soma = soma + Number (homenagem)
//vamos somar valores
let leite = document.getElementById("leite").value
soma = soma + (2 * Number(leite))

let KitAvulso = document.getElementById("kitAvulso").value
soma = soma + Number( 30 * KitAvulso)
let suplementoAvulso = document.getElementById("suplementoAvulso").value
soma = soma + Number( 15 * Number(suplementoAvulso))

document.getElementById("soma").innerHTML = soma.toFixed(2)
}