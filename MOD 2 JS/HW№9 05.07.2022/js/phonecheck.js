let input = document.createElement("input");
document.body.append(input);
let btn = document.createElement("input");
btn.setAttribute("type", "button");
btn.setAttribute("value", "Зберегти номер")
btn.setAttribute("class", "save")
input.setAttribute("class", "inp")
input.setAttribute("placeholder", "формат введення 000-000-00-00")
input.setAttribute("onfocus", "this.value=''")
document.body.append(btn);
let div = document.createElement("div");
input.before(div);
let pattern = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

let number;
btn.onclick = () =>{
  number = input.value;
  if(pattern.test(number)){
    input.classList.add("green");
    document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
} else {
    div.prepend("Невірний формат введення телефону(000-000-00-00)");
  }
}




