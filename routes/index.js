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
        console.log(todos);
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
            const addToDoQuery = `INSERT INTO todos (date_added, text, completed, due_date, completed_on) 
                                    VALUES ($1, $2, $3, $4, $5)`;

            request.pg.client.query(addToDoQuery, [payload.dateAdded, payload.text, payload.completed, payload.dueDate, payload.completedOn], function() {

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
            let id = encodeURIComponent(request.params.id);
            const updateToDoQuery = `UPDATE todos
                                        SET completed = NOT completed, 
                                            completed_on = (CASE 
                                                WHEN completed = true THEN null 
                                                ELSE $1::TIMESTAMP WITH TIME ZONE 
                                            END) 
                                        WHERE id = $2`;

            const currentDay = getCurrentDay();

            request.pg.client.query(updateToDoQuery, [currentDay, id], function() {
                getTodosFromDb(request, reply);

            });
        }
    }
});


server.route({
    method: 'DELETE',
    path: '/api/todo/{id}',
    config: {
        handler: function(request, reply) {
            const id = encodeURIComponent(request.params.id);
            const deleteToDoQuery = `DELETE FROM todos WHERE id = $1`;

            request.pg.client.query(deleteToDoQuery, [id], function() {
                getTodosFromDb(request, reply);

            });
        }
    }
});

function getCurrentDay() {
    const now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}
