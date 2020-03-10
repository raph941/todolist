import React, { Component } from 'react'
import PropTypes from "prop-types"


export class TodoItem extends Component {
    getstyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.compleated?
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={ this.getstyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markCompleate.bind(this, id) } />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleate: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem
