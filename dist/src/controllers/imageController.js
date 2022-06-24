"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageController = void 0;
const jimp_1 = __importDefault(require("jimp"));
const index_1 = require("./../utils/index");
const imageController = (ws) => {
    new jimp_1.default({
        data: (0, index_1.onGetJimpData)(),
        width: index_1.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
        height: index_1.PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
    }, (err, picture) => {
        if (err) {
            throw err;
        }
        else {
            picture.getBuffer(jimp_1.default.MIME_PNG, (err, string) => {
                if (err) {
                    throw err;
                }
                else {
                    ws.send(`prnt_scrn ${Buffer.from(string).toString(index_1.IMAGE_DECODE)}`);
                }
            });
        }
    });
};
exports.imageController = imageController;
