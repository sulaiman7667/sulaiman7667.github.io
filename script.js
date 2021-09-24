
let el_1 = document.getElementById('img1')
let el_2 = document.getElementById('img2')
let el_3 = document.getElementById('img3')

const height_1 = el_1.clientHeight
const width_1 = el_1.clientWidth

const height_2 = el_2.clientHeight
const width_2 = el_2.clientWidth

const height_3 = el_3.clientHeight
const width_3 = el_3.clientWidth

el_1.addEventListener('mousemove', handleMove_1)
el_2.addEventListener('mousemove', handleMove_2)
el_3.addEventListener('mousemove', handleMove_3)
window.addEventListener('scroll', scrollFunction)
var h1 = 1
var span = 0
var delay = 0
var numberOfExecutions = 0
function lol(b){
  delay = delay + 0.06
  span = span + 1
  var numberOfChildren = document.querySelector(".intro-section-container h1:nth-child(" + h1 + ")").childElementCount;
  var children = document.querySelector(".intro-section-container h1:nth-child(" + h1 + ") span:nth-child(" + span + ")")
  children.style.animationName = 'intro-animation'; 
  children.style.animationDuration = '1s'; 
  children.style.animationDelay = delay + "s"; 
  children.style.animationFillMode = "forwards"; 
  numberOfExecutions = numberOfExecutions + 1
  if(span == numberOfChildren){
      h1 = h1 + 1
      span = 0
  }
  if(numberOfExecutions < 42){
    lol()
  }

}
lol()

function scrollFunction(a) {
  let content = document.querySelector('.opacify')
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight
  if(contentPosition < screenPosition){
    content.classList.remove('opacify')
  }
}

function handleMove_1(e) {

  const xVal = -(e.layerX)
  const yVal = e.layerY
  document.getElementById("img1").style.transitionDuration = "0s";
  document.getElementById("img2").style.transitionDuration = "0s";
  document.getElementById("img3").style.transitionDuration = "0s";
  const yRotation = -20 * ((xVal - width_1 / 2) / width_1)
  const xRotation = -20 * ((yVal - height_1 / 2) / height_1)


  const string = 'perspective(900px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el_1.style.transform = string
}

function handleMove_2(e) {

  const xVal = -(e.layerX)
  const yVal = e.layerY
  document.getElementById("img1").style.transitionDuration = "0s";
  document.getElementById("img2").style.transitionDuration = "0s";
  document.getElementById("img3").style.transitionDuration = "0s";
  const yRotation = -20 * ((xVal - width_2 / 2) / width_2)
  const xRotation = -20 * ((yVal - height_2 / 2) / height_2)


  const string = 'perspective(900px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el_2.style.transform = string
}

function handleMove_3(e) {

  const xVal = -(e.layerX)
  const yVal = e.layerY
  document.getElementById("img1").style.transitionDuration = "0s";
  document.getElementById("img2").style.transitionDuration = "0s";
  document.getElementById("img3").style.transitionDuration = "0s";
  const yRotation = -20 * ((xVal - width_3 / 2) / width_3)
  const xRotation = -20 * ((yVal - height_3 / 2) / height_3)


  const string = 'perspective(900px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el_3.style.transform = string
}





el_1.addEventListener('mouseout', function() {
    document.getElementById("img1").style.transitionDuration = "1s";
  el_1.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})






el_2.addEventListener('mouseout', function() {
    document.getElementById("img2").style.transitionDuration = "1s";
  el_2.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})






el_3.addEventListener('mouseout', function() {
    document.getElementById("img3").style.transitionDuration = "1s";
  el_3.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

