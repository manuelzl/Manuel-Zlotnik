
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();



app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// simple route
app.get("/", (req, res) => {
    res.send("hello world")
});
});
    // set port, listen for requests
    app.listen(8080, () => {
        console.log("Server is running on port 8080."
        );
    });

    app.get("/customers", function (req, res) {
        sql.query("SELECT * FROM customers", (err, mysqlres) => {
            if (err) {
                console.log("error: ", err);
                res.status(400).send({ message: "error in getting all customers: " + err });
                return;
            }
            console.log("got all customers...");
            res.send(mysqlres);
            return;
        });
    });
