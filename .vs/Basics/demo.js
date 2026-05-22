// Objects
var username = 'Mahesh';
var age = 25;
function add(a, b) {
    return a + b;
}
//console.log('Hello', username, age); 
var hobbies;
hobbies = ['Reading', 'Travelling', 'Playing'];
// let users: string | number;
// users = 'Mahesh';
// users = 25;
// Array
var user;
user = ['Mahesh', 25];
user = [25, 'Age'];
user = [25, 25];
user = ['Name', 'Mahesh'];
var usr;
usr = ['Mahesh', 25];
//usr = [25, 'Mahesh']
var possiblevalues;
possiblevalues = [10, 20];
var users = {
    name: 'Mahesh',
    age: 25,
    hobbies: ['Playing', 'Travelling'],
    role: { company: 'Alight', location: 'Chennai' }
};
console.log('Class and its Objects:', users);
//Must Not Null Type
var myname;
//myname = null;
myname = 'Mahesh';
// dictionary, KVP 
var data;
data = {
    name: 'Mahesh',
    age: 25,
    location: 'Chennai'
};
console.log('Dictionary, KVP:', data);
// Enum
var Role;
(function (Role) {
    Role[Role["Tester"] = 0] = "Tester";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Architect"] = 2] = "Architect";
})(Role || (Role = {}));
;
var myrole;
myrole = Role.Architect;
//// Enum in other way
var myRoles;
myRoles = 'Developer';
var myRole;
console.log('Enum:', myrole, myRoles);
