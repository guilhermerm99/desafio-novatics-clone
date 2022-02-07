// Problema 1.

const input = [8, 5, 10, 5, 2, 4, 4, 3]
let output = []

console.log(input)

function ordenarCrescente(a, b) {
    return a - b
}


input.sort(ordenarCrescente).forEach(element => {
    if (!output.includes(element)) {
        output.push(element);
    }
});
console.log(output)