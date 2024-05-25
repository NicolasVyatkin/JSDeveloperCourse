
//Завдання 

// * В папке calculator дана верстка макета калькулятора. Необходимо сделать этот калькулятор рабочим.
// * При клике на клавиши с цифрами - набор введенных цифр должен быть показан на табло калькулятора.
// * При клике на знаки операторов (`*`, `/`, `+`, `-`) на табло ничего не происходит - программа ждет введения второго числа для выполнения операции.
// * Если пользователь ввел одно число, выбрал оператор, и ввел второе число, то при нажатии как кнопки `=`, так и любого из операторов, в табло должен появиться результат выполенния предыдущего выражения.
// * При нажатии клавиш `M+` или `M-` в левой части табло необходимо показать маленькую букву `m` - это значит, что в памяти хранится число. Нажатие на `MRC` покажет число из памяти на экране. Повторное нажатие `MRC` должно очищать память.

const add = (a, b) => Number(a) + Number(b);
const sub = (a, b) => Number(a) - Number(b);
const mul = (a, b) => Number(a) * Number(b);
const div = (a, b) => {
  if (b == "0") {
    calc.result = "E";
    return calc.result;
  }
  return a / b;
};

function operations(a, b, sign) {
  switch (sign) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = sub(a, b);
      break;
    case "*":
      result = mul(a, b);
      break;
    case "/":
      result = div(a, b);
      break;
  }
  return result;
}

const calc = {
  value1: "",
  value2: "",
  sign: "",
  result: "",
  member: "",
};

window.addEventListener("DOMContentLoaded", () => {
  //Створення розмітки

  let btnArr = [["mrc", "m-", "m+", "/"], ["7", '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', 'C', '=']]
  let box = document.createElement("div");
  document.body.append(box);
  box.setAttribute("class", "box")

  let disp = document.createElement("div");
  box.append(disp);
  disp.setAttribute("class", "display")

  let input = document.createElement("input");
  disp.append(input);
  input.setAttribute("type", "text")
  input.setAttribute("readonly", 'true')
  input.setAttribute("size", '18')

  let keys = document.createElement("div");
  box.append(keys);
  keys.setAttribute("class", "keys")    
      let p = document.createElement("p");
      keys.append(p);
      for (let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        p.append(input);
        input.setAttribute("type", "button")
        input.setAttribute("value", `${btnArr[0][i]}`)            
          if (i>2){            
            input.setAttribute("class", "button pink") 
          } else {input.setAttribute("class", "button gray")}                  
      }
      let b = document.createElement("p");
      keys.append(b);
      for (let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        b.append(input);
        input.setAttribute("type", "button")
        input.setAttribute("value", `${btnArr[1][i]}`)            
          if (i>2){            
            input.setAttribute("class", "button pink") 
          } else {input.setAttribute("class", "button black")}                  
      }
      let c = document.createElement("p");
      keys.append(c);
      for (let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        c.append(input);
        input.setAttribute("type", "button")
        input.setAttribute("value", `${btnArr[2][i]}`)            
          if (i>2){            
            input.setAttribute("class", "button pink") 
          } else {input.setAttribute("class", "button black")}                  
      }
      let d = document.createElement("p");
      keys.append(d);
      for (let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        d.append(input);
        input.setAttribute("type", "button")
        input.setAttribute("value", `${btnArr[3][i]}`)            
          if (i>2){            
            input.setAttribute("class", "button pink") 
          } else {input.setAttribute("class", "button black")}                  
      }
      let g = document.createElement("p");
      keys.append(g);
      for (let i = 0; i < 4; i++) {
        let input = document.createElement("input");
        g.append(input);
        input.setAttribute("type", "button")
        input.setAttribute("value", `${btnArr[4][i]}`)            
            if (i>2){            
              input.setAttribute("class", "button orange") 
            } else {input.setAttribute("class", "button black")}
      }
  // Функціонал калькулятору

  const btn = document.querySelector(".keys"),
    display = document.querySelector(".display > input");
  let left = display.getBoundingClientRect().left;
  let top = display.getBoundingClientRect().top;  

  function equal() {
    if (calc.value2 == "" && calc.sign == "") {
      calc.value2 = 1;
      calc.sign = "*";
    }
    calc.result = operations(Number(calc.value1), Number(calc.value2), calc.sign);
    display.value = calc.result;
    calc.value1 = Number(calc.result);
    calc.value2 = "";
    calc.sign = "";
  }
  function clearDisp() {
    display.value = "";
    calc.value1 = "";
    calc.value2 = "";
    calc.result = "";
    //calc.member = "";
    calc.sign = "";
  }
  function miniClear() {
    display.value = "";
    calc.result = "";
  }
  function createMemo() {
    let memorise = document.createElement("div");
    memorise.innerHTML = "m";
    disp.append(memorise);
    memorise.classList.add("memory");    
    memorise.classList.add("hide_mem");
  }
  createMemo();
  function showMemo() {
    let memorise = document.querySelector(".memory");
    memorise.classList.remove("hide_mem");
  }
  function hideMemo() {
    let memorise = document.querySelector(".memory");
    memorise.classList.add("hide_mem");
  }

  btn.addEventListener("click", function (e) {
    let el = e.target;
    if (el.tagName != "INPUT") return;
    if (/\d/.test(el.value) || /\./.test(el.value)) {
      if (display.value == calc.member && display.value != "") {
        miniClear();
      }
      if (
        display.value == calc.result &&
        calc.value2 == "" &&
        calc.sign == ""
      ) {
        calc.value1 = "";
        miniClear();
      }
      if (calc.value1 == "" || calc.sign === "") {
        if (/\./.test(calc.value1) && el.value === ".")
        return;
        calc.value1 += el.value;
        if (calc.value1[0] === ".") {
          calc.value1 = "0.";
        }
        display.value = Number(calc.value1);
      } else if (calc.sign !== "") {
        if (/\./.test(calc.value2) && el.value === ".")
        return;
        calc.value2 += el.value;
        if (calc.value2[0] === ".") {
          calc.value2 = "0.";
        }
        display.value = Number(calc.value2);
      }
    }
    if (el.classList.contains("pink")) {
      if (display.value == calc.member && display.value != "") {
        calc.value1 = Number(display.value);
        calc.value2 = "";
      }
      if (calc.sign != "" && calc.value2 != "") {
        equal();
      }
      calc.sign = el.value;
    }
    if (el.value === "=") {
      equal();
    }
    if (el.value === "C") {
      clearDisp();
      //hideMemo();
    }

    if (el.value == "m+") {
      calc.member = Number(calc.member) + Number(display.value);
      equal();
      showMemo();
    }
    if (el.value == "m-") {
      equal();
      calc.member = Number(calc.member) - Number(display.value);
      if (calc.member == "0") {
        hideMemo();
      }
    }
    if (el.value == "mrc") {
      display.value = Number(calc.member);
      if (calc.value1 !== "") {
        calc.value1 = Number(display.value);
      }
    }
  });
});
