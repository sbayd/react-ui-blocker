'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loadingTypes = require('./loadingTypes');

var _loadingTypes2 = _interopRequireDefault(_loadingTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UIBlocker = function (_React$Component) {
  _inherits(UIBlocker, _React$Component);

  function UIBlocker() {
    _classCallCheck(this, UIBlocker);

    return _possibleConstructorReturn(this, (UIBlocker.__proto__ || Object.getPrototypeOf(UIBlocker)).apply(this, arguments));
  }

  _createClass(UIBlocker, [{
    key: 'getHeadContainer',
    value: function getHeadContainer() {
      if (global && global.document && global.document.head) {
        return global.document.head;
      } else if (window && window.document && window.document.head) {
        return window.document.head;
      } else if (document && document.querySelector) {
        return document.querySelector('head');
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var styleContainer = this.styleContainer;

      if (styleContainer) {
        styleContainer.innerHTML = _styles2.default;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var theme = nextProps.theme,
          message = nextProps.message,
          isVisible = nextProps.isVisible;

      if (theme !== this.props.theme || message !== this.props.message || isVisible !== this.props.isVisible) {
        return true;
      }
      return false;
    }
  }, {
    key: 'renderContent',
    value: function renderContent(theme) {
      var structureString = _loadingTypes2.default[theme] || loadingTypes['cubeGrid'];

      var _structureString$spli = structureString.split('|>'),
          _structureString$spli2 = _slicedToArray(_structureString$spli, 2),
          wrapperClass = _structureString$spli2[0],
          childClasses = _structureString$spli2[1];

      var childeren = childClasses.split('|').map(function (childName, childIndex) {
        return _react2.default.createElement('div', { className: childName, key: childName });
      });
      return _react2.default.createElement(
        'div',
        { className: wrapperClass },
        childeren
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          message = _props.message,
          isVisible = _props.isVisible;

      var content = this.renderContent(theme);
      return _react2.default.createElement(
        'div',
        { id: 'holdon-overlay', style: { display: isVisible ? 'block' : 'none' } },
        _react2.default.createElement(
          'div',
          { id: 'holdon-content-overlay' },
          _react2.default.createElement(
            'div',
            { id: 'holdon-content' },
            content
          ),
          _react2.default.createElement(
            'div',
            { id: 'holdon-message' },
            message
          )
        )
      );
    }
  }, {
    key: 'stylesClassName',
    get: function get() {
      return 'react_ui_blocker_styles';
    }
  }, {
    key: 'styleContainer',
    get: function get() {
      var stylesClassName = this.stylesClassName;
      var headContainer = this.getHeadContainer();
      if (headContainer && headContainer.getElementsByClassName) {
        var _headContainer$getEle = headContainer.getElementsByClassName(stylesClassName),
            _headContainer$getEle2 = _slicedToArray(_headContainer$getEle, 1),
            found = _headContainer$getEle2[0];

        if (found) {
          return found;
        }
        var container = document.createElement('style');
        container.type = 'text/css';
        container.className = stylesClassName;
        headContainer.appendChild(container);
        return container;
      }
    }
  }]);

  return UIBlocker;
}(_react2.default.Component);

exports.default = UIBlocker;


UIBlocker.defaultProps = {
  isVisible: false,
  message: 'Loading..',
  theme: 'cubeGrid'
};

UIBlocker.propTypes = {
  theme: _propTypes2.default.string.isRequired,
  message: _propTypes2.default.string,
  isVisible: _propTypes2.default.bool.isRequired
};