  /* ПРЯМОКУТНИЙ ТРИКУТНИК */
  document.write('<div class="text">Прямокутний трикутник</div>')
  for (let i = 0; i < 10; i++) {          
    for (let j = (0 + i ); j < 10; j++) {
      document.write('<div class="right_triangle">*</div>');
    }         
    document.write("<br/>");
  }  
  document.write("<hr>");

  /* КВАДРАТ */
  document.write('<div class="text">Квадрат</div>')
  for (let i = 0; i < 10; i++) {    
    for (let j = (0); j < 10; j++) {
      document.write('<div class="square">*</div>');
    }   
  document.write("<br/>");
  }
  document.write("<hr>");  

  /* РОМБ */
  document.write('<div class="text">Ромб</div>')
  
  var blank = 10;
  var star = 1;
  var line = 20;
  for (var i = 0; i <= 20; i++){
      for (var j = ( 0 ); j <= blank; j++){
          document.write('<div class="blank"></div>')
      }
      for (var k = 0; k < star; k++){
          document.write('<div class="diamond">*</div>')
      }
      blank--;
      star++;
      if (i >= line / 2 && i <= line){
          star = star - 2;
          blank = blank + 2;
      }
      document.write("<br>");
  }
  document.write("<hr>");

  /* РІВНОСТОРОННІЙ ТРИКУТНИК */
  document.write('<div class="text1">Рівносторонній трикутник</div>')
  
  var blank = 20;
  var star = 1;
  var line = 20;
  for (var i = 20; i <= 40; i++){
      for (var j = ( 0 ); j <= blank; j++){
          document.write('<div class="blank"></div>')
      }
      for (var k = 0; k < (star - 1); k++){
          document.write('<div class="equil_triangle">*</div>')
      }
      blank--;
      star++;
      if (i >= line / 2 && i <= line){
          star = star - 2;
          blank = blank + 2;
      }      
      document.write("<br>");
  }

  var blank = 5;
  var star = 5;
  var line = 5;
  for (var i = 0; i <= 3; i++){
      for (var j = ( -8 ); j <= blank; j++){
          document.write('<div class="blank"></div>')
      }
      for (var k = 1; k < (star); k++){
          document.write('<div class="trunk">*</div>')
      }
       
      document.write("<br>");
  }

  document.write("<hr>");

  /*** Переписати if з використанням оператора ?  ***/

  document.write('<div class="text4">Переписати if з використанням оператора ?</div>');

  let a = parseFloat(prompt('Введіть перше число'));
  let b = parseFloat(prompt('Введіть друге число'));

  /*if (a + b < 4) {
    result = '<div class="text3">Мало</div>';      
} else {
    result = '<div class="text3">Багато</div>';
}*/

    result = a + b < 4 ? '<div class="text3">Мало</div>' : '<div class="text3">Багато</div>';

    document.write(result);
    document.write("<hr>");

    /*** Переписати if..else з використанням декількох операторів ?  ***/

    document.write('<div class="text4">Переписати if..else з використанням декількох операторів ?</div>');

    var login = prompt('Введіть логін');

/*    if (login == 'Тарас'){
        document.write(message = '<div class="text3">Привіт</div>');
    } else if (login == 'Директор') {
        document.write(message = '<div class="text3">Добридень</div>');        
    } else if (login == '') {
        document.write(message = '<div class="text3">І все ж таки введіть логін</div>');
    } else {
        document.write(message = '<div class="text3">І все ж таки введіть що небудь</div>');
    }
*/


var message = (login == 'Тарас') ? '<div class="text3">Привіт</div>' : (login == 'Директор') ? '<div class="text3">Добридень</div>' : (login == null) ? '<div class="text3">І все ж таки введіть що небудь</div>' : '<div class="text3">І все ж таки введіть логін</div>';

document.write(message);
document.write("<hr>");

    /*** Розрахунки з використанням двох чисел А та В  ***/

    document.write('<div class="text4">Розрахунки з використанням двох чисел А та В</div>');

    let c = parseFloat(prompt('Введіть перше число'));
    let d = parseFloat(prompt('Введіть друге число'));
    let summ = 0;    
    const g = c ;

    while(c <= d){             
        summ +=c ;  
        c++;        
    }
   
    document.write('<div class="text3">Число А:' + g + '</div>');
    document.write('<div class="text3">Число В:' + d + '</div>');
    document.write('<div class="text3">Сума чисел від А до В:' + summ + '</div>');        
    document.write("<hr>");     

        for (var odd = g; odd <= d; odd++) { 
            if (odd % 2 == 1) {            
                document.write('<div class="text3">Непарні числа в інтервалі А-В:' + odd + '</div>'); } 
        }
    