import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import RegisterReducer from './RegisterReducer';
import AddPlaceReducer from './AddPlaceReducer';
import AddResourceReducer from './AddResourceReducer';
import FetchPlaceReducer from './FetchPlaceReducer'
import EventReducer from './EventReducer'
import FetchResourceReducer from './FetchResourceReducer'

export default combineReducers({
    auth: AuthReducer,
    register: RegisterReducer,
    addPlace: AddPlaceReducer,
    addResource: AddResourceReducer,
    fetchPlace: FetchPlaceReducer,
    fetchResource: FetchResourceReducer,
    event: EventReducer,
});