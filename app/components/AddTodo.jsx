var React = require('react');

var AddTodo = React.createClass({
    propTypes: {
        onAddTodo: React.PropTypes.func.isRequired
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }
        this.refs.todoText.focus();
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What do you need to do?" ref="todoText"/>
                    <button className="button expanded primary">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;