// let a = "hello my name is hamza"
// console.log(a);
// **************************************************
// const sayı = 20
// console.log(sayı);
// console.log(typeof sayı);
// **************************************************
// const sayı1= "33"
// console.log(sayı1);
// console.log(typeof sayı1);
// **************************************************
// const s1 = "hello"
// const s2 = "fs13"
// console.log(s1 + s2);
// **************************************************
// const n1 = "5"
// const n2 = 10
// console.log(n1 + n2);
// **************************************************

// let dil = "javascript"
// console.log(dil);

// dil = "java"
// console.log(dil);

// dil = true
// console.log(typeof dil);

// dil = 3.14
// console.log(typeof dil);
// **************************************************
// let num1 = 5
// let num2 = 4
// let result = num1 + num2
// console.log(++result);
// console.log(result);
// **************************************************
// const cola = 20
// const gumm = 5
// const biscuits = 15
// const totalprice = cola + gumm + biscuits
// console.log("TOTAL PRİCE:", totalprice);
// console.log(totalprice + "TL");
// **************************************************
// const firstname = "ahmet"
// const lastname = "ozturk"
// const name = firstname + " " + lastname
// console.log(name);
// **************************************************
// const a1 = 5,
//     a2 = 4,
//     a3 = "three"
// console.log(a1 + a2);
// console.log(a1 - a2);
// console.log(a2 - a3);
// **************************************************
// const yearofbirth = 1920;
// const name1 = "john";
// console.log(name1 + " is " + (2022 - yearofbirth) + " years old");
// console.log(`${name1} is ${2022 - yearofbirth} years old`);
// **************************************************
// const rasgele = Math.round(Math.random() * 100)
// console.log(rasgele);
// **************************************************
// let b = 5
// b++
// console.log(b++);
// y = b + 5
// console.log(--y);
// **************************************************
// const nu1 = 3
// console.log(nu1 == 3);
// console.log(nu1 === 3);
// console.log(nu1 === "3");

// const nu2 = "3"
// console.log(nu1 == nu2);
// console.log(nu1 != nu2);
// **************************************************
// const v1 = true
// const v2 = false
// console.log(v1 || v2);
// console.log(v1 && v2);
// **************************************************
// const num = Number(prompt("please enter a number:"))
// if (num > 0) {
//     console.log(`${num} is positive`);
// }else if (num < 0) {
//     console.log(`${num} is negative`);
// }else {
//     console.log(`${num} is equal to zero`);
// }

// **************************************************
// const n1 = +prompt("number1:")
// const n2 = +prompt("number2:")
// const n3 = +prompt("number3:")

//* 1.yöntem
// if(n1 >= n2 &&  n1 >=n3 ){
//     console.log(`${n1} is biggest`);
// }else if (n2 >= n1 && n2 >= n3){
//     console.log(`${n2} is biggest`);
// }else if(n3 >=n1 && n3 >= n2){
//     console.log(`${n3} is biggest`);
// }

//* 2. yöntem
// let biggest = n1

// if (n2 > biggest) {
//     biggest = n2
// }

// if (n3 > biggest) {
//     biggest = n3
// }

// console.log(`${biggest} is biggest`);
// **************************************************

// const s1 = Number(prompt("1. sayiyi giriniz"))
// const islem = prompt("islemi giriniz : +, -, *, /")
// const s2 = +prompt("2. sayiyi giriniz")

// let sonuc = 0

// switch (islem) {
//     case "+":
//         sonuc = s1 + s2
//         break
//     case "-":
//         sonuc = s1 - s2
//         break
//     case "*":
//         sonuc = s1 * s2
//         break
//     case "/":
//         sonuc = s1 / s2
//         break
//     default:
//         alert("yanlis islem girisi")
//         break            
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
// **************************************************
// const day = prompt("gunu girin")

// switch(day){
//     case "pazartesi":
//     console.log("InClass");
//     break

//     case "salı":
//     console.log("InClass");
//     break

//     case "çarşamba":
//     console.log("InClass");
//     break
    
//     case "perşembe":
//     console.log("InClass");
//     break

//     case "cuma":
//     console.log("TeamWork");
//     break

//     case "cumartesi":
//     console.log("InClass + workshop");
//     break

//     case "pazar":
//     console.log("Self-Study");
//     break

//     default:
//         console.log("yanlış gün verildi");
// }
// **************************************************
// const grade = +prompt("lütfen notunuzu girin")
// const result = 
//     grade >= 50
//     ? `you are succesful with ${grade}`
//     : `you are failed with ${grade}`

// console.log(result);
// **************************************************
// const salary = +prompt("maaşınızı girin")
// const zam1 = salary * 1.5
// const zam2 = salary * 1.10
// if(salary > 5500){
//     console.log(zam1);
// }else if(salary < 5500 ) {
//     console.log(zam2);
// }

// **************************************************
// const gelir = +prompt("gelirinizi girin")
// const gider = +prompt("giderinizi yazın")
// const hesap =
//     gelir >= (gider + 5500)
//         ? alert("kredi alır")
//         : alert("kredi alamaz")
// **************************************************
// const n = +prompt("enter a number")
// let sum = 0
// for (let i = 1; i <= n; i++){
//     sum = sum + i
// }
// console.log(sum);

