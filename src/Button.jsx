import React from 'react';

function Button({item}) {
  
    return (
        <div className='card-button'>
            <button className='btn' disabled = {!item.bought}>
                {item.bought ? "купить" : "нет в наличии"}
            </button>
        </div>
    );
}

export default Button;
