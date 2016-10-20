import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoListActions.js'
import AddItemForm from './addItemForm.js'


const mapStateToProps = (state) => {
    return {
        sortType: state.currentSort
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (text, dueDate) => {
            dispatch(addTodo(text, dueDate))
        }
    }
};

const AddItemFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemForm);

export default AddItemFormContainer