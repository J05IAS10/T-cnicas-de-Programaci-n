function ParImpar() {
    let num = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    if (isNaN(num)) {
        resultado.textContent = "Por favor, ingrese un número válido.";
    } else {
        resultado.textContent = num % 2 === 0 ? `${num} es un número par.` : `${num} es un número impar.`;
    }
}

    function TablaMult() {
    let num = parseInt(document.getElementById('numero').value);
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = '';
        if (isNaN(num)) {
        tabla.innerHTML = '<li class="list-group-item">Por favor, ingrese un número válido.</li>';
        return;
    }
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.className = 'list-group-item';
        item.textContent = `${num} x ${i} = ${num * i}`;
        tabla.appendChild(item);
    }
}

    function Factorial() {
        let num = parseInt(document.getElementById('numero').value);
        let resultado = document.getElementById('resultado');
        if (isNaN(num) || num < 0) {
        resultado.textContent = "Por favor, ingrese un número entero no negativo.";
        return;
        }
        let factorial = 1;
        let i = 1;
        while (i <= num) {
        factorial *= i;
        i++;
    }
    resultado.textContent = `El factorial de ${num} es ${factorial}.`;
}

    let positivos = 0, negativos = 0, ceros = 0;

    function PosNegCero() {
    let entrada = document.getElementById('entrada').value.trim();
    if (entrada.toLowerCase() === 'fin') {
        terminar();
        return;
    }
    const num = parseFloat(entrada);
    if (!isNaN(num)) {
        if (num > 0) positivos++;
        else if (num < 0) negativos++;
        else ceros++;
    } else {
        alert("Entrada inválida. Ingrese un número válido o 'fin'.");
    }
    document.getElementById('entrada').value = '';
}

    function terminar() {
    document.getElementById('resultado').textContent = `Positivos: ${positivos}, Negativos: ${negativos}, Ceros: ${ceros}`;
    }

    function NumPrimo() {
    let num = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    if (isNaN(num) || num < 1) {
        resultado.textContent = "Por favor, ingrese un número entero mayor que 0.";
        return;
    }
    let esPrimo = true;
    if (num === 1) esPrimo = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        esPrimo = false;
        break;
        }
    }
    resultado.textContent = esPrimo ? `${num} es un número primo.` : `${num} no es un número primo.`;
}
