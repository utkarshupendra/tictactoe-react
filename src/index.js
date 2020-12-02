import React from 'react';
import ReactDOM from 'react-dom';
import Form from './forms'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  function Square(props) {
    console.log(props.value);
    console.log(props);
    return (
        <button className="square" 
        onClick={props.onClick}>
          {props.value}
        </button>
      );
  }
  function Test() {
    return (
      <h2 className="test">Test</h2>
    )
  }


  function Home() {
    return (
      <h2 className="test">Home</h2>
    )
  }

  function Test2() {
    return (
      <h2>Test2</h2>
    )
  }

  function Default() {
    return (<Router>
      <div>
        
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/test2">Test2</Link>
            </li>
          </ul>
        

        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/">
            <Form/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }

  class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    renderSquare(i) {
        console.log(this.state.squares);
        //console.log(this.state.squares[i]);
      return <Square value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />;
    }
  
    handleClick(i) {
        
        const squaresArray = this.state.squares.slice();
        if (calculateWinner(squaresArray) || squaresArray[i]) {
            return;    
        }
        squaresArray[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squaresArray,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;    
        if (winner) {
                  status = 'Winner: ' + winner;
        } else {
                  status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');    
        }  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Default />,
    document.getElementById('root')
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }