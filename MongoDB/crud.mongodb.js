use("CrudDB")
console.log(db);
db.createCollection("Courses")
db.Courses.insertOne({
    "Course Name":"Web Development",
    "Price":9999,
    "Instructor":"Aditya",

})
db.Courses.insertMany([{
    "Courses Name":"Devops",
    "Price":1299,
    "Instructor":"Gupta",
},
{
    "Courses Name":"Web 3",
    "Price":3999,
    "Instructor":"fdfd",
},
{"Courses Name":"fdgadg",
    "Price":3999,
    "Instructor":"sjhsdf",
},
{"Courses Name":"Web 3",
    "Price":3999,
    "Instructor":"fhdsfh",
},
{"Courses Name":"Web 3",
    "Price":3999,
    "Instructor":"fhesf",
}
])


let a =db.Courses.find()
console.log(a);

let c=db.Courses.find({"Instructor":{$in:"Aditya"}})
console.log(c);


