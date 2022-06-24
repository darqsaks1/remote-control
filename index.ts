import { PRINT_SCREEN } from "./src/utils/index";
import { imageController } from "./src/controllers/imageController";
import httpServer from "./src/http_server/index";
import { WebSocketServer } from "ws";
import "dotenv/config";
import { mouseController, drawController } from "./src/controllers";
import { drawEvents, moveEvents, onGetMousePosition } from "./src/utils";

const PORT: number | string = process.env.PORT || 3000;
const WEB_SOCKET_PORT: number | string = process.env.WEB_SOCKET_PORT || 8080;

console.log(`Start static http server on the ${PORT} port!`);
httpServer.listen(PORT);

new WebSocketServer({ port: +WEB_SOCKET_PORT }).on("connection", (ws) => {
  console.log("websocket server is connected");
  ws.on("message", async (message: string) => {
    const buffered: string = (message && message.toString()) || "";
    const printedAction: string =
      (buffered && buffered.split(" ").shift()!) || "";
    if (moveEvents.includes(printedAction)) {
      mouseController(buffered, printedAction);
    } else if (drawEvents.includes(printedAction)) {
      drawController(buffered, printedAction);
    } else if (printedAction === PRINT_SCREEN) {
      imageController(ws);
    } else {
      const { x, y } = onGetMousePosition();
      ws.send(`mouse_position:  ${x},${y}`);
    }
    console.log("message", buffered);
    ws.send(buffered);
  });
});
