"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MoviesSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    type: String,
    quality: String
});
exports.default = mongoose_1.model('Movies', MoviesSchema);
