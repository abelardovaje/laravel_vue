webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _user = __webpack_require__(43);

	var _user2 = _interopRequireDefault(_user);

	var _store = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../store\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window._ = __webpack_require__(19);

	new _vue2.default({
		el: '#app',
		store: _store2.default,
		render: function render(createEl) {
			return createEl(_user2.default);
		}
	});

/***/ })
]);