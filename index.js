//nr. 1 CREO UNA FUNZIONE gestisciCheckbox CHE ATTIVA IL TASTO PROCEDI QUANDO L'UTENTE CHECKA LA CHECKBOX 

//nr. 2 CREO UN'ALTRA FUNZIONE iniziaTest CHE CAMBIA PAGINA E FA INIZIARE IL TEST


//creiamo una costante in cui prendiamo gli elementi dell'HTML che ci servono nel JS 

const controllaCheckbox = document.getElementById('checked')
controllaCheckbox.addEventListener("click", attivaProceed)

function attivaProceed () {
    const checkedInput = document.getElementById('checked')
    const button = document.getElementById("button");
    const avviso = document.getElementById("rimuovi");
    
    if(checkedInput.checked) {
        button.removeAttribute('disabled')
        button.classList.add('proceedBlueColored')
        avviso.style.display = "none"

    } else {
        button.setAttribute("disabled", true)
        avviso.style.display = "block"
        button.classList.remove('proceedBlueColored')
    }    
}

function changePage () {
    window.location.href = "question.html"
}

const controllaProceed = document.getElementById('button')
controllaProceed.addEventListener('click', changePage)