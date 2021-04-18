
// 1. Feladat
$('#button1').click(() => {
    console.log("Thanks for clicking me!")
    alert("Thanks for clicking me!")
});

// 2. Feladat
$('#button2').click(() => {
    $('#button1').text("Changed the text")
    $('.button').css('background-color', 'buttonface')
});

// 3. Feladat
$('#button3').click(() => {
    $('.button').css('background-color', 'salmon')
    $('#button1').text("First button")
});

//Adj új funkciókat az eseményfigyelőidhez

// 1. Feladat

$('#button4').click(() => {
    let selectedColor = $("#colors option:selected").html()
    $('#button4').css("background-color", selectedColor)
})

// 2. Feldat
$("#button5").click(() => {
    let selectedColor1 = $("#colors1 option:selected").html()
    $('#button5').css('background-color', selectedColor1)
    $("#button5").attr("disabled", true);
})
