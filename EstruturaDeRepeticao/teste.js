let vet = []
vet.push("São Paulo")
 
vet.lenght

//

function exe1() {
    let vet = [];
    let par = 0;
    let impar = 0;
    
    for (let i = 0; i < 6; i++) {
        vet.push(Number(prompt(`Informe o ${i + 1}o. número`)));
    }
    
    for (let i = 0; i < 6; i++) {
        if (vet[i] % 2 === 0) {
            par++;
        } else {
            impar++;
        }
    }
    
    alert(`Números pares: ${par}`);
    alert(`Números ímpares: ${impar}`);
}

