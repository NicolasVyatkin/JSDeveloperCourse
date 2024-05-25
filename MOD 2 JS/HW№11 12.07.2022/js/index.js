//Завдання 1
// Створи клас, який буде створювати користувачів з ім'ям та прізвищем. Додати до класу метод для виведення імені та прізвища

window.addEventListener('DOMContentLoaded', () => {
	class logUser {
		constructor(name, surname) {
			this.surname = surname;
			this.name = name;
		}

		sayHello() {
			//alert(`this.name this.surname`);
			let box = document.createElement('div');
			document.body.append(box);
			box.setAttribute('class', 'box');
			box.innerHTML = `${this.name} ${this.surname}`;
		}
	}

	let user = new logUser('Kolin', 'Vyatkin');
	user.sayHello();
});

//Завдання 2
// Створи список, що складається з 4 аркушів. Використовуючи джс зверніся до 2 li і з використанням навігації по DOM дай 1 елементу синій фон, а 3 червоний

window.addEventListener('DOMContentLoaded', () => {
	let list = document.createElement('ol');
	document.body.append(list);
	list.setAttribute('class', 'newlist');
	for (let i = 0; i < 4; i++) {
		let li = document.createElement('li');
		li.setAttribute('class', 'newlistpos');
		list.append(li);
	}
	const li1 = document.getElementsByTagName('li')[0];

	const mouse1 = (e) => {
		e.target.classList.add('hover_blue');
	};

	li1.addEventListener('mouseover', mouse1);

	li1.onmouseout = function() {
		this.classList.remove('hover_blue');
	};

	const li3 = document.getElementsByTagName('li')[2];
	const mouse = (e) => {
		e.target.classList.add('hover_red');
	};
	li3.addEventListener('mouseover', mouse);
	li3.onmouseout = function() {
		this.classList.remove('hover_red');
	};
});

//Завдання 3
// Створи див висотою 400 пікселів і додай на нього подію наведення мишки. При наведенні мишки виведіть текст координати, де знаходиться курсор мишки

window.addEventListener('DOMContentLoaded', () => {
	let newDiv = document.createElement('div');
	document.body.append(newDiv);
	newDiv.setAttribute('class', 'new_div');

	newDiv.onmousemove = function(e) {
		this.innerHTML = 'Координата курсору миші</b> X:' + e.offsetX + ' Y:' + e.offsetY;
	};
});

//Завдання 4
// Створи кнопки 1,2,3,4 і при натисканні на кнопку виведи інформацію про те, яка кнопка була натиснута

window.addEventListener('DOMContentLoaded', () => {
	let buttons = [];
	let butDiv1 = document.createElement('div');
	document.body.append(butDiv1);
	butDiv1.setAttribute('class', 'but_div1');
	for (let i = 0; i < 4; i++) {
		buttons = document.createElement('input');
		butDiv1.append(buttons);
		buttons.setAttribute('type', 'button');
		buttons.setAttribute('value', [ i + 1 ]);
		buttons.setAttribute('class', 'but_div');

		buttons.addEventListener('click', (e) => {
			const info = document.createElement('span');
			butDiv1.after(info);
			info.innerText = `Була натиснута кнопка '${e.target.value}'`;
		});
	}
});

//Завдання 5
// Створи див і зроби так, щоб при наведенні на див див змінював своє положення на сторінці

window.addEventListener('DOMContentLoaded', () => {
	const catchMe = document.createElement('div');
	document.body.append(catchMe);
	catchMe.classList.add('catchMe');
	catchMe.addEventListener('mouseover', () => {
		catchMe.style.left = `${Math.random() * 700}px`;
		catchMe.style.top = `${Math.random() * 500}px`;
	});
});

//завдання №6
// Створи поле для введення кольору, коли користувач вибере якийсь колір, зроби його фоном body

window.addEventListener('DOMContentLoaded', () => {
	const color = document.createElement('input');
	document.body.append(color);
	color.setAttribute('type', 'color');
	color.classList.add('color');
	const text = document.createElement('div');
	text.setAttribute('class', 'newlist');
	color.before(text);
	text.innerText = `Оберіть ваш улюблений колір`;

	color.addEventListener('input', (e) => {
		let userChoice = e.target.value;
		document.body.style.backgroundColor = userChoice;
	});
});

//завдання №7
// Створи інпут для введення логіну, коли користувач почне вводити дані в інпут виводь їх в консоль

window.addEventListener('DOMContentLoaded', () => {
	const enterLogin = document.createElement('input');
	document.body.append(enterLogin);

	enterLogin.setAttribute('placeholder', 'Enter login');
	enterLogin.classList.add('enterLogin');
	enterLogin.addEventListener('input', () => {
		console.dir(enterLogin.value);
	});
});

//завдання №8
// Створіть поле для введення даних у полі введення даних виведіть текст під полем

window.addEventListener('DOMContentLoaded', () => {
	const inputText = document.createElement('input');
	document.body.append(inputText);
	inputText.setAttribute('placeholder', 'Enter info');
	inputText.classList.add('enterLogin');
	inputText.addEventListener('change', () => {
		let newDiv = document.createElement('div');
		inputText.after(newDiv);
		newDiv.innerText = `${inputText.value}`;
	});
});
