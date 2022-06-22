import { drawSquare, drawCircle, drawRectangle } from "./draw";
import { drawEvents } from "../utils";

export const drawController = async (message: string, event: string) => {
  const [circle, rectangle, square] = drawEvents;
  const radius: number | string =
    (event !== rectangle && message.split(" ").pop()!) || 0;
  if (event === circle) {
    drawCircle(+radius);
  } else if (event === square) {
    drawSquare(+radius);
  } else {
    drawRectangle(+rectangle);
  }
};
