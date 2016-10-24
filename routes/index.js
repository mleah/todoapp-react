const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const server = new Hapi.Server();
const databaseSecret  = require('./secret.js');

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
    },
    {
        register: require('hapi-node-postgres'),
        options: {
            connectionString: databaseSecret,
            native: true
        }
    }
    ], () => {
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
        request.pg.client.query('SELECT * FROM todos', function(error, result) {
           console.log(result);
            todos = result.rows.map( (todo) => {
                return {
                    id: todo.id,
                    dateAdded: todo.date_added,
                    text: todo.text,
                    completed: todo.completed,
                    dueDate: todo.due_date,
                    completedOn: todo.completed_on
                }
            });
            reply({ 'todos' : todos });
        });
    }
});

server.route({
    method: 'POST',
    path: '/api',
    config: {
        handler: function(request, reply) {
            let payload = JSON.parse(request.payload);
            let newToDo = {
                id: payload["dateAdded"],
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

server.route({
    method: 'PUT',
    path: '/api/todo/{id}/toggleComplete',
    config: {
        handler: function(request, reply) {
            let id = encodeURIComponent(request.params.id);

            todos = todos.map((todo) => {
                if (todo.id == id) {
                    return Object.assign({}, todo, {
                        completedOn: !todo.completed ? getCurrentDay() : false,
                        completed: !todo.completed
                    })
                }
                return todo
            });
            reply({ 'todos' : todos });
        }
    }
});

server.route({
    method: 'DELETE',
    path: '/api/todo/{id}',
    config: {
        handler: function(request, reply) {
            let id = encodeURIComponent(request.params.id);

            todos = todos.filter(todo => todo.id != id);
            reply({ 'todos' : todos });
        }
    }
});

function getCurrentDay() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;

    if(mm<10) mm='0'+mm;

    return yyyy + "-" + mm + "-" + dd;
}
