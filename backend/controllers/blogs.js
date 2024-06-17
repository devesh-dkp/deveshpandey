const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// API Routes
blogsRouter.get('/', (req, res) => {
    Blog.find({}).then(blogs => {
        res.json(blogs);
    });
});

blogsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(blog => {
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).end();
        }
    })
    .catch(err => next(err));
});

blogsRouter.post('/', (req, res) => {
    const body = req.body;

    const blog = new Blog({
        title: body.title,
        date : body.date,
        content: body.content,
        category: body.category
    });

    blog.save().then(savedBlog => {
        res.json(savedBlog);
    });
});

blogsRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(blog => {
        if (blog) {
            res.json(blog);
        } else {
            res.status(404).end();
        }
    })
    .catch(err => next(err));
});

blogsRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(() => {
        res.status(204).end();
    }).catch(err => next(err));
});

module.exports = blogsRouter;