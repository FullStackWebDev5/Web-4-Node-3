const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.set('view engine', 'ejs');

const DUMMY_DB_USERS_LIST = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg",
      "username": 'george'
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg",
      "username": 'janet'
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg",
      "username": 'emma'
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg",
      "username": 'eve'
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg",
      "username": 'charles'
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg",
      "username": 'tracey'
    }
];

app.get('/', (req, res) => {
    res.send({message: 'Working fine!'})
})

app.get('/profiles', (req, res) => {
  res.render('profiles', { users: DUMMY_DB_USERS_LIST })
})

app.get('/profile/:username', (req, res) => {
  const { username } = req.params
  const userDetails = DUMMY_DB_USERS_LIST.find(user => user.username === username)
  if(userDetails) {
    res.render('profile', userDetails)
  } else {
    res.render('not-found')
  }
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})





























/*
    - View Engines (Template Engine): EJS
    - Routing Parameters
      - In simple words: variables inside routes are known as parameters
*/