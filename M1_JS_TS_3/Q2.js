let student = {
 name: "Rahul",
 age: 21,
 city: "Mumbai"
};

const {name,age,city : studentCity,course="unkown"} = student
console.log(studentCity);
console.log(course);

