$(document).ready(function() {
    
    $('#button-n').click(function() {
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
    $('#button-m').click(function() {
        $.ajax({
            type: "post",
            url: "",
            data: {
                buttonM: $(this).value()
            },
            success: function() {
                console.log("M")
            }
        })
    })
})