import React, { Component } from 'react';
import Todos from './components/Todos/Todos';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'izaan'
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => this.setState({todos: json}))
      .catch(err => this.setState({todos: []}));
  }
  render() {
    console.log(this.state.todos);
    console.log('state changed');
    return (
      <div className="App">
        <Header />
        <div className="container">
          <h1 className="text-center">Todo List</h1>
          <Todos todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
