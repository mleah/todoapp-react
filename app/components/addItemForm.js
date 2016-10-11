import React, { PropTypes } from 'react'


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
            this.props.onAddTodo(nameInput.value, dateInput.value);
            this.props.updateSorting(this.props.sortType);
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

AddItemForm.propTypes = {
    sortType: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    updateSorting: PropTypes.func.isRequired
};

export default AddItemForm