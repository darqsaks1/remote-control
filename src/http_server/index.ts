import { HTTP_STATUS } from "./../utils/index";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const httpServer: http.Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse): void => {
    let content: string = "";
    const pathToFile: string =
      path.resolve(path.dirname("")) +
      (req.url === "/" ? "/front/index.html" : `/front${req.url}`);
    const stream: fs.ReadStream = fs.createReadStream(pathToFile);
    stream.on("data", (data: string) => {
      content += data;
    });
    stream.on("end", () => {
      res.writeHead(HTTP_STATUS.OK, { "Content-type": "text/html" });
      res.end(content);
    });
    stream.on("error", (err: Error) => {
      res.writeHead(HTTP_STATUS.BAD_RESPONSE);
      res.end(JSON.stringify(err));
    });
  }
);

export default httpServer;
