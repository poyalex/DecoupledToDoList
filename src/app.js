import { useState, useEffect } from "react";
import TodoList from './components/TodoList/TodoList'
import Todo from './components/Todo/Todo'

const api = 'todoapi.alexanderjpoy.me'

export default function App() {
    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    const [newTodo, setNewTodo] = useState({title: '', completed: false})
    useEffect(() => {
        const getTodoAPI = async () => {
            try {
                const response = awaitfetch('todoapi.alexanderjpoy.me')
            } catch (error) {
                console.error(error)
            }
        }
    })
return(
    <>
        <TodoList/>
    </>
)

}

