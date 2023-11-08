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

function checkStatus(response) {
    if (!response.ok) {
        throw Error("Error in request: " + response.statusText);
    }
    return response.json;
}