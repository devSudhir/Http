const express = require("express");
const app = express();
app.use(express.json());
let user = [
  {
    id: 1001,
    first_name: "First Name1",
    last_name: "Last Name1",
    email: "firstname1@test.com",
    gender: "male",
    ip_address: "164.215.194.36",
    age: 65,
  },
  {
    id: 1002,
    first_name: "First Name2",
    last_name: "Last Name2",
    email: "firstname2@test.com",
    gender: "female",
    ip_address: "164.215.194.36",
    age: 45,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome To HomePage");
});
app.get("/users", (req, res) => {
  res.send({ user: user });
});
app.post("/users", (req, res) => {
  const payload = req.body;
  user.push(payload);
  res.send({ user: user });
});
app.patch("/user", (req, res) => {
  const payload = req.body;
  user.map((ele) => {
    if (ele.id === payload.id) {
      ele.first_name = payload.first_name;
      ele.last_name = payload.last_name;
    }
  });
  res.send({ user: user });
});
app.delete("/user", (req, res) => {
  const payload = req.body;

  const updatedUserList = [];
  user.map((ele) => {
    if (ele.id !== payload.id) {
      updatedUserList.push(ele);
    }
  });
  user = updatedUserList;

  res.send({ user: user });
});

app.listen("8001", () => {
  console.log("App responded");
});
