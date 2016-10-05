var React = require('react');
var ReactDOM = require('react-dom');

var ToDoContainer = React.createClass({
   render: function() {
       return <div>Container</div>
   }
});

var ToDoInput = React.createClass({
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

var ToDoList = React.createClass({
   render: function() {
       return <div>ToDoList</div>
   }
});


var ToDoListItem = React.createClass({
    render: function() {
        return <div>ToDoListItem</div>
    }
});


ReactDOM.render(
    <ToDoInput/>,
document.getElementById('app'));