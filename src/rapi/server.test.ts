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
jest.mock('./car/service', () => ({
    findCars: mockModel.find,
    getCarById: mockModel.findById,
    saveCar: mockModel.create,
}));

import * as request from 'supertest';

import server from './server';

describe('server', () => {
    it('responds with hello on request to /hello', async () => {
        const response = await request(server).get('/hello');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello there!');
    });
    it('calls controller create method on post to /cars', async () => {
        await request(server).post('/cars');

        expect(mockModel.create).toBeCalled();
    });
    it('calls controller getCar method on get to /car/:id', async () => {
        await request(server).get('/cars/1');

        expect(mockModel.findById).toBeCalledWith('1');
    });
    it('calls controller getCars method on GET to /cars', async () => {
        await request(server).get('/cars');

        expect(mockModel.find).toBeCalled();
    });
});
