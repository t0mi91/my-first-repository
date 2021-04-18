
//Bevezetés a jQuery-hez

document.write("<br><b>2.Feladat</b></br>");

document.write("<br>Hozz létre változókat.</b></br>")

let color = "purple";
let number = 10;
let word= "notcool";


document.write("<br>Változtasd meg az első doboz háttérszínét lilára, ha a color változó értéke purple.</b></br>")
if (color == "purple") {
    $(".north").css("background", color)
}

document.write("<br>Változtasd meg a második HTML elem szövegét az alábbi kritérium alapján.</b></br>")
if (number >= 100) {
    $(".east").text("Wow, de nagy szám!") }
else {$(".east").text("Ez csak egy közönséges szám.")};


document.write("<br>Változtasd meg a harmadik elem szövegét arra, hogy A DOM Ereje, ha a word értéke az, hogy cool, különben pedig változtasd meg erre a negyedik elem szövegét.</b></br>")
if (word == "cool") {
    $(".south").text("A DOM Ereje")
} 
else {$(".west").text("A DOM Ereje")
}


