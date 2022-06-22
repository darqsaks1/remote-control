import { TCoordinates } from "../../types";
import * as robot from "robotjs";

export const drawSquare = (radius: number) => {
  const coordinates: TCoordinates = robot.getMousePos();
  for (let i = 0; i < radius; i++) {
    robot.moveMouse(coordinates.x + i, coordinates.y);
    robot.mouseClick();
  }
  for (let i = 0; i < radius; i++) {
    robot.moveMouse(coordinates.x + radius, coordinates.y + i);
    robot.mouseClick();
  }
  for (let i = 0; i < radius; i++) {
    robot.moveMouse(coordinates.x + radius - i, coordinates.y + radius);
    robot.mouseClick();
  }
  for (let i = 0; i < radius; i++) {
    robot.moveMouse(coordinates.x, coordinates.y + radius - i);
    robot.mouseClick();
  }
};
