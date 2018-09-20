/**
 * Helper pure functions to transform data
 */
import { Car, CarFilters, CarSchema } from './model';

/**
 * Converts an object from the db to an object for the view.
 */
export const carSchemaToModel: (car: CarSchema) => Car = (car: CarSchema) => ({
    colour: car.colour,
    id: car._id,
    make: car.make,
    model: car.model,
    url: car.url,
});

/**
 * Convert filters to a state so that they can be used in a query by Mongoose.
 */
export const transformFilter = (filters: CarFilters) => {
    if (!filters) {
        return {};
    }
    return Object.keys(filters).reduce((f: any, k: string) => {
        if (Array.isArray(filters[k])) {
            f[k] = { $in: filters[k] };
        } else {
            f[k] = filters[k];
        }
        return f;
    }, {});
};
