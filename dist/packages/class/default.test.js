"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("./default");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * classDefault test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("classDefault", () => {
    (0, node_test_1.it)("1. Return undefined when all parameters are undefined.", () => {
        const result = (0, default_1.classDefault)(undefined, undefined, undefined);
        node_assert_1.default.equal(result, undefined);
    });
    (0, node_test_1.it)("2. Return className when addClass and classDefault are undefined.", () => {
        const result = (0, default_1.classDefault)("test-class", undefined, undefined);
        node_assert_1.default.equal(result, "test-class");
    });
    (0, node_test_1.it)("3. Return classDefault when className is `default` and addClass is undefined.", () => {
        const result = (0, default_1.classDefault)("default", undefined, "default-class");
        node_assert_1.default.equal(result, "default-class");
    });
    (0, node_test_1.it)("4. Return undefined when className is undefined and addClass is `default`.", () => {
        const result = (0, default_1.classDefault)(undefined, "default", "default-class");
        node_assert_1.default.equal(result, "default");
    });
    (0, node_test_1.it)("5. Return addClass when className is undefined and addClass is not `default`.", () => {
        const result = (0, default_1.classDefault)(undefined, "test-class", "test-class");
        node_assert_1.default.equal(result, "test-class");
    });
    (0, node_test_1.it)("6. Return classDefault when className is `default` and addClass is `default`.", () => {
        const result = (0, default_1.classDefault)("default", "default", "default-class");
        node_assert_1.default.equal(result, "default-class default");
    });
});
