import React, { Component, PropTypes } from 'react';
import * as actionCreator from '../actionCreator';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
	constructor (props) {
		super(props);

		this.onFetchTodosClick = () => {
			//먼저 fetching 을 시작했다는 액션을 dispatch
			this.props.dispatch(actionCreator.fetching());

			//5초의 딜레이 후에 fetching 을 수행
			return this.props.dispatch(actionCreator.addTodos(new Promise((resolve, reject) => {
				setTimeout(() => {
					fetch('/todo.json')
					.then(response => response.json())
					.then(result => resolve(result))
					.catch(error => reject(error))
					.then(() => {
						//완료되면 complete 되었다는 액션을 dispatch
						this.props.dispatch(actionCreator.complete());
					})
				}, 5000);
			})));
		};
	}

	render () {
		//redux로부터 주입받는 속성
		const { dispatch, todos, filter, status } = this.props;

		return (
			<div>
				<AddTodo
					//자식 요소에 핸들러 전달
					onAddClick={text => dispatch(actionCreator.addTodo(text))}
				/>

				<TodoList
					//자식 요소에 todos 배열 전달
					todos={todos}
					//자식 요소에 핸들러 전달
					onTodoClick={index => dispatch(actionCreator.completeTodo(index))}
				/>

				<Footer
					//자식 요소에 filter 전달
					filter={filter}
					status={status}
					//자식 요소에 핸들러 전달
					onFilterChange={selectedFilter => dispatch(actionCreator.setFilter(selectedFilter))}
					onFetchTodosClick={this.onFetchTodosClick}
				/>
			</div>
		);
	}
};

/*
App.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})),
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
};
*/
