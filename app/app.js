var React = require('react');
var ReactDOM = require('react-dom');
var ToDoInput = require('./components/ToDoInput.js')
var ToDoList = require('./components/ToDoList.js');


var prefilledToDoItems = [
    {id: 1, itemText: "I am the first item", isCompleted: false},
    {id: 2, itemText: "I am the second item", isCompleted: false},
    {id: 3, itemText: "I am the third item", isCompleted: false},
];

var idIncrementer = 4;


var ToDoContainer = React.createClass({
    getInitialState: function() {
        return {
            ToDoItemArray: prefilledToDoItems
        }
    },
    updateToDoList: function(newItemText) {
        var newToDoItem = {id: idIncrementer++, itemText: newItemText, isCompleted: false};
        var listArray = this.state.ToDoItemArray;

        listArray.push(newToDoItem);
        this.setState({ToDoItemArray: listArray});
    },
    render: function() {
       return (
           <div className="toDoContainer">
               I am in the to do container!!!
               <ToDoInput onFormSubmit={this.updateToDoList}/>

               <ToDoList />

           </div>
       )
   }
});


ReactDOM.render(
    <ToDoContainer/>,
document.getElementById('app'));