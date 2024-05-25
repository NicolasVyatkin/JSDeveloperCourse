let saucesPrice = 0;
let toppingsPrice = 0;
let sizePrice = 250;
let totalPrice = 0;
let PriceSpanExists = false;
let priceSpan = document.createElement("span");

let [...spans] = document.querySelectorAll("span");

const showTotalPrice = () => {
	if (!PriceSpanExists) {
		document.querySelector(".price>p").append(priceSpan);
		PriceSpanExists = true;
	}
	totalPrice = sizePrice + saucesPrice + toppingsPrice;
	priceSpan.innerText = ` ${totalPrice} грн.`;

}
showTotalPrice();

document.querySelector("#pizzasize").addEventListener("click", (e) => {
	if (e.target.id === "small") {
		sizePrice = 150;
	} else if (e.target.id === "mid") {
		sizePrice = 200;
	} else {
		sizePrice = 250;
	}
	showTotalPrice();
})


// dragstart - вызывается в самом начале переноса перетаскиваемого элемента.
// dragend - вызывается в конце события перетаскивания - как успешного, так и отмененного.
// dragenter - происходит в момент когда перетаскиваемый объект попадает в область целевого элемента.
// dragleave - происходит когда перетаскиваемый элемент покидает область целевого элемента.
// dragover - происходит когда перетаскиваемый элемент находиться над целевым элементом.
// drop - вызывается, когда событие перетаскивания завершается отпусканием элемента над целевым элементом.
const [...sources] = document.querySelectorAll(".draggable");

sources.forEach(element => {
	let source = element;
	// начало операции drag
	source.addEventListener('dragstart', function (evt) {
		this.style.border = "3px dotted #000"; // меняем стиль в начале операции drag & drop

		// Свойство effectAllowed управляет визуальным эффектом (чаще всего это вид указателя мыши), который браузер создает в ответ 
		// на тип происходящего  события перетаскивания (перемещение, копирование и т. п.).
		// http://msdn.microsoft.com/en-us/library/ie/ms533743%28v=vs.85%29.aspx
		evt.dataTransfer.effectAllowed = "move";

		// Метод setData(...) сообщает механизму перетаскивания в браузере, какие данные из перетаскиваемого объекта должен «поймать»
		// целевой элемент, также называемый зоной приема. Здесь мы указываем, что передаваемые данные это id элемента
		evt.dataTransfer.setData("Text", this.id);

	}, false);

	// конец операции drag
	source.addEventListener("dragend", function (evt) {
		this.style.border = ""; // удаляем стили добавленные в начале операции drag & drop 
	}, false);



});
var target = document.getElementById("target");

// перетаскиваемый объект попадает в область целевого элемента
target.addEventListener("dragenter", function (evt) {
	this.style.border = "3px solid red";
}, false);

// перетаскиваемый элемент покидает область целевого элемента
target.addEventListener("dragleave", function (evt) {
	this.style.border = "";
}, false);

target.addEventListener("dragover", function (evt) {
	// отменяем стандартное обработчик события dragover.
	// реализация данного обработчика по умолчанию не позволяет перетаскивать данные на целевой элемент, так как большая
	// часть веб страницы не может принимать данные.
	// Для того что бы элемент мог принять перетаскиваемые данные необходимо отменить стандартный обработчик.
	if (evt.preventDefault) evt.preventDefault();
	return false;
}, false);

// перетаскиваемый элемент отпущен над целевым элементом
let secondSouce = false;
let secondTopping = false;
target.addEventListener("drop", function (evt) {

	// прекращаем дальнейшее распространение события по дереву DOM и отменяем возможный стандартный обработчик установленный браузером.
	if (evt.preventDefault) evt.preventDefault();
	if (evt.stopPropagation) evt.stopPropagation();

	this.style.border = "";
	var id = evt.dataTransfer.getData("Text"); // получаем информации которая передавалась через операцию drag & drop 

	var elem = document.getElementById(id);
	let elemName = document.getElementById(id).nextElementSibling.innerText;

	// добавляем элемент в целевой элемент. Так как в DOM не может быть два идентичных элемента - элемент удаляется со своей старой позиции.
	if (/sauce/.test(id)) {
		if (secondSouce) {
			document.querySelector(".sauces").append(`, ${elemName}`);
		} else {
			document.querySelector(".sauces").append(` ${elemName}`);
			secondSouce = true;

		}
		saucesPrice += 15;
		showTotalPrice();

	} else {
		if (secondTopping) {
			document.querySelector(".topings").append(`, ${elemName}`);
		} else {
			document.querySelector(".topings").append(` ${elemName}`);
			secondTopping = true;

		}
		toppingsPrice += 20;
		showTotalPrice();

	}

	this.appendChild(elem);
	return false;
}, false);
document.querySelector("#target").addEventListener("click", (e) => {
	if (e.target.className == "draggable") {
		if (/sauce/.test(e.target.id)) {
			saucesPrice -= 15;
			let saucesString = document.querySelector(".sauces").innerHTML;

			if (saucesString.includes(`, ${e.target.getAttribute("alt")}`)) {
				saucesString = saucesString.replaceAll(`, ${e.target.getAttribute("alt")}`, "");
				document.querySelector(".sauces").innerHTML = saucesString;
			} else {
				saucesString = saucesString.replaceAll(`${e.target.getAttribute("alt")}`, "");
				document.querySelector(".sauces").innerHTML = saucesString;
			}
			if (document.querySelector(".sauces").innerHTML == "Соуси:") {
				secondSouce = false;
			}
			showTotalPrice();
		} else {
			toppingsPrice -= 20;
			let toppingsString = document.querySelector(".topings").innerHTML;

			if (toppingsString.includes(`, ${e.target.getAttribute("alt")}`)) {
				toppingsString = toppingsString.replaceAll(`, ${e.target.getAttribute("alt")}`, "");
				document.querySelector(".topings").innerHTML = toppingsString;
			} else {
				toppingsString = toppingsString.replaceAll(`${e.target.getAttribute("alt")}`, "");
				document.querySelector(".topings").innerHTML = toppingsString;
			}
			if (document.querySelector(".topings").innerHTML == "Топiнги:") {
				secondTopping = false;
			}
			showTotalPrice();

		}
		spans.forEach(element => {
			if (element.innerText == e.target.getAttribute("alt")) {
				let xpath = `//span[text()='${e.target.getAttribute("alt")}']`;
				let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				let tempSpanObject = element;
				let tempIngredObject = e.target;
				matchingElement.before(tempIngredObject);

			}
		});
	}
});

