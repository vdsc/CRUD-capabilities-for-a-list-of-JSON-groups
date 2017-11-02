const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'http://middleware.vt.edu/interview/groups';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/group', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/group`)
    .then(group => {
      res.status(200).json(group.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;