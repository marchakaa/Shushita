$(document).ready(function() {
    
    $('.icon').click(function() {
        if (this.parentElement.className == "active") {
            this.parentElement.className = ""
        } else {
            this.parentElement.className = "active"
        }
        $.ajax({
            type: "post",
            url: "",
            data: {
                buttonN: $(this).value()
            },
            success: function() {
                console.log("N")
            }
        })
    })
})