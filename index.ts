//Esercizio 1
// 1) Quali sono i tipi primitivi principali in TypeScript?

/* i tipi sono:
string
number
boolean
undefined
null
any
unknown */

//Esercizio 2
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const myName: string = "Domenico";
const myAge: number = 21;
const imStudyingTypescript: boolean = true;

//Esercizio 3
//3) Tipizza il parametro della seguente funzione: const greet = (name) => { return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao " + name;
};

//Eserizo 4
//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};

//Eserizo 5
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const iva: number = 22;

const totalPrice = (price: number): number => {
  return (price += (price * iva) / 100);
};

//Eserizo 6
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatString = (a: string, b: string): number => {
  return (a + b).length;
};

//Eserizo 7
//7) Cos'è un Type Union e come si scrive?

//Un Type Union è una variabile che può avere valori di più tipi diversi e si scrive così:
let numberOrString: number | string | boolean = 2;
numberOrString = "ciao";
numberOrString = true;

//Eserizo 8
//8) Crea una variabile che possa contenere un numero, null o undefined.

let variableType: number | null | undefined = 5;
variableType = null;
variableType = undefined;

//Eserizo 9
//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type daysOfTheWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
let day: daysOfTheWeek = "Monday";

//Eserizo 10
//10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3];

//Eserizo 11
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const tuple: [string, string, string, number, number] = [
  "Mario",
  "Paolo",
  "Antonio",
  5,
  8,
];

//Eserizo 12
//12) Qual è la differenza tra type e interface?

/* type determina un tipo che ammette unioni o intersezioni tra i vari tipi, mentre interface permette l'estensione di essa 
creando un'altra interfaccia che eredita le proprietà dell'interfaccia estesa */

//Eserizo 13
//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface persone {
  firstname: string;
  lastname: string;
  age: number;
}

//Eserizo 14
//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface user {
  email: string;
  cell?: number;
}

//Eserizo 15
//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface student {
  name: string;
  grade: number;
}

const students: Array<student> = [];

//Eserizo 16
//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface vehicle {
  color: string;
  motor: boolean;
}

interface car extends vehicle {
  wheelNumber: number;
  plate: string;
  brand: string;
}

//Eserizo 17
//17) Crea un oggetto che implementi l'interfaccia Auto.

const ca1: car = {
  color: "red",
  motor: true,
  wheelNumber: 4,
  plate: "CR 054 RT",
  brand: "Porsche",
};

//Eserizo 18
//18) Cosa sono i Generics in TypeScript?

/*I Generics sono una caratteristica di typescript che permette la tipizzazione di un interfaccia dinamica e quindi senza il bisogno 
di specificarlo in anticipo ma al momento della creazione dell'oggetto*/

//Eserizo 19
//19) È possibile avere più tipi generici in un'interfaccia?

//Si è possibile avere più di un generic in un interfaccia

//Eserizo 20
//20) Crea un'interfaccia generica per una risposta API.

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  error?: string;
}