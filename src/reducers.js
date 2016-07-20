import * as types from './types';

function todosReducer (previousTodos = [], action) {
	switch (action.type) {
		case types.action.ADD_TODO:
			return [...previousTodos, {
					text: action.text,
					completed: false
				}];

		case types.action.ADD_TODOS:
			return [...previousTodos, ...action.todos.map(text => {
				return {
					text,
					completed: false
				};
			})];

		case types.action.COMPLETE_TODO:
			return previousTodos.map((todo, index) => {
				if (action.index === index) {
					return {
						text: todo.text,
						completed: !todo.completed
					};
				}
				else {
					return todo;
				}
			});

		default:
			return previousTodos;
	}
}

function filterReducer (previousFilter = types.filter.SHOW_ALL, action) {
	switch (action.type) {
		case types.action.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return previousFilter;
	}
}

function statusReducer (previousStatus = false, action) {
	switch (action.type) {
		case types.status.FETCHING:
			return true;
		case types.status.COMPLETE:
			return false;

		default:
			return previousStatus;
	}
}

//리듀서는 이전 state와 action을 받아 '새로운' state를 제공하는 순수함수다.
export default function todoApp (previousState = {}, action) {
	return {
		filter: filterReducer(previousState.filter, action),
		todos: todosReducer(previousState.todos, action),
		status: statusReducer(previousState.status, action)
	}
};
