function calcular() {
    // Declaração e inicialização da variável soma
    let soma = 0;

    // Recupera os valores dos campos de entrada e converte para número
    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    let homenagem = Number(document.getElementById("homenagem").value);
    let leite = Number(document.getElementById("leite").value);
    let kit = Number(document.getElementById("kit").value);
    let suplemento = Number(document.getElementById("suplemento").value);
    let equipe = document.getElementById("equipe").value;

    // Soma os valores básicos
    soma += acaoSocial + homenagem + (2 * leite) + (30 * kit) + (15 * suplemento);

    // Calcula a pontuação extra do Kit baseado na equipe Laranja
    let pontosKit = 0;
    if (equipe === "Laranja") {
        if (kit >= 97) {
            pontosKit = 5000 + ((kit - 97) * 30);
        } else if (kit >= 78) {
            pontosKit = 4000 + ((kit - 78) * 30);
        } else if (kit >= 49) {
            pontosKit = 2500 + ((kit - 49) * 30);
        } else if (kit >= 19) {
            pontosKit = 1000 + ((kit - 19) * 30);
        }
    }

    // Exibe a pontuação extra do Kit
    alert(pontosKit);

    // Adiciona os pontos extras ao total
    soma += pontosKit;

    // Atualiza o resultado na interface
    document.getElementById("soma").innerHTML = soma.toFixed(2);
}
