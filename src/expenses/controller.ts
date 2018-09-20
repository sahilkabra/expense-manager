/**
 * The controller.
 * It gets params from the request and return response.
 */
import { Request, Response } from 'express';

import logger from '../logger';
import { Car } from './model';
import * as CarService from './service';

// TODO: validate request params and add tests for them
export default {
    create: async (request: Request, response: Response) => {
        const cars: Car[] = [].concat(request.body);
        const savedCars = await Promise.all(
            cars.map(async car => await CarService.saveCar(car))
        );
        response.send(savedCars);
    },
    getCar: async (request: Request, response: Response) => {
        logger.debug(`retrieve car ${request.params}`);
        const carId = request.params.id;
        const car = await CarService.getCarById(carId);
        response.send(car);
    },
    getCars: async (request: Request, response: Response) => {
        // TODO: Add support for pagination and sorting
        logger.debug(`retrieve car ${request.query}`);
        const cars = await CarService.findCars(request.query);
        response.send(cars);
    },
};
