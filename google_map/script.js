let map;

async function initMap() {
  const zoom =10;  
  const  center= { lat: 21.485811, lng: 39.192505};
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("mapContainer"), {center,zoom, disableDefaultUI: true,});
}
window.initMap = initMap;

const API_KEY='33271aedfcmsh934dff3c451d234p17d316jsnc948f41350dd'
const fetchContries = async ()=>{
    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10&offset=40';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':API_KEY ,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    }
    
    const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data);
}
fetchContries()


const fatchHotels = async ()=>{
        const url = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=jeddah';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    }
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
}

fatchHotels()