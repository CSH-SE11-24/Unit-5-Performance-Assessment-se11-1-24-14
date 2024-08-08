console.log("Script running...");

let nav = document.querySelectorAll("h1");

nav.forEach(nav => {
nav.addEventListener("mouseover", function(event){
nav.style.color = "black";
})


nav.addEventListener("mouseout", function(event){
nav.style.color = "grey";
})
  });


let headings = document.querySelectorAll("h1");

headings.forEach(heading => {
heading.addEventListener("click", function(event){
  heading.style.fontFamily = "Indie Flower, cursive";
})
})

let ani = document.querySelector("#ani")

ani.addEventListener("click",function(event){
ani.style.fontSize = "150%";
});

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