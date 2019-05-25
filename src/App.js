import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
	  super();
	  this.state = {
	  	count: 0
	 }
} 

	
  render() {
    return (
      <div>
        <span className="value">0</span>
        <button id="inc" onClick={this.addValue.bind(this)}>Incrementa</button>
      </div>
    );
  }

	addValue(){
		this.setState({
			count: this.state.count + 1
		});
	}
}

export default App;
