require('dotenv').config()
const express = require('express')

const app = express()
const baseImageURL = "https://github.com/devesh-dkp/devesh/blob/main/images/";
let projects = 
[
    {
      "title": "Obstacle Avoider",
      "description": "Obstacle avoider using ultrasonic sensor.",
      "link": "https://github.com/devesh-dkp/Obstacle-Avoiding-Vehicle",
      "image": "",
      "id": 0
    },
    {
      "title": "Stock Price Predicter",
      "description": "Stock price predicter using ARIMA model.",
      "link": "https://shorturl.at/9lB3K",
      "image": "",
        "id": 1
    },
    {
      "title":"ShoesShop",
      "description":"A simple shoes shop website.",
      "link":"https://github.com/devesh-dkp/Shoesshop-ecommerce-react",
      "image":"",
      "id": 2
    }
  ];
  projects = projects.map(project => {
    let im  = project.title;
    // replace space in title with %20
    im = im.split(' ').join('%20');
    return {
      ...project, image: baseImageURL + im + ".jpg?raw=true"
    };
  });
  
app.use(express.static('dist'));

const cors = require('cors')
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/projects', (req, res) => {
    res.json(projects)
}
)

const generateId = () => {
    const maxId = projects.length > 0
        ? Math.max(...projects.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/projects', (req, res) => {
    const body = req.body

    if (!body.title) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    
    const im = body.title;
    im = im.split(' ').join('%20');
    im = baseImageURL + im + ".jpg?raw=true";
    const project = {
        title: body.title,
        description: body.description,
        link: body.link,
        image: im,
        id: generateId()
    }

    projects = projects.concat(project)
    res.json(project)
}
)

app.get('/api/projects/:id', (req, res) => {
    const id = Number(req.params.id)
    const project = projects.find(project => project.id === id)

    if (project) {
        res.json(project)
    } else {
        res.status(404).end()
    }
}
)

app.delete('/api/projects/:id', (req, res) => {
    const id = Number(req.params.id)
    projects = projects.filter(project => project.id !== id)

    res.status(204).end()
}
)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})