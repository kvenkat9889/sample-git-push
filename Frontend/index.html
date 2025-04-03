<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Onboarding</title>
    <style>
        :root {
            --primary-color: #9e0096;
            --secondary-color: #9691ff;
            --accent-color: #4cc9f0;
            --success-color: #4ad66d;
            --warning-color: #f8961e;
            --light-color: #f8f9fa;
            --dark-color: #212529;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #ffffff;
            color: var(--dark-color);
            line-height: 1.6;
        }
        
        .banner {
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            color: white;
            padding: 2rem ;
            text-align: center;
            margin-bottom: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .banner h2 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .banner p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        form {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            transition: border 0.3s, box-shadow 0.3s;
        }
        
        input:focus, select:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--dark-color);
        }
        
        button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: blue;
            transform: translateY(-2px);
        }
        
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
            transform: none;
        }
        
        .checkbox-container {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }
        
        .checkbox-container input[type="checkbox"] {
            width: auto;
            margin-right: 10px;
            margin-bottom: 0;
        }
        
        .file-input-label {
            display: inline-block;
           
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 15px;
            
            transition: all 0.3s;
        }
        
        .file-input-label:hover {
           
            border-color: var(--primary-color);
        }
        
        .form-section {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .form-section h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        @media (max-width: 768px) {
            .banner h2 {
                font-size: 2rem;
            }
            
            form {
                padding: 1.5rem;
            }
        }
    </style>
    <script>
        function toggleExperienceFields() {
            const experienceFields = document.getElementById("experienceFields");
            const experienceStatus = document.getElementById("emp_experience_status").value;
            experienceFields.style.display = experienceStatus === "Experienced" ? "block" : "none";
        }

        function toggleSubmitButton() {
            document.getElementById("submitBtn").disabled = !document.getElementById("emp_terms_accepted").checked;
        }

        async function saveEmployee(event) {
            event.preventDefault();
            const formData = new FormData(event.target);

            const response = await fetch("http://localhost:3000/save-employee", {
                method: "POST",
                body: formData
            });

            const result = await response.json();
            alert(result.message);
        }
    </script>
</head>
<body>
    <div class="banner">
        <div class="container">
            <h2>Welcome to Our Team!</h2>
            <p>Please complete your onboarding details to get started</p>
        </div>
    </div>
    
    <div class="container">
        <form onsubmit="saveEmployee(event)" enctype="multipart/form-data">
            <div class="form-section">
                <h3>Personal Information</h3>
                <input type="text" name="emp_name" placeholder="Full Name" required>
                <input type="email" name="emp_email" placeholder="Email Address" required>
                <label>Date of Birth</label>
                <input type="date" name="emp_dob" required>
                <input type="tel" name="emp_mobile" placeholder="Mobile Number" required>
            </div>
            
            <div class="form-section">
                <h3>Address Information</h3>
                <input type="text" name="emp_address" placeholder="Street Address" required>
                <input type="text" name="emp_city" placeholder="City" required>
                <input type="text" name="emp_state" placeholder="State/Province" required>
                <input type="text" name="emp_zipcode" placeholder="Zip/Postal Code" required>
            </div>
            
            <div class="form-section">
                <h3>Bank Details</h3>
                <input type="text" name="emp_bank" placeholder="Bank Name" required>
                <input type="text" name="emp_account" placeholder="Account Number" required>
                <input type="text" name="emp_ifsc" placeholder="IFSC Code" required>
            </div>
            
            <div class="form-section">
                <h3>Employment Details</h3>
                <input type="text" name="emp_job_role" placeholder="Job Role" required>
                <input type="text" name="emp_department" placeholder="Department" required>
                
                <label>Experience Status:</label>
                <select name="emp_experience_status" id="emp_experience_status" onchange="toggleExperienceFields()" required>
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced">Experienced</option>
                </select>
                
                <div id="experienceFields" style="display:none;">
                    <input type="text" name="emp_company_name" placeholder="Previous Company Name">
                    <input type="text" name="emp_years_of_experience" placeholder="Years of Experience">
                    <label class="file-input-label">
                        Upload Experience Document
                        <input type="file" name="emp_experience_doc" style="display: none;">
                    </label>
                </div>
                
                <label>Joining Date</label>
                <input type="date" name="emp_joining_date" required>
            </div>
            
            <div class="form-section">
                <h3>Education Documents</h3>
                <label class="file-input-label">
                    Upload SSC Certificate
                    <input type="file" name="emp_ssc_doc" required>
                </label>
                
                <label class="file-input-label">
                    Upload Intermediate Certificate
                    <input type="file" name="emp_inter_doc"  required>
                </label>
                
                <label class="file-input-label">
                    Upload Graduation Certificate
                    <input type="file" name="emp_grad_doc" >
                </label>
            </div>
            
            <div class="checkbox-container">
                <input type="checkbox" id="emp_terms_accepted" name="emp_terms_accepted" onchange="toggleSubmitButton()">
                <label for="emp_terms_accepted">I accept the Terms & Conditions</label>
            </div>
            
            <button type="submit" id="submitBtn" disabled>Complete Onboarding</button>
        </form>
    </div>
</body>
</html>
