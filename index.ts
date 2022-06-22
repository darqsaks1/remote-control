// import Jimp from "jimp";
import { httpServer } from "./src/http_server/index";
// import robot from "robotjs";
import { WebSocketServer } from "ws";
import "dotenv/config";
import { mouseController } from "./src/controllers";
import { drawEvents, moveEvents } from "./src/utils";
const PORT: number | string = process.env.PORT || 3000;
const WEB_SOCKET_PORT: number | string = process.env.WEB_SOCKET_PORT || 8000;
console.log(`Start static http server on the ${PORT} port!`);
httpServer.listen(PORT);
const wss = new WebSocketServer({ port: +WEB_SOCKET_PORT });
wss.on("connection", (ws) => {
  console.log("connected");
  ws.on("message", async (message: string) => {
    const buffered: string = message.toString() || "";
    const printedAction: string = buffered && buffered.split(" ").shift()!;
    if (moveEvents.includes(printedAction)) {
      mouseController(buffered, printedAction);
    }
    console.log("message", buffered);
    ws.send(buffered);
  });
});
