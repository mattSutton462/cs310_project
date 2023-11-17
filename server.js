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