"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ensureAuthenticaded = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticaded"));

var _AppointmentsController = _interopRequireDefault(require("../controllers/AppointmentsController"));

var _ProviderAppointmentsController = _interopRequireDefault(require("../controllers/ProviderAppointmentsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
const appointmentsRouter = (0, _express.Router)();
const appointmentController = new _AppointmentsController.default();
const providerAppointmentsController = new _ProviderAppointmentsController.default(); // Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

appointmentsRouter.use(_ensureAuthenticaded.default);
appointmentsRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    provider_id: _celebrate.Joi.string().uuid().required(),
    date: _celebrate.Joi.date()
  }
}), appointmentController.create);
appointmentsRouter.get('/me', providerAppointmentsController.index);
var _default = appointmentsRouter;
exports.default = _default;