let peso = document.querySelector('#pesoField');
let altura = document.querySelector('#alturaField');
const outDom = document.querySelector('#domOutput');

// MÁSCARA DO INPUT: 'Altura'
altura.addEventListener('keyup', () => {
    let alturaLength = altura.value.length;
    
    if (alturaLength === 1 ){
        altura.value += ".";

    }
});

// CÁLCULO DO IMC:
function runScript() {

    let calculoFinal = parseInt(peso.value) / Math.pow(altura.value, 2);

    console.log(`Peso: ${peso.value}kg` + ` | Altura: ${altura.value}m | ` + `IMC: ${calculoFinal.toFixed(2)}`)

    if (calculoFinal < 18.5){
        console.log("Classificação: " + "%cMAGREZA", 'color: yellow', "| Grau de Obesidade: (0)")
        outDom.innerHTML = `
        <p><strong>Classificação: </strong></p>
        <p>Peso: ${peso.value}kg | Altura: ${altura.value}m | IMC: ${calculoFinal.toFixed(2)}</p>
        <p><strong><a style="color: YELLOW;">MAGREZA</a></strong> | Grau de Obesidade: (0)</p>
        `;

    } else if (calculoFinal > 18.5 & calculoFinal < 24.9){
        console.log("Classificação: " + "%cNORMAL", 'color: white', " | Grau de Obesidade: (0)")
        outDom.innerHTML = `
        <p><strong>Classificação: </strong></p>
        <p>Peso: ${peso.value}kg | Altura: ${altura.value}m | IMC: ${calculoFinal.toFixed(2)}</p>
        <p><strong><a style="color: green;">NORMAL</a></strong> | Grau de Obesidade: (0)</p>
        `;

    } else if (calculoFinal > 25.0 & calculoFinal < 29.9){
        console.log("Classificação: " + "%cSOBREPESO", 'color: blue', " | Grau de Obesidade: (1)")
        outDom.innerHTML = `
        <p><strong>Classificação: </strong></p>
        <p>Peso: ${peso.value}kg | Altura: ${altura.value}m | IMC: ${calculoFinal.toFixed(2)}</p>
        <p><strong><a style="color: blue;">SOBREPESO</a></strong> | Grau de Obesidade: (1)</p>           
        `;

    } else if (calculoFinal > 30.0 & calculoFinal < 39.9){
        console.log("Classificação: " + "%cOBESIDADE", 'color: orange', " | Grau de Obesidade: (2)")
        outDom.innerHTML = `
        <p><strong>Classificação: </strong></p>
        <p>Peso: ${peso.value}kg | Altura: ${altura.value}m | IMC: ${calculoFinal.toFixed(2)}</p>
        <p><strong><a style="color: yellow;">OBESIDADE</a></strong> | Grau de Obesidade: (2)</p>
        `;

    } else if (calculoFinal > 40.0){
        console.log("Classificação: " + "%cOBESIDADE GRAVE", 'color: red', "| Grau de Obesidade: (3)")
        outDom.innerHTML = `
        <p><strong>Classificação: </strong></p>
        <p>Peso: ${peso.value}kg | Altura: ${altura.value}m | IMC: ${calculoFinal.toFixed(2)}</p>
        <p><strong><a style="color: red;">OBESIDADE GRAVE</a></strong> | Grau de Obesidade: (0)</p>
        `;
    }
};