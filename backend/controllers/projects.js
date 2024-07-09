const projectsRouter = require('express').Router()
const Project = require('../models/project')

const baseImageURL = "https://github.com/devesh-dkp/devesh/blob/main/images/";

// API Routes
projectsRouter.get('/', (req, res) => {
    Project.find({}).then(projects => {
        projects.map(project => {
            let im  = project.title;
            // replace space in title with %20
            im = im.split(' ').join('%20');
            return {
                ...project, image: baseImageURL + im + ".jpg?raw=true"
            };
        });
        res.json(projects);
    });
});

projectsRouter.post('/', (req, res) => {
    const body = req.body;
    
    let im = body.title.split(' ').join('%20');
    im = baseImageURL + im + ".jpg?raw=true";

    const project = new Project({
      title: body.title,
      description: body.description,
      link: body.link,
      image: im,
      livelink: body.livelink,
      tag: body.tag,
    });

    project.save().then(savedProject => {
        res.json(savedProject);
    });
});

projectsRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    Project.findById(id).then(project => {
        if (project) {
            res.json(project);
        } else {
            res.status(404).end();
        }
    })
    .catch(err => next(err));
});

projectsRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    Project.findByIdAndDelete(id).then(() => {
        res.status(204).end();
    }).catch(err => next(err));
});

module.exports = projectsRouter;