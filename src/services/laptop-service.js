const fs = require('fs');
const axios = require('axios');
const team=require('./team-members.json')
exports.getLaptops = async(location) => {
    const response = await axios.get(`http://localhost:3036/laptops/all/${location}`);
    return response.data;
}

exports.getLaptopTeam = async() => {
    const response = await axios.get('http://localhost:3036/laptops/team');
    team[0]=response.data;

    return team;
}