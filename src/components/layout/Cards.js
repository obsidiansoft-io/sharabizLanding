import React from 'react'


const Cards = ({item}) => {
    return (

        <div className="cardStyles">
   <div className="dateCard">
       <p>
           step: {item.id}
       </p>
   <h3>
             {item.label}
   </h3>
   </div>
        </div>

    );
}

export default Cards;
