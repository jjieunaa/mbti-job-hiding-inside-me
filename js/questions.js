import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

// 질문 페이지
function renderQuestion() {
  // 10번째 페이지라면 결과 페이지로 이동
  if (currentNumber == questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

// 다음 질문으로
function nextQuestion(choiceNumber) {
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  currentNumber = currentNumber + 1
  renderQuestion()
}

// 결과 페이지
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti // 쿼리스트링
}

choice1El.addEventListener('click', function () {
  nextQuestion(0)
})

choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

renderQuestion()