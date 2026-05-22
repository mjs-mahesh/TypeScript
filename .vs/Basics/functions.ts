function addTwoNumbers(a: number, b: number):number{
    return a + b;
}
let a:number = 10;
let b:number = 20;
// console.log('Addition of two numbers:', addTwoNumbers(a, b));
let resultOfTwoNumbers = addTwoNumbers(a, b);
logMessage('Addition of two numbers:', resultOfTwoNumbers)

function logMessage(message1: string, message2: any):void{
    console.log(message1, message2);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
  }

 // const logged = logAndThrow('Invalid user');
  function log(message: string) {
    console.log(message);
  }

  function performJob(cb: (msg: string) => void) {
    // ...
    cb('Job done!');
  }
  
  performJob(log);
  
  type UserDetails = {
    name: string;
    age: number;
    greet: () => string;
  };
  
  let userDetails: UserDetails = {
    name: 'Mahesh',
    age: 25,
    greet() {
      console.log('Hello there!');
      return this.name;
    }
  }
  
  userDetails.greet();