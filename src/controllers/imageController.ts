import Jimp from "jimp";
import {
  IMAGE_DECODE,
  onGetJimpData,
  PRINT_SCREEN_NUMBERS,
} from "./../utils/index";

export const imageController = (ws: any): void => {
  new Jimp(
    {
      data: onGetJimpData(),
      width: PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
      height: PRINT_SCREEN_NUMBERS.IMAGE_FIGURE_CAPTURE,
    },
    (err: Error, picture: any) => {
      if (err) {
        throw err;
      } else {
        picture.getBuffer(Jimp.MIME_PNG, (err: Error, string: string) => {
          if (err) {
            throw err;
          } else {
            ws.send(`prnt_scrn ${Buffer.from(string).toString(IMAGE_DECODE)}`);
          }
        });
      }
    }
  );
};
