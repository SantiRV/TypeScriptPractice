import React from 'react';
import { type Todo as TodoType } from '../types';

interface TodoProps extends TodoType {
    onRemoveTodo: (id: string) => void;
    onCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void;
};

export const Todo: React.FC<TodoProps> = ({id, text, completed, onRemoveTodo, onCompleteTodo}) => {
    const  handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        onCompleteTodo({id, completed: e.target.checked});
    };

    return (
        <div className='view'>
            <input 
            className='toggle' 
            type='checkbox' 
            checked={completed} 
            onChange={handleChangeCheckbox}/>
            
            <label>{text}</label>
            
            <button 
            className='destroy'
            onClick={() => {onRemoveTodo(id)}}>

            </button>
        </div>
        
    )
}