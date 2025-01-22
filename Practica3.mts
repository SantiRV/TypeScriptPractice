// .mts significa que es un modulo de typescript, lo que significa que todo lo que se declare en este archivo no se va a exportar a otros archivos
 
                             // Fetching de datos

//https://quicktype.io/ --> Pagina para convertir un json a un tipo de typescript, esto nos facilita
//la creación de las interfaces y tipos de datos, Tambien nosahorra tiempo
//A traves de quicktype.io podemos convertir un json a un tipo de typescript:
 export type GithubAPIResponse = {
    items: any;
    map(arg0: (repo: any) => void): unknown;
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export type Address = {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export type Geo = {
    lat: string;
    lng: string;
}

export type Company = {
    name:        string;
    catchPhrase: string;
    bs:          string;
}


const API_URL = 'https://jsonplaceholder.typicode.com/users';

const response = await fetch(API_URL);

if ( !response.ok ) {
    throw new Error('Error fetching data');
} // Si la respuesta no es correcta, lanzamos un error
const data = await response.json() as GithubAPIResponse; //Como ya sabemos que la respuesta es correcta, convertimos la respuesta a json

data.items.map((repo) => {
    id: repo.id;
    name: repo.name;
    username: repo.username;
    email: repo.email;
});

console.log(data.address.city); //Mostramos la ciudad de la dirección

// Interfaces --> Sirven para definir la estructura de un objeto
// Podemos anidar interfaces ejemplo

 interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
 };

 interface Category {
    id: number;
    name: string;
 };

 interface cartItem {
    product: Product;
    quantity: number;
 }; 
 
 interface Cart {
    items: cartItem[];
    total: number;
 }

 interface User {
    id: number;
    name: string;
    email: string;
    cart: Cart;
 }

 //Tambien se puede exender una interfaz de otra interfaz ejemplo 

    interface Admin extends User {
        permissions: string[];
    }; // La interfaz Admin hereda de la interfaz User

interface CartOop {
    items: cartItem[];
    total: number;
    addProduct(product: Product, quantity: number): void;
    removeProduct(product: Product): void;
    showTotal(): void;
}; // Interfaz de un carrito de compras

 // Podemos hacer que una interfaz herede de otra interfaz

 const carrito: Cart = {
    items: [
        {
            product: {
                id: 1,
                name: 'Producto 1',
                price: 100,
                description: 'Descripción del producto 1',
                category: {
                    id: 1,
                    name: 'Categoría 1'
                }
            },
            quantity: 2
        },
        {
            product: {
                id: 2,
                name: 'Producto 2',
                price: 200,
                description: 'Descripción del producto 2',
                category: {
                    id: 2,
                    name: 'Categoría 2'
                }
            },
            quantity: 1
        }
    ],
    total: 400
 };
//Hay que tener cuidado al utilizar interfaces, ya que si se utiliza una interfaz en un objeto y se quiere modificar el objeto, se debe modificar la interfaz tambien

//types 

function mostrarLongitud(objeto: number | string) {
    if (typeof objeto === 'string') { // Si el objeto es de tipo string devolvemos la longitud
        return objeto.length;
    } else{
        return objeto
    }
};

//Podemos hacer type guards para saber si un objeto es de un tipo u otro

interface Mario {
    company: 'Nintendo'; // Podemos poner directamente el nombre de la compañia en vez de string 
    // ya que si creamos un mario siempre va a ser de la compañia nintendo
    name: string;
    jump: () => void;
};

interface Sonic {
    company: 'Sega';
    name: string;
    spin: () => void;
};

type Character = Mario | Sonic; // Podemos crear un tipo que sea la union de dos interfaces

function play (character: Character) { //Esta es una forma para reconocer si un personaje es de un tipo u otro a travez de la compaiñia
    if (character.company === 'Nintendo') {
        character.jump();
    } else {
        character.spin();
    }
}; 

//Otra forma pero aca para hacerlo a travez de la accion que realiza el personaje
function checkCharacter(character: Character) : character is Mario {
    return (character as Mario).jump !== undefined;
}; // Type guard para saber si un personaje es de tipo Mario

function jugar( personaje: Character) {
    if (checkCharacter(personaje)) {
        personaje.jump();
    } else {
        personaje.spin();
    }
};
// Siempre que se pueda hay que evitar utilizar type guards, ya que no es una buena practica

//Tipo Never --> Se utiliza para funciones que nunca van a retornar un valor

function fn(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    } else if (typeof x === 'number') {
        return x.toFixed();
    } else{
        x; // Si no es ni string ni number, devolvemos x (Never)
    }
     
};


//Clases

class Avenger {
    readonly name: string;
    #power: string;
    private readonly secret: string; // Solo se puede acceder a esta propiedad dentro de la clase por unica vez en la entrada y despues no se puede cambiar

    constructor(name: string, power: string, secret: string) {
        this.name = name;
        this.#power = power;
        this.secret = secret;
    }

    attack() {
        console.log(`${this.name} is attacking with ${this.#power}`);
    }
};

const thor = new Avenger('Thor', 'Mjolnir', 'Thor is a god'); // Creamos un nuevo objeto de la clase Avenger

console.log(thor.name); // Podemos acceder al nombre de thor
thor.attack(); // Podemos atacar con thor


//thor.name = 'Hulk'; // No se puede modificar el nombre ya que es de solo lectura por el readonly}
//thor.#power --> No se puede acceder a la propiedad power ya que es privada por el # antes del power
//Tampoco podriamos acceder a la propiedad secret ya que es privada e inmutable

// Tambien podriamos crear una interfaz para la clase Avenger

//interface Avenger {
//    name: string;
//    power: string;
//    secret: string;
//    attack(): void;
//}; --> Si Utilizamos la interfaz Avenger, no podriamos utilizar el readonly y el # antes de la propiedad 
// power. Tambien hay que tener en cuenta que hay que adaptarse a la informacion que tiene la interfaz 
// sin poder agregar mas propiedades(obviamente que dentro de la interfaz si podriamos agregar, pero por fuera no) 