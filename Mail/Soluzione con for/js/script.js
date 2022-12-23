// Lista di indirizzi email autorizzati
const emailAutorizzate = ['alessiovietri@boolean.it', 'danieleminieri99@gmail.com', 'flaviocordari@boolean.it', 'mauroformisano@boolean.it'];
// Variabile di controllo
let isAuthorized = false;

// Controllo acesso
function controlloAcesso(){
    // Lettura dell'indirizzo email inserito dall'utente
    const email = prompt('Inserisci la tua mail:');
    // Ciclo che legge le email nella lista
    for (let i = 0; i < emailAutorizzate.length; i++){
        // Se l'indirizzo email è presente nella lista, isAuthorized ha valore true e il ciclo si interrompe
        if (emailAutorizzate[i] == email){
            isAuthorized isAuthorized = true;;
        }
    }
    // Verifica del valore di isAuthorized e stampa del risultato
    if (isAuthorized == true){
        console.log('Accesso consentito');
    } else{
        console.log('Accesso negato');
    }
}
controlloAcesso();