import { drawSquare, drawCircle, drawRectangle } from "./draw";
import { drawEvents } from "../utils";

export const drawController = (message: string, event: string): void => {
  const [circle, rectangle, square] = drawEvents;
  const radius: number | string =
    (event !== rectangle && message.split(" ").pop()!) || 0;
  switch (event) {
    case circle:
      drawCircle(+radius);
      break;
    case rectangle:
      drawRectangle(message);
      break;
    case square:
      drawSquare(+radius);
      break;
    default:
      break;
  }
};
