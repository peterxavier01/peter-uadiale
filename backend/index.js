require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Endpoint to send email via Resend
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: "Peter's Portfolio <info@peteruadiale.com>",
    to: "uadialepeter@gmail.com",
    subject,
    html: `Email submission from ${name} with email: ${email}. <br > ${message}`,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
