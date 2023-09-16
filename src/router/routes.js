import Todo from "../components/ToDo/Todo";
import TodoList from "../components/ToDoList/TodoList";

const routes = [
	{
		Component: Todo,
		key: 'Todo',
		path: '/'
	},
	{
		Component: TodoList,
		key: 'TodoList',
		path: '/'
	},
];

export default routes;
