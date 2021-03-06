const boardTrue = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

const boardFalse = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

let validadorDeSudoku = function(board) {

    const set = new Set()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const celula = board[i][j]
            if (celula === '.') continue
            const numeroDaCaixa = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const linha = `Linha: ${i}, valor ${celula}`
            const coluna = `Coluna: ${j}, valor ${celula}`
            const miniCaixa = `Mini Caixa: ${numeroDaCaixa}, valor ${celula}`
            if (set.has(linha) || set.has(coluna) || set.has(miniCaixa))
                return false
            set.add(linha)
            set.add(coluna)
            set.add(miniCaixa)
        }
    }

    return true
}

console.log(validadorDeSudoku(boardTrue))
console.log(validadorDeSudoku(boardFalse))