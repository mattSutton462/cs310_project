// const mysql = require('mysql');

//   const db = mysql.createConnection({
//     host: "localhost",
//     user: "wait to insert user, I do not know the name",
//     password: "Woodstock#3"
//   });
  
//   db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

app.use(express.static('static'));


function checkStatus(response) {
    if (!response.ok) {
        throw Error("Error in request: " + response.statusText);
    }
    return response.json;
}