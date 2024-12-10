// app/components/NewsCard.js

import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={news.imageUrl} alt={news.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.description}</p>
                    <a href={news.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;