"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Link = /** @class */ (function () {
    function Link(id, oldUrl, newUrl, short_id) {
        this.id = id;
        this.oldUrl = oldUrl;
        this.newUrl = newUrl;
        this.short_id = short_id;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Link.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Link.prototype, "oldUrl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Link.prototype, "newUrl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Link.prototype, "short_id", void 0);
    Link = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [Number, String, String, String])
    ], Link);
    return Link;
}());
exports.default = Link;
