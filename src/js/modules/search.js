let location = 'Auckland';

const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $searchWrapper = document.querySelector('.search-wrapper');

const GEOCODE_KEY = 'AIzaSyDKYunPGZOTx70U-G5bj8oxjQvluZBDBeA';

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
        getLatLng(location);
        render();
    });
}

const getLatLng = async query => {
    const reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_KEY}`
    const data = await fetch(reqLink);
    const parsed = await data.json();
    
    const Latitude = parsed.results[0].geometry.location.lat;
    const Longitude = parsed.results[0].geometry.location.lng;
}

const render = () => {
    $searchCity.innerHTML = location
}