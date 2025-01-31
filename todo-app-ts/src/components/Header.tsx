import React from "react";
import { CreateTodo } from "./CreateTodo";

interface TodosProps {
    addTodo: (text: string) => void
};

export const Header: React.FC<TodosProps> = ({addTodo}) => {
    return (
        <header className="header">
           
            <h1>todo
                <img
                style={{ width: '60px', height: 'auto' }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'></img>
            </h1>

            <CreateTodo addTodo={addTodo} />

        </header>
    )
}