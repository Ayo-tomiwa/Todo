import React, { Component } from 'react';
import Todos from './Todoslist';
import Addtodo from './AddTodo';

class App extends Component {
  state={
    todos:[
      {id:1, content:"Buy a bottle of milk from the store"},
      {id:2, content:"Read a novel today"}
    ]
  }
  deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addtodo=(todo)=>{
    todo.id = Math.random()+1;
    const todos = [...this.state.todos, todo]
    this.setState({
        todos
    })
}
  render(){
    return(
      <div className="App-content container">
      <h1 className="center green-text">My Todo App</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <Addtodo addtodo={this.addtodo}/>
      </div>
    )
  }
}
export default App;