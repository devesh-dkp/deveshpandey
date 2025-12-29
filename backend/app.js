require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const projectsRouter = require('./controllers/projects');
const blogsRouter = require('./controllers/blogs');
const commentRouter = require('./controllers/comment');
const middleware = require('./middleware');
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// all projects api
app.use('/api/projects', projectsRouter);
// all blogs api
app.use('/api/blogs', blogsRouter);
// comment email api
app.use('/api/comment', commentRouter);
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;