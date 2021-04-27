"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var upload_1 = require("@config/upload");
var class_transformer_1 = require("class-transformer");
// KISS = Keep It Simple & Stupid
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getAvatarUrl = function () {
        if (!this.avatar) {
            return null;
        }
        switch (upload_1["default"].driver) {
            case 'disk':
                return process.env.APP_API_URL + "/files/" + this.avatar;
            case 's3':
        }
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "email");
    __decorate([
        typeorm_1.Column(),
        class_transformer_1.Exclude()
    ], User.prototype, "password");
    __decorate([
        typeorm_1.Column()
    ], User.prototype, "avatar");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], User.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], User.prototype, "updated_at");
    __decorate([
        class_transformer_1.Expose({ name: 'avatar_url ' })
    ], User.prototype, "getAvatarUrl");
    User = __decorate([
        typeorm_1.Entity('users')
    ], User);
    return User;
}());
exports["default"] = User;
