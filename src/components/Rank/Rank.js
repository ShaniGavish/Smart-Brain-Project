import React from 'react';
import './Rank.css';


const Rank = () => {
    return (
        <div className='rank-container'>
            <div>
                {'Shani, your current rank is...'}
            </div>
            <div id='rank-num'>
                {'#5'}
            </div>
        </div>
    );
}

export default Rank;
