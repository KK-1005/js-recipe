const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")
const minusbutton = document.getElementById("minus-button")
const doublebutton = document.getElementById("double-button")
const halfbutton = document.getElementById("half-button")
const resetbutton = document.getElementById("reset-button")

const isdivisible = function (num) {
  if (count % num === 0) {
    display.textContent = count + "!!!!"
  } else {
    display.textContent = count
  }
}

let count = 0
//plusbutton.onclick = function () {
//count += 1
//isdivisible()
//display.textContent = divnum
//}
plusbutton.onclick = function () {
  const divnum = document.getElementById("textbox").value
  count += 1
  isdivisible(divnum)
  display.textContent = divnum
}
minusbutton.onclick = function () {
  count -= 1
  isdivisible()
}
doublebutton.onclick = function () {
  count *= 2
  isdivisible()
}
halfbutton.onclick = function () {
  count /= 2
  isdivisible()
}
resetbutton.onclick = function () {
  count = 0
  display.textContent = count
}
