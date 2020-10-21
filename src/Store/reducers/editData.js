import { WHEEL_TYPE, FUEL_TYPE, PRICE, PRODUCTION_YEAR, ENGINE_CAPACITY, BATTERY_CAPACITY, ORIGIN_COUNTRY, FULL_WEIGHT } from '../constants';

const editData = (state = {}, { type, value }) => {
    switch (type) {
        case WHEEL_TYPE: {
            let newState = Object.assign({}, state);
            newState.wheelType = value;
            return newState;
        }
        case FUEL_TYPE: {
            let newState = Object.assign({}, state);
            newState.fuelType = value;
            return newState;
        }
        case PRICE: {
            let newState = Object.assign({}, state);
            newState.price = value;
            return newState;
        }
        case PRODUCTION_YEAR: {
            let newState = Object.assign({}, state);
            newState.productionYear = value;
            return newState;
        }
        case ENGINE_CAPACITY: {
            let newState = Object.assign({}, state);
            newState.engineСapacity = value;
            return newState;
        }
        case BATTERY_CAPACITY: {
            let newState = Object.assign({}, state);
            newState.batteryСapacity = value;
            return newState;
        }
        case ORIGIN_COUNTRY: {
            let newState = Object.assign({}, state);
            newState.originCountry = value;
            return newState;
        }
        case FULL_WEIGHT: {
            let newState = Object.assign({}, state);
            newState.fullWeight = value;
            return newState;
        }
        default:
            return state
    }
}

export default editData;