function exe1() {
    let a, b, c, d;
    let conta, grupo = 1;

    while (grupo <= 5) {
        a = Number(prompt(`Informe o valor de A`));
        b = Number(prompt(`Informe o valor de B`));
        c = Number(prompt(`Informe o valor de C`));
        d = Number(prompt(`Informe o valor de D`)); // Corrigi o valor de 0 para D

        conta = 1; // Reiniciar conta para cada grupo

        while (conta <= 3) {
            if (a > b) {
                let aux = a; a = b; b = aux;
            }
            if (b > c) {
                let aux = b; b = c; c = aux;
            }
            if (c > d) {
                let aux = c; c = d; d = aux;
            }
            conta++;
        }

        alert(`Ordem crescente ${a} ${b} ${c} ${d}`);
        alert(`Ordem decrescente ${d} ${c} ${b} ${a}`);

        grupo++; // Incrementar grupo
    }
}
