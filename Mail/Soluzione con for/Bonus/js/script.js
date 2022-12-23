// Lista di indirizzi email autorizzati
const emailAutorizzate = ['alessiovietri@boolean.it', 'danieleminieri99@gmail.com', 'flaviocordari@boolean.it', 'mauroformisao@boolean.it'];
// Variabile di controllo
let isAuthorized = false;

// Controllo Acesso
function controlloAcesso(){
    // Lettura dell'indirizzo email inserito dall'utente
    const email = document.getElementById('email').value;
    // Ciclo che legge le email nella lista
    for (let i = 0; i < emailAutorizzate.length; i++){
        // Se l'indirizzo email è presente nella lista, isAuthorized ha valore true e il ciclo si interrompe
        if (emailAutorizzate[i] == email){
            isAuthorized = true;
        }
    }
    // Verifica del valore di isAuthorized e stampa del risultato
    if (isAuthorized == true){
        console.log("Accesso consentito")
        document.getElementById('risultatocontrollo').innerHTML = 'Accesso consentito';
    } else{
        console.log("Accesso negato")
        document.getElementById('risultatocontrollo').innerHTML = 'Accesso negato';
    }
}