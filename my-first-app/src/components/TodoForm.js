import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title : '',
      responsible : '',
      description : '',
      priority : 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    console.log("writing...");
    console.log(e.target.value, e.target.name);
    
    const { value, name } = e.target;
    this.setState({
      [name] : value
    });

    console.log(this.state);
  }  

  handleSubmit(e) {    
    e.preventDefault(); //=> para que no se recargue la pantalla
    console.log("sending the data...");
    console.log(this.state);    
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="title" className="form-control" onChange={this.handleInput} placeholder="Title" />
          </div>
          <div className="form-group">
            <input type="text" name="responsible" className="form-control" onChange={this.handleInput} placeholder="Responsible" />
          </div>
          <div className="form-group">
            <input type="text" name="description" className="form-control" onChange={this.handleInput} placeholder="Description" />
          </div>
          <div className="form-group">
            <select name="priority" className="form-control" onChange={this.handleInput}>
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>            
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )      
  }
}

export default TodoForm;

