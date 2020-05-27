"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_models_1 = __importDefault(require("../models/movies.models"));
// Para mandar informacion puede ser en el siguiente formato 
// month-day-year o year-month-day
// Configuraciones para la fecha
// en-US == month-day-year , en-GB == day-month-year,
// ko-KR == year-month-day(2012. 12. 20.), zh-Hans-CN ==  year-month-day(2012/12/20)
class moviesCtrl {
    getMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const moviesEnd = new Array();
            const movies = yield movies_models_1.default.find();
            // movies.forEach(element => {
            // const  GetMovies = {
            //     title : element.title ,
            //      author  : element.author,
            //       type : element.type, 
            //       quality : element.year.toLocaleDateString('en-US') }     
            //     moviesEnd.push(GetMovies)
            // });
            res.json(movies);
        });
    }
    getMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movies = yield movies_models_1.default.findById(id);
            res.json(movies);
        });
    }
    createMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, quality, type } = req.body;
            const newMovie = new movies_models_1.default({
                title,
                author,
                type,
                quality
            });
            yield newMovie.save()
                .then(() => {
                res.json({
                    status: 'Save success'
                });
            }).catch(err => {
                console.error('esto es el error :=>', err);
                res.json({
                    status: " error Explotar "
                });
            });
        });
    }
    putMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, year, quality } = req.body;
            const { id } = req.params;
            console.log('req body', req.body);
            console.log(id);
            yield movies_models_1.default.findByIdAndUpdate(id, { $set: req.body }, { new: true })
                .then(() => {
                res.json({
                    status: 'Update success'
                });
            }).catch(err => {
                console.error('esto es el error :=>', err);
                res.json({
                    status: " error Explotar "
                });
            });
        });
    }
    deleteMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield movies_models_1.default.findByIdAndDelete(id)
                .then(() => {
                res.json({
                    status: 'delete success'
                });
            }).catch(err => {
                console.error('esto es el error :=>', err);
                res.json({
                    status: " error Explotar "
                });
            });
            ;
        });
    }
}
exports.moviesControllers = new moviesCtrl();
