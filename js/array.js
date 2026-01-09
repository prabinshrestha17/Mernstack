// const array = ["Aaryan", "Sharma", "Test", "Hello"]; //Array of string
// //Every value in array is separated with index, index is denoted by [0], [1], [2]
// //Index is always started with 0
// // console.log(array[1])

// const array2 = [{name: "Aaryan Sharma", message: "Hello"}, {name: "Ram", message: "Hi"}] //Array of object
// const object = array2[0]
// console.log(object.message)

// let name = [ "Ram", "Hari"]  // Javascript stores two value Ram and Hari

// //Array method
// name.push("Sita"); //Pushed Sita to array "name" and place it to the end. Update name array with three value Ram Hari Sita
//  name.pop() //Pop removes the last element of an array

// name.unshift("Sita") //Unshift adds new data to array like push but it place data in the beginning beginning

// // name.pop()

// console.log(name)

// const students = ["Aaryan", "Ram", "Hari", "Sita"]
// const check = students.includes("Rams") // Checks if the given value in included in the array or not

// console.log(check)

// console.log(students.reverse())  //It reverses the array

// const name = ["ARYAN"]

//  console.log(name.join()) // Join converts array into string
//  const string = name.join()
//  console.log(string.split()) // Splits converts string into array
//  const string = name.join("")
//  const array2 = string.split("")
//  const reversedArray = array2.reverse()
//  const string2 = reversedArray.join("")

//  console.log(`The reverse of ${name[0]} is ${string2}`)

// const array = [1,2,3,4,5,6,7,8,9,10];

// //In map method of array we have two parameters first one contains value/element
// // and second one contains index
// // The value in map contains each elements record
// const test = array.map((value, index)=>{

//    const table = value * 2
//    //Here the using map method the value stores each elements from the array separately and
//    //muliplies each value with two. i.e 1 * 2, 2 * 2

//    console.log(`2 x ${value}  = ${table}`)
// })

// const array = ["Ram", "Hari", "Binod", "Jimmy"];

// const test = array.filter((value, index)=>{
// //filter methods checks and filter each data and return the value after filtering from array
// const logic = array.includes("a");
//   return logic //the return logic will return the value to test after the data is filtered with the logic
// })
//  console.log(test)\

// Institution
const role = ["admin", "user", "hr"];

const loggedInUserRole = "admin";
const accessedUser = role.includes(loggedInUserRole);

console.log(accessedUser);
