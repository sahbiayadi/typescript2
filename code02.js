"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Import React and Component type
var react_1 = require("react");
// Define the class component with typed state
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Initialize state with type annotation
        _this.state = {
            count: 0
        };
        // Method to increment the count
        _this.increment = function () {
            _this.setState({ count: _this.state.count + 1 });
        };
        return _this;
    }
    // Render method with type annotations
    Counter.prototype.render = function () {
        return Count;
        {
            this.state.count;
        }
        /p>
            < button;
        onClick = { this: .increment } > Increment < /button>
            < /div>;
        ;
    };
    return Counter;
}(react_1.Component));
exports.default = Counter;
