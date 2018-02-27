var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown(props) {
    _classCallCheck(this, Markdown);

    var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));

    _this.state = { info: "It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Yahoo!](http://yahoo.com)\n # This is an heading1 tag \n ## This is an heading2 tag \n ###### This is an heading6 tag \n Unordered \n* Item 1\n* Item 2\n * Item 2a\n * Item 2b" };
    return _this;
  }

  _createClass(Markdown, [{
    key: "changeText",
    value: function changeText(event) {
      this.setState({ info: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement(
            "h1",
            null,
            "Markdown"
          ),
          React.createElement("br", null),
          React.createElement("textarea", { rows: "20", cols: "40", style: { color: "white",
              backgroundColor: "black" }, onChange: this.changeText.bind(this), value: this.state.info })
        ),
        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement(
            "h1",
            null,
            "Preview"
          ),
          React.createElement("br", null),
          React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(this.state.info) }, className: "display" })
        )
      );
    }
  }]);

  return Markdown;
}(React.Component);

ReactDOM.render(React.createElement(Markdown, null), document.querySelector("#app"));