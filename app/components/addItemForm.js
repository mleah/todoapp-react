import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions.js'

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let nameInput;
        let dateInput;

        const handleSubmit = event => {
            event.preventDefault();
            if (!nameInput.value.trim()) {
                return;
            }
            this.props.dispatch(addTodo(nameInput.value, dateInput.value));
            nameInput.value = '';
            dateInput.value = '';
        };

        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input className="todoInput" ref={node => {
                        nameInput = node
                    }} required/>
                    <input type="date" ref={node => {
                        dateInput = node
                    }}/>
                    <button className="addTodoButton" type="submit">
                        Add To Do
                    </button>
                </form>
            </div>
        )
    }
}

AddItemForm = connect()(AddItemForm);

export default AddItemForm