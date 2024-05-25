
//Завдання №1

window.onload = function () {
  document.querySelector("input").onclick = function() {
    var getName = prompt("Введіть назву Div");
      let i = 0;
      while (i < 1) {
        const d = document.createElement("div");
        d.classList.add('new_div');
        d.innerHTML = `${getName}`;
        document.body.prepend(d);
        i++;        
      }
      let gap = document.querySelector('.new_div');
      let result = getComputedStyle(gap, null).marginLeft;
      console.log(`зовнішній відступ: ${result}`);
    }
  }
