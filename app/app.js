var React = require('react');
var ReactDOM = require('react-dom');

var ToDoContainer = React.createClass({
   render: function() {
       return (
           <div className="toDoContainer">
               I am in the to do container!!!
               <ToDoInput />

               <ToDoList />

           </div>
       )
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
       return (
           <div>To Do List!!
                <ToDoListItem />
           </div>
       )
   }
});


var ToDoListItem = React.createClass({
    render: function() {
        return <div>ToDoListItem</div>
    }
});


ReactDOM.render(
    <ToDoContainer/>,
document.getElementById('app'));