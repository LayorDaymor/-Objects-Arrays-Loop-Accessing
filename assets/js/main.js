class Student {
    constructor(name,age,adress,email){
    this.name=name
    this.age=age
    this.adress=adress
    this.email=email
    }

    ergibniss(){
        return `<p>${this.name}, ${this.age}, ${this.adress}`;
    }
    
}

const students=[new Student(
"Ahmad",
 38,
[City:"Ratingen",
street:"dr.Redlich Str",
code:"40882"],
["hasdasd@asdasd.com", "dasdasd@fsdf.com"]),
new Student(
"Jassem",
 38,
["Ratingen,dr.Redlich Str", 40882],
["hasdasd@asdasd.com", "dasdasd@fsdf.com"]
)]

students.forEach(Student => {
  let a =Student.ergibniss();
  console.log(a);
    
});