"use strict";

var _tsyringe = require("tsyringe");

var _mail = _interopRequireDefault(require("../../../../config/mail"));

var _EtherealMailProvider = _interopRequireDefault(require("./implementations/EtherealMailProvider"));

var _SESMailPtovider = _interopRequireDefault(require("./implementations/SESMailPtovider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  ethereal: _tsyringe.container.resolve(_EtherealMailProvider.default),
  ses: _tsyringe.container.resolve(_SESMailPtovider.default)
};

_tsyringe.container.registerInstance('MailProvider', providers[_mail.default.driver]);