//Валідація форми 
const validate = (target) => {
	switch (target.getAttribute("name")) {
		case "name": return /^[a-я ,.'-]+$/i.test(target.value);
		case "phone": return /^\+380\d{9}$/.test(target.value);
		case "email": return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(target.value);
	}
};

let [...orderFormInputs] = document.querySelectorAll("input");
orderFormInputs = orderFormInputs.filter((element) => {
	return element.className != "button" && element.className != "radioIn";
})

orderFormInputs.forEach((element) => {
	element.addEventListener("change", (event) => {

		if (!validate(event.target)) {
			event.target.classList.add("error");
			event.target.classList.remove("success");
		} else {
			event.target.classList.remove("error");
			event.target.classList.add("success");

		}
	})
});
let resetFormBtn = document.querySelector("[type=reset]");
let submitOrderBtn = document.querySelector("[type=button]");

resetFormBtn.addEventListener("click", () => {
	orderFormInputs.forEach((element) => {
		element.value = "";
	})
});

submitOrderBtn.addEventListener("click", ()=>{
let validationResults = orderFormInputs.map((element)=>{
	return validate(element);
});
if(!validationResults.includes(false)){
document.location = "./thank-you.html"
};
});

//Кнопка знижки

banner.addEventListener('mouseover', () => {
	banner.style.top = `${Math.random() * 700}px`;
	banner.style.left = `${Math.random() * 500}px`;
});


/**Знижка
window.addEventListener('DOMContentLoaded', () => {
	banner.addEventListener('mouseover', () => {
		banner.style.bottom = `${Math.random() * 700}px`;
		banner.style.right = `${Math.random() * 500}px`;
	});
});

//Верифікація

window.addEventListener('DOMContentLoaded', () => {
	localStorage.user = JSON.stringify([]);

	class User {
		constructor(name, number, email, index) {
			this.name = name;
			this.number = number;
			this.email = email;
			this.status = true;
		}
	}

	let [ ...allInputs ] = document.querySelectorAll('input');

	let inputsRez = allInputs
		.map(function(element) {
			return element;
		})
		.filter((element) => {
			return element.type != 'button';
		});
	const validate = (target) => {
		switch (target.id) {
			case 'name':
				return /^[A-z]{2,}$/i.test(target.value);
			case 'phonenumber':
				return /^\+380\d{9}$/.test(target.value);
			case 'email':
				return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i.test(target.value);
			default:
				throw new Error('Невірний виклик регулярного виразу');
		}
	};

	inputsRez.forEach((e) => {
		e.addEventListener('change', (event) => {
			console.log(validate(event.target));
		});
	});

	let saveButton = document.querySelector('[type=button]');

	saveButton.addEventListener('click', () => {
		//Функція валідації після натиску кнопки
		let validateRez = inputsRez.map(function(element) {
			return validate(element);
		});

		//Перевіряємо чи немає помилок в інпутах
		if (!validateRez.includes(false)) {
			//Якщо нема помилок, записуємо в localStorage
			let a = JSON.parse(localStorage.user);
			a.push(
				new User(
					...inputsRez.map((element) => {
						return element.value;
					})
				)
			);
			localStorage.user = JSON.stringify(a);
			inputsRez.forEach((element) => (element.value = ''));
			createUserList();
		}
	});
});

//Перетаскивание

window.addEventListener('DOMContentLoaded', () => {
	function allowDrop(ev) {
		ev.preventDefault();
	}
	
	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}
	
	function drop(ev) {
		ev.preventDefault();
		let data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}



})*/
