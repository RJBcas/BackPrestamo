"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//importing Routes
const movies_routes_1 = __importDefault(require("./routes/movies.routes"));
// initalizations
const app = express_1.default();
require("./database");
// setting
app.set('port', process.env.PORT || 3003);
//middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
//Routes
app.use('/api/movies', movies_routes_1.default);
//Static files
//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
