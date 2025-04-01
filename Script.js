
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { Client } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

const db = new Client({
     user: "admin",
    host: "postgres_db",
    database: "emponboarding",
    password: "password",
    port: 5432
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to PostgreSQL Database");
});

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

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

    const sql = "INSERT INTO employees (full_name, email, mobile, dob, address, state, pincode, permanent_address, emergency_name, emergency_mobile, relation, bank_name, account_number, ifsc, job_role, department, join_date, insurance_provider, policy_number, certifications, id_proof, contract, ssc, intermediate, graduation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)";
    const values = [
        data.full_name,
        data.email,
        data.mobile,
        data.dob,
        data.address,
        data.state,
        data.pincode,
        data.permanent_address,
        data.emergency_name,
        data.emergency_mobile,
        data.relation,
        data.bank_name,
        data.account_number,
        data.ifsc,
        data.job_role,
        data.department,
        data.join_date,
        data.insurance_provider,
        data.policy_number,
        files.certifications ? files.certifications[0].filename : null,
        files.id_proof ? files.id_proof[0].filename : null,
        files.contract ? files.contract[0].filename : null,
        files.ssc ? files.ssc[0].filename : null,
        files.intermediate ? files.intermediate[0].filename : null,
        files.graduation ? files.graduation[0].filename : null
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Employee onboarded successfully!" });
    });
});

app.get("/employees", (req, res) => {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results.rows);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
