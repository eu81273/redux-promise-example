//액션 타입 상수
export const action = {
	ADD_TODO: 'ADD_TODO',
	ADD_TODOS: 'ADD_TODOS',
	COMPLETE_TODO: 'COMPLETE_TODO',
	SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export const status = {
	FETCHING: 'FETCHING',
	COMPLETE: 'COMPLETE'
}

//그밖의 상수 (여기에서는 할일 보여주기 방식)
export const filter = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};
