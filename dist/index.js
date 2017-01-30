(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-modal"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-modal"], factory);
	else if(typeof exports === 'object')
		exports["TModal"] = factory(require("react"), require("react-modal"));
	else
		root["TModal"] = factory(root["React"], root["ReactModal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactModal = __webpack_require__(3);

	var _reactModal2 = _interopRequireDefault(_reactModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(1);

	var TModal = function (_React$Component) {
	  _inherits(TModal, _React$Component);

	  function TModal() {
	    _classCallCheck(this, TModal);

	    return _possibleConstructorReturn(this, (TModal.__proto__ || Object.getPrototypeOf(TModal)).apply(this, arguments));
	  }

	  _createClass(TModal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactModal2.default,
	        {
	          contentLabel: 'Modal',
	          isOpen: this.props.isOpen,
	          onRequestClose: this.props.onRequestClose },
	        this.renderSpinnerOverlay(this.props.isLoading),
	        this.props.children
	      );
	    }
	  }, {
	    key: 'renderSpinnerOverlay',
	    value: function renderSpinnerOverlay(visible) {
	      if (!visible) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'spinner-overlay' },
	        _react2.default.createElement(
	          'div',
	          { className: 'spinner' },
	          _react2.default.createElement(
	            'div',
	            { className: 'preloader-wrapper small active' },
	            _react2.default.createElement(
	              'div',
	              { className: 'spinner-layer' },
	              _react2.default.createElement(
	                'div',
	                { className: 'circle-clipper left' },
	                _react2.default.createElement('div', { className: 'circle' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'gap-patch' },
	                _react2.default.createElement('div', { className: 'circle' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'circle-clipper right' },
	                _react2.default.createElement('div', { className: 'circle' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TModal;
	}(_react2.default.Component);

	exports.default = TModal;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;