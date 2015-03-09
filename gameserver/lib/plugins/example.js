"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * Created by santi8ago8 on 09/03/15.
 */

var Plugin = require("./../plugin").Plugin;

var ExamplePlug = (function (Plugin) {
    function ExamplePlug() {
        _classCallCheck(this, ExamplePlug);

        _get(Object.getPrototypeOf(ExamplePlug.prototype), "constructor", this).call(this);
        this.on("enabled", this.enabled);
    }

    _inherits(ExamplePlug, Plugin);

    _prototypeProperties(ExamplePlug, null, {
        enabled: {
            value: function enabled() {
                this.logger.info("I was enabled");
            },
            writable: true,
            configurable: true
        }
    });

    return ExamplePlug;
})(Plugin);

ExamplePlug.version = 0.1;

module.exports.ExamplePlug = ExamplePlug;
//# sourceMappingURL=example.js.map