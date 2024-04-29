const API_KEY = "cad993ca3c83429091f70225242804";

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no=`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default fetchData;