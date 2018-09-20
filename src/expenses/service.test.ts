const cars = [
    {
        _id: 1,
        colour: 'Colour',
        make: 'Make',
        model: 'Model',
    },
];
const mockModel = {
    create: jest.fn(() => Promise.resolve(cars[0])),
    find: jest.fn(() => Promise.resolve(cars)),
    findById: jest.fn(() => Promise.resolve(cars[0])),
};
jest.mock('./model', () => ({
    CarModel: mockModel,
}));

import * as CarService from './service';

describe('CarService', () => {
    describe('findCars', () => {
        it('calls find on the model with the filter', () => {
            const filters = {
                colour: 'Red',
            };

            CarService.findCars(filters);

            expect(mockModel.find).toBeCalledWith(filters);
        });
    });
    describe('getCarById', () => {
        it('calls findById on the model with the id', () => {
            const id = 123;

            CarService.getCarById(id);

            expect(mockModel.findById).toBeCalledWith(id);
        });
    });
    describe('saveCar', () => {
        it('calls create on the model', () => {
            const car = cars[0];

            CarService.saveCar(car);

            expect(mockModel.create).toBeCalledWith(car);
        });
    });
});
