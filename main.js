// var age = Number(prompt("Enter your age"))
// if (age === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (age > 18){
//     alert("Powering On. Enjoy the ride!");
// } else if (age < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
// }

class Student {
    constructor(name, registerDate) {
        this.name = name;
        this.registerDate = registerDate;
    }
    
    StudentInfo() {
        console.log(`Hello am ${this.name} and enroll this course ${this.registerDate}`);
    }
}

const student = new Student("Fawaz", Date.now())


const arr1 = [1, 2, 3, 4, 5, { number: "This are javascript integer" }]
var arr2 = [].concat(arr1)
arr2.push({name: "Fawaz is a developer"})

console.log(arr2);


let arr = [100, 200, 121, 9098, 132]
let myIndex = arr.length - 2

