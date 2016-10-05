var React = require('react');
var ReactDOM = require('react-dom');



var ToDoForm = React.createClass({
    getInitialState: function() {
        return {listItem: ''}
    },
    handleChange: function(event) {
        this.setState({listItem: event.target.value});
    },
    render: function(){
        return (
            <form>
                <input type='text' ref='item' onChange={this.handleChange} value={this.state.listItem}/>
                <input type='submit' value='Add'/>
            </form>
        );
    }
});

ReactDOM.render(
    <ToDoForm/>,
document.getElementById('app'));
