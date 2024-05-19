document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('year').textContent = year;
    document.getElementById('lastModified').textContent = lastModified;

    const placeData = {
        area: '13,500 sq km',
        population: '38,140,000',
        capital: 'Tokyo',
        languages: 'Japanese',
        currency: 'yen',
        timezone: 'GMT+9',
        callingCode: '+81',
        internetTLD: '.tokyo',
        temperature: '27',
        conditions: 'Partly cloudy',
        wind: '2',
        windChill: calculateWindChill(27,17)
    };

    document.getElementById('area').textContent = placeData.area;
    document.getElementById('population').textContent = placeData.population;
    document.getElementById('capital').textContent = placeData.capital;
    document.getElementById('languages').textContent = placeData.languages;
    document.getElementById('currency').textContent = placeData.currency;
    document.getElementById('timezone').textContent = placeData.timezone;
    document.getElementById('calling-code').textContent = placeData.callingCode;
    document.getElementById('internet-tld').textContent = placeData.internetTLD;
    document.getElementById('temperature').textContent = placeData.temperature;
    document.getElementById('conditions').textContent = placeData.conditions;
    document.getElementById('wind').textContent = placeData.wind;
    document.getElementById('wind-chill').textContent = placeData.windChill;

    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 30 && windSpeed > 1) {
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return 'N/A';
        }
    };
});
