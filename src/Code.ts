const isDone: boolean = false;
const height: number = 6;
const bob: string = "bob";
const list1: number[] = [1, 2, 3];
const list2: number[] = [1, 2, 3];

enum Color { Red, Green, Blue }

const c: Color = Color.Green;
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

function showMessage(data: string): void {
    Logger.log(data);
}
showMessage("Hello TypeScript");

class Hamburger {
    constructor() {}

    public listToppings() {}
}

const name = "Sam";
const age = 42;
console.log(`hello my name is ${name}, and I am ${age} years old`);

const add = (a: number, b: number) => a + b;
const args = [3, 5];
add(...args);

const cde = ["c", "d", "e"];
const scale = ["a", "b", ...cde, "f", "g"];

const mapABC = { a: 5, b: 6, c: 3 };
const mapABCD = { ...mapABC, d: 7 };

const jane = { firstName: "Jane", lastName: "Doe" };
const john = { firstName: "John", lastName: "Doe", middleName: "Smith" };
function sayName({firstName, lastName, middleName = "N/A"}) {
    console.log(`Hello ${firstName} ${middleName} ${lastName}`);
}
sayName(jane);
sayName(john);

export const pi = 3.141592;

const doc = DocumentApp.create("Hello world!!");
doc.getBody().appendParagraph("This document was created by Google Apps Script.");

function Override(label: string) {
    return (target: any, key: string) => {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label,
        });
    };
}

class Test {
    @Override("test")
    public name: string = "pat";
}
const t = new Test();
console.log(t.name);
