/**
 * Logs a message with the library prefix
 * @param message - The message to log
 */
export function logMessage(message) {
    var _a, _b, _c;
    // Works in both Node.js and browser environments
    ((_b = (_a = process === null || process === void 0 ? void 0 : process.stdout) === null || _a === void 0 ? void 0 : _a.write) === null || _b === void 0 ? void 0 : _b.call(_a, `[JSON-Engine-Form]: ${message}\n`)) ||
        ((_c = console === null || console === void 0 ? void 0 : console.log) === null || _c === void 0 ? void 0 : _c.call(console, `[JSON-Engine-Form]: ${message}`));
}
//# sourceMappingURL=logger.js.map