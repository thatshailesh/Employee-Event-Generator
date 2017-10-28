"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const mwErrorHandler = require('./middleware/mwErrorHandler');

let app = express();

app.set("port", (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => res.json({message: "Welcome to our Worker Event Generator Service!"}));
app.use((req, res, next) => {
  if (req.method !== 'POST') {
    console.log('Error: Wrong Http method')
    return res.status(404).json({
        code: 404,
        status: "Failed",
        message: "Wrong http method",
    });
}
return next();
})
app.use("/api", router);
app.use("*", (req, res) => {
  console.log('poop=>>>>>>>>>>>>>>>>>>>>')
  res.status(404).json({ "message": "Invalid Url" });
});
app.use(mwErrorHandler);


// Starts the app
app.listen(app.get('port'), function () {
  console.log("Server has started and is listening on port: " + app.get('port'));
});

module.exports = app; //for testing