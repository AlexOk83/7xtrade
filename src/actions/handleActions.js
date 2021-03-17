import {
	ENABLE_ALERT_ERROR,
	//DISABLE_ALERT_ERROR,
	ENABLE_ALERT_SUCCESS,
	//DISABLE_ALERT_SUCCESS,
} from './types'
import { 
	cleanLocalStorageTerminal,
	cleanLocalStorageAffiliate
} from './optionsApp'

export const handleError = (error) => dispatch => {
	switch(error.code) {
		case 400:
			window.location.assign('/');
			break;
		case 401:
			dispatch(cleanLocalStorageTerminal());
			dispatch(cleanLocalStorageAffiliate());
			window.location.assign('/');
			break;
		case 404:
			window.location.assign('/not-found');
			break;
		default:
			dispatch({ 
				type: ENABLE_ALERT_ERROR,
				payload: error
			})
	}
}

export const handleSuccess = data => dispatch => {
	dispatch({ 
		type: ENABLE_ALERT_SUCCESS,
		payload: data
	})
}

export const serverError = err => dispatch => {
	dispatch({
		type: ENABLE_ALERT_ERROR,
		payload: {
			error: true,
			title: err.title ? err.title : 'Ошибка сервера',
			description: err.description
		}
	})
}