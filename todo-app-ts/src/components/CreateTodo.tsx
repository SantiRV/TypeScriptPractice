import React, { useState } from "react"


interface TodosProps {
    addTodo: (text: string) => void
}

export const CreateTodo: React.FC<TodosProps> = ({addTodo}) => {
    const [inputValue, setInputValue] = useState('')

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter' && inputValue !== '') {
            addTodo(inputValue)
            setInputValue('')
        }
    };

    return (
       
        <input 
        className="new-todo"
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
        onKeyDown={handleKeyDown}
        placeholder="add new task"
        autoFocus
        />
       
    )
}