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