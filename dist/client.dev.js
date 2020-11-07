"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("@sanity/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _client["default"])({
  projectId: 'kl5ygosk',
  dataset: 'production',
  useCdn: true
});

exports["default"] = _default;