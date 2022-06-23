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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageController = void 0;
const robot = __importStar(require("robotjs"));
const jimp_1 = __importDefault(require("jimp"));
const index_1 = require("./../utils/index");
const imageController = (ws) => {
    const { x, y } = (0, index_1.onGetMousePosition)();
    const mouseX = x - index_1.PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION;
    const mouseY = y - index_1.PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION;
    new jimp_1.default({
        data: robot.screen.capture(mouseX, mouseY, index_1.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE, index_1.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE).image,
        width: index_1.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
        height: index_1.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
    }, (err, picture) => {
        if (err) {
            throw err;
        }
        else {
            picture.getBuffer(jimp_1.default.PNG_FILTER_AUTO, (err, string) => {
                if (err) {
                    throw err;
                }
                else {
                    ws.send(`prnt_scrn ${Buffer.from(string).toString(index_1.IMAGE_DECODE)}`);
                    console.log(`message prnt_scrn`);
                }
            });
        }
    });
};
exports.imageController = imageController;
