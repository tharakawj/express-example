const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const data = [
  { id: 1, name: "Amandee1", age: 55 },
  { id: 2, name: "Amandee2", age: 90 },
  { id: 3, name: "Tharaka", age: 27 },
  { id: 4, name: "Tutu", age: 1 },
];

/**
 * CRUD Operations
 * Resource: user
 * 1. Get all users  GET /api/users
 * 2. Get user       GET /api/users/:userId
 * 3. Create user    POST /api/users
 * 4. Update user    PUT /api/users/:userId
 * 5. Delete User    DELETE /api/users/:userId
 */

app.get("/api/users", (req, res) => {
  res.send(data);
});

app.get("/api/users/:userId", (req, res) => {
  const user = data.find((user) => user.id == req.params.userId);
  res.send(user);
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  user.id = data.length + 1;
  data.push(user);
  res.send(user);
});

app.put("/api/users/:userId", (req, res) => {
  const newUser = req.body;
  const user = data.find((user) => user.id == req.params.userId);
  user.name = newUser.name;
  user.age = newUser.age;
  res.send(user);
});

app.delete("/api/users/:userId", (req, res) => {});

// app.get("/", (req, res) => {
//   const person = { name: "Amandee", age: 90 };
//   res.send(person);
// });

// app.get("/home", (req, res) => {
//   res.send("This is home");
// });

// app.get("/users/:userId/books/:bookId", (req, res) => {
//   console.log(req.params);
//   res.send("This is home");
// });

// app.post("/home", (req, res) => {
//   console.log(req.body);
//   res.send("This is home post");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
