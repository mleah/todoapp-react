var React = require('react');

var ToDoInput = React.createClass({
    getInitialState: function() {
        return {inputText: ''}
    },

    handleChange: function(event) {
        this.setState({inputText: event.target.value});
    },

    handleSubmit: function(event) {
        event.preventDefault();
        var text = this.state.inputText;

        if (!text) return;

        this.props.onFormSubmit(text);
        this.setState({inputText: ''});
    },

    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='item' onChange={this.handleChange} value={this.state.inputText}/>
                <input type='submit' value='Add' />
            </form>
        );
    }
});

module.exports = ToDoInput;