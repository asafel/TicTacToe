import React, { Component } from 'react';
import Board from '../Board';

import './style.scss'

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: Array(9).fill(null),
      xTurn: true,
      turnNum: 1,
      message: 'Player X turn'
    }

    this.handleClick = this.handleClick.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.checkForWinner = this.checkForWinner.bind(this)
  }

  handleClick(i) {
    const { board, xTurn, turnNum, gameOver } = this.state
    if (!!board[i] || gameOver) return

    const newBoard = board
    newBoard[i] = xTurn ? 'X' : 'O'

    this.setState({
      board: newBoard,
      xTurn: !xTurn,
      turnNum: turnNum+1,
      gameOver: false,
      message: `Player ${xTurn ? 'O' : 'X'} turn`
    })

    if (this.checkForWinner() ) {
      this.setState({
        message: `We have a winner! good job player ${xTurn ? 'X' : 'O'}`,
        gameOver: true
      })
    } else if (turnNum === 9) {
      this.setState({
        message: 'We have a tie! Reset the game and try again',
        gameOver: true
      })
    }
  }

  checkForWinner() {
    const { board, xTurn } = this.state

    for (const row of winningConditions) {
      const [x, y, z] = row
      if (!!board[x] && board[x] === board[y] && board[x] === board[z])return true;     
    }

    return false;
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      xTurn: true,
      gameOver: false,
      turnNum: 1,
      message: 'Player X turn'
    })
  }

  render() {
    const { message, board } = this.state

    return (
      <div className='home-container'>
        <div className='home-header'>
          Asaf's Tic-Tac-Toe
        </div>

        <div className='turn-container'>
          {message}
        </div>

        <Board onClick={this.handleClick} board={board} />

        <div className='restart-btn' onClick={this.resetGame}>
          Reset game
        </div>

      </div>
    )
  }
}