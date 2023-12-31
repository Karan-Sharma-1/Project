require("dotenv").config();
const express = require('express');
const cors = require('cors');
const error = require("./middleware/errorMiddleware")
const notFound = require("./middleware/notFoundMiddleware");

const app = express();
connectDB();


app.use(cors());
app.use(express.json());

// Import and use your routes
const tasksRouter = require('./routes/tasks');
const { connect } = require('mongoose');
app.use('/api/tasks', tasksRouter);


// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// middleware for authentication
app.use((req, res, next) => {
  // Check for authentication (this is a dummy check, replace it with your actual authentication logic)
  const isAuthenticated = true;

  if (isAuthenticated) {
    next(); // Move to the next middleware or route
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.use(notFound);

app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
