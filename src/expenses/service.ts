/**
 * Services related to cars.
 */
import { logger } from '../logger';
import { Expense, ExpenseModel } from './model';

const errorHandler = (err: any) => {
    logger.error(`Unable to save expense: ${err}`);
};
/**
 * Saves a new car to the DB.
 *
 * @param car: The car to be saved to the DB.
 * @return: The id of the newly saved car.
 */
export function createExpense(expenses: Expense | Expense[]) {
    const exp = Array.isArray(expenses) ? expenses : [expenses];
    return Promise.all(exp.map(e => ExpenseModel.create(e))).catch(
        errorHandler
    );
}

export { Expense };
