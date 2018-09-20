import * as express from 'express';

import CarController from './car/controller';

const hello = (req: any, res: {json: () => object}) => {
    res.json({
        message: 'Hello there!',
    });
};
const router = express.Router();
router.get('/', hello);
router.get('/hello', hello);
router.post('/cars', CarController.create);
router.get('/cars', CarController.getCars);
router.get('/cars/:id', CarController.getCar);

export { router as Router };
