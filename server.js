const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

const pool = new Pool({
    user: "admin",
    host: "postgres",
    database: "new_employee_db",
    password: "admin123",
    port: 5432
});

module.exports = pool;

pool.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Database connection failed:", err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage: storage });

app.post("/save-employee", upload.fields([
    { name: "emp_experience_doc" },
    { name: "emp_ssc_doc" },
    { name: "emp_inter_doc" },
    { name: "emp_grad_doc" }
]), async (req, res) => {
    const {
        emp_name, emp_email, emp_dob, emp_mobile, emp_address, emp_city,
        emp_state, emp_zipcode, emp_bank, emp_account, emp_ifsc, emp_job_role,
        emp_department, emp_experience_status, emp_company_name, emp_years_of_experience,
        emp_joining_date, emp_terms_accepted
    } = req.body;

    const sql = `INSERT INTO emp_onboarding 
        (emp_name, emp_email, emp_dob, emp_mobile, emp_address, emp_city, emp_state, 
        emp_zipcode, emp_bank, emp_account, emp_ifsc, emp_job_role, emp_department, 
        emp_experience_status, emp_company_name, emp_years_of_experience, emp_joining_date, 
        emp_experience_doc, emp_ssc_doc, emp_inter_doc, emp_grad_doc, emp_terms_accepted) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)`;

    const values = [
        emp_name, emp_email, emp_dob, emp_mobile, emp_address, emp_city,
        emp_state, emp_zipcode, emp_bank, emp_account, emp_ifsc, emp_job_role,
        emp_department, emp_experience_status, emp_company_name || null,
        emp_years_of_experience || null, emp_joining_date,
        req.files["emp_experience_doc"] ? req.files["emp_experience_doc"][0].filename : null,
        req.files["emp_ssc_doc"] ? req.files["emp_ssc_doc"][0].filename : null,
        req.files["emp_inter_doc"] ? req.files["emp_inter_doc"][0].filename : null,
        req.files["emp_grad_doc"] ? req.files["emp_grad_doc"][0].filename : null,
        emp_terms_accepted ? 1 : 0
    ];

    try {
        await pool.query(sql, values);
        res.status(200).json({ message: "Employee added successfully" });
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: "Database error", details: err });
    }
});

app.get("/api/employees", async (req, res) => {
    const sql = "SELECT * FROM emp_onboarding";
    try {
        const result = await pool.query(sql);
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: "Database error", details: err });
    }
});

app.get("/", (req, res) => {
  res.send("API is up and running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));

