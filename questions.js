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
          "In the programming language Java, which of these keywords would you put on a variable to make sure it get modified?",
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


    const questionElement = document.getElementById('question')
    const answerButtons = document.getElementById('answers')
    const nextQuestion = document.getElementById('next')
    let userInput 
    let correctAnswer
    let currentQuestionIndex = 0
    
    
    let score = 0
    
    function startQuiz () {
      currentQuestionIndex = 0 
      score = 0 
      showQuestion()
    }
    
    function showQuestion() {
      resetState()
      let currentQuestion = questions[currentQuestionIndex]
      questionElement.innerHTML = currentQuestion.question
      
      let allAnswers = currentQuestion.incorrect_answers
      allAnswers.push(currentQuestion.correct_answer)
      
      for (let singleAnswer of allAnswers) {
        const button = document.createElement('button')
        button.innerHTML = singleAnswer
        button.classList.add('btn')
        answerButtons.appendChild(button)
        console.log(singleAnswer)
      }
      
    }

    function resetState() {
      while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
      }
    }


    startQuiz ()
    
  
