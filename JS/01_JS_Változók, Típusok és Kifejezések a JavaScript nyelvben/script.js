
document.write("<br><b>VÁLTOZÓK</b></br>");
let myName = "Tomi";
let myAge = "30";
console.log('A Javascript is betoltott');
console.log("A nevem " + `${myName}, ` + "az eletkorom " + `${myAge}.`);

document.write("<br>A nevem " + `${myName}, ` + "az eletkorom " + `${myAge}.</br>`);



//Es
let result1 = true && true;
console.log(result1);

//Negalas
let result2 = !!true;
console.log(result2);

//Vagy
let result3 = true || false;
console.log(result3);

//Egyenlo
let result4 = true == true;
console.log(result4);

//Nem egyenlo
let result5 = true !== true;
console.log(result5);

//Modulo (%)
let remainder =  5 % 3;
console.log(remainder);

document.write("<br><b>FELADATOK - SZÁMOK</b></br>")
console.log('Innen következnek a feladatok');

//Számold ki az életkorod a parancssor segítségével és tárold el egy age nevű változóban
let age = 2020 -1991;
console.log('Az 1. feladat megoldása: ' + `${age}`+ " év");
document.write('<br>Az 1. feladat megoldása: ' + `${age}` + ' év</br>');

//Hány évig tartott a Második világháború? Tárold el az eredményt egy ww2 nevű változóban
let ww2 = 1945 -1939;
console.log('A 2. feladat megoldása: ' + `${ww2} `);
document.write('<br>A 2. feladat megoldása: ' + `${ww2}` + " év </br>");

//Mennyibe kerül 76 Tesla részvény? Tárold el egy tesla nevű változóban
let tesla1 = 597.95;
console.log("Egy Tesla részvény ára " + tesla1 + " USD");
let tesla = tesla1*76;
console.log("76 Tesla részvény ára pedig " + tesla + " USD");
document.write("<br>A harmadik feladat megoldása: " + tesla + " USD</br>");

//Hány másodpercig tart egy nap? Tárold el egy secondsOfDay nevű változóban
let secondsOfDay = 60 * 60 * 24;
console.log("Egy nap " + secondsOfDay + " másodpercig tart.");
document.write("<br>A negyedik feladat megoldása: " + secondsOfDay + " másodperc</br>");

//A világ lakosságának hány százaléka magyar állampolgár? Tárold el egy hungarians nevű változóban
let hungarians = (9770000 / 7850481770)*100;
console.log("A világ lakosságának " + hungarians + "%-a magyar állampolgár.");
document.write("<br>Az ötödik feladat megoldása: " + hungarians + " %</br>");

//Mennyivel nagyobb Kína területe, mint Csehországé? Tárold el egy bigger nevű változóban
let bigger = 9597000-78866;
console.log("Kína területe " + bigger + "km2-el nagyobb, mint Csehországé.");
document.write("<br>A hatodik feladat megoldása: " + bigger + " km2</br>");

//Ha egy Discord csatornába csak 7 ember fér és összesen 654-en vannak a szerveren, hányan lesznek a legkisebb csatornában? Tárold el egy participants nevű változóban
let participants = 654 % 7;
console.log("A legkisebb csatornában "+ participants +" ember lesz.");
document.write("<br>A hetedik feladat megoldása: " + participants + " ember");

//STRING
//Konkatenáció (+)
//Hossz (.length)

let charCount1 = myName.length;
console.log(charCount1 + " karakterből áll a 'myName'-változó.");

//Összehasonlítás
let trueOrFalse1 = 5 === 5; //true
let trueOrFalse2 = 100 < 50; //false
let trueOrFalse3 = 'hello' !== 'world'; //true
let trueOrFalse4 = 1 >= 2; //false
let trueOrFalse5 = 'blue'.length === 'green'.length; //false
let trueOrFalse6 = 3 < 4 && (5 > 6 || 7 < 8); //true
console.log(trueOrFalse1);
console.log(trueOrFalse2);
console.log(trueOrFalse3);
console.log(trueOrFalse4);
console.log(trueOrFalse5);
console.log(trueOrFalse6);

//ADATSZERKEZETEK
//Tömb (Array)

//FELADATOK
//Hozz létre egy tömböt, amiben különböző neveket tárolsz és mentsd el egy names nevű változóban

let names = ["Tomi", "Vixi", "Zsolti", "Szandi"];
console.log(names);

//Nézd meg, a harmadik név hosszabb-e, mint 5 karakter (.length)
let trueOrFalse7 = names[2].length > 5;
console.log(trueOrFalse7);
console.log("A tömb harmadik neve " + names[2].length + " karakterből áll, így nagyobb, mint 5.");

//Adj 1 vagy több új nevet a tömbhöz (.push)
names.push("Zita", "Zsolt");
console.log(names);

//Cseréld le az első nevet a saját nevedre
names[0] = "Tamás";
console.log(names);

//Nézd meg, több, mint 4 elem van-e a tömbben (.length)

/*let trueOrFalse8 = names.length > 4;
console.log(trueOrFalse8);
console.log("Igen, mivel összesen " + names.length +" név van a tömbben.");*/

if (names.length > 4) {
    trueOrFalse8 = true 
} else {trueOrFalse8 = false}
console.log(trueOrFalse8)

//Objektum
//FELADATOK
/*Hozz létre egy objektumot, aminek van egy colors nevű adatmezője (doboza)
a colors mező (változó) tartalma legyen egy tömb, ami színeket tartalmaz*/
let objektum = {
    colors: ["red", "lime", "salmon", "teal"]
}
console.log(objektum.colors);

/*Adj egy új mezőt az objektumhoz, hasManyColors néven
az értéke legyen true, ha több, mint 3 színt tartalmaz a colors, különben pedig legyen false*/

if (objektum.colors.length > 3) {
    objektum.hasManyColors = true
} 
else { (hasManyColors = false)
}



    