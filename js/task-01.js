// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll('.item');

function getNumberOfCategories(categories) {
  return categories.length;
}

console.log('Number of categories:', getNumberOfCategories(categories));

// console.log(categories);

const item = [...categories];
// console.log(item);
item.forEach((item, index) => {
  const category = item.querySelector('h2');
  const elements = item.querySelectorAll('ul li').length;

  console.log('\nCategory:', category.textContent);
  console.log('Elements:', elements);
});