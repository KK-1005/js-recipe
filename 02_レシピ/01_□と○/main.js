const figure = document.getElementById("figure")

let id = 0

figure.onclick = function () {
  if (id === 0) {
    figure.classList.add("rounded")
    id += 1
  } else if (id === 1) {
    figure.classList.remove("rounded")
    figure.classList.remove("square")
    figure.classList.add("triangle")
    id += 1
  } else if (id === 2) {
    figure.classList.add("square")
    figure.classList.remove("triangle")
    id = 0
  }
}
