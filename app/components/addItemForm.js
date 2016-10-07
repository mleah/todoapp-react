import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions.js'

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let input
        const handleSubmit = event => {
            event.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            this.props.dispatch(addTodo(input.value));
            input.value = '';
        }
        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input className="todoInput" ref={node => {
                        input = node
                    }} />
                    <button className="addTodoButton" type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

AddItemForm = connect()(AddItemForm);

export default AddItemForm