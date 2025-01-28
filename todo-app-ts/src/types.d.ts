import { TODO_FILTERS } from './constants';
export interface Todo  {
    id: string ;
    text: string;
    completed: boolean;
};

// Types individuales
export type TodoText = Pick<Todo, 'text'>; // Pick<Todo, 'text'> es un tipo que representa una utilidad de TypeScript que selecciona las propiedades de un tipo que se especifican en el segundo argumento.
export type TodoId = Pick<Todo, 'id'>;
export type TodoCompleted = Pick<Todo, 'completed'>;


export type ListOfTodos = Todo[];

export type FilterValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]; // Esto sirve por si queremos agregar otro filtro en la const, no tendremos que modificar el código