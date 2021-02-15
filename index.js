/**
 * @author Alex Sandro Mateus de Oliveira
 * @email alexnet2@hotmail.com
 * @create date 2021-02-14 07:58:32
 * @modify date 2021-02-14 07:58:32
 * @desc Desafio Node
 */

require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const express = require("express");
const verifyToken = require("./app/src/verifyToken");
const userRoute = require("./app/src/userRoute.js");
const permissionRoute = require('./app/src/permissionRoute');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(verifyToken, function (req, res, next) {
  next();
});

userRoute(app)
permissionRoute(app)

const port = process.env.PORT || 4000;
console.log(`Listening on http://localhost:${port}`)
app.listen(port);
