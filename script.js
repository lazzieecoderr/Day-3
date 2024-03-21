/*
!Array Example
var a =[1,2,3,"abc",true]
for(var i=0;i<a.length;i=i+1){
    console.log(a[i]);
}
*/
/*
!Objects example using dot method
var person = {
    name:"rupan",
    age:15,
    Gender:"Male",
    Phonenumber:9876543210,
    Skills:["Javascript","Html","Css","Reactjs","MongoDb","Nodejs","Expressjs"]
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.Gender);
console.log(person.Phonenumber);
for(var i=0;i<person.Skills.length;i=i+1)
{
    console.log(person.Skills[i]);
}
*/
/*
!Objects example using box method
var person = {
  name: "rupan",
  age: 15,
  Gender: "Male",
  Phonenumber: 9876543210,
  Skills: [
    "Javascript",
    "Html",
    "Css",
    "Reactjs",
    "MongoDb",
    "Nodejs",
    "Expressjs",
  ],
};
console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["Gender"]);
console.log(person["Phonenumber"]);
console.log(person["Skills"]);
for (var i = 0; i < person["Skills"].length; i = i + 1) {
  console.log(person["Skills"][i]);
}
*/
/*
!Adding,updating and deleting the object
var movie ={
     Title:"Leo",
     Hero:"Vijay",
     Heroine:"Trisa",
     Director:"Lokesh Kanagaraj",
     Imdbrating:7.5,
     Budget:500,
     Cast:["GVM","Arjun","Myskin","Sandy","Janani","Madanona","Sanjay dutt"]
}
*Adding element in object
movie.Cast[7]="Mansoor Ali Khan"
movie.specialappearance = "subramani"
movie.Languages = ["Tamil","Telugu","Malayalam","Hindi","English"]
console.log(movie);
?Updating the element in object
movie.Budget="500cr"
!Deleting the element in object
delete movie.Imdbrating;
*/

/*
!JSON
var person = {
    name: "rupan",
    age:15,
    Gender:"male"
}
var b =JSON.stringify(person);
console.log(b);
var c = JSON.parse(b)
console.log(c);
*/
/*
!Array Of objects
var arr = [
    {
        "name":"rupan",
        "age":"15"
    },
    {
        "name":"chakravarthy",
        "age":"05"
    },
    {
        "name":"John",
        "age":"30"
    },
    {
        "name":"Doe",
        "age":"40"
    }
]
for(var i=0;i<arr.length;i=i+1){
    console.log(arr[i].name,arr[i].age);
    
}
*/
/*Task
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

//!step1: convert the objects to string and sort
let str1 = JSON.stringify(obj1,Object.keys(obj1).sort()) 
console.log(str1);
let str2 = JSON.stringify(obj2,Object.keys(obj2).sort()) 
console.log(str2);

//!compare
if(str1===str2){
    console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}
*/