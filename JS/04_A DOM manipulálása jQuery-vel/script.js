
//Teszt
//$('#fun').css('color', 'salmon')
//$('body').append('<h1>Hello jQuery Fans!</h1>')

document.write('<br><b>1. Feladat</b></br>')

let namesArray = ["Vixi", "Tomi", "Zsolti", "Szandi"]
namesArray.forEach(namesLoop)
function namesLoop(dataarray) {
    if (dataarray === "Tomi") {
        $("ul").append('<li class="ownname">' + dataarray + '</li>')
        $(".ownname").css("font-weight", "bold")
    }
    else {
        $("ul").append("<li>" + dataarray + "</li>")
    }
}

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

  $('body').append($('<h1>' + additionalBlock.title + '</h1>'))
  $('body').append($('<p>' + additionalBlock.text + '</p>'))
