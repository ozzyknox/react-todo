var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.toggleShowCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo', () => {
            var todos = [{
                id: 11,
                text: 'Test features',
                completed: false,
                createdAt: 60,
                completedAt: undefined
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            };
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toBeGreaterThan(0);

            // action = {
            //     type: 'TOGGLE_TODO',
            //     id: 11
            // };
            // res = reducers.todosReducer(df(todos), df(action));
            // expect(res[0].completed).toEqual(false);
            // expect(res[0].completedAt).toEqual(undefined);
        });
    });
});