function addTwoNumbers(a, b) {
    return a + b;
}
var a = 10;
var b = 20;
// console.log('Addition of two numbers:', addTwoNumbers(a, b));
var resultOfTwoNumbers = addTwoNumbers(a, b);
logMessage('Addition of two numbers:', resultOfTwoNumbers);
function logMessage(message1, message2) {
    console.log(message1, message2);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// const logged = logAndThrow('Invalid user');
function log(message) {
    console.log(message);
}
function performJob(cb) {
    // ...
    cb('Job done!');
}
performJob(log);
var userDetails = {
    name: 'Mahesh',
    age: 25,
    greet: function () {
        console.log('Hello there!');
        return this.name;
    }
};
userDetails.greet();
