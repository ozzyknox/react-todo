var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (error) { }

        return $.isArray(todos) ? todos : [];
    }
}

//  [{id: uuid(), text: 'Walk the dog', completed: false}, 
// {id: uuid(), text: 'Clean the yard', completed: true}, 
// {id: uuid(), text: 'Take the kids to school', completed: true}, 
// {id: uuid(), text: 'Pay the rent', completed: false}]