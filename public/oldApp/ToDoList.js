var React = require('react');

var ToDoListItems = require('./ToDoListItem.js');

var ToDoList = React.createClass({
    render: function() {
        var toDoElements = this.props.listItemArray.map(function(toDoItem) {
            return <ToDoListItems item={toDoItem} key={toDoItem.dateAdded}/>
        });

        return (
            <div>
                {toDoElements}
            </div>
        )
    }
});

ToDoList.propTypes = {
    listItemArray: React.PropTypes.array.isRequired
}

module.exports = ToDoList;