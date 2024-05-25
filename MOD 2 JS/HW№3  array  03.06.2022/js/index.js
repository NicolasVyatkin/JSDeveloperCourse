
const music = ['Джаз', 'Блюз'];
document.write(`<div class="text">Початковий масив <br> ${music.join(' &#127927 ')} </div> <br>`);


/** Додавання елементу в кінць масиву */

music.push('Рок-н-ролл') + document.write(`<div class="text">Додавання елементу в кінць масиву <br> ${music.join(' &#127928 ')} </div> <br>`);

/** Заміна 1-го індексу масиву */

music.splice(1, 1) + music.splice(1, 0, 'Классика') + document.write(`<div class="text">Заміна 1-го індексу масиву <br> ${music.join(' &#127931 ')} </div> <br>`);

/** Видалення першого елементу масиву */

document.write(`<div class="text">Видалення першого елементу масиву <br> ${music.shift()} </div> <br>`);

/** Додавання 2-х елементів в початок масиву */

music.splice(0, 0, 'Рэп', 'Регги') + document.write(`<div class="text">Додавання 2-х елементів в початок масиву <br> ${music.join(' &#127908 ')} </div> <br>`);


