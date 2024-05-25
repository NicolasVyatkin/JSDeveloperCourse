//Завдання 1

window.addEventListener('DOMContentLoaded', () => {
	let btnText = [ 'Enter', 'S', 'E', 'O', 'N', 'L', 'Z' ];

	let btnWrapper = document.createElement('div');
	document.body.append(btnWrapper);
	btnWrapper.setAttribute('class', 'btn-wrapper');
	for (let i = 0; i < 7; i++) {
		let btn = document.createElement('buton');
		btn.setAttribute('class', 'btn');
		//btn.setAttribute('value', buttons[i]);
		btn.innerText = `${btnText[i]}`;
		btnWrapper.append(btn);
	}

	let [ ...buttons ] = document.querySelectorAll('.btn');

	document.body.addEventListener('keypress', (event) => {
		buttons.forEach((el) => {
			if (event.key.toLowerCase() === el.innerHTML.toLowerCase()) {
				el.style.background = 'darkblue';
			}
			if (el.style.background === 'darkblue' && event.key.toLowerCase() !== el.innerHTML.toLowerCase()) {
				el.style.background = '#33333a';
			}
		});
	});
});
