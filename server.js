const express = require("express");
const multer = require("multer");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

// const createUnixSocketPool = require("./connect-unix");

const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = "database.db";

app.use(express.urlencoded({ extended: true })); // for application/x-www-form-urlencoded
app.use(express.json()); // for application/json
app.use(multer().none()); // for multipart/form-data (required with FormData)

app.use(express.static('static'));

app.get('/events', async function (req, res){
    const type = req.query.type;
    try{
        if (type == "all") {
            let all_events = await getEvents();
            res.type('json').send(all_events);
        }

    } catch (error){
        console.log(error);
        res.status(500).send('Error on the server. Please try again later.');
    }

});


// function checkStatus(response) {
//     if (!response.ok) {
//         throw Error("Error in request: " + response.statusText);
//     }
//     return response.json;
// }

async function getDBConnection() {
    const db = await sqlite.open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    return db;
}

async function getEvents() {
    const query = "SELECT * FROM events;";
   
    const db = await createUnixSocketPool();
    const rows = await db.query(query);
    await db.end();

    // const db = await getDBConnection();
    // const rows = await db.all(query);
    // await db.close();
    
    const events = rows.map(item => item);
    return events;
}


app.listen(PORT);
console.log('Server started at http://localhost:' + PORT);