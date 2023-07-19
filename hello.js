// This is an industrial-grade general-purpose greeter function:
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
//exercise 2: figure out why we get any error in the function
// const addTwoNumbers = (a: number, b: number) => {
//   return a + b;
// };
//ans: cause it has a type of any, it wouldn't pass so the solution
//here will be to annotate both variables to their actual types
//exercise 3:
// let myName = "Barbara";
// function greet(name: string) {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// }
// greet(42);
// function getFavoriteNumber() : number {
//   return 55;
// }
//exercise5:
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// toAlternatingCase("hello world") === "HELLO WORLD"
// toAlternatingCase("HELLO WORLD") === "hello world"
// toAlternatingCase("hello WORLD") === "HELLO world"
// toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
//solution:
//p=> Taking a string
//R=> Return a string
//E=> // toAlternatingCase("hello world") === "HELLO WORLD"
// toAlternatingCase("HELLO WORLD") === "hello world"
//P=> Assuming this string contains letters as input to spit out letters(string)
//we may need to loop through it first to at least check if the string contains a lowercase
//and if it does, we want to convert to uppercase and vice versa. hmm let's convert this to code and see
function toAlternatingCase(s) {
    var result = "";
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char >= "a" && char <= "z") {
            result += char.toUpperCase();
        }
        else if (char >= "A" && char <= "Z") {
            result += char.toLowerCase();
        }
        else {
            result += char;
        }
    }
    return result;
}
console.log(toAlternatingCase("hello world"));
