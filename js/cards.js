const cards = document.querySelectorAll('.app-card');
const cardsContainer = document.querySelector('.app-list__body');
const filterPrice = document.querySelector('[name="price"]');
const filterCategory = document.querySelector('[name="category"]');

function applyFilters() {
    const selectedCategory = filterCategory.value;
    const selectedPrice = filterPrice.value;

    cardsContainer.innerHTML = '';

    cards.forEach(card => {
        const categoryMatch = selectedCategory === 'Все' || card.querySelector('.categ').innerHTML === selectedCategory;
        const priceMatch = selectedPrice === 'Все' || card.querySelector('.pric').innerHTML === selectedPrice;

        if (categoryMatch && priceMatch) {
            cardsContainer.appendChild(card);
        }
    });
}

filterCategory.addEventListener('change', applyFilters);
filterPrice.addEventListener('change', applyFilters);