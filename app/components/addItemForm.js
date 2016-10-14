import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'


const {Grid, Row, Col} = require('react-flexbox-grid');


class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { errorText: ''};
    }

    handleChange(event) {
        this.setState({errorText: ""});
    }


    render() {
        let dateInput;

        const handleSubmit = event => {
            event.preventDefault();

            //may come back here later to use state instead of using refs
            let newDate = dateInput.refs.input.input.value;
            let newTodo = this.refs.todoInput.getValue();

            if (!newTodo.trim()) {
                this.setState({errorText: "This field is required"});
                return;
            }

            this.props.onAddTodo(newTodo, newDate);
            this.props.updateSorting(this.props.sortType);

            this.refs.todoInputForm.reset();
            dateInput.refs.input.input.value = '';
        };

        return (
            <Row className="formContainer">
                <form onSubmit={handleSubmit} ref="todoInputForm" className="addToDoForm">
                    <TextField
                        floatingLabelText="Enter your To Do here!"
                        errorText={this.state.errorText} className="todoInput" ref="todoInput" onChange={this.handleChange.bind(this)} />
                    <DatePicker id="date" floatingLabelText="Give your To Do a Date here!" shouldDisableDate={beforeCurrentDate} ref={node => {
                        dateInput = node
                    }}/>
                    <RaisedButton className="addTodoButton" type="submit">
                        Add To Do
                    </RaisedButton>
                </form>
            </Row>
        )
    }
}

const beforeCurrentDate = incomingDate => {
    let date = new Date();
    let yesterday = date.setDate(date.getDate()-1);
    return incomingDate <= yesterday;
};

AddItemForm.propTypes = {
    sortType: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    updateSorting: PropTypes.func.isRequired
};

export default AddItemForm