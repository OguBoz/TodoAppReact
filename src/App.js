import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';



class App extends Component {
  state = {
    todos: ["fsdaf", "fsfsd"]
  }

  onFormSubmit = (text) => {
    let arr = [...this.state.todos];
    arr.push(text);
    this.setState({
      todos: arr
    });
  }

  handleDelete = (id) => {
    let arr = [...this.state.todos];
    arr.splice(id, 1);
    this.setState({
      todos: arr
    });
  }

  render() {
    return (
      <div className='wrapper'>
      <div className='card frame'>
        <Header number={this.state.todos.length}/>
        <TodoList todos={this.state.todos} handleDelete = {this.handleDelete}/>
        <Form onFormSubmit={this.onFormSubmit} />
      </div>
    </div>
    );
  }
}

export default App;
