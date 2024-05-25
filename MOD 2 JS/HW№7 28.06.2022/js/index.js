//Завдання №3-4

// 2. Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
// При вызове функция должна спросить у вызывающего имя и фамилию.
// Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
// Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
// Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.

// 3. Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.

// Возьмите выполненное задание выше (созданная вами функция createNewUser()) и дополните ее следующим функционалом:

// При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
// Создать метод getAge() который будет возвращать сколько пользователю лет.
// Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре,
// соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).

// Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.

class newUser {
	constructor(name, lastName, birthday) {
		this.name = name;
		this.lastName = lastName;
		this.birthday = birthday;
	}
	createNewUser() {
		this.name = prompt('Enter your name');
		this.lastName = prompt('Enter your last name');
		this.birthday = prompt(" Enter your date of birth in the format - 'dd.mm.yyyy'");
	}

	getLogin() {
		const firstLetter = this.name.toLowerCase().split('').slice(0, 1).join('');
		return `${firstLetter + this.lastName.toLowerCase()}`;
	}

	getAge() {
		const getBirthYear = this.birthday.split('').slice(-4).join('');
		console.log(getBirthYear);
		const convertYear = Number(getBirthYear);
		const currentYear = 2022;
		return currentYear - convertYear;
	}

	getPassword() {
		const firstLetter = this.name.toUpperCase().split('').slice(0, 1).join('');
		return `${firstLetter + this.lastName.toLowerCase() + this.birthday.split('').slice(-4).join('')}`;
	}
}

const firstUser = new newUser('Json', 'S');

const loginUser = firstUser.getLogin();

console.log(loginUser);

const secondUser = new newUser();

secondUser.createNewUser();

console.log(secondUser);

const loginCustomUser = secondUser.getLogin();
const calcAge = secondUser.getAge();
const createPassword = secondUser.getPassword();

console.log(loginCustomUser);
console.log(calcAge);
console.log(createPassword);
