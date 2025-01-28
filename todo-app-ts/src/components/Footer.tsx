import React from "react";
import { Filters } from "./Filters";
import { type FilterValues } from "../types";

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValues
    onClearCompleted: () => void
    filterChange: (filter : FilterValues) => void
}

export const Footer: React.FC<Props> = ({
    activeCount ,
    completedCount ,
    onClearCompleted,
    filterSelected,
    filterChange
  }) => {
    const singleActiveCount = activeCount === 1
    const activeTodoWord = singleActiveCount ? 'tasks' : 'tasks'
  
    return (
      <footer className="footer">
  
        <span className="todo-count">
          <strong>{activeCount}</strong> {activeTodoWord} pendding{!singleActiveCount && 's'}
        </span>
  
        <Filters filterSelcted={filterSelected} filterChange={filterChange} />
  
        {
          completedCount > 0 && (
            <button
              className="clear-completed"
              onClick={onClearCompleted}>
                Delete completed
            </button>
          )
        }
      </footer>
    )
  }