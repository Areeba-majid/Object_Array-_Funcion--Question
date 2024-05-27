"use strict";
//AREEBA
//25-MAY-2024
Object.defineProperty(exports, "__esModule", { value: true });
// ===    Object   ===        Array   ====      function     ====
/*Assignment 1: Building Your Friend List

Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure.

Task: Create a program that manages a simple friend list.

1. Define an object named people containing an empty array called friends.

2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.

3. Add these friend objects to the friends array within the people object.

4. Output the entire people object to the console, displaying your information and your
friend list.*/
console.log("\n Part - 01 \n");
let people = {
    friends: []
};
let friend1 = {
    firstName: "Areeba",
    lastName: "Riaz",
    id: 2288
};
let friend2 = {
    firstName: "Rameen",
    lastName: "Danish",
    id: 4488
};
let friend3 = {
    firstName: "Zaeema",
    lastName: "zia",
    id: 5588
};
let add = people.friends = [friend1, friend2, friend3];
console.log(add);
//======Part=02==========
//Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
/*Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:

1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:


const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

• Modify the Array:

• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:

o Convert non-strings (booleans, numbers) to strings if needed.

o Split elements into character arrays (optional).

o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).

• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/
console.log("\n PART - 02 \n");
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 4); //reomove "true","am"
scrambledArray.pop(); //remove "I"
scrambledArray.unshift("I"); // add first "I"
scrambledArray.splice(1, 0, "am", "a"); //remove "of","student","am","a"
console.log(scrambledArray.join(" "));
//======= PART - 03 =======
/*Assignment 3: Company Product Catalog

Learning Objective: Implement data structures in TypeScript to represent and manage product
information.

Task: Create a program to represent a product catalog using an array and perform basic queries.

1. Define an array named inventory to store product information.

2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.

3. Add these product objects to the inventory array using an appropriate array method.

4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.

5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
console.log("\n PART - 03 \n");
let inventory = [];
let product1 = {
    name: "bike",
    model: 2023,
    cost: 2500000,
    quantity: 20,
};
let product2 = {
    name: "Iphone ",
    model: "15pro max ",
    cost: 3200000,
    quantity: 15,
};
let product3 = {
    name: "Laptop",
    model: "probook g3",
    cost: 70000,
    quantity: 10,
};
inventory = [product1, product2, product3];
console.log(inventory);
let accessingThirdProperty = [inventory[2].quantity]; //0,1,2
console.log(accessingThirdProperty);
//Adding Another Product
let newProduct = {
    name: "jeep",
    model: 2020,
    cost: 20000000,
    quantity: 5
};
inventory.push(newProduct);
console.log("\n current inventory:", inventory);
console.log(inventory);
//     === Student Data ====
let students = [
    { name: "areeba", seniorStatus: true, completeAssignments: true },
    { name: "zaeema", seniorStatus: false, completeAssignments: false },
    { name: "rameen", seniorStatus: true, completeAssignments: true },
    { name: "Hussain", seniorStatus: false, completeAssignments: true },
    { name: "haroon", seniorStatus: true, completeAssignments: false }
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(student => student.seniorStatus && student.completeAssignments);
}
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior Students with Assignments :", seniorStudentsWithAssignments);
function removeIncompleteAssignments(students) {
    return students.filter(student => student.seniorStatus && student.completeAssignments);
}
const updatedClassList = removeIncompleteAssignments(students);
console.log("Updated Class List :", updatedClassList);
