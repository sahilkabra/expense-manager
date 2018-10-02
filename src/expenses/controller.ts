/**
 * The controller.
 * It gets params from the request and return response.
 */
import { Request, Response } from 'express';

import * as ExpenseService from './service';

export const ExpenseController = {
    create: async (request: Request, response: Response) => {
        const expenses: ExpenseService.Expense[] = [].concat(request.body);
        const savedExpenses = await ExpenseService.createExpense(expenses);
        response.send(savedExpenses);
    },
    getExpenses: async (request: Request, response: Response) => {
        response.send('to be implemented');
    },
};
