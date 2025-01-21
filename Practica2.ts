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
//hero.id = 2; ---> Error: Cannot assign to 'id' because it is a read-only property.    

const enum ERROR_TYPES {
    INVALID_NAME, // 0  Crea un objeto con los valores de la enumeración con indice numerico
    INVALID_AGE // 1
}; // Enumeración de errores SE LE AGREGA "CONST" PARA QUE NO SE PUEDA MODIFICAR y tambien para ahorrar memoria 

//const enum ERROR_TYPES { 
// INVALID_NAME = 'INVALID_NAME', 
// INVALID_AGE = 'INVALID_AGE'
// }; Si se le asigna un valor a cada uno de los elementos de la enumeración, se crea un objeto con los valores de la enumeración con indice numerico
// Esto sirve por ejemplo si tenemos valores numericos asignados en la base de datos, podemos mostrar el mensaje correspondiente al valor numerico

function throwError(errorType: ERROR_TYPES) {
    if (errorType === ERROR_TYPES.INVALID_NAME) {
        throw new Error('Invalid name');
    } else if (errorType === ERROR_TYPES.INVALID_AGE) {
        throw new Error('Invalid age');
    }
};

//Ascersiones de tipo
//const canvas = document.getElementById('canvas') as HTMLCanvasElement; // Se le dice a typescript que el elemento con id canvas es un elemento de tipo HTMLCanvasElement SE LO DEBEMOS DECIR NOSOTROS

//Una mejor forma de hacerlo seria hacer una comprovaion de que el elemento existe, por ejemplo: 
const canvas = document.getElementById('canvas');
//es inferencia --> typescript se da cuenta que dentro del if el elemento es de tipo HTMLCanvasElement
if (canvas !== null && canvas instanceof HTMLCanvasElement) { 
    // Se comprueba que el elemento exista y que sea de tipo HTMLCanvasElement
    //Si queremos ya en este punto podemos eliminar la comprovacion de que el elemento sea distinto de null
    
    //if (canvas instanceof HTMLCanvasElement) {
    // const ctx = canvas.getContext('2d')} seria suficiente
    
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
}   