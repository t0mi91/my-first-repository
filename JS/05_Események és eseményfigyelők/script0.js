//$(selector).on(eventType, function);

document.write('<br></br>')

//1. Feladat
$('body').append('<br><button id="button1">' + 'Click me' + '</button></br>')

$('#button1').click(() => {
alert("Igen, most rámkattintottál")
})

//2. Feladat
$('body').append('<br><button id="button2">' + 'Change the text' + '</button></br>')

$('#button2').click(() => {
    $("#button1").text('Text changed')
})

//3. Feladat
$('body').append('<br><button id="button3">' + 'Change color' + '</button></br>')

$('#button3').click(() => {
    let color = "#69bf64"
    $('#button1, #button2, #button3').css('background-color', color)
})

//Adj új funkciókat az eseményfigyelőidhez
//1. Feladat

//$('body').append('<br><input id="input1">'+'Válassz egy színt!'+'</input></br>')
//$('body').append('<br><button id="button4">' + 'Reveal content' + '</button></br>')

$('#button4').click(() => {
    let selectedColor = $('#colors option:selected').html()
        $('#button4').css("background-color", selectedColor)
})

//2. Feladat

/*$('#colors1').hover(() => {
    let selectedColor1 = $('#colors1 option:selected').html()
        $('#button5').css("background-color", selectedColor1)

})*/

$('#button5').click(() => {
    let selectedColor1 = $('#colors1 option:selected').html()
        $('#button5').css("background-color", selectedColor1)
        $('#button5').attr("disabled", true)
})
