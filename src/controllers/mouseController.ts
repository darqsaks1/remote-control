import * as robot from "robotjs";
import { moveEvents } from "../utils";
import { onGetMousePosition } from "./../utils/index";

export const mouseController = (message: string, event: string): void => {
  const size: string = message.split(" ").pop()!;
  const [up, left, down] = moveEvents;
  const { x, y } = onGetMousePosition();
  switch (event) {
    case up:
      robot.moveMouse(x, y - +size);
      break;
    case left:
      robot.moveMouse(x - +size, y);
      break;
    case down:
      robot.moveMouse(x, y + +size);
      break;
    default:
      robot.moveMouse(x + +size, y);
      break;
  }
};
