import React from 'react';
import './style.scss';

export default ({value, onClick}) => {
    return(
        <div className='square' onClick={onClick}>
            {value || null}
        </div>
    );
}