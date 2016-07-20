import * as types from './types'

//액션 생성자
//액션은 무언가 일어난다는 사실을 기술한다.
//액션 생성자는 액션을 만드는 함수로 순수 함수로 구성된다.
export function addTodo (text) {
	return {
		type: types.action.ADD_TODO,
		text
	};
};

export function addTodos (thenable) {
	return thenable.then(function (todos) {
		return {
			type: types.action.ADD_TODOS,
			todos
		};
	});
};

export function fetching () {
	return {
		type: types.status.FETCHING
	};
};

export function complete () {
	return {
		type: types.status.COMPLETE
	};
};

export function completeTodo (index) {
	return {
		type: types.action.COMPLETE_TODO,
		index
	};
};

export function setFilter (filter) {
	return {
		type: types.action.SET_VISIBILITY_FILTER,
		filter
	};
}
