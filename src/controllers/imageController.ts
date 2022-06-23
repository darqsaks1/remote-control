import * as robot from "robotjs";
import Jimp from "jimp";
import {
  IMAGE_DECODE,
  onGetMousePosition,
  PRINT_SCREEN_NUMBERS,
} from "./../utils/index";

export const imageController = (ws: any): void => {
  const { x, y } = onGetMousePosition();
  new Jimp(
    {
      data: robot.screen.capture(
        x - PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION,
        y - PRINT_SCREEN_NUMBERS.CURRENT_MOUSE_POSITION,
        PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
        PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE
      ).image,
      width: PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
      height: PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
    },
    (err: Error, picture: any) => {
      if (err) {
        throw err;
      } else {
        picture.getBuffer(
          Jimp.PNG_FILTER_AUTO,
          (err: Error, string: string) => {
            if (err) {
              throw err;
            } else {
              ws.send(
                `prnt_scrn ${Buffer.from(string).toString(IMAGE_DECODE)}`
              );
              console.log(`message prnt_scrn`);
            }
          }
        );
      }
    }
  );
};
