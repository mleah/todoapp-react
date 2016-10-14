import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'


class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let nameInput;
        let dateInput;

        const handleSubmit = event => {
            event.preventDefault();
            let newDate = dateInput.refs.input.input.value;

            if (!nameInput.value.trim()) {
                return;
            }

            this.props.onAddTodo(nameInput.value, newDate);
            this.props.updateSorting(this.props.sortType);
            nameInput.value = '';
            dateInput.refs.input.input.value = '';
        };

        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input className="todoInput" ref={node => {
                        nameInput = node
                    }} required/>
                    <DatePicker id="date" shouldDisableDate={beforeCurrentDate} ref={node => {
                        dateInput = node
                    }}/>
                    <RaisedButton className="addTodoButton" type="submit">
                        Add To Do
                    </RaisedButton>
                </form>
            </div>
        )
    }
}

const beforeCurrentDate = incomingDate => {
    var date = new Date();
    let yesterday = date.setDate(date.getDate()-1);
    return incomingDate <= yesterday;
};

AddItemForm.propTypes = {
    sortType: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    updateSorting: PropTypes.func.isRequired
};

export default AddItemForm