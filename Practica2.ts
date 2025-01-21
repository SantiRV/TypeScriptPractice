//tipos e interfaces

type Hero = {
    readonly id: number; // El readonly hace que no se pueda modificar el valor de id una vez asignado
    name: string;
    age: number;
    isActive?: boolean;
};

const hero: Hero = {
    id: 1,
    name: 'Spiderman',
    age: 30,
    isActive: true
};