const API_KEY = "4236532ae5eb47dc8606c0e6253cb25f"; // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

export const fetchNews = async (category) => {
    const response = await fetch(`${BASE_URL}${API_KEY}&category=${category}`);
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles;
};

export const searchNews = async (query) => {
    const response = await fetch(`https ://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles;
};