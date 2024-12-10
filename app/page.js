import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { fetchNews, searchNews } from '../utils/api';

const Home = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('general');

    useEffect(() => {
        const loadNews = async () => {
            setLoading(true);
            try {
                const news = await fetchNews(category);
                setNewsData(news);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadNews();
    }, [category]);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const query = e.target.newsQuery.value;
        if (query) {
            setLoading(true);
            try {
                const news = await searchNews(query);
                setNewsData(news);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <Navbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
            <div className="container-fluid">
                <div className="row m-3">
                    {loading ? (
                        <h5>Loading...</h5>
                    ) : (
                        newsData.map((news, index) => <NewsCard key={index} news={news} />)
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;