import * as express from 'express';

import { ExpenseController } from '../expenses';

const hello = (req: any, res: express.Response) => {
    res.json({
        message: 'Hello there!',
    });
};
const router = express.Router();
router.get('/', hello);
router.get('/hello', hello);
router.post('/expenses', ExpenseController.create);
router.get('/expenses', ExpenseController.getExpenses);
router.get('/expenses/:id', ExpenseController.getExpenses);

export { router as Router };
