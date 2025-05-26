function exe3() {
    let conta = 1, idade;
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0; // Inicializando os contadores

    while (conta <= 8) {
        idade = Number(prompt(`Informe a idade da pessoa ${conta}`));
        
        if (idade >= 0 && idade <= 15) {
            f1++;
        } else if (idade >= 16 && idade <= 30) {
            f2++;
        } else if (idade >= 31 && idade <= 45) {
            f3++;
        } else if (idade >= 46 && idade <= 60) {
            f4++;
        } else if (idade >= 61) {
            f5++;
        } else {
            alert(`Idade inválida, tente novamente`);
            continue;
        }
        
        conta++;
    }
    
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5}`);
}