// **************************************************
// const num = Number(prompt("Enter a number"))
// for (let j = 1; j <= num; j++) {
//     const randomNum = Math.round(Math.random() * 100)
//     console.log(`${j}. random number: ${randomNum}`)
//}
// **************************************************
// const num = +prompt("enter a number")
// for (let i = 1; i <= num; i++){
//     const rasgele = Math.round(Math.random() * 100)
//     console.log(`${i}. rasgele sayı ${rasgele}`); 
// }
// **************************************************
// do {
//     let avg = 0
//     let midterm = Number(prompt("your midterm grade:"))
//     let final = Number(prompt("your final grade:"))
//     avg = midterm * 0.4 + final * 0.6
//     console.log(`Your Score is ${avg}`)
//     again = prompt("Do you want to continue(e/E)?")
//   } while (again === "e" || again === "E")
//   console.log("See you later. Bye")
// **************************************************
// function yazdır(){
//     console.log("hello");
// }
// yazdır()
// **************************************************
// function topla (n1,n2){
//     console.log(n1 + n2);
// }

// topla(5,4)
// topla(11,52)
// **************************************************
// function isim(firstname, lastname){
//     console.log(`hi ${firstname} ${lastname}`);
// }
// isim("hamza", "öztürk")
// **************************************************
// const name = prompt("your name:")
// const surname = prompt("your surname:")
// isim(name, surname)

// **************************************************
// function yas(name, yob){
//     const age = new Date().getFullYear() - yob
//     console.log(`${name}'s age ${age}`);
// }
// yas("elif", 2000)
// **************************************************
// function oddoreven(num){
//     return num % 2 ? "odd" : "even"
// }

// const number = +prompt("please enter a number")
// const oddeven = oddoreven(number)
// console.log(`${number} is ${oddeven}`);
// **************************************************
// function tekcift(sayi){
//     if(sayi % 2 ===0){
//         return "cift"
//     }else{
//         return "tek"
//     }
// }

// const number = +prompt("please enter a number")
// const num = tekcift(number)
// console.log(`${number} is ${num}`);

// const topla = function(num1, num2){
//     return num1 + num2
// }


// let tekcift = function(number){
//     return number % 2 === 0 ? "cift" : "tek"
// }

// console.log(tekcift(5));
// **************************************************
// let findbiggest = function(n1, n2, n3 = 0){
//     let biggest = n1;
//     if(n2 >= biggest){
//         biggest = n2
//     }
//     if(n3 >= biggest){
//         biggest = n3
//     }

//     return biggest
// }

// console.log(`the biggest ${findbiggest(4, 7, 20)}`);
// **************************************************


// const topla = (a,b) => a + b ;
// console.log(topla(4,5));
// **************************************************

// const h = +prompt("h:")
// const r = +prompt("r:")
// const volume = (r,h) => Math.PI * r * r * h
// console.log(`${volume(r,h)}`);

// **************************************************

// const taban = +prompt("taban:")
// const yukseklik = +prompt("yükseklik:")

// const üçgen = (taban,yukseklik) => (taban * yukseklik) / 2;
// console.log(`${üçgen(taban,yukseklik)}`);
// **************************************************

// const yashesapla = (dogumtarihi) => 2023 - dogumtarihi;
// console.log(yashesapla(2001)); //22
// **************************************************


// let str = "this is a string"
// console.log(str.length); //16
// **************************************************


// let str = "hello world"
// console.log(str[0]); //h
// console.log(str[str.length-1]); //d
// **************************************************


// for(i = 0; i<str.length; i++){
//     console.log(str[i]);
// }
// **************************************************


// for(i = str.length-1; i>= 0; i--){
//     console.log(str[i]);
// }
// **************************************************


// let str = "clarusway"
// console.log(str.slice(1,5)); //laru

// **************************************************

// let str1 = "full"
// let str2 = "stack"
// let str3 = "clarusway"
// const result = str1.concat(str2, " ", str3)
// console.log(result);

// **************************************************

// let control = `hamza`
// console.log(control.includes(`a`)); //true

// **************************************************

// let control = `hamza`
// console.log(control.indexOf(`a`));

// **************************************************

// let str = "benim arabam kırmızı"
// console.log(str.replace("kırmızı" , "yeşil")); //benim arabam yeşil

// **************************************************

// let str = "benim adım hamza"
// console.log(str.split());

// **************************************************

// const names = ["hamza", "enes","mehmet"]
// console.log(names);
// console.log(names.length);

// **************************************************

// const numbers = new Array(1,2,3)
// console.log(numbers);

// **************************************************

// const names = ["hamza", "enes","mehmet"]
// const mehmet = names[0]
// console.log(mehmet);
// console.log(names.at(-1));

// **************************************************

// const cars = ["bmw", "mercedes", "fiat"]
// console.log(cars.pop());
// console.log(cars);
// console.log(cars.push("hyundai"));
// console.log(cars);
// console.log(cars.unshift("togg"));
// console.log(cars);
// console.log(cars.shift());
// console.log(cars);
// cars.splice(1,0,"vw")
// console.log(cars);

// const numbers = [3, "5", "4", "four"]
// console.log(numbers.includes(5));
// console.log(numbers.includes(3));
// console.log(numbers.indexOf(3));
// console.log(numbers.indexOf(8));

// const num = numbers.join(".")
// console.log(num);
// console.log(numbers.toString());

let data = [3,110,4,8,55]
let sum = 0
// data = data.sort((a,b) => b-a).join(" ")
// console.log(data);

for(let i = 0; i < data.length; i++) {
    sum += data[i]
}
console.log(sum / data.length);

