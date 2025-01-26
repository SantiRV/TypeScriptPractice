import React from 'react';
import { type Todo as TodoType,type ListOfTodos } from '../types';
import { Todo } from './Todo';


interface TodosProps {
    todos: ListOfTodos;
    onRemoveTodo: (id: number) => void;
    onCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void;
};

export const Todos: React.FC<TodosProps> = ({todos, onRemoveTodo, onCompleteTodo}) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onCompleteTodo={onCompleteTodo}
                    />
                </li>
            ))}
        </ul>
    )
};