import * as DbService from '../db';
/**
 * This represents whether this record is debit or credit.
 * Debit: Amount is deducted from account.
 * Credit: Amount is added to account.
 */
export enum ExpenseType {
    DEBIT = 'debit',
    CREDIT = 'credit',
}

export type Expense = {
    id?: string; // this will be null for an expense that has not been saved
    labels: string[]; // metadata for the expense that could be used to search
    date: Date;
    type: ExpenseType;
    amount: number;
};

export type Filters = {
    labels?: string | string[];
    date?: Date;
    type?: ExpenseType;
    id?: string;
};

const KEY = 'expense';
const createExpense = DbService.createEntity(KEY);
const readExpense = DbService.listEntityById(KEY);

export class ExpenseModel {
    public static create(expense: Expense) {
        return createExpense(expense).then((expenseId: string) =>
            readExpense(expenseId)
        );
    }
}
