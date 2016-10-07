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
            <div>
                <form onSubmit={handleSubmit}>
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

AddItemForm = connect()(AddItemForm);

export default AddItemForm