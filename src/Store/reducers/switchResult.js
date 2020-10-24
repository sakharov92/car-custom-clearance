import { CALCULATE} from '../constants';

const isResultShown = (state = {}, { type, value }) => {
    switch (type) {
        case CALCULATE: {
            return value;
        }
        default: return state
    }
}


export default isResultShown;