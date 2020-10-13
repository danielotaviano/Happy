import { Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from '../../../../../config/upload';

const orphanagesRouter = Router();
const upload = multer(uploadConfig);

const orphanagesController = new OrphanagesController();

orphanagesRouter.post(
  '/orphanages',
  upload.array('images'),
  orphanagesController.create,
);
orphanagesRouter.get('/orphanages', orphanagesController.index);
orphanagesRouter.get('/orphanages/:id', orphanagesController.show);

export default orphanagesRouter;
