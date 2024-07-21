const body = document.querySelector("body")
const button = document.querySelectorAll(".button")

button.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id
    })
})