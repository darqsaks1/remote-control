"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawController = void 0;
const draw_1 = require("./draw");
const utils_1 = require("../utils");
const drawController = (message, event) => {
    const [circle, rectangle, square] = utils_1.drawEvents;
    const radius = (event !== rectangle && message.split(" ").pop()) || 0;
    switch (event) {
        case circle:
            (0, draw_1.drawCircle)(+radius);
            break;
        case rectangle:
            (0, draw_1.drawRectangle)(message);
            break;
        case square:
            (0, draw_1.drawSquare)(+radius);
            break;
        default:
            break;
    }
};
exports.drawController = drawController;
