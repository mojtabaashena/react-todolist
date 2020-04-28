import React, { Component } from 'react'
import Todoitem from './Todoitem.js'

class TodoEntry extends Component {
    render() { return(
        <div>
            <input type="text" class="form-control add-todo" placeholder="Add todo" />
            <button id="Add" class="btn btn-success">Add</button>
            <hr />
        </div>
    )
    }
}

export default TodoEntry
