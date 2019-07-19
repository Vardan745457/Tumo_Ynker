db.students.remove({});
db.students.insertMany([{
  "email": "vardan.zakaryan2.y@tumo.org",
  "firstName": "Vardan",
  "lastName": "Zaqaryan",
  "password": "qwerty1234",
  "learningTargets": [
    "Animation",
    "Game Development",
    "Filmmaking"
  ],
  "location": "Yerevan"
}, {
  "email": "test@gmail.com",
  "firstName": "TestUser",
  "lastName": "Testyan",
  "password": "test1234",
  "learningTargets": [
    "Game Development",
  ],
  "location": "Gyumri"
}
])

db.students.createIndex({ lastName: "text", firstName: "text", location: "text" })
db.students.createIndex({ learningTargets: 1})
