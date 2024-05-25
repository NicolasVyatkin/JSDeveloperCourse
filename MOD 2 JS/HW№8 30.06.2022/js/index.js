
//Завдання №1

window.onload = function () {
  document.querySelector("input").onclick = function() {
    var getRadius = parseFloat(prompt("Введіть радіус кола від 50 до 200"));
    if (getRadius < 50) {
      alert("Введіть число більше 50");
    }else if (getRadius > 200){
      alert("Введіть число менше 200");
    } else {
      const radiusOk = getRadius         
      let i = 0;
      while (i < 100) { 
        const r = document.createElement("round");
        r.classList.add('roun');
        r.style.width = radiusOk + 'px';
        r.style.height = radiusOk + 'px';
        r.style.fontSize = radiusOk / 5 + 'px';            
        r.innerHTML = `<div class="num">${i+1}</div>`;          
        document.body.prepend(r);         
        i++;
      }                                       
    }
    let myblock = document.querySelectorAll('.roun');
  
    myblock.forEach(block => block.addEventListener('click', removeBlock));

    function removeBlock() {
      let block = this;
      block.style.opacity = 1;
      let blockId = setInterval(function() {
        if (block.style.opacity > 0) block.style.opacity -= .1;
        else {
  	      clearInterval(blockId);
  	      block.remove();
        }
      }, 60)
    }                    
  }          
} 