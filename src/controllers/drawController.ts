import * as robot from "robotjs";
import { drawEvents } from "../utils";

type TCoordinates = {
  x: number;
  y: number;
};

export const dravController = (message: string, event: string) => {
  //   let moveSize: string = message.split(" ").pop()!;
  //   const [up, left, down] = moveEvents;
  //   const coordinates: TCoordinates = robot.getMousePos();
  //   if (event === up) {
  //     robot.moveMouse(coordinates.x, coordinates.y - +moveSize);
  //   } else if (event === left) {
  //     robot.moveMouse(coordinates.x - +moveSize, coordinates.y);
  //   } else if (event === down) {
  //     robot.moveMouse(coordinates.x, coordinates.y + +moveSize);
  //   } else {
  //     robot.moveMouse(coordinates.x + +moveSize, coordinates.y);
  //   }
};
