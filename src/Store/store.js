import { createStore, compose } from "redux";
import rootReducer from "./rootReducer"

const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const initialState = {
    editData: {
        wheelType: "passanger",
        fuelType: "gasoline",
        price: 1000,
        productionYear: 2020,
        engineСapacity: 2000,
        batteryСapacity: 30,
        originCountry: "EU",
        fullWeight: "5-"
    }
}



const configureStore = initialState => (
    createStore(
        rootReducer,
        initialState,
        composeEnhancers()
    )
)

const store = configureStore(initialState);

export default store;