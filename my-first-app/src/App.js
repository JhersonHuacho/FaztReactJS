import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';

console.log(todos);

class App extends Component {
  constructor() {
    super(); // para heredar toda la funcionalidad que nos trael el componente(Component) de React
    this.state = {
      // title : 'Aplicación de Tareas',
      // ntareas : 10
      // todos : todos
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos : [...this.state.todos, todo]
    });
  }

  handleRemoveTodo(index) {
    console.log(index);
    // para trabajar con eventos propios del navegador tenemos que agregar "window"
    // de esta manera REACT sabe que ese evento viene del propio navegador.
    if (window.confirm('Are you sure you want to delete it?')) { 
      this.setState({
        todos : this.state.todos.filter((todo, i) => i !== index)
      });
    }    
  }

  render() {
    console.log("Antes de renderizar el componente");
    console.log(this.state.todos);

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4"> 
            <div className="card-header">
              <h3>{todo.title}</h3> 
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>      
              <p><mark>{todo.responsible}</mark></p>        
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveTodo.bind(this, i)}> Delete </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">        
        {/* <Navigation titulo = "Mi primera navegación" />
        <Navigation titulo = "Mi segunda navegación" /> */}
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            {/* {this.state.title} - {this.state.ntareas} */}            
            Task
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>  
        
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />  
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row">
                { todos }
              </div>              
            </div>            
          </div>          
        </div>         

      </div>
    );
  }
}

export default App;
