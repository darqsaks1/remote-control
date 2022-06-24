import { THttpStatus, TPrintScreenNumbers } from "./../ts/types/index";
import { TCoordinates } from "../ts/types/index";
import * as robot from "robotjs";

export const drawEvents: string[] = [
  "draw_circle",
  "draw_rectangle",
  "draw_square",
];
export const moveEvents: string[] = [
  "mouse_up",
  "mouse_left",
  "mouse_down",
  "mouse_right",
];

export const onGetMousePosition = () => {
  const coordinates: TCoordinates = robot.getMousePos();
  return coordinates;
};

export const HTTP_STATUS: THttpStatus = {
  OK: 200,
  BAD_RESPONSE: 404,
};

export const PRINT_SCREEN_NUMBERS: TPrintScreenNumbers = {
  CURRENT_MOUSE_POSITION: 100,
  IMAGE_FIGURE_CAPTURE: 200,
};

export const onGetJimpData = (): void => {
  const { x, y } = onGetMousePosition();
  return robot.screen.capture(
    x - PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION,
    y - PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION,
    PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
    PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE
  ).image;
};

export const PRINT_SCREEN = "prnt_scrn";

export const IMAGE_DECODE = "base64";
