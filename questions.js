    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];


    // 1 - DEVO MOSTRARE ALL'UTENTE 1 DOMANDA (.question) E 4 RISPOSTE (answer)
    // le 4 risposte devono essere inserite a random 
    // per ultimo deve in basso deve mostrare il numero di domande a cui siamo arrivati (1/10)
    // EXTRA c'è da inserire il timer in alto a destra con i secondi rimasti per rispondere

    //1 
    //creo una variabile vuoto che contenga l'array delle risposte

    let count = 0;
    let intervallo = null;
    let arrayRisposte = [];
    
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const shuffleAnswers = (answers) => answers.sort(() => Math.random() - 0.5);
    
    const showQuestion = () => {
        if (count < questions.length) {
            const question = questions[count];
            count++;
            startCountdown();
        } else {
            showResults();
        }
    };
    
    const startCountdown = () => {
        let timer = 30;
        intervallo = setInterval(() => {
            timer--;
            if (timer === 0) {
                clearInterval(intervallo);
                showQuestion();
            }
        }, 1000);
    };
    
    const checkAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[count - 1].correct_answer) {
            arrayRisposte.push(true);
        } else {
            arrayRisposte.push(false);
        }
        showQuestion();
    };
    
    const initQuiz = () => {
        showQuestion();
    };
    
    window.addEventListener("load", initQuiz);

    //creo un contatore che tenga conto del numero di domande effettuate, quando il contatore arriva a 10 comparirà un bottone che porta ai risultati
    //creo una funzione che ad ogni numero di domanda mostri all'utente una nuova domanda e che mostri la prima già al caricamento della pagina
    //di conseguenza creo una funzione che data una domanda generi un contenitore per le risposte sbagliate e per la risposta corretta. le n risposte dovranno essere mostrate in modo casuale (tramite il metodo random) ogni volta.
    //una volta terminate le 10 domande come detto sopra dovrà comparire un bottone che ci porta su una nuova pagina html dove sono mostrati i risultati

  




/* 
    const domande = document.getElementById('question')
    const creaP = document.createElement('p')
    domande.appendChild(creaP)

   */










    /*   function mostraDomanda(p, question) {
      for(let domanda of domande) {
        domanda.innerText = p
        arrayRisposte.push(domanda.question)
        console.log(domanda) 
      }
      return
    } */

    