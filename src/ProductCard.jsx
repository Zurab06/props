import React from 'react';
import Button from './Button';
function ProductCard({item}) {
    return (
        <div className='card'>
        <div className="card-image">
            <img src={item.image} alt={item.name}/>
        </div>
        <div className="card-info">
            <div className="card-name">{item.name}</div>
            <div className="card-price">{item.price} ₽</div>
        </div>
        <Button item={item}/> 
    </div>
    
    );
}

export default ProductCard;