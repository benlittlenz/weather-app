let location = 'Auckland';

const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $searchWrapper = document.querySelector('.search-wrapper');

export const initSearch = () => {
    listeners();
}

const listeners = () => {
    $searchForm.addEventListener('submit', event => {
        event.preventDefault();
        $searchInput.classList.toggle('search__input--open');
        $searchInput.focus();

        if($searchInput.value === '') return;
        
        location = $searchInput.value;
        $searchInput.value = '';
        render();
    });
}

const render = () => {
    $searchCity.innerHTML = location
}