import { combineReducers } from 'redux';
import resevation from './reservation';
import auth from './auth';
import savePlace from './place';

export default combineReducers({
	reservation: resevation,
	auth: auth,
	savePlace: savePlace,
});
