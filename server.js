const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEW Routes
app.get("/", (req, res) => {
    // TODO: Retrieve Students from DB
    // TODO: Display all students
});

app.get("/new", (req, res) => {
    // TODO: Display a form to create a new student.
});

app.get("edit/:id", (req, res) => {
    // TODO: Display a form with pre-populated information.
});

// API Routes
// CRUD for Students

// CREATE
app.post("/api/students", (req, res) => {
    // TODO: Create a student in the database. 
});

// READ

// Returns a Collection
// app.get("/api/students", (req, res) => {
//     // TODO: Get all students
//     // TODO: Send back JSON
// });

// Return a single student resource
app.get("/api/students/:id", (req, res) => {
    // TODO: Get a single student by ID
})

// UPDATE
app.put("/api/students/:id", (req, res) => {
    // TODO: Update a single record that matches req.params.id
})

// DELETE
app.delete("/api/students/:id", (req, res) => {
    // TODO: Delete a single record that matches req.params.id
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
