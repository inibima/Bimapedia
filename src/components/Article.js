import React from 'react';
import '../styles.css'; // Ganti dengan path menuju styles.css

function Article({ title, content, image }) {
    return (
        <div className="article">
            <div className="article-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div className="article-image">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}

export default Article;