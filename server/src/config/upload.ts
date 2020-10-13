import { v4 } from 'uuid';
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', 'shared', 'uploads'),
    filename: (req, file, cb) => {
      const fileName = `${v4()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};
