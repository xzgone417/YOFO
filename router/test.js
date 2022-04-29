// 引用模板和中间件
const express = require("express");
const path = require("path")
const multer = require('multer');
const mongoose = require("mongoose");
const moment = require("moment")

const testm = require("../model/test")

const test = express.Router();







module.exports = test;