//Classes and objects
// var emp = {}//Simpliest way of creating object in JS.
// emp.empId = 123;
// emp.empName = "Phaniraj";
// emp.empAddress ="Bangalore";
// emp.empSalary = 65000;

// console.log(emp);
// console.log(emp.empName);
// console.log(emp.empAddress);
// console.log(emp.empSalary);

// var emp2 = emp;//Create a copy in Singleton objects...
// emp2.empName = "Vinod";
// console.log(emp.empName);//emp2 and emp are same as they are singleton, any change made to any object will reflect the change in all the objects. 
/* *********************************************************** */
//Creating multiple objects each representing individual....
//U need to define a structure of the class and then instantiate them using new operator
//function keyword is used to create a defn of a class in classic JS
//function will behave like a constructor for the class and it returns an object
let employee = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;

    this.display = function(){
        console.log("The name: " + this.empName)
        console.log("The Address: " + this.empAddress)
        console.log("The ID: " + this.empId)
    }
}
//new is the formal way to create a new object..
let emp1 = new employee(123, "Phaniraj", "Bangalore"); 
let emp2 = new employee(124, "Vinod Kumar", "Shimoga");
let emp3 = new employee(125, "Banu Prakash", "Hassan");
// A class can have both data as well as operations(functions or methods. All the members of UR class are public only)...

emp1.display();
emp2.display();
emp3.display();
console.log("The data: " + emp2.empName);



