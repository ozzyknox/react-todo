import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;
        if (todoText.length) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText));
        }
        this.refs.todoText.focus();
    }

    render () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What do you need to do?" ref="todoText"/>
                    <button className="button expanded primary">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);