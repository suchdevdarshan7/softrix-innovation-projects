// ? Objects

// let obj = {
//     name: "Some Name",
//     age: 24,
// }

// // console.log(obj.age)
// // console.log(obj["name"])
// // console.log(obj)

// for (const key in obj) {
//     console.log(typeof(key))
//    console.log(obj[key]); 
// }

// for( const key of obj){
//     console.log(obj[key])
// }


// let studentDetails ={
//     name: "Rahul",
//     age: 25,
//     dept: "cse",
//     percentage: 87,
// }

// let object_Name ={
//     key: value,
// }


// console.log(Object.keys(studentDetails));
// console.log(Object.values(studentDetails));

// console.log(Object.hasOwn(studentDetails,"name"))


// Object.seal(studentDetails);


// console.log(studentDetails.age)



// Object.freeze(studentDetails);
// Object.seal(studentDetails)

// studentDetails.name = "Ramesh";
// studentDetails.cgpa= 9.9;
// console.log(studentDetails)

// console.log(Object.isFrozen(studentDetails))
// console.log(Object.isSealed(studentDetails))


let studentDetails ={
    name: "Rahul",
    age: 25,
    dept: "cse",
    percentage: 87,
}



let {name: studentName, age, dept, percentage} = studentDetails;


console.log(studentName)
console.log(name)
console.log(age)
console.log(dept)
console.log(percentage)