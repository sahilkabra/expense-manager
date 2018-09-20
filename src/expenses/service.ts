/**
 * Services related to cars.
 */
import logger from '../logger';
import { ExpenseType, Expense, ExpenseFilter } from './model';
import { carSchemaToModel, transformFilter } from './transformers';

const errorHandler = (err: any) => {
    logger.error(`Unable to save car model: ${err}`);
    throw err;
};
/**
 * Saves a new car to the DB.
 *
 * @param car: The car to be saved to the DB.
 * @return: The id of the newly saved car.
 */
export function createExpense(car: Car) {
    return CarModel.create({ ...car })
        .then(carSchemaToModel)
        .catch(errorHandler);
}

/**
 * Retrieve a car by its id.
 *
 * @param id: The car id to retrieve.
 * @return: The car if found.
 */
export function getCarById(id: number) {
    return CarModel.findById(id)
        .then(carSchemaToModel)
        .catch(errorHandler);
}

/**
 * Retrieve cars by its attributes.
 *
 * @param filters: The car attributes to query for.
 * @return: A list of cars.
 */
export function findCars(filters: CarFilters) {
    return CarModel.find(transformFilter(filters))
        .then((cars: CarSchema[]) => cars.map(carSchemaToModel))
        .catch(errorHandler);
}
