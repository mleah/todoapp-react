var React = require('react');

var ToDoInput = React.createClass({
    getInitialState: function() {
        return {listItemText: ''}
    },

    handleChange: function(event) {
        this.setState({listItemText: event.target.value});
    },

    handleSubmit: function(event) {
        event.preventDefault();
        var text = this.state.listItemTest;

        if (!text) return;

        this.setState({listItemText: text});
    },

    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='item' onChange={this.handleChange} value={this.state.listItemText}/>
                <input type='submit' value='Add' />
            </form>
        );
    }
});

module.exports = ToDoInput;