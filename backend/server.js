import app from './app.js'; // Updated import statement
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
import cloudinary from 'cloudinary';

// Handling Uncaught exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught exception`);
    process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//this is a uncaught exception where google is not defined
// console.log(google);

// unhandled Promise Rejection
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});



