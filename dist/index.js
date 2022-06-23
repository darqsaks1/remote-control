"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/utils/index");
const imageController_1 = require("./src/controllers/imageController");
const index_2 = __importDefault(require("./src/http_server/index"));
const ws_1 = require("ws");
require("dotenv/config");
const controllers_1 = require("./src/controllers");
const utils_1 = require("./src/utils");
const PORT = process.env.PORT || 3000;
const WEB_SOCKET_PORT = process.env.WEB_SOCKET_PORT || 8080;
console.log(`Start static http server on the ${PORT} port!`);
index_2.default.listen(PORT);
new ws_1.WebSocketServer({ port: +WEB_SOCKET_PORT }).on("connection", (ws) => {
    console.log("websocket server is connected");
    ws.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
        const buffered = (message && message.toString()) || "";
        const printedAction = (buffered && buffered.split(" ").shift()) || "";
        if (utils_1.moveEvents.includes(printedAction)) {
            (0, controllers_1.mouseController)(buffered, printedAction);
        }
        else if (utils_1.drawEvents.includes(printedAction)) {
            (0, controllers_1.drawController)(buffered, printedAction);
        }
        else if (printedAction === index_1.PRINT_SCREEN) {
            (0, imageController_1.imageController)(ws);
        }
        else {
            const { x, y } = (0, utils_1.onGetMousePosition)();
            ws.send(`mouse_position:  ${x},${y}`);
        }
        console.log("message", buffered);
        ws.send(buffered);
    }));
});
