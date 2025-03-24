function calcular(){
//recupera o valor da ação social digitado
// decaração variável sem tipo
let acaoSocial = document.getElementById("acaoSocial").value

let homenagem = document.getElementById("homenagem").value
//vamos somar valores
let soma = Number(acaoSocial) + Number(homenagem)
alert(soma)
}