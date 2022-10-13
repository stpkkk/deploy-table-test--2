//https://www.youtube.com/watch?v=ldYcgPKEZC8&t=76s How create a server
const express = require("express"); //creating a server
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.static(__dirname + "/public"));
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy-Report-Only",
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});

//Cors Configuration - Start
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

//Cors Configuration - End

//ROUTES//

//create a clients

app.post("/delivery", async (req, res) => {
  try {
    console.log(req.body); //чтобы увидеть через postman
    const { id } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO delivery (date, name, quantity, distance) VALUES($1) RETURNING * ",
      [id]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all clients

app.get("/delivery", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM delivery");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a client

app.get("/delivery/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await pool.query(
      "SELECT * FROM delivery WHERE client_id = $1",
      [id]
    );
    console.log(req.params);

    res.json(delivery.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a client

app.put("/delivery/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE delivery SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    console.log(req.params);

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a client

app.delete("/delivery/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM delivery WHERE client_id = $1",
      [id]
    );

    res.json("Todo was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server has started on port 5000");
});
