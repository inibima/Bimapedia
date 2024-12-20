import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [visitors, setVisitors] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedVisitors = localStorage.getItem('visitors');
        const initialVisitors = storedVisitors ? parseInt(storedVisitors, 10) : 0;
        setVisitors(initialVisitors);

        const newVisitorCount = initialVisitors + 1;
        setVisitors(newVisitorCount);
        localStorage.setItem('visitors', newVisitorCount);
    }, []);

    const handleExplore = () => {
        navigate('/articles');
    };

    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to Bimapedia</h1>
                <p>Discover the world of video game characters! Dive into detailed descriptions and explore the stories behind your favorite heroes and villains.</p>
                <button className="explore-button" onClick={handleExplore}>
                    Start Exploring
                </button>
            </div>
            <div className="visitor-count">
                <p>Total Visitors: {visitors}</p>
            </div>
        </div>
    );
}

export default Home;