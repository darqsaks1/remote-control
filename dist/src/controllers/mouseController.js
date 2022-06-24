"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouseController = void 0;
const robot = __importStar(require("robotjs"));
const utils_1 = require("../utils");
const index_1 = require("./../utils/index");
const mouseController = (message, event) => {
    const size = message.split(" ").pop();
    const [up, left, down] = utils_1.moveEvents;
    const { x, y } = (0, index_1.onGetMousePosition)();
    switch (event) {
        case up:
            robot.moveMouse(x, y - +size);
            break;
        case left:
            robot.moveMouse(x - +size, y);
            break;
        case down:
            robot.moveMouse(x, y + +size);
            break;
        default:
            robot.moveMouse(x + +size, y);
            break;
    }
};
exports.mouseController = mouseController;
