
const express = require('express');
const routes = require('express').Router();

const myControllers = require('../controllers');

routes.get('/', myControllers.getData);

module.exports = routes;