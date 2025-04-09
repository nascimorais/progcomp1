function calcular() {
    let soma = 0, acaoSocial, homenagem, leite, kit, equipe, suplemento, pontosKitSupl = 0, sangue, pontosSangue = 0;

    // Recupera os valores dos campos e converte para números
    acaoSocial = Number(document.getElementById("acaoSocial").value);
    homenagem = Number(document.getElementById("homenagem").value);
    leite = Number(document.getElementById("leite").value);
    kit = Number(document.getElementById("kit").value);
    equipe = document.getElementById("equipe").value;
    suplemento = Number(document.getElementById("suplemento").value);
    sangue = Number(document.getElementById("doacaodesangue").value);

    // Calcula os valores iniciais
    soma += acaoSocial + homenagem + (2 * leite);

    // Calcula pontos do kit e suplemento de acordo com a equipe
    if (equipe === "Laranja") {
        if (kit >= 97 && suplemento >= 49) {
            pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if (kit >= 78 && suplemento >= 39) {
            pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 && suplemento >= 25) {
            pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 && suplemento >= 10) {
            pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        }
    }
    soma += pontosKitSupl;

    // Calcula pontos da doação de sangue de acordo com a equipe
    if (equipe === "Laranja") {
        pontosSangue = sangue >= 49 ? 2500 + ((sangue - 49) * 20) : (sangue * 20);
    } else if (equipe === "Preta") {
        pontosSangue = sangue >= 52 ? 2500 + ((sangue - 52) * 20) : (sangue * 20);
    } else if (equipe === "Roxa") {
        pontosSangue = sangue >= 51 ? 2500 + ((sangue - 51) * 20) : (sangue * 20);
    } else if (equipe === "Verde") {
        pontosSangue = sangue >= 44 ? 2500 + ((sangue - 44) * 200) : (sangue * 20);
    } else if (equipe === "Vermelha") {
        pontosSangue = sangue >= 47 ? 2500 + ((sangue - 47) * 200) : (sangue * 20);
    }
    soma += pontosSangue;

    // Exibe o resultado na tela
    document.getElementById("soma").innerHTML = `Pontuação total: ${soma}`;
}
