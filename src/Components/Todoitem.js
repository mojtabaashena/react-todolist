import React, { Component } from 'react'

class Todoitem extends Component {

    render() {
        const { todo } = this.props

        return (
            <li class="ui-state-default">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="" />Take out the trash</label>
                </div>
                
            </li>
            )
    }
}

export default Todoitem