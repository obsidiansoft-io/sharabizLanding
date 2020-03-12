import React, { useState } from 'react';

import Cards from './Cards';

const CardsCollection = () => {

    const items = [
        { id: 1, label: 'Download the app' },
        { id: 2, label: 'Open it' },
        { id: 3, label: 'Create your free account' },
        { id: 4, label: 'Watch the short introductory video' },
        { id: 5, label: 'Click on “Create a Bizcard” and do as you saw in the video.' },
        { id: 6, label: 'Start sharing your bizcard' },

    ];


    return (

        <div className="cardCollctionContainer">
            
            {
                items.map(item => (
                    <Cards
                        key={item.id}
                        item={item}
                    />

                ))
            }
        </div>

    );
}

export default CardsCollection;
