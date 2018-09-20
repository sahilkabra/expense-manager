import { CarFilters, CarModel, CarSchema } from './model';
import { carSchemaToModel, transformFilter } from './transformers';

describe('carSchemaToModel', () => {
    it('transforms db schema to view model', () => {
        const carSchema: CarSchema = new CarModel({
            colour: 'colour',
            make: 'make',
            model: 'model',
        });
        const expected = {
            colour: 'colour',
            id: carSchema._id,
            make: 'make',
            model: 'model',
            url: `/cars/${carSchema._id}`,
        };

        const actual = carSchemaToModel(carSchema);

        expect(actual).toEqual(expected);
    });
});

describe('transformFilter', () => {
    it('when filters contain only string, it transforms it correctly', () => {
        const filter: CarFilters = {
            colour: 'color',
            make: 'make',
        };

        const expected = {
            ...filter,
        };

        const actual = transformFilter(filter);

        expect(actual).toEqual(expected);
    });
    it('when filters contain arrays, it adds an in clause', () => {
        const filter: CarFilters = {
            colour: 'color',
            make: ['make', 'make1'],
        };

        const expected = {
            colour: filter.colour,
            make: { $in: filter.make },
        };

        const actual = transformFilter(filter);

        expect(actual).toEqual(expected);
    });
    it('when filter is empty, it returns an emty object', () => {
        const filter: CarFilters = {};

        const expected = {};

        const actual = transformFilter(filter);

        expect(actual).toEqual(expected);
    });
    it('when filter is null, it returns an emty object', () => {
        const filter: any = null;

        const expected = {};

        const actual = transformFilter(filter);

        expect(actual).toEqual(expected);
    });
});
