import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
	renderFilter (filter, name) {
		if (filter === this.props.filter) {
			return name;
		}

		return (
			<a href='#' onClick={e => {
				e.preventDefault();
				this.props.onFilterChange(filter);
			}}>
				{name}
			</a>
		);
	}

	fetchTodos (e) {
		e.preventDefault();
		if (this.props.status) {
			alert('받는 중..');
		}
		else {
			this.props.onFetchTodosClick();
		}
	}

	render () {
		return (
			<div>
				<p>{this.renderFilter('SHOW_ALL', '전체보기')} | {this.renderFilter('SHOW_COMPLETED', '완료보기')} | {this.renderFilter('SHOW_ACTIVE', '미완료보기')}</p>
				<p><a href="#" onClick={this.fetchTodos.bind(this)}>할일 가져오기</a></p>
			</div>
		);
	}
};

/*
Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'
	]).isRequired
};
*/
