//Завдання №1 

document.write('Завдання №1 <br>');

const Human = function (name,sname,age) {
  this.name = name; 
  this.sname = sname;
  this.age = age;

}

let persOne = new Human("Nickolas", "Temnoyarov", 33);
let persTwo = new Human("Mari", "Gyseva", 24);
let persThree = new Human("Vitalis", "Belov", 27);
let persFour = new Human("Alex", "Evstigneev", 23);
let persFive = new Human("Anri", "Berg", 30);


let persArr = [
  { name:"Nickolas", sname:"Temnoyarov", age: 33, },
  { name:"Mari", sname:"Gyseva", age: 24, },
  { name:"Vitalis", sname:"Belov", age: 27, },
  { name:"Alex", sname:"Evstigneev", age: 23, },
  { name:"Anri", sname:"Berg", age: 30, },
]

function sortAgeIncr(a,b){
  if(a.age>b.age)return 1;
  if(a.age<b.age)return -1;
  return 0;
}

persArr.sort(sortAgeIncr);

document.write('Сортування учасників за зростанням віку');
document.write('<ol start="1">');
persArr.forEach( sortAgeIncr => {
  document.write(`<li class="list_items"> <span style="color: #1a55cc">${sortAgeIncr.name} ${sortAgeIncr.sname}</span> 
    is ${sortAgeIncr.age} years old.</li>`);
});
document.write('<ol>');

function sortAgeDecr(a,b){
  if(a.age>b.age)return -1;
  if(a.age<b.age)return 1;
  return 0;
}

persArr.sort(sortAgeDecr);

document.write('Сортування учасників за зменшенням віку');
document.write('<ol start="1">');
persArr.forEach( sortAgeDecr => {
  document.write(`<li class="list_items"> <span style="color: #1a55cc">${sortAgeDecr.name} ${sortAgeDecr.sname}</span> 
    is ${sortAgeDecr.age} years old.</li>`);
});
document.write('<ol>');


// Завдання №2

document.write('Завдання №2 <br>');

const Human2 = function (price, sale,name) {
  this.name = name, 
  this.one = price, 
  this.two = sale, 

  Human2.prototype.multi = function(){
      return (this.one * (this.two/100))
  }
}

let l = new Human2(25000,15,'Lenovo');
let a = new Human2(30000, 25, 'Asus');

document.write(`<div class="doc_block"><br> Вартість покупки ноутбука ${l.name} складає ${l.one} грн. 
та з урахуванням знижки ${l.multi()} грн. складе: ${l.one-l.multi()} грн.</div>`);
document.write(`<div class="doc_block"><br> Вартість покупки ноутбука ${a.name} складає ${a.one} грн. 
та з урахуванням знижки ${a.multi()} грн. складе: ${a.one-a.multi()} грн.</div>`);


// Завдання №3

document.write('Завдання №3 - Класна робота <br>');

const Calkulator = function (one , two) {
  this.one =  one;
  this.two = two;
  this.read = function () {     
    return document.write(`<div class='doc_head' <br> Перше число = ${this.one} </div> <div class='doc_body' <br> Друге число = ${this.two} </div>`); 
  }
  this.sum = function () {
      return document.write(`<div class='doc_date'<br>Результат додавання чисел =${this.one + this.two} </div>`);
  }
  this.mult = function () {
      return document.write(`<div class='doc_footer' <br> Результат множення чисел = ${this.one* this.two} </div>`);
  }
}

let one = parseFloat(prompt("Введіть перше число:"));
let two =parseFloat(prompt("Введіт друге число:"));

let result = new Calkulator(one, two)
result.read();
result.sum();
result.mult();



