import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{
			todos.map((todo, id) => 
				<Todo
					key = { id }
					{...todo}
					onClick = {() => onTodoClick(id)}
				/>
			)
		}
	</ul>
);

TodoList.propTypes = {
	todos : PropTypes.arrayOf(
		PropTypes.shape({
			completed : PropTypes.bool.isRequired,
			text : PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick : PropTypes.func.isRequired
};

export default TodoList;