const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const inicio = document.getElementById('inicio')
const resultado = document.getElementById('resultado')
const pontuacao = document.getElementById('pontuacao')
const dashResultado = document.getElementById("resultado")

let points = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  inicio.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct){points += 1}
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Inicio'
    //startButton.classList.remove('hide')
    resultado.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    pontuacao.innerText = 'Sua pontuação foi: ' + points


  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'Depois de brincar no gramado num dia ensolarado, seu filho pequeno fica tonto. Está suando, muito pálido e com sede. Você:',
    answers: [
      { text: 'Leva-o correndo ao médico', correct: false },
      { text: 'Senta-o à sombra, lhe dá algo para beber e fica de olho nele.', correct: true },
      { text: 'Leva-o para se refrescar com um sorvete.', correct: false }
    ]
  },
  {
    question: 'Durante um jogo de futebol, seu marido é atingido pela bola com força no rosto e cai. Está zonzo e uma das narinas sangra. Você:',
    answers: [
      { text: 'Manda que se sente e recosta a cabeça dele para trás, a fim de estancar o sangue.', correct: false },
      { text: 'Dá a ele um lenço para tampar a narina que sangra.', correct: false },
      { text: 'Senta-o com a cabeça inclinada para a frente, aplica uma compressa fria e depois chama a ambulância. ', correct: true },
    ]
  },
  {
    question: 'Seu filho caiu de cabeça de uma árvore. Ele não se levanta, mas chora e se queixa de dor no pescoço. Você: ',
    answers: [
      { text: 'O  Faz uma maca com um cobertor, e a família inteira transporta a criança até o carro para levá-la ao médico.', correct: false },
      { text: 'Deixa-o deitado, imobiliza o pescoço com o que tiver à mão e pede a alguém que chame a ambulância. ', correct: true },
      { text: 'Um O  Abraça o menino, massageia o pescoço e os ombros dele com movimentos suaves até que se acalme e depois o leva ao médico.', correct: false }
    ]
  },
  {
    question: 'Seu sogro engasgou com alguma coisa no churrasco. Ele tenta, mas não consegue expeli-la. Leva a mão à garganta e começa a sufocar. Você:',
    answers: [
      { text: 'Bate nas costas dele até que cuspa o que engoliu.', correct: false },
      { text: 'Dá a ele muito líquido para beber, a fim de limpar o trato digestivo obstruído.', correct: false },
      { text: 'dá 5 golpes entre as omoplatas dele, depois o segura por trás, com os punhos fechados sob o esterno e em seguida faz um rápido movimento para cima e para trás, na sua direção.  ', correct: true }
    ]
  },
  {
    question: 'Sua filha pisou num prego, que penetrou bem fundo no pé. A ferida sangra pouco. Você:',
    answers: [
      { text: 'Remove o prego e, depois de envolver o pé com o que tiver à mão, a leva ao médico.', correct: false },
      { text: 'Remove o prego, desinfeta a ferida com água oxigenada e aplica uma atadura esterilizada – a ferida vai sarar a tempo para o casamento dela.', correct: false },
      { text: 'Deixa o prego na ferida, põe uma atadura e leva a filha para o pronto-socorro. ', correct: true },
    ]
  },
  {
    question: 'Certa manhã, vovó é picada na mão por uma abelha. Embora removam o ferrão, à noite o inchaço não diminui e a senhora de 70 anos se queixa cada vez mais de falta de ar. Você:',
    answers: [
      { text: 'Aplica na mão uma cebola recém-cortada. Depois do fim de semana, você a levará ao médico.', correct: false },
      { text: 'Serve a ela uma bebida alcoólica, para dilatar os vasos sanguíneos e facilitar a respiração.', correct: false },
      { text: 'Leva-a ao médico mais próximo, caso a falta de ar persista.', correct: true },
    ]
  },
  {
    question: 'Para solicitar uma ambulância no local de um acidente, qual o número que devemos ligar?',
    answers: [
      { text: '199 ou 193', correct: false },
      { text: '190 ou 192', correct: false },
      { text: '192 ou 193 ', correct: true },
    ]
  },
  {
    question: 'Você tem de resgatar a vítima de um acidente. Ela está inconsciente e não respira. Você começa a aplicar a ressuscitação cardiopulmonar no ritmo de:',
    answers: [
      { text: '15 compressões no peito a cada 5 respirações boca a boca.', correct: false },
      { text: '30 compressões a cada 2 respirações boca a boca.', correct: true },
      { text: '10 compressões a cada respiração boca a boca.', correct: false },
    ]
  },
  {
    question: 'Quando está INDICADO a realização da Compressão Cardíaca?',
    answers: [
      { text: 'Para uma pessoa desacordada, sem respiração e sem resposta. ', correct: true },
      { text: 'Para qualquer pessoa com problemas cardíacos.', correct: false },
      { text: 'Para qualquer vítima desacordada (desmaiada).', correct: false },
    ]
  },
  {
    question: 'Qual procedimento é indicado para o controle de uma hemorragia externa?',
    answers: [
      { text: 'Compressa de gelo.', correct: false },
      { text: 'Curativo compressivo. ', correct: true },
      { text: 'Torniquete e enfaixamento.', correct: false },
    ]
  }

]
