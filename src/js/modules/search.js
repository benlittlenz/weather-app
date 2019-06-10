let location = 'Auckland';

const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $searchWrapper = document.querySelector('.search-wrapper');

const GEOCODE_KEY = 'AIzaSyDKYunPGZOTx70U-G5bj8oxjQvluZBDBeA';
const DARKSKY_KEY = 'de270f8c39e60f2cd01d6ba0065ce2f0';

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
        updateWeather(location);
        
        render();
    });
};

const updateWeather = async (query) => {
    const {lat, lng} = await getLatLng(location);
    console.log(lat,lng);
    console.log(await getWeatherData(lat, lng))
}

const getWeatherData = async (lat, lng) => {
    const reqLink = `https://api.darksky.net/forecast/${DARKSKY_KEY}/${lat},${lng}`
    const data = await fetch(reqLink);

    const parsed = await fetchData.json();
}

const getLatLng = async query => {
    const reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_KEY}`
    const data = await fetch(reqLink);
    const parsed = await data.json();

    const coords = {
        lat: parsed.results[0].geometry.location.lat,
        lng: parsed.results[0].geometry.location.lng
    }

    return coords;
}

const render = () => {
    $searchCity.innerHTML = location
}