const button = document.querySelector("button")

button.addEventListener("click", function(){
    const audio = document.querySelector("audio")
    audio.play()
})

document.getElementById("vermelho")
    .addEventListener("click", function(){
        document.querySelector("body").setAttribute("class","vermelho");
    })

document.getElementById("branco")
    .addEventListener("click", function(){
        document.querySelector("body").setAttribute("class","branco");
    })