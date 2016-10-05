var React = require('react');

var ToDoListItems = require('./ToDoListItem.js');

var ToDoList = React.createClass({


    render: function() {
        return (
            <ul>To Do List!!
                <ToDoListItems />
            </ul>
        )
    }
});

module.exports = ToDoList;