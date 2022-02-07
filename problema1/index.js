function ordenar(array) {
    return array.sort((a, b) => {
        return a - b
    });
}

function removerRepetidos(array) {
    return Array.from(new Set(array));
}

function ordenarERemoverRepetidos(array) {
    return removerRepetidos(ordenar(array));
}
const numeros = [8, 5, 10, 5, 2, 4, 4, 3];
console.log(ordenarERemoverRepetidos(numeros));