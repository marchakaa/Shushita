let darkEl = document.querySelector(".darken");
function darkening() {
    darkEl.className = "darken";
}

darkEl.addEventListener("click", function(e) {
    darkening();
})
let date = new Date();
let prevArrowEl = document.querySelector(".arrow.prev");
let nextArrowEl = document.querySelector(".arrow.next");
let selectedImageEl = document.querySelector(".selected-image");
prevArrowEl.addEventListener("click", function(e) {
    prevImage();
    e.stopPropagation();
})
nextArrowEl.addEventListener("click", function(e) {
    nextImage();
    e.stopPropagation();
})
selectedImageEl.addEventListener("click", function(e) {
    e.stopPropagation();
})

sessionStorage.setItem("img", 0);

function openImage(index) {
    sessionStorage.setItem("img", index);
    let imgUrl =window.getComputedStyle(imagesEl[sessionStorage.getItem("img")], null).getPropertyValue("background-image");
    let selectedImage = document.querySelector(".selected-image");
    selectedImage.style.backgroundImage = imgUrl;
    darkEl.className = "darken active";
}

function nextImage() {
    let img = parseInt(sessionStorage.getItem("img")) + 1;
    if (img == imagesEl.length) img = imagesEl.length - 1;
    openImage(img);
    // openImage(sessionStorage.setItem("img", sessionStorage.getItem("img") - 1));
}

function prevImage() {
    let img = sessionStorage.getItem("img") - 1;
    if (img == -1) img = 0;
    openImage(img);
    // openImage(sessionStorage.setItem("img", sessionStorage.getItem("img") - 1));
}
let imagesEl = document.querySelectorAll(".images .image");
let index = 0;
imagesEl.forEach(element => {
    element.setAttribute("onclick", "openImage(" + index + ")");
    index++;
});
let prevButton = document.querySelector(".button.prev");
let nextButton = document.querySelector(".button.next");
prevButton.addEventListener("click", function(e) {
    prevMonth();
    console.log(2);
});
nextButton.addEventListener("click", function(e) {
    nextMonth();
    console.log(1);
});

function prevMonth() {
    date = new Date(
        date.getFullYear(),
        date.getMonth() - 1
    )
    console.log(date);
    updateMonthYear();
}
function nextMonth() {
    date = new Date(
        date.getFullYear(),
        date.getMonth() + 1
    )
    console.log(date);
    updateMonthYear();
}

function updateMonthYear() {
    let monthEl = document.querySelector(".month");
    let yearEl = document.querySelector(".year");
    monthEl.textContent = months[date.getMonth()];
    yearEl.textContent = date.getFullYear();
    const nextURL = "?month=" + date.getMonth() + "&year=" + date.getFullYear();
    window.history.pushState("", "", nextURL);

}