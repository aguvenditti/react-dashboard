import React from 'react';
import MainCard from './MainCard.js';


function CardCaller(props) {
    return (
        <div className="row">
            {props.items.map((item,i) => 
                <MainCard key={item+i} borderClass={item.borderClass} title={item.title} icon={item.icon} symbol={item.symbol} fetchUrl={item.fetchUrl} />
            )}
        </div>
    );
}

export default CardCaller;



