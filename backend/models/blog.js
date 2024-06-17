const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String, // Store Markdown or HTML content
      required: true
    },
    category: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    }
  });  

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Blog', blogSchema);