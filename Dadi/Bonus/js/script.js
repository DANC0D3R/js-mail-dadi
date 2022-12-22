// Genratore che restituisce come risultatao un numero casuale da 1 a 6
function tiraDado(){
    return parseInt(Math.random() * 6 + 1);
}
// Assegnazione variabile
let tira = document.getElementById('tira');
// Tiro e controllo risultato
tira.addEventListener('click', function() {
    // Assegnazione variabili
    let risultatoGiocatore = document.getElementById('risultatoGiocatore');
    let risultatoComputer = document.getElementById('risultatoComputer');
    let vincitore = document.getElementById('vincitore');
    // Chiamata della funzione tiradado sia per il giocatore che per il computer
    let tiroGiocatore = tiraDado();
    let tiroComputer = tiraDado();
    // Assegnazione valori dei risultati del tiro
    risultatoGiocatore.textContent = tiroGiocatore;
    console.log("Il risultato del tuo tiro è: " + tiroGiocatore)
    risultatoComputer.textContent = tiroComputer;
    console.log("Il risultato del tiro del computer è: " + tiroComputer)
    // Condizioni
    // Faccia dado giocatore > Faccia dado computer
    if (tiroGiocatore > tiroComputer) {
        console.log("Vince il giocatore")
        vincitore.textContent = 'Hai vinto! :)';
    } 
    // Faccia dado giocatore < Faccia dado computer
    else if (tiroGiocatore < tiroComputer) {
        console.log("Vince il computer")
        vincitore.textContent = 'Vince il computer! :(';
    } 
    // Faccia dado giocatore = Faccia dado computer
    else {
        vincitore.textContent = 'Pareggio! :|';
        console.log("Pareggio")
    }
});

// Assegnazione variabile
let nuovaPartita = document.getElementById('nuovaPartita');
// Nuova partita
nuovaPartita.addEventListener('click', function(){
    // Assegnazione variabili
    let risultato = document.getElementById('risultatoGiocatore');
    let risultatoComputer = document.getElementById('risultatoComputer');
    let vincitore = document.getElementById('vincitore');
    // Assegnazione valori
    risultato.textContent = '';
    risultatoComputer.textContent = '';
    vincitore.textContent = '';
});