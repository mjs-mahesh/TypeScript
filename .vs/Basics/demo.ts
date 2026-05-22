
// Objects
let username: string = 'Mahesh';
let age: number = 25;

function add(a: number, b: number){
    return a + b;
}

//console.log('Hello', username, age); 

let hobbies: string[];
hobbies = ['Reading', 'Travelling', 'Playing'];

// let users: string | number;
// users = 'Mahesh';
// users = 25;

// Array
let user : Array<string | number>;
user = ['Mahesh', 25];
user = [25, 'Age'];
user = [25, 25];
user = ['Name', 'Mahesh'];

let usr: [string, number];
usr = ['Mahesh', 25];
//usr = [25, 'Mahesh']

let possiblevalues: [number, number];
possiblevalues = [10, 20];
//possiblevalues = [10, 20, 30];

// Class like Entity
// let users:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role:{company: string, location: string}
// }
// users = {
//     name: 'Mahesh',
//     age: 25,
//     hobbies: ['Playing', 'Travelling'],
//     role: {company: 'Alight', location: 'Chennai'}
// }
type User = {
    name: string;
    age: number;
    hobbies: string[];
    role:{company: string, location: string}
};
let users: User =
{
    name: 'Mahesh',
    age: 25,
    hobbies: ['Playing', 'Travelling'],
    role: {company: 'Alight', location: 'Chennai'}
}
console.log('Class and its Objects:', users);

//Must Not Null Type
let myname: {};
//myname = null;
myname = 'Mahesh';

// dictionary, KVP 
let data: Record<string, number| string>; 
data = {
    name: 'Mahesh',
    age: 25,
    location: 'Chennai'
};
console.log('Dictionary, KVP:',data);

// Enum
enum Role {Tester, Developer, Architect};
let myrole: Role;
myrole = Role.Architect;

//// Enum in other way
let myRoles :'Tester' | 'Developer' | 'Architect';
myRoles = 'Developer';

type RoleType = 'Tester' | 'Developer' | 'Architect';
let myRole: RoleType;

console.log('Enum:', myrole, myRoles);


// Null Types
let avalue: null | string;
avalue = null;
avalue = 'Mahesh'

let bvalue: undefined | string;
//bvalue = null;
bvalue = 'MJS';

// Union Types
let myvalue: string | number;
myvalue = 'Mahesh';
myvalue = 25;


