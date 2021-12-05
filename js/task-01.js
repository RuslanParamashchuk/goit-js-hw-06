const getGetelementItem = document.
    querySelectorAll('.item');
console.log(`categories: ${getGetelementItem.length}`)

getGetelementItem.forEach(element => {
    const getElementTitle = element.
        querySelector('h2');
    const getElementLi = element.
        querySelectorAll('li');
    console.log(`Category: ${getElementTitle.textContent}`);
    console.log(`categories: ${getElementLi.length}`)
})