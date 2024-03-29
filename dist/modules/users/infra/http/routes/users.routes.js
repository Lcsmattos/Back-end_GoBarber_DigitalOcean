"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _celebrate = require("celebrate");

var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));

var _UserAvatarControllers = _interopRequireDefault(require("../controllers/UserAvatarControllers"));

var _ensureAuthenticaded = _interopRequireDefault(require("../middlewares/ensureAuthenticaded"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const userAvatarController = new _UserAvatarControllers.default();
const usersController = new _UsersController.default();
const upload = (0, _multer.default)(_upload.default.multer); // Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

usersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
}), usersController.create);
usersRouter.patch('/avatar', _ensureAuthenticaded.default, upload.single('avatar'), userAvatarController.update);
var _default = usersRouter;
exports.default = _default;