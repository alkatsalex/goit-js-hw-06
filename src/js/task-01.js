//Створення перемінної для доступа до списків категорій
const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

// Перебор списків для отрімання назви та довжини списку
categories.forEach(function (categorie, index) {
    const categorieTitle = categorie.firstElementChild;
    console.log(`Category: ${categorieTitle.textContent}`);

    const categorieLenght = categorie.querySelectorAll(`li`);
    console.log(`Elements: ${categorieLenght.length}`);
});
