const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Add CORS configuration here
app.use(
  cors({
    origin: "*", // Change this to the actual origin of your React app
  })
);

// Path to your Excel file
const filePath = path.join(__dirname, "ContactFormResponses.xlsx");

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, "build")));

// Initialize Excel file if it doesn't exist
const initializeExcelFile = () => {
  if (!fs.existsSync(filePath)) {
    const data = [["Name", "Email", "Subject", "Message"]];
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Contact Form Responses");
    xlsx.writeFile(wb, filePath);
  }
};

initializeExcelFile();

// Handle form submission and update Excel file
app.post("/submit-form", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Read the existing Excel file
  const wb = xlsx.readFile(filePath);
  let ws = wb.Sheets["Contact Form Responses"];

  if (!ws) {
    // Create a new worksheet if it does not exist
    ws = xlsx.utils.aoa_to_sheet([["Name", "Email", "Subject", "Message"]]);
    xlsx.utils.book_append_sheet(wb, ws, "Contact Form Responses");
  }

  // Convert existing sheet data to JSON and add new data
  const existingData = xlsx.utils.sheet_to_json(ws, { header: 1 });
  const newData = [name, email, subject, message];
  existingData.push(newData);

  // Create a new worksheet with updated data
  const newWs = xlsx.utils.aoa_to_sheet(existingData);
  wb.Sheets["Contact Form Responses"] = newWs;

  // Write the updated workbook to the file system
  xlsx.writeFile(wb, filePath);

  res.send("Form submitted successfully!");
});

// Catch-all handler to serve index.html for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
