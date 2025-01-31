import  React,{ useState } from 'react';
import {Todos} from './components/Todos';
import {  type FilterValues, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './const';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Copyright } from './components/Copyright';

const mockTodos = [
  {
    id: '7b6d5f38-e510-4409-aeb0-1f6f6422384e',
    text: 'Learn React',
    completed: true,
  },
  {
    id: 'efad0afc-7d2e-4020-8ef4-14fd0b832de8',
    text: 'Learn TypeScript',
    completed: false,
  },
  {
    id: "6a3d0d0f-d2d6-4d2a-9b08-5a5d8a5e0c1d",
    text: 'Learn Redux',
    completed: true,
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelcted, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL)

  const handleRemoveTodo = (id: string): void => {
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

  const handleFilterChange = (filter: FilterValues) : void => {
    setFilterSelected(filter);
  };

const activeCount = todos.filter(todo => !todo.completed).length
const completedCount = todos.length - activeCount

const filterTodo = todos.filter(todo => {
  if(filterSelcted === TODO_FILTERS.ACTIVE ) return !todo.completed
  if(filterSelcted === TODO_FILTERS.COMPLETED) return todo.completed
  return todo
});

const handleRemoveCompleted = (): void => {
  const newTodos = todos.filter(todo => !todo.completed)
  setTodos(newTodos)
};

const handleaddTodo = (text: string): void => {
  const newTodo = {
    id: crypto.randomUUID(),
    text,
    completed: false
  }
  setTodos([...todos, newTodo])
  
}
  return (
    <div className='todoapp'>

      <Header addTodo={handleaddTodo}/>


      <Todos 
      onCompleteTodo={handleCompleteTodo}
      onRemoveTodo={handleRemoveTodo} 
      todos={filterTodo} 
      />

      <Footer 
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelcted}
      onClearCompleted={handleRemoveCompleted}
      filterChange={handleFilterChange}
      />

      <Copyright />

    </div>
  )
}

export default App
