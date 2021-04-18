
for (i=0; i<10; i++) {
    console.log(i)
}


for (i=1; i<=10; i++) {
    console.log(i)
}


for (i=1; i<=20; i++) {
    if (i % 2 == 0){
console.log(i)}
}

//Feladat 1.
//For loop Function
//First 20 numbers

function printAll(numbers) {
for (i = 0; i<=numbers; i++){
    console.log(i)
}}
printAll("20")

//First 15 numbers

function printAll1 (numbers1) {
    for (i=0; i<=numbers1; i++) {
        console.log(i)
    }
}
printAll1("15")

//Feladat 2.

function greet(who) {
    console.log("Hello " + who + "!")
}
greet("Tomi")

//For ciklusok és tömbök

function allValues (myArray) {
    for (i=0; i <= myArray.length; i++){
        console.log(myArray[i])
    }
}
allValues([0, 3, 6, 7, 9])

function allValues1 (myArray1) {
    for (i=0; i<= myArray1.length; i++){
        console.log(myArray1[i])
    }
}
allValues1([0,5, 10, 15, 20])

//ForEach

let myArray1 = [0, 1, 2, 3, 4, 5];
myArray1.forEach(myNumbers => {
console.log(myNumbers)
    
});

let myArray2 = [0, 23, 45, 88];
myArray2.forEach(myNumbers1 => {
    console.log(myNumbers1)
});