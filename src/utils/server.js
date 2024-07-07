import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

// Middleware to enable CORS
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from localhost:5173
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Define a route to handle incoming POST requests
app.post('/', async (req, res) => {
    try {
        // Process the request and send a response
        const apiUrl = "https://gjkoi6qzo7.execute-api.us-east-1.amazonaws.com/Prod";
        // Assuming formData is passed in the request body
        const { formData } = req.body;
        await axios.post(apiUrl, formData);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred. Please try again later." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
