import React from 'react';
// Components
import CumulativeDisplay from '../cumulative-display/cumulative-display';
import Display from '../display/display';
import ButtonContainer from '../button-container/button-container';

import './calculator.css';

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cumulative: '0',
        display: '0',
        result: '',
        function: ''
      }
      this.handleClear = this.handleClear.bind(this);
      this.handleNumberClick = this.handleNumberClick.bind(this);
      this.handleFunctionClick = this.handleFunctionClick.bind(this);
      this.handleEqualsClick = this.handleEqualsClick.bind(this);
      this.handleDecimalClick = this.handleDecimalClick.bind(this);
    }
    handleClear() {
      this.setState ({
        cumulative: '0',
        display: '0',
        result: '',
        function: '',
      })
    }
    handleNumberClick(number) {
      this.setState ({
        cumulative: this.state.cumulative === 0 ? number : this.state.cumulative += number,
        display: /^[0\*\+\-\/\Xx]/.test(this.state.display) ? number : this.state.display += number
      })
      console.log(this.state.number)
    }
    handleFunctionClick(func, symbol) {
      var string = this.state.cumulative
      if (this.state.result) {
        this.setState ({
          cumulative: this.state.result += func,
          display: symbol,
          answer: '' 
        })
        } else if (this.state.function !== '-' && func === '-') {
          this.setState ({
            cumulative: this.state.cumulative += func,
            display: symbol,
            answer: '',
            function: func
          })
        } else {
        this.setState ({
          cumulative: /^[0\x\+\-\/]/.test(this.state.display) ? string.replace(/[\*\-\+\/]{1,}$/, func) : this.state.cumulative += func,
          display: symbol,
          answer: '',
          function: func
        })
      }
    }
    handleDecimalClick(decimal) {
      this.setState ({
        cumulative: /\./.test(this.state.display) ? this.state.cumulative : this.state.cumulative += decimal,
        display: /\./.test(this.state.display) ? this.state.display : this.state.display += decimal
      })
    }
    handleEqualsClick() {
      var result = eval(this.state.cumulative)
      this.setState ({
        cumulative: this.state.cumulative + '=' + result,
        display: result,
        result: result
        })
    }
    render() {
      return (
        <div className='calculator'>
          <CumulativeDisplay cumulative={this.state.cumulative} />
          <Display display={this.state.display} />
          <ButtonContainer 
            handleClear={this.handleClear}
            handleNumberClick={this.handleNumberClick}
            handleFunctionClick={this.handleFunctionClick}
            handleEqualsClick={this.handleEqualsClick}
            handleDecimalClick={this.handleDecimalClick}
          />
        </div>
      )
    }
  }

  export default Calculator;