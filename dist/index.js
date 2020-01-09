'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

const HelloWorld = (props) => {
    const { text } = props;
    return React.createElement("div", null,
        "Hello world ",
        text);
};

exports.HelloWorld = HelloWorld;
exports.default = HelloWorld;
//# sourceMappingURL=index.js.map
