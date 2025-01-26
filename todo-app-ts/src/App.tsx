import  React,{ useState } from 'react';
import {Todos} from './components/Todos';
import {  type Todo as TodoType } from './types';

const mockTodos = [
  {
    id: 1,
    text: 'Learn React',
    completed: true,
  },
  {
    id: 2,
    text: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 3,
    text: 'Learn Redux',
    completed: true,
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemoveTodo = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleteTodo = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className='todoapp'>
      <Todos 
      onCompleteTodo={handleCompleteTodo}
      onRemoveTodo={handleRemoveTodo} 
      todos={todos} />
    </div>
  )
}

export default App
