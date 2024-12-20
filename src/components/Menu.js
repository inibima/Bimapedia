import React from 'react';

function Menu({ onCategoryChange }) {
    const categories = ['All', 'Devil May Cry', 'Mobile Legends: Bang Bang', 'God of War', 'Resident Evil'];

    return (
        <div className="menu">
            <div className="menu-logo">
                <h1>Bimapedia</h1>
            </div>
            <ul className="menu-list">
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onCategoryChange(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;