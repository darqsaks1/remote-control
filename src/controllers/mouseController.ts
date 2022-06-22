import * as robot from "robotjs";
import { moveEvents } from "../utils";
import { TCoordinates } from "../types";

export const mouseController = (message: string, event: string) => {
  let size: string = message.split(" ").pop()!;
  const [up, left, down] = moveEvents;
  const coordinates: TCoordinates = robot.getMousePos();
  if (event === up) {
    robot.moveMouse(coordinates.x, coordinates.y - +size);
  } else if (event === left) {
    robot.moveMouse(coordinates.x - +size, coordinates.y);
  } else if (event === down) {
    robot.moveMouse(coordinates.x, coordinates.y + +size);
  } else {
    robot.moveMouse(coordinates.x + +size, coordinates.y);
  }
};
