"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putComentario = exports.postComentario = exports.deletComentario = exports.getComentario = exports.getComentarios = void 0;
const conection_1 = __importDefault(require("../db/conection"));
const getComentarios = (req, res) => {
    conection_1.default.query('SELECT * FROM comentarios', (err, data) => {
        if (err)
            throw err;
        res.json({
            status: 200,
            data: data
        });
    });
};
exports.getComentarios = getComentarios;
const getComentario = (req, res) => {
    const { id } = req.params;
    conection_1.default.query('SELECT * FROM comentarios WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            status: 200,
            data: data
        });
    });
};
exports.getComentario = getComentario;
const deletComentario = (req, res) => {
    const { id } = req.params;
    conection_1.default.query('DELETE FROM comentarios WHERE ID = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            status: 200,
            msg: "Se elimino correctamente el registro"
        });
    });
};
exports.deletComentario = deletComentario;
const postComentario = (req, res) => {
    const { body } = req;
    conection_1.default.query('INSERT INTO comentarios SET ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            status: 200,
            msg: "Se creo correctamente el registro"
        });
    });
};
exports.postComentario = postComentario;
const putComentario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    conection_1.default.query('UPDATE comentarios SET ? WHERE id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            status: 200,
            msg: "Se actualizo correctamente el registro"
        });
    });
};
exports.putComentario = putComentario;
