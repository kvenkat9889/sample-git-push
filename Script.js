const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",  
    password: "Password@12345",   
    database: "emponboarding"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL Database");
});

// File Upload Configuration
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Handle Form Submission
app.post("/submit", upload.fields([
    { name: "certifications" },
    { name: "id_proof" },
    { name: "contract" },
    { name: "ssc" },
    { name: "intermediate" },
    { name: "graduation" }
]), (req, res) => {
    const data = req.body;
    const files = req.files;

    const sql = "INSERT INTO employees SET ?";
    const values = {
        full_name: data.full_name,
        email: data.email,
        mobile: data.mobile,
        dob: data.dob,
        address: data.address,
        state: data.state,
        pincode: data.pincode,
        permanent_address: data.permanent_address,
        emergency_name: data.emergency_name,
        emergency_mobile: data.emergency_mobile,
        relation: data.relation,
        bank_name: data.bank_name,
        account_number: data.account_number,
        ifsc: data.ifsc,
        job_role: data.job_role,
        department: data.department,
        join_date: data.join_date,
        insurance_provider: data.insurance_provider,
        policy_number: data.policy_number,
        certifications: files.certifications ? files.certifications[0].filename : null,
        id_proof: files.id_proof ? files.id_proof[0].filename : null,
        contract: files.contract ? files.contract[0].filename : null,
        ssc: files.ssc ? files.ssc[0].filename : null,
        intermediate: files.intermediate ? files.intermediate[0].filename : null,
        graduation: files.graduation ? files.graduation[0].filename : null
    };

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Employee onboarded successfully!" });
    });
});


app.get("/employees", (req, res) => {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
