let darkenEl = document.querySelector(".darken")
let closeButtonEl = document.querySelector(".close-button")

let prevArrowEl = document.querySelector(".arrow.prev");
let nextArrowEl = document.querySelector(".arrow.next");

//Closing the Image button
closeButtonEl.addEventListener("click", function() {
    darkenEl.className = "darken"
})

let imagesEl = Array.from(document.querySelectorAll(".image .picture"))
imagesEl.forEach(image => {
    index = imagesEl.indexOf(image)
    
    image.setAttribute("onclick", "openImage(" + index + ")");
});

function openImage(index) {
    sessionStorage.setItem("img", index);
    let imgUrl = window.getComputedStyle(imagesEl[sessionStorage.getItem("img")], null).getPropertyValue("background-image");
    let selectedImage = document.querySelector(".selected-image");
    selectedImage.style.backgroundImage = imgUrl;
    darkenEl.className = "darken active";
}

prevArrowEl.addEventListener("click", function(e) {
    prevImage();
    e.stopPropagation();
})
nextArrowEl.addEventListener("click", function(e) {
    nextImage();
    e.stopPropagation();
})
function nextImage() {
    let img = parseInt(sessionStorage.getItem("img")) + 1;
    if (img == imagesEl.length) img = imagesEl.length - 1;
    openImage(img);
}
function prevImage() {
    let img = sessionStorage.getItem("img") - 1;
    if (img == -1) img = 0;
    openImage(img);
}