const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000,
    routes: {
        cors: {
            origin: ['*']
        }
    }
});


const options = {
    info: {
        'title': 'Test API Documentation',
        'version': "1.0.0",
    }
};

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
    server.start( (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Server running at:', server.info.uri);
        }
    });
});


let todos = [
    {dateAdded: 1, text: "Learn React", completed: false, dueDate: "", completedOn: false},
    {dateAdded: 2, text: "Learn Redux", completed: true, dueDate: "2016-12-12", completedOn: "2016-10-10"},
    {dateAdded: 3, text: "Learn ES6", completed: false, dueDate: "2016-01-01", completedOn: false},
    {dateAdded: 4, text: "Learn typescript", completed: false, dueDate: "2016-12-01", completedOn: false},
    {dateAdded: 5, text: "Learn Node", completed: false, dueDate: "", completedOn: false},
    {dateAdded: 6, text: "Hello World", completed: true, dueDate: "2016-11-12", completedOn: "2016-10-11"},
    {dateAdded: 7, text: "Fizzbuzz", completed: true, dueDate: "2016-11-01", completedOn: "2016-10-13"},
    {dateAdded: 8, text: "bleep bloop", completed: true, dueDate: "2017-2-13", completedOn: "2016-10-13"},
    {dateAdded: 9, text: "foo", completed: true, dueDate: "2016-12-30", completedOn: "2016-10-13"},
    {dateAdded: 10, text: "bar", completed: false, dueDate: "2016-11-23", completedOn: false}
];

server.route({
    method: 'GET',
    path: '/api',
    handler: function(request, reply) {
        reply({ 'todos' : todos });
    }
});

server.route({
    method: 'POST',
    path: '/api',
    config: {
        handler: function(request, reply) {
            let payload = JSON.parse(request.payload);
            let newToDo = {
                dateAdded: payload["dateAdded"],
                text: payload["text"],
                completed: payload["completed"],
                dueDate: payload["dueDate"],
                completedOn: payload["completedOn"]

            };
            todos.push(newToDo);
            reply({ 'todos' : todos });
        }
    }
});

//POST method to add a new todoitem
//DELETE to delete a todoitem
