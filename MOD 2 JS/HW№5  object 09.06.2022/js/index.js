//Створити об'єкт із заданими параметрами

const doc = {
  head : '',
  body : '',
  footer :'',
  myDate :'',
  app: {
    head:{
      info: prompt("Введіть своє ім'я")
    },
    body:{
      info: prompt('Розкажіть щось про себе')
    },
    myDate:{
      info: new Date
    },
    footer:{
      info: 'Thank you for your cooperation'
    },     


    print: function(){
      document.getElementById("head").innerHTML = `${doc.app.head.info}`
      document.getElementById("body").innerHTML = `${doc.app.body.info}`
      document.getElementById("myDate").innerHTML = `${doc.app.myDate.info}`
      document.getElementById("footer").innerHTML = `${doc.app.footer.info}`          
    }
  },

  show: function(){
    doc.head = document.write("<div class='doc_head' id = 'head'></div>")
    doc.body  = document.write("<div class='doc_body' id = 'body'></div>")
    doc.myDate = document.write("<div class='doc_date' id = 'myDate'></div>")
    doc.footer = document.write("<div class='doc_footer' id = 'footer'></div>")      
  }
}

doc.show();
doc.app.print();



