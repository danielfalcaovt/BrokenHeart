
let clicks = 0
function clicou(){

    clicks++

   if(clicks <= 5) {
    let heart1 = document.querySelector("img#frente")
    heart1.style.animation = "rotate ease-in-out 0.3s"
    let text = document.querySelector("h1")
    text.innerHTML = `He was hurt ${clicks} times`   
    }else{
        let heart1 = document.querySelector("img#frente")
        let broked = document.querySelector("img#porcima")
        heart1.style.visibility = "hidden"
        broked.style.visibility = "visible"
        broked.style.animation = "bright ease-in-out 4s infinite"
     }
}    
function finishr(){
    let broked = document.querySelector("img#porcima")
    broked.style.animation = "finish ease-in-out 6s"   
    setTimeout(() => {
        broked.style.visibility = "hidden"
        let text = document.querySelector("h1")
        text.innerHTML = "...... I didn't expect"
    }, 4000);
    let music = document.querySelector("audio#mars")
    music.src = "sweather.mp3"
}
let qtd = 0

function entrada(){
    qtd ++
    
    if (qtd < 10){
        let aleatorio = Math.round(Math.random() * 80)
    let aleatorio2 = Math.round(Math.random() * 40)
    let heart1 = document.querySelector("img#frente")
    let blur = document.querySelector("img#porcima")
    heart1.style.position = "absolute"
    heart1.style.left = `${aleatorio}vw`
    heart1.style.top = `${aleatorio2}vh`
    heart1.style.animation = "none"
    if( qtd == 5){
        let text = document.querySelector("h1")
        text.innerHTML = "STOP!! HE IS GETTING SLOW...... PLZ"
    }
}else if(qtd > 10){
    setTimeout(() => {
        
        let aleatorio = Math.round(Math.random() * 80)
        let aleatorio2 = Math.round(Math.random() * 40)
        let heart1 = document.querySelector("img#frente")
        let blur = document.querySelector("img#porcima")
        heart1.style.position = "absolute"
        heart1.style.left = `${aleatorio}vw`
        heart1.style.top = `${aleatorio2}vh`
        heart1.style.animation = "none"
    }, 500);
    }
}