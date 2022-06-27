let checkEl = document.querySelector (".check")
let rememberEl = document.querySelector(".remember")
console.log(123)

checkEl.addEventListener("click", function() {
    if (checkEl.className == "check active") {
        checkEl.className = "check"
        checkEl.setAttribute("name", "checkbox-outline") 
        rememberEl.className = "remember"
    } else {
        checkEl.className = "check active"
        checkEl.setAttribute("name", "checkbox") 
        rememberEl.className = "remember active"
    }
})