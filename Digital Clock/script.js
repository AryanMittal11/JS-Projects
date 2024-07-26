const clock = document.querySelector("#clock")

setInterval(function(){
  clock.innerHTML = new Date().toLocaleTimeString()
}, 1000)