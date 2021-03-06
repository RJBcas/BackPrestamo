"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controllers_1 = require("../controllers/movies.controllers");
const router = express_1.Router();
router.get('/', movies_controllers_1.moviesControllers.getMovies);
router.get('/:id', movies_controllers_1.moviesControllers.getMovie);
router.post('/', movies_controllers_1.moviesControllers.createMovie);
router.put('/:id', movies_controllers_1.moviesControllers.putMovie);
router.delete('/:id', movies_controllers_1.moviesControllers.deleteMovie);
exports.default = router;
