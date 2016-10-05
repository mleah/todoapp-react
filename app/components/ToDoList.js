var React = require('react');

var ToDoListItem = require('./ToDoListItem.js');

var ToDoList = React.createClass({
    render: function() {
        return (
            <div>To Do List!!
                <ToDoListItem />
            </div>
        )
    }
});

module.exports = ToDoList;