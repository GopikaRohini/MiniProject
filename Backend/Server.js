const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"prison",
});

//Database Connection
db.connect((err) => {
    if(err){
        console.error("Error connecting to the database: ",err);
        return;
    }
    console.log("Connected to database");
});

//prisoner login
app.post("/prisonerlogin", (req, res) => {
  const sql = "SELECT * FROM prisoner WHERE pid = ? AND pwd = ?";
  const values = [req.body.pid, req.body.pwd];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, error: "Internal server error" });
    }
    if (data.length > 0) {
      console.log("Login successful:", data);
      return res.json({ success: true, message: "Login successful" });
    } else {
      console.log("Login failed: No record found");
      return res.json({ success: false, message: "No record found" });
    }
  });
});
  //jailer login
app.post("/jailerlogin", (req, res) => {
  const sql = "SELECT * FROM jailer WHERE jid = ? AND pwd = ?";
  const values = [req.body.jid, req.body.pwd];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, error: "Internal server error" });
    }
    if (data.length > 0) {
      console.log("Login successful:", data);
      return res.json({ success: true, message: "Login successful" });
    } else {
      console.log("Login failed: No record found");
      return res.json({ success: false, message: "No record found" });
    }
  });
});

// Add Prisoner
app.post("/AddPrisoner", (req, res) => {
  const sql =
    "INSERT INTO prisoner(pid,name,dob,gender,height,weight,doj,sentence,parole,pwd) values(?,?,?,?,?,?,?,?,?,?)";
  const values = [
    req.body.pid,
    req.body.name,
    req.body.dob,
    req.body.gender,
    req.body.height,
    req.body.weight,
    req.body.doj,
    req.body.sentence,
    req.body.parole,
    req.body.pwd,
  ];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json({ status: "User added successfully", data });
  });
});
// Update prisoner 
app.put('/UpdatePrisoner', (req, res) => {
  const { pid, name, dob, gender, height, weight, doj, sentence, parole, pwd } = req.body;

  const sql = `
    UPDATE prisoner
    SET name = ?, dob = ?, gender = ?, height = ?, weight = ?, doj = ?, sentence = ?, parole = ?, pwd = ?
    WHERE pid = ?`;

  const values = [name, dob, gender, height, weight, doj, sentence, parole, pwd, pid]; // Corrected order
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error updating prisoner:', err);
      return res.status(500).json({ success: false, message: 'Error updating prisoner' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Prisoner not found' });
    }

    return res.status(200).json({ success: true, message: 'Prisoner updated successfully' });
  });
});


//Delete Prisoner
app.delete("/DeletePrisoner/:pid", (req, res) => {
  const pid = req.params.pid;
  const sql = "DELETE FROM prisoner WHERE pid=?";
  const values = [pid];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, error: "Internal server error" });
    }
    if (data.affectedRows === 1) {
      return res.json({ success: true, message: "Prisoner deleted successfully" });
    } else {
      return res.json({ success: false, message: "Prisoner not found" });
    }
  });
});
//addCourse
app.post("/AddCourse", (req, res) => {
  const sql =
    "INSERT INTO course(cid,cname,dur,sdate,str) values(?,?,?,?,?)";
  const values = [
    req.body.cid,
    req.body.cname,
    req.body.dur,
    req.body.sdate,
    req.body.str,
  ];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json({ status: "Course added successfully", data });
  });
});
//addJob
app.post("/AddJob", (req, res) => {
  const sql =
    "INSERT INTO job(jobid,name,salary,sdate) values(?,?,?,?)";
  const values = [
    req.body.jobid,
    req.body.name,
    req.body.salary,
    req.body.sdate,
   
  ];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json({ status: "Job added successfully", data });
  });
});
//IssueRequest
app.post("/IssueRequest", (req, res) => {
  const { rid, pid, type, status } = req.body;
  const sql = "INSERT INTO request (rid, pid, type, status) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [rid, pid, type, status], (err, result) => {
    if (err) {
      console.error('Error inserting request:', err);
      return res.status(500).json({ error: 'Failed to submit request' });
    }
    return res.status(200).json({ message: 'Request submitted successfully' });
  });
});
app.listen(8081,() => {
    console.log("listening.. go to port 8081");
});