"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Link_1 = __importDefault(require("../model/Link"));
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Connection.createConnection = function () {
        return typeorm_1.createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "url_repo",
            entities: [
                Link_1.default
            ],
            synchronize: true,
            logging: false
        });
    };
    return Connection;
}());
exports.default = Connection;
