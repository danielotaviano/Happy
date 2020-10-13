import { Router } from 'express';
import orphanagesRouter from '../../../../modules/orphanages/infra/http/routes/orphanages.routes';

const routes = Router();

routes.use(orphanagesRouter);

export default routes;
