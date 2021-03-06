var $ = require('jquery');

module.exports = {
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        // Sort todos with non-completed first
        filteredTodos = filteredTodos.filter((todo) => {
            if (searchText.length === 0) {
                return true;
            } else {
                return todo.text.toLowerCase().includes(searchText.toLowerCase());
            }
        });

        return filteredTodos;
    }
}
