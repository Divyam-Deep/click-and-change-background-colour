const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'yellow', 'green', 'blue']
body.style.backgroundColor = '#02CCFE'

button.addEventListener('click', changeB)

function changeB()
{
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.background = color[colorIndex]
}