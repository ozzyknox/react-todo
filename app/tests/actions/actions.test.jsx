var expect = require('expect');
var actions = require('actions');

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
            text: 'A todo thing'
        };
        var res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('should generate toggleShowCompleted action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate toggleShowTodo action', () => {
        var action = {
            type: 'TOGGLE_SHOW_TODO',
            id: 1001
        };
        var res = actions.toggleShowTodo(action.id);

        expect(res).toEqual(action);
    });    
});