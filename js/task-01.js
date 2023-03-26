const listItems = document.querySelectorAll("#categories li.item");
const listLength = listItems.length;
console.log(`Number of categories: ${listLength}`);

listItems.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});