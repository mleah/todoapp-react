var React = require('react');
var ReactDOM = require('react-dom');
var ToDoInput = require('./components/ToDoInput.js')
var ToDoList = require('./components/ToDoList.js');


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


ReactDOM.render(
    <ToDoContainer/>,
document.getElementById('app'));