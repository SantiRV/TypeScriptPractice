//Tipado Arrow functions 
const sumar = (a: number, b : number) : number => {
    return a + b
};

// never ---> como sabemos sirve para funciones que nunca retornan un valor
function throwError (message: string): never {
    throw new Error(message)
};

//Void
function logMessage(message: string) : void {
    console.log(message);

    //return implicito, al tipear void le decimos a la funcion que el return puede estar o no pero no nos importa
};

//Inferencia de funciones anonimas segun el contexto
const avengers = ['ironman', 'thor', 'spiderman'];
// Aqui vemos como por el contexto de la funcion se infiere que el parametro es string
avengers.forEach(avenger => {
    console.log(avenger.toUpperCase());
});

//Objetos --> tipos

//Como se demuestra podemos utilizar tipos dentro de otros tipos
type UserId = `${string}-${string}-${string}-${string}`; //Podemos decirle que el id es un string con un formato especifico
type HowProIs = 'noob' | 'pro' | 'god'; //Podemos unir tipos de datos

type UserBasicData = {
    name: string,
    age: number,};

type UserAdvancedData = {
    readonly id?: UserId,
    isPro?: boolean
    howProIs?: HowProIs
};

type User = UserBasicData & UserAdvancedData;//Aqui unimos los tipos de datos de otra forma(como en HowProIs)

let user: User = {
    id: crypto.randomUUID(),
    name: 'Tony',
    age: 40,
    isPro: true,
    howProIs: 'pro'
}

function createUser(user: User) {
    const {name, age} = user;
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isPro: false,
        howProIs: 'noob'
    }
};

const Santi = createUser({name: 'Santiago', age: 20, isPro: true, howProIs: 'god'});
console.log(Santi); // {id: '...', name: 'Santiago', age: 20, isPro: false}

// types indexing

type UserProperties = {
    isActive: boolean,
    adress: {
        city: string,
        country: string,
    }
};

const adressUser: UserProperties['adress'] = { 
    city: 'Pavia',
    country: 'Italy'
};

const adress = {
    city: 'Pavia',
    country: 'Italy'
};

//type Adress  = typeof adress; //Aqui le decimos que el tipo Adress es igual al tipo de la variable adress

//const adressUser2: Adress = { 
//    city: 'Zapala',
//    country: 'Argentina'
//}; //Aqui vemos como podemos utilizar el tipo Adress para definir una variable

 function createAdress() {
     return {
        city: 'Pavia',
        country: 'Italy'
     };
 };

 type Adress = ReturnType<typeof createAdress>; //Aqui le decimos que el tipo Adress es igual al tipo de retorno de la funcion createAdress

 //Arrays

 const avengersArray: string[] = ['Ironman', 'Thor', 'Spiderman']; //Aqui le decimos que el array solo puede contener strings

 avengersArray.push('Hulk'); //Aqui vemos como podemos agregar un nuevo elemento al array
 //Siempre hay que tener en cuenta que el array es inmutable, por lo que no podemos cambiar el tipo de dato que contiene

 const avengersArray2: (string | number)[] = ['Ironman', 'Thor', 'Spiderman']; //Aqui le decimos que el array puede contener strings o numeros

 avengersArray2.push(4); //Aqui vemos como podemos agregar un nuevo elemento al array

//const gameBoard: string[][] = [
//    ['X', 'O', 'X'],
//    ['O', 'X', 'O'],
//    ['X', 'O', 'X']
//]; //Aqui vemos como podemos crear un array de arrays

type CellValue = 'X' | 'O' | null;
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]; //Aqui vemos como podemos crear un array de arrays controlando el tipo de dato que contiene,
//  es decir que solo puede contener 'X', 'O' o null y solo puede tener 3 elementos
//Una TUPLA es un array de longitud fija y de tipos fijos como vemos en este caso