const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const plusButton = document.getElementById("plusButton")
const minusButton = document.getElementById("minusButton")
const multiplyButton = document.getElementById("multiplyButton")
const divisionButton = document.getElementById("divisionButton")
const display = document.getElementById("display")

plusButton.onclick = function () {
  // 入力フィールドから値を取得し、数値に変換
  const number1 = parseFloat(num1.value)
  const number2 = parseFloat(num2.value)

  const outcome = number1 + number2

  display.textContent = outcome
}

minusButton.onclick = function () {
  const number1 = parseFloat(num1.value)
  const number2 = parseFloat(num2.value)

  const outcome = number1 - number2

  display.textContent = outcome
}

multiplyButton.onclick = function () {
  const number1 = parseFloat(num1.value)
  const number2 = parseFloat(num2.value)

  const outcome = number1 * number2

  display.textContent = outcome
}

divisionButton.onclick = function () {
  const number1 = parseFloat(num1.value)
  const number2 = parseFloat(num2.value)

  const outcome = number1 / number2

  display.textContent = outcome
}
