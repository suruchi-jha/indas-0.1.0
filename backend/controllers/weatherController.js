import axios from 'axios';

// Get weather data for a location
export const getWeatherByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    
    // Using OpenWeatherMap API (you'll need to get an API key)
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    
    const weatherData = {
      location: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      timestamp: new Date()
    };
    
    res.status(200).json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error.response?.data || error.message);
    res.status(500).json({ 
      message: 'Error fetching weather data',
      error: error.response?.data || error.message
    });
  }
};