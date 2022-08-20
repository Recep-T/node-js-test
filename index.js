// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt")
//   superhero project

// var superheroes = require('superheroes');

// var supervillains  = require('supervillains');
// var mySuperVillaniansName = supervillains.random();

// // var mySuperHeroName = superheroes.random();

// // console.log(mySuperHeroName)
// console.log(mySuperVillaniansName)

var fs = require('fs')
  , location
  , defaultLocation
  ;
  var location = require("location")

  defaultLocation = {
  "origin": "http://localhost:3000",
  "pathname": "/",
  "host": "localhost:3000",
  "hostname": "localhost",
  "port": "3000",
  "search": "",
  "hash": "#home",
  "href": "http://localhost:3000/#home",
  "protocol": "http:"
};

try {
  // TODO try all from `__dirname` to `/` before giving up
  location = fs.readFileSync('./location.config.js');
} catch(e) {
  location = defaultLocation;
}

module.exports = location;



