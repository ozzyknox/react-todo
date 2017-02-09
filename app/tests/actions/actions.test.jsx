import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate setSearchText action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate addTodo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: 'sa121',
                text: 'A todo thing',
                completed: false,
                createdAt: 0
            }
        };
        var res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate add todos action object', () => {
        var todos = [{
            id: 111,
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(action.todos);

        expect(res).toEqual(action);
    })

    it('should generate toggleShowCompleted action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 1001,
            updates: {completed: false}
        };
        var res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        var testTodoRef;
        var initialTodo = {
            text: 'Something to do',
            completed: false,
            createdAt: 976987
        };

        beforeEach((done) => {
            var todosRef = firebaseRef.child('todos');
            todosRef.remove().then(() => {
                testTodoRef = firebaseRef.child('todos').push();
                testTodoRef.set(initialTodo);
            })
            .then(() => done())
            .catch(done);
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({});
            const action = actions.startAddTodos();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('Add_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions[0]).toEqual(initialTodo.text);
                // expect(mockActions[0]).toInclude({
                //     ...initialTodo
                // });

                done();
            }, done);
        });
    });
});