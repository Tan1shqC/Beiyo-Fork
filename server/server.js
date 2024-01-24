const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_mongodb_uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://vercel-admin-user:s1EoUSRCEaWwTX0k@beiyocustomers.0h5hffr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB Schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  occupancy: String,
});

const Form = mongoose.model('Form', formSchema);

// Handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new Form(formData);
    await newForm.save();
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connection.on('open', () => {
  console.log("Connected to MongoDB");
});