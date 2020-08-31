import React from 'react';

import './button-container.css';

class ButtonContainer extends React.Component {
    render() {
      return (
        <div className='button-container'>
          <button 
            className='button a-c' 
            onClick={this.props.handleClear}
            id='clear'>
            A/C
          </button>
          <button 
            className='button button-light divide' 
            onClick={() => this.props.handleFunctionClick('/', '/')}
            id='divide'>
            /
          </button>
          <button 
            className='button button-light multiply' 
            onClick={() => this.props.handleFunctionClick('*','x')}
            id='multiply'>
            x
          </button>
          <button 
            className='button seven' 
            onClick={() => this.props.handleNumberClick('7')}
            id='seven'>
            7
          </button>
          <button 
            className='button eight' 
            onClick={() => this.props.handleNumberClick('8')}
            id='eight'>
            8
          </button>
          <button 
            className='button nine' 
            onClick={() => this.props.handleNumberClick('9')}
            id='nine'>
            9
          </button>
          <button 
            className='button button-light subtract' 
            onClick={() => this.props.handleFunctionClick('-', '-')}
            id='subtract'>
            -
          </button>
          <button 
            className='button four' 
            onClick={() => this.props.handleNumberClick('4')}
            id='four'>
            4
          </button>
          <button 
            className='button five' 
            onClick={() => this.props.handleNumberClick('5')}
            id='five'>
            5
          </button>
          <button 
            className='button six' 
            onClick={() => this.props.handleNumberClick('6')}
            id='six'>
            6
          </button>
          <button 
            className='button button-light add' 
            onClick={() => this.props.handleFunctionClick('+', '+')}
            id='add'>
            +
          </button>
          <button 
            className='button one' 
            onClick={() => this.props.handleNumberClick('1')}
            id='one'>
            1
          </button>
          <button 
            className='button two' 
            onClick={() => this.props.handleNumberClick('2')}
            id='two'>
            2
          </button>
          <button 
            className='button three' 
            onClick={() => this.props.handleNumberClick('3')}
            id='three'>
            3
          </button>
          <button 
            className='button equals'
            onClick={this.props.handleEqualsClick}
            id='equals'>
            =
          </button>
          <button 
            className='button zero' 
            onClick={() => this.props.handleNumberClick('0')}
            id='zero'>
            0
          </button>
          <button 
            className='button decimal' 
            onClick={() => this.props.handleDecimalClick('.')}
            id='decimal'>
            .
          </button>
        </div>
      )
    }
  }

  export default ButtonContainer;