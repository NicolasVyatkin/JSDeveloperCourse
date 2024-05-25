let api = 'https://swapi.dev/api/people/';
let results = [];
let char = [];
let storage = [];

//створюємо запит на сервер за допомогою fetch
function request(url) {
	return fetch(url).then((response) => {
		return response.json();
	});
}
//робота з запитом, обробка як Promise
request(api)
	.then((data) => {
		data.results.forEach((element, index) => {
			char = new Character(element, index);
			char.build(index);
			results.push(char);
		});
	})
	.catch((err) => console.log(err));
class Character {
	constructor(source, index) {
		this.name = source.name;
		this.birth = source.birth_year;
		this.height = source.height;
		this.mass = source.mass;
		this.gender = source.gender;
		this.eye = source.eye_color;
		this.skin = source.skin_color;
		this.hair = source.hair_color;
		this.id = index;
	}
	build(index) {
		let card = document.createElement('div');
		card.classList.add('card');
		document.body.append(card);

		let title = document.createElement('div');
		title.classList.add('title');
		title.textContent = `${this.name}`;
		card.append(title);

		let info = document.createElement('div');
		info.classList.add('info');
		info.textContent = `Character info`;
		card.append(info);

		let birth = document.createElement('p');
		birth.classList.add('birth');
		birth.textContent = `date of birth: ${this.birth}`;
		info.append(birth);

		let height = document.createElement('p');
		height.classList.add('height');
		height.textContent = `height: ${this.height}`;
		info.append(height);

		let mass = document.createElement('p');
		mass.classList.add('mass');
		mass.textContent = `mass: ${this.mass}`;
		info.append(mass);

		let gender = document.createElement('p');
		gender.classList.add('gender');
		gender.textContent = `gender: ${this.gender}`;
		info.append(gender);

		let eye = document.createElement('p');
		eye.classList.add('eye');
		eye.textContent = `eye color: ${this.eye}`;
		info.append(eye);

		let skin = document.createElement('p');
		skin.classList.add('skin');
		skin.textContent = `skin color: ${this.skin}`;
		info.append(skin);

		let hair = document.createElement('p');
		hair.classList.add('hair');
		hair.textContent = `hair color: ${this.hair}`;
		info.append(hair);

		let save = document.createElement('button');
		save.classList.add('save');
		save.setAttribute('id', index);
		save.textContent = `save`;
		info.after(save);
		// save data
		save.addEventListener('click', (e) => {
			results.forEach((elem) => {
				if (e.target.id == elem.id) {
					storage.push(elem);
					localStorage.setItem('chars', JSON.stringify(storage));
					save.textContent = `saved`;
					save.classList.add('saved');
					card.classList.add('card_saved');
				}
			});
		});
	}
}
