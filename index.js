/*
16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
17) Crea un oggetto che implementi l'interfaccia Auto.
18) Cosa sono i Generics in TypeScript?
19) È possibile avere più tipi generici in un'interfaccia?
20) Crea un'interfaccia generica per una risposta API.
*/
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
var myName = 'Domenico';
var myAge = 21;
var imStudyingTypescript = true;
//Esercizio 3
//3) Tipizza il parametro della seguente funzione: const greet = (name) => { return "Ciao " + name }
var greet = function (name) { return "Ciao " + name; };
//Eserizo 4
//4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) { return a + b; };
//Eserizo 5
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var iva = 22;
var totalPrice = function (price) {
    return price += (price * iva) / 100;
};
//Eserizo 6
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatString = function (a, b) {
    return (a + b).length;
};
//Eserizo 7
//7) Cos'è un Type Union e come si scrive?
//Un Type Union è una variabile che può avere valori di più tipi diversi e si scrive così:
var numberOrString = 2;
numberOrString = 'ciao';
numberOrString = true;
//Eserizo 8
//8) Crea una variabile che possa contenere un numero, null o undefined.
var variableType = 5;
variableType = null;
variableType = undefined;
var day = 'Monday';
//Eserizo 10
//10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
//Eserizo 11
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tuple = ['Mario', 'Paolo', 'Antonio', 5, 8];
var students = [];
students.push({ name: "Giovanni", grade: 90 });
students.push({ name: "Luigi", grade: 85 });
console.log(students);
