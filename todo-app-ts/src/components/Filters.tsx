import React from 'react';
import {  FILTERS_BUTTONS } from '../const';
import { type FilterValues } from '../types';

interface TodoProps {
    filterSelcted: FilterValues// Esto sirve por si queremos agregar otro filtro en la const, no tendremos que modificar el código
    filterChange: (filter: FilterValues) => void;
}



export const Filters: React.FC<TodoProps> = ({filterSelcted, filterChange}) => {

    

    return (
        <ul className='filters'>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
                    const isSelected = key === filterSelcted;
                    const className = isSelected ? 'selected' : '';

                    
                    return (
                        <li key={key}>
                            <a 
                            href={href}
                            className={className}
                            onClick={(e) => {
                                e.preventDefault();
                                filterChange(key as FilterValues)
                            }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
            
        </ul>
    )
};