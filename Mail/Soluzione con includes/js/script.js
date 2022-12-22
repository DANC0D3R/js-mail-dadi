// Lista di indirizzi email autorizzati
const emailAutorizzate = ['alessiovietri@boolean.it', 'danieleminieri99@gmail.com', 'flaviocordari@boolean.it', 'mauroformisano@boolean.it'];

// Controllo Acesso
function controlloAcesso(){
    // Lettura delll'indirizzo email inserito dall'utente
    const email = prompt('Inserisci la tua mail:');
    // Condizioni
    // Indirizzo email è autorizzato
    if (emailAutorizzate.includes(email)){
        console.log("Accesso consentito")
    } 
    // Indirizzo email non è autorizzato
    else{
        console.log("Accesso negato")
    }
}
controlloAcesso();