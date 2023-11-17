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

const express = require("express");
const multer = require("multer");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = "database.db";

app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded
app.use(express.json()); // for application/json
app.use(multer().none()); // for multipart/form-data (required with FormData)

app.use(express.static('static'));

app.get('/events', async function (req, res){
    const type = req.query.list;
    try{
<<<<<<< HEAD

=======
        if (type == all) {
            const query = "SELECT * FROM events;";
        }
>>>>>>> efcb6ca55f3b1948f6f098e79cf757feb0f8c1ca


    } catch (error){
        console.log(error);
        res.status(500).send('Error on the server. Please try again later.');
    }

});


function checkStatus(response) {
    if (!response.ok) {
        throw Error("Error in request: " + response.statusText);
    }
    return response.json;
}

async function getDBConnection() {
    const db = await sqlite.open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    return db;
}

//  FOR REFERENCE
// async function getNames() {
//     const db = await getDBConnection();

//     const query = "SELECT name FROM menu ORDER BY name;";
//     const rows = await db.all(query);
//     // console.log(rows);
//     await db.close(); // close the database connection

//     const names = rows.map(item => item.name);
//     console.log(names);

//     return names;
// }
