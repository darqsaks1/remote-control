import * as robot from "robotjs";
import { onGetMousePosition } from "./../../utils/index";

export const drawRectangle = (message: string): void  => {
  const { x, y } = onGetMousePosition();
  const rectangletX = +message.split(" ")[1];
  const rectangleY = +message.split(" ")[2];
  robot.mouseToggle("down");
  robot.moveMouseSmooth(x + rectangletX, y);
  robot.moveMouseSmooth(x + rectangletX, y + rectangleY);
  robot.moveMouseSmooth(x, y + rectangleY);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle("up");
};
