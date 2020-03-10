import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  state = {
      title: ''
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' }) //set the input field back to nothing
       
  }

  onChange = (e) => this.setState({  [e.target.name]:e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <input type="text" name="title" placeholder="Add Todo ..." 
            style={{ flex:'10', padding: '5px', width: '90%' }}    
            value={this.state.title} onChange={this.onChange}
        />

        <input type="submit" value="Submit" className="btn"
            style={{ flex: '1', width: '10%' }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

 