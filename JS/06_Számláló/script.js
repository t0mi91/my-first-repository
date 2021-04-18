let counter = 0

$('#button1').click(() => {
    counter += 1
    $("P").text(counter)
})

$('#button2').click(() => {
    counter -= 1
    $("P").text(counter)
})