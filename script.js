let correctAnswer = 0; // Variável para armazenar a resposta correta

// Função para gerar uma nova pergunta e alternativas
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    const num2 = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    correctAnswer = num1 * num2; // A resposta correta é o produto

    // Exibir a multiplicação
    document.getElementById("multiplicacao").textContent = `${num1} × ${num2}`;

    // Gerar alternativas (uma correta e três incorretas)
    let answers = [correctAnswer];
    while (answers.length < 4) {
        let randomAnswer = Math.floor(Math.random() * 100) + 1;
        if (!answers.includes(randomAnswer)) {
            answers.push(randomAnswer);
        }
    }

    // Embaralhar as alternativas
    answers = answers.sort(() => Math.random() - 0.5);

    // Atribuir as alternativas aos botões
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        btn.textContent = answers[index];
        btn.setAttribute('data-answer', answers[index] === correctAnswer);
    });

    // Esconder o botão de próxima pergunta
    document.getElementById("nextButton").style.display = "none";
    // Limpar qualquer feedback anterior
    document.getElementById("result").textContent = '';
}

// Função para verificar se a resposta está correta
function checkAnswer(button) {
    const isCorrect = button.getAttribute('data-answer') === 'true';
    const resultDiv = document.getElementById("result");

    if (isCorrect) {
        resultDiv.textContent = "Resposta correta!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Resposta errada! Tente novamente.";
        resultDiv.style.color = "red";
    }

    // Exibir o botão de próxima pergunta
    document.getElementById("nextButton").style.display = "block";
}

// Inicializar a primeira pergunta
generateQuestion();
