import React from 'react';
import { type Todo as TodoType } from '../types';

interface TodoProps extends TodoType {
    onRemoveTodo: (id: number) => void;
    onCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void;
};

export const Todo: React.FC<TodoProps> = ({id, text, completed, onRemoveTodo, onCompleteTodo}) => {
    return (
        <div className='view'>
            <input 
            className='toggle' 
            type='checkbox' 
            checked={completed} 
            onChange={(e) => {onCompleteTodo({id, completed: e.target.checked})}}/>
            
            <label>{text}</label>
            
            <button 
            className='destroy'
            onClick={() => {onRemoveTodo(id)}}>

            </button>
        </div>
        
    )
}