// 1.Generiamo due numeri casuali, uno per il giocatore e uno per il computer
// 2.Decretiamo chi vince (tramite if) con il punteggio più alto
// 3.fine



let human =  Math.floor(Math.random() * 6) + 1
let computer =  Math.floor(Math.random() * 6) + 1

console.log (human)
console.log (computer)

if (human>computer) {
    console.log ("human wins")
}

else [
    console.log ("computer wins")
]
