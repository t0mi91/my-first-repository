
let counter = 0

$("#button1").click(() => {
        counter += 1
        $("#input").text(counter)
    })

$('#button2').click(() => {
    counter -= 1
    $("p").text(counter)
})
    

