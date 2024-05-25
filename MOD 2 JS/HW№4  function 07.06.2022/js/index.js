
//Завдання 1
const arr = [7, 10, 18, 22, 11, 5];
const processingArr = () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= i;

  }
}
const map = (arr, callback) => {
  callback(arr);
  return arr;
}
map(arr, processingArr);
document.write(`Побудований новий масив <br> ${arr} <hr> <br>`);


// Завдання 2

function checkAge (){
  age = prompt("Введіть свій вік");  
  numAge = Number (age);
  document.write(`Твій вік: ${age} <br> <hr>`)
  return numAge >= 18 ? confirm('Привіт!') : confirm('Батьки дозволили?') ? confirm('Привіт!') : confirm('Пощастить наступного разу'); 
  
};
var call = checkAge();
