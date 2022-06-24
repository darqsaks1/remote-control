import { onGetMousePosition } from "./../../utils/index";
import * as robot from "robotjs";

export const drawCircle = (radius: number): void  => {
  const { x, y } = onGetMousePosition();
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const xCircle: number = x + radius * Math.cos(i);
    const yCircle: number = y + radius * Math.sin(i);
    robot.dragMouse(xCircle, yCircle);
    robot.mouseClick();
  }
};
