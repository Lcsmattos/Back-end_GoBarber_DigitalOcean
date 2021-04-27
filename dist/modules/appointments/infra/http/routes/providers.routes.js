"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ensureAuthenticaded = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticaded"));

var _ProvidersController = _interopRequireDefault(require("../controllers/ProvidersController"));

var _ProviderMonthAvailabilityController = _interopRequireDefault(require("../controllers/ProviderMonthAvailabilityController"));

var _ProviderDayAvailabilityController = _interopRequireDefault(require("../controllers/ProviderDayAvailabilityController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
const providersRouter = (0, _express.Router)();
const providersController = new _ProvidersController.default();
const providerMonthAvailabilityController = new _ProviderMonthAvailabilityController.default();
const providerDayAvailabilityController = new _ProviderDayAvailabilityController.default(); // Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

providersRouter.use(_ensureAuthenticaded.default);
providersRouter.get('/', providersController.index);
providersRouter.get('/:provider_id/month-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerMonthAvailabilityController.index);
providersRouter.get('/:provider_id/day-availability', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    provider_id: _celebrate.Joi.string().uuid().required()
  }
}), providerDayAvailabilityController.index);
var _default = providersRouter;
exports.default = _default;