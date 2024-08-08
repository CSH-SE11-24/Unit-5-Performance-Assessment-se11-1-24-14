console.log("Script running...");
let img1 = document.querySelector("#img1");

img1.addEventListener("click",function(event){
img1.src="https://www.peta.org/wp-content/uploads/2013/10/200_2D00_IssuesExperimentDepthGiveFive1.jpg "
})


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

let youtube = document.querySelector("#youtube1");

youtube.addEventListener("click",function(event){
youtube.src="https://youtu.be/yphYvUKUOrs";
  youtube.width = 640;
  youtube.height = 300;
  youtube.controls = true;
})  