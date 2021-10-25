const express = require('express')
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())
const port = process.env.Port || 4000;

app.get('/', (req, res) => {
    res.send(' I am Hello my Second Node are you ready to do it with my self. No it is painful for me But you dont care ha ha!')
})

// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hinting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

const users = [
    { id: 0, name: 'Jubayer', email: 'soonnibai7@gail.com', contact: 0167735, Job: 'Student' },
    { id: 1, name: 'Sakkib', email: 'soonnibai7@gail.com', contact: 0167735, Job: 'Student' },
    { id: 2, name: 'Fahad', email: 'soonnibai7@gail.com', contact: 0167735, Job: 'Student' },
    { id: 3, name: 'Nabi', email: 'soonnibai7@gail.com', contact: 0167735, Job: 'Student' },
    { id: 4, name: 'Saddam', email: 'soonnibai7@gail.com', contact: 0167735, Job: 'Student' },
]



app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(5500, () => {
    console.log('Listening to port', port)
})