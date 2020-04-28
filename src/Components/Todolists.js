import React, { Component } from 'react'
import Todoitem from './Todoitem'
import TodoEntry from './TodoEntry'

class Todolists extends Component {

    render() {
        return (<div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="todolist not-done">
                        <h1>Todos</h1>
                        <TodoEntry />
                        <ul id="sortable" class="list-unstyled">
                            <Todoitem />
                            <Todoitem />
                        </ul>
                        <div class="todo-footer">
                            <strong><span class="count-todos">9</span></strong> Items Left
							 <a class="count-todos">All</a>
                            <a class="count-todos">Active</a> 
                            <a class="count-todos">Complited</a>
						</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="todolist">
                        <h1>Already Done</h1>
                        <ul id="done-items" class="list-unstyled">
                            <li>Some item <button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Todolists