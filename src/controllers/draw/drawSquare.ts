import * as robot from "robotjs";
import { onGetMousePosition } from "./../../utils/index";

export const drawSquare = (radius: number): void => {
  const { x, y } = onGetMousePosition();
  robot.mouseToggle("down");
  robot.moveMouseSmooth(x + radius, y);
  robot.moveMouseSmooth(x + radius, y + radius);
  robot.moveMouseSmooth(x, y + radius);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle("up");
};
