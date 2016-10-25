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


let todos;

const getTodosFromDb = (request, reply) => {
    request.pg.client.query('SELECT * FROM todos', function(error, result) {
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
};

server.route({
    method: 'GET',
    path: '/api',
    handler: getTodosFromDb
});

server.route({
    method: 'POST',
    path: '/api',
    config: {
        handler: function(request, reply) {
            const payload = JSON.parse(request.payload);
            const addToDoQuery = 'INSERT INTO todos (date_added, text, completed, due_date, completed_on) VALUES ($1, $2, $3, $4, $5)';

            request.pg.client.query(addToDoQuery, [payload.dateAdded, payload.text, payload.completed, payload.dueDate, payload.completedOn], function(error, result) {

                getTodosFromDb(request, reply);

            });
        }
    }
});

server.route({
    method: 'PUT',
    path: '/api/todo/{id}/toggleComplete',
    config: {
        handler: function(request, reply) {
            const id = encodeURIComponent(request.params.id);

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
            const id = encodeURIComponent(request.params.id);

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
