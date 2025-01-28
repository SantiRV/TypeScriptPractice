import React, { useState } from "react"
import { TodoText } from "../types"

interface TodosProps {
    addTodo: ({text}: TodoText) => void
}

export const CreateTodo: React.FC<TodosProps> = ({addTodo}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        addTodo({text: inputValue})
        setInputValue('')
    }

    return (
       <form onSubmit={handleSubmit}>
        <input 
        className="new-todo"
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
        onKeyDown={() => {}}
        placeholder="add new task"
        autoFocus
        />
       </form>
    )
}