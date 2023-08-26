//Declare and initialize an object called student with the following properties:
// firstName, lastName, age, email, phoneNum, and address.​
const student ={
        firstName: "John",
        lastName: "Britto",
        age: 15,
        email: "john@gmail.com",
        phoneNum: 258963654,
        address: "Park Avenue street, New York"
};
//Display the object properties using console.log statements

function displayObjectProperties(obj) {
    console.log("Displaying student property values");
    console.log(`firstName: ${obj.firstName}`);
    console.log(`lastName: ${obj.lastName}`);
    console.log(`age : ${obj.age}`);
    console.log(`email : ${obj.email}`);
    console.log(`phoneNum : ${obj.phoneNum}`);
    console.log(`address : ${obj.address}`);

}
displayObjectProperties(student);

