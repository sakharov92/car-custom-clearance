


import { WHEEL_TYPE, FUEL_TYPE, PRICE, PRODUCTION_YEAR, ENGINE_CAPACITY, BATTERY_CAPACITY, ORIGIN_COUNTRY, FULL_WEIGHT } from '../constants';
export const EDIT_WHEEL_TYPE = (value) => {
    return {
        type: WHEEL_TYPE,
        value: value
    }
}

export const EDIT_FUEL_TYPE = (value) => {
    return {
        type: FUEL_TYPE,
        value: value
    }
}
export const EDIT_PRICE = (value) => {
    return {
        type: PRICE,
        value: value
    }
}
export const EDIT_PRODUCTION_YEAR = (value) => {
    return {
        type: PRODUCTION_YEAR,
        value: value
    }
}
export const EDIT_ENGINE_CAPACITY = (value) => {
    return {
        type: ENGINE_CAPACITY,
        value: value
    }
}
export const EDIT_BATTERY_CAPACITY = (value) => {
    return {
        type: BATTERY_CAPACITY,
        value: value
    }
}
export const EDIT_ORIGIN_COUNTRY = (value) => {
    return {
        type: ORIGIN_COUNTRY,
        value: value
    }
}
export const EDIT_FULL_WEIGHT = (value) => {
    return {
        type: FULL_WEIGHT,
        value: value
    }
}
