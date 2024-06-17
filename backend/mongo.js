const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength:3,
        required: true
    },
    date: Date,
    content: String,
    category: String
    });

const Blog = mongoose.model('Blog', blogSchema);

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Define a sample project
    const sampleBlog = new Blog({
      title: 'Sample Blog',
      date: new Date(),
      content: 'This is a sample blog',
      category: 'Sample'
    });

    return sampleBlog.save();
  })
  .then(result => {
    console.log('Project inserted:', result);

    // Close the connection after the operation
    return mongoose.connection.close();
  })
  .then(() => {
    console.log('Connection closed');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
