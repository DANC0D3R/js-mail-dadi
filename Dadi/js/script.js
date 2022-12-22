// Genratore che restituisce come risultatao un numero casuale da 1 a 6
function tiraDado() {
    return parseInt(Math.random() * 6) + 1;
}
// Tiro e controllo risultato
function tira() {
    // Chiamata della funzione tiradado sia per il giocatore che per il computer    
    let tiroGiocatore = tiraDado();
    console.log("Giocatore: " + tiroGiocatore)
    let tiroComputer = tiraDado();
    console.log("Computer: " + tiroComputer)
    // Condizioni
    // Faccia dado giocatore > Faccia dado computer
    if (tiroGiocatore > tiroComputer){
        console.log("Vince il giocatore")
    } 
    // Faccia dado giocatore < Faccia dado computer
    else if (tiroGiocatore < tiroComputer){
        console.log("Vince il computer")
    }
    // Faccia dado giocatore = Faccia dado computer
    else{
        console.log("Pareggio")
    }
}
// Esecuzione
tira();
