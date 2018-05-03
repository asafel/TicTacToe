import React, { Component } from 'react';
import Square from '../Square';

import './style.scss';

export default ({ board, onClick }) => {
    
    const renderSquare = (i) => {
        return <Square value={board[i]} onClick={() => onClick(i)} />
    }

    return (
        <div className='board-container'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
