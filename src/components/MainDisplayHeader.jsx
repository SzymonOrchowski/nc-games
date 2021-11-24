import React from 'react';

const MainDisplayHeader = ({category}) => {
    console.log(category)
    return (
        <header className="main-display-header">
            List of {category.toLowerCase()} games reviews.
        </header>
    );
};

export default MainDisplayHeader;