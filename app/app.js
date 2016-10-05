var React = require('react');
var ReactDOM = require('react-dom');
var ToDoInput = require('./components/ToDoInput.js')
var ToDoList = require('./components/ToDoList.js');


var prefilledToDoItems = [
    {id: 1, itemText: "I am the first item", isCompleted: false},
    {id: 2, itemText: "I am the second item", isCompleted: false},
    {id: 3, itemText: "I am the third item", isCompleted: false},
];


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