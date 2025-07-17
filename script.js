let list = document.getElementById('infi-list');
let itemCount = 10;

// Add initial list items
for (let i = 0; i < itemCount; i++) {
    let item = document.createElement('li');
    item.textContent = `Item ${i + 1}`;
    list.appendChild(item);
}

// Function to add more list items
function addMoreItems() {
    for (let i = 0; i < 2; i++) {
        let item = document.createElement('li');
        item.textContent = `Item ${itemCount + 1}`;
        list.appendChild(item);
        itemCount++;
    }
}

// Add event listener to the list scroll event
list.addEventListener('scroll', function() {
    if (list.scrollTop + list.offsetHeight >= list.scrollHeight) {
        addMoreItems();
    }
});
