
document.write("<h1>A JavaScript alapvető építőelemei</h1>");

document.write("<br><h2>Feltétel és elágazás</h2></br>");

let a = 7;
if (a < 5) { 
  console.log(a / 2);}
else {console.log(a * 2);}

document.write("<br><b>Kérdések</b></br>");
document.write("<br><p>Milyen eredményt kapsz, ha lefuttatod a fenti kódrészletet?</p></br>");
document.write("<p>Az eredmény " + `${a}`*2 + " lesz.</p>");

document.write("<br><p>Mit kellene megváltoztatnod ahhoz, hogy a parancssorra kiírt eredmény 1 legyen?</p></br>");
document.write("<p>Az 'a'-értékét át kell írni 2-re.</p>");

document.write("<hr></hr>")

document.write("<br><h2>Ciklusok</h2></br>");
document.write("<br><b>Feladatok</b></br>");
document.write("<p>Hozz létre egy ciklust, ami kiírja a számokat 0-tól 9-ig.</p>");

for (i = 0; i <= 9; i++) {
      document.write(i);  
  }

document.write("<p>for (let i=0; i<=9; i++){console.log(i);}</p>")

document.write("<p>Módosítsd az előző ciklust, hogy 1-től 10-ig írja ki a számokat.</p>");
document.write("<p>for (let i=1; i<=10; i++){console.log(i);}</p>")

for (i = 1; i <= 10; i++) {
    document.write(i);  
}


document.write("<p>Írd ki a 0 és 20 közötti páros számokat (zárt intervallum).</p>");
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      document.write(i);  
    }
  }
  
  document.write("<br></br>")
  document.write("<hr></hr>")

  document.write("<br><h2>Függvények</h2></br>");

  document.write("<p>Példa</p>");
  document.write("<p>let add = (a, b) => {return a + b;}</p>");


  let add = (a, b) => {
    return a + b;
  };

  document.write(add(1, 2))


  document.write("<br><b>Feladatok</b></br>");
  document.write("<p>Használd az imént megismert for ciklust (for loop) és hozz létre egy függvényt, ami kiírja az első N számot!</p>")

  document.write("<br>printNumbersTill(20): </br>")
  
  function printNumbersTill (number) {
    for (let i = 1; i <= number; i++) {
        document.write(i)
    }
}
printNumbersTill("20");

document.write("<br></br>");

document.write("<br>printNumbersTill(15): </br>")

let printNumbersTill1 = (number1) => {
  for (let j = 1; j <= number1; j++) {
    document.write(j);
  }
}
printNumbersTill1("15");

/*let printNumbersTill3 = (number2) => {
  for (let f = 0; f <=number2; f++)
  if (f % 2 == 0)
  if (f !== 5 && f !==2)
  document.write(f);
}
printNumbersTill3("50")

document.write("<br></br>")

let printNumbersTill4 = (number3) => {
  for (let k = 0; k < number3; k++)
  if(k % 2 !== 0)
  document.write(k);
}
printNumbersTill4("81");*/


  document.write("<p>Hozz létre egy függvényt, ami egy nevet kap paraméterként, majd visszatér egy személyes üdvözléssel!</p>")

let getGreetingTo = (who) => {
  document.write(`Hello ${who}!`)
  console.log(`Hello ${who}!`);
}
getGreetingTo("Tamás");

document.write("<br></br>")

let kitchen = (what) => {
  document.write(`Hey Sweetie, go to the kitchen, and make me a(n) <b>${what}</b>!`)
  console.log(`Hey Sweetie, go to the kitchen, and make me a(n) <b>${what}</b>!`);
}
kitchen("apple pie ")

document.write("<br></br>")
document.write("<hr></hr>")

document.write("<br><h2>For ciklusok és tömbök</h2></br>");
document.write("<br><b>1. Feladat</b></br>");
document.write("<p>Hozz létre egy függvényt, ami egy tömböt kap paraméterként, majd sorban kiírja minden elemét!</p>");

let printValues = (array1) => {
  for (let i = 0; i < array1.length; i++);
  document.write(array1);
}
printValues(["0, 3, 6, 9, 11"])

document.write("<br></br>")

/*let printValues2 = (array2) => {
  for (i = 0; i<=array2.length; i++)
  document.write(array2);
}
printValues2(["2, 4, 6, 8, 10"])*/

/*let printValues3 = (array4) => {
  for(i=0; i<array4; i++);
  document.write(array4);
}
printValues3(["5, 10, 15, 20, 25"])*/
document.write("<hr></hr>")

document.write("<br><h2>A ForEach ciklus</h2></br>");

let myNumbers = ["10, 20, 30, 50, 12"] 
let sum = 0;
myNumbers.forEach(item => {
  sum += item;
});
document.write(sum);

/*myNumbers.forEach(function(number) {
    document.write(number);
});*

document.write("<br></br>")

/*let myNumbers2 = ["0, 15, 45, 65, 85, 100"];
myNumbers2.forEach(function(entry) {
document.write(entry);
});*/

document.write("<br><b>2. Feladat</b></br>");
document.write("<p>Módosítsd a korábbi printValues függvényed, hogy for ciklus helyett forEach ciklust használjon!</p>");

let myNumbers3 = ["10, 20, 30, 50, 12"];
  myNumbers.forEach(function(entry) {
  document.write(entry);
});

/*let printValues4 = ["1, 2, 3, 4, 5"];
printValues4.forEach(function(entry) {
  document.write(entry)
});
document.write("<br></br>")*/

/*let printValues5 = ["11, 22, 33, 44, 55"];
  printValues5.forEach(function(number) {
  document.write(number);
});*/







 

 











