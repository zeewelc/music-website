import fetch from 'node-fetch';

const baseUrl = 'http://localhost:3000/api';
const endpoints = ['health', 'releases', 'shows', 'merch'];

const fetch = require('node-fetch');

for (const endpoint of endpoints) {
  fetch(`${baseUrl}/${endpoint}`)
    .then(res => res.json())
    .then(data => {
      console.log(`GET /api/${endpoint}:`, data);
    })
    .catch(err => {
      console.error(`Error accessing /api/${endpoint}:`, err.message);
    });
}
