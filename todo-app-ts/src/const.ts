export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const; // as const es una característica de TypeScript que se utiliza para inferir un tipo literal en lugar de un tipo de cadena. Esto significa que el tipo de TODO_FILTERS.ALL es 'all' en lugar de string.

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {literal: 'All', href: `/?filter=${TODO_FILTERS.ALL}`},
    [TODO_FILTERS.ACTIVE]: {literal: 'Active', href: `/?filter=${TODO_FILTERS.ACTIVE}`},
    [TODO_FILTERS.COMPLETED]: {literal: 'Completed', href: `/?filter=${TODO_FILTERS.COMPLETED}`}
}