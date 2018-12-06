import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      input: '',
    }
  }
  
  handleEnter = (e) => {
    let {input} = this.state
    if(e.key === 'Enter' ){
      axios.post(`/messages?message=${input}`).then(resp => {
        console.log(resp)
        this.setState({
          messages: resp.data,
          input: ''
        })
      })
    }
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const {input, messages} = this.state
    console.log(input)
    return (
      <div className="App">

        <input value={input} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
        {messages.map((message, i) => <p key={i}>{message.message}</p>)}
      </div>
    );
  }
}

export default App;
