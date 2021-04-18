//Feladat 1.

let myNames = ["Tomi", "Vixi", "Szandi", "Zsolti"];

myNames.forEach(namesArray => {
if (namesArray == "Tomi"){
    $("ul").append("<br><li class='tomi'>" + namesArray + "</li></br>")
    $(".tomi").css("font-weight", "bold")}
else {
    $("ul").append("<br><li>" + namesArray + "</li></br>")
}
});

//Feladat 2.

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

  $('body').append('<h1>' + additionalBlock.title + '</h1>');
  $('body').append('<p>' + additionalBlock.text + '</p>');