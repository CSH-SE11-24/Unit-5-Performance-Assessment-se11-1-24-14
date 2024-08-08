console.log("Script running...");


let images = document.querySelectorAll("img")
console.log(images.length)

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function(event){
images[i].style.height = "700px"
})	
}



for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseout", function(event){
images[i].style.height = "350px"

})	
}

