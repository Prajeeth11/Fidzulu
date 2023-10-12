const axios = require('axios');
const { Console } = require('console');
const fs = require('fs');
const team=require('./team-members.json')
exports.getBooks = async(location) => {
    //const fileBooks = fs.readFileSync('src/mock-data/Booksjson.json','utf-8');
    const response = await axios.get(`http://localhost:3034/books/all/${location}`); 
    //console.log(response.data); 
    return response.data;
}

exports.getBookTeam = async() => {

    const response = await axios.get('http://localhost:3034/books/team');
    team[0]=response.data;

    return team;
}