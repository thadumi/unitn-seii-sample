const fetch = require('node-fetch');

const getLocation = async url => {
    try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (e) {
        console.log(e);
    }
};


const url = 'http://localhost:3000/courses';
getLocation(url);