const fs = require('fs');
const axios = require('axios');
const team=require('./team-members.json')
exports.getDVDs = async(location) => {
    const response = await axios.get(`http://localhost:3035/dvd/all/${location}`);

    return response.data;
}

exports.getDVDTeam = async() => {

    const response = await axios.get('http://localhost:3035/dvd/team');
    team[0]=response.data;

    return team;
}