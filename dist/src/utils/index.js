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
exports.IMAGE_DECODE = exports.PRINT_SCREEN = exports.onGetJimpData = exports.PRINT_SCREEN_NUMBERS = exports.HTTP_STATUS = exports.onGetMousePosition = exports.moveEvents = exports.drawEvents = void 0;
const robot = __importStar(require("robotjs"));
exports.drawEvents = [
    "draw_circle",
    "draw_rectangle",
    "draw_square",
];
exports.moveEvents = [
    "mouse_up",
    "mouse_left",
    "mouse_down",
    "mouse_right",
];
const onGetMousePosition = () => {
    const coordinates = robot.getMousePos();
    return coordinates;
};
exports.onGetMousePosition = onGetMousePosition;
exports.HTTP_STATUS = {
    OK: 200,
    BAD_RESPONSE: 404,
};
exports.PRINT_SCREEN_NUMBERS = {
    CURRENT_MOUSE_POSITION: 100,
    IMAGE_FIGURE_CAPTURE: 200,
};
const onGetJimpData = () => {
    const { x, y } = (0, exports.onGetMousePosition)();
    return robot.screen.capture(x - exports.PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION, y - exports.PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION, exports.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE, exports.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE).image;
};
exports.onGetJimpData = onGetJimpData;
exports.PRINT_SCREEN = "prnt_scrn";
exports.IMAGE_DECODE = "base64";
