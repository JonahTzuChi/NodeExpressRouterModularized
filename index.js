/*
import express from "express";
import axios from "axios";
import fs, { rmSync } from "fs";
*/
var express = require("express");
var axios = require("axios");
var fs = require("fs");

var product_router = require("./scripts/product");
var client_router = require("./scripts/client");

var app = express();
const fsPromises = fs.promises;
var router = express.Router();

// middleware
router.use((req, res, next) => {
    console.log("Time: ", Date.now());

    // ensure valid session
    // return if not valid
    // no switch in incoming hostname
    next();
});

app.set("title", "GATE");
app.set("view engine", "ejs");

app.use(express.json());

app.use(router);
app.use(product_router);
app.use(client_router);

const my = { name: "app", port: 3000, host: "127.0.0.1" };
var server = app.listen(my.port, my.host, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`${my.name} app listening at http://%s:%s`, host, port);
});