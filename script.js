const link = "http://api.weatherstack.com/current?access_key=f982ebfb9deddf0e927ec524c39ae958";

const root = document.getElementById('root');

let store = {
    city: "Moscow",
    feelslike: 0,
    cloudcover: 0,
    temperature: 0,
    humidity: 0,
    observationTime: "00:00 AM",
    pressure: 0,
    uvIndex: 0,
    visibility: 0,
    isDay: "yes",
    description: "",
    windSpeed: 0,
}

const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`);
    const data = await result.json();

    const { 
        current: {
            feelslike, 
            cloudcover, 
            temperature, 
            humidity,
            observation_time:observationTime, 
            pressure,
            uv_index:uvIndex, 
            visibility,
            is_day:isDay,
            weather_descriptions:description,
            wind_speed:windSpeed 
        }, 
    } = data;
    
    store = {
        ...store,
        feelslike,
        cloudcover,
        temperature,
        humidity,
        observationTime,
        pressure,
        uvIndex,
        visibility,
        isDay,
        description:description[0],
        windSpeed
    }

    renderComponent();
};

const renderComponent = () => {
    root.innerHTML = `${store.temperature}°`;
};

fetchData();