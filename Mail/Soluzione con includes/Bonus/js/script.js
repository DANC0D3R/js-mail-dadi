// Lista di indirizzi email autorizzati
const emailAutorizzate = ['alessiovietri@boolean.it', 'danieleminieri99@gmail.com', 'flaviocordari@boolean.it', 'mauroformisao@boolean.it'];

// Controllo Acesso
function controlloAcesso(){
    // Lettura delll'indirizzo email inserito dall'utente
    const email = document.getElementById('email').value;
    // Condizioni
    // Indirizzo email è autorizzato
    if (emailAutorizzate.includes(email)){
        console.log("Accesso consentito")
        document.getElementById('risultatocontrollo').innerHTML = 'Accesso consentito';
    } 
    // Indirizzo email non è autorizzato
    else{
        console.log("Accesso negato")
        document.getElementById('risultatocontrollo').innerHTML = 'Accesso negato';
    }
}