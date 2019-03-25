import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
    auth: AuthReducer,
    register: RegisterReducer
});