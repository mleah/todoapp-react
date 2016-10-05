var React = require('react');


var ToDoListItems = React.createClass({
    render: function() {
        return <div>{this.props.item.itemText}</div>
    }
});

module.exports = ToDoListItems;