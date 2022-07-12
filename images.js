let darkenEl = document.querySelector(".darken")
let closeButtonEl = document.querySelector(".darken .close-button")

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


closeUploadButtonEl = document.querySelector(".upload-menu .close-button")
uploadMenuEl = document.querySelector(".upload-menu")
buttonAddEl = document.querySelector(".btn.add")

buttonAddEl.addEventListener("click", function() {
    uploadMenuEl.className = "upload-menu active"
})
closeUploadButtonEl.addEventListener("click", function() {
    uploadMenuEl.className = "upload-menu"
})


date = document.querySelector(".upload-menu .date")
dateUploadEl = document.querySelector(".upload-menu .date-upload")

date.addEventListener("input", function() {
    let dates = date.value.split("-")
    dateUploadEl.value = dates[0] + '-' + dates[2] + '-' + dates[1]
    console.log(dateUploadEl.value)
})



let selectedImageEl = document.querySelector(".selected-image");
selectedImageEl.addEventListener("click", function(e) {
    let menuEl = document.querySelector(".darken .menu")
    if (menuEl.className == "menu") {
        menuEl.className = "menu down"
    } else {
        menuEl.className = "menu"
    }
})