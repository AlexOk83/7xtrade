import { 
	LOGIN_EMAIL_REQUEST,
	LOGIN_EMAIL_FAILURE,
	LOGIN_EMAIL_SUCCESS,
} from '../actions/types';

const initialState = {

}

export default function(state = initialState, action ) {
	switch(action.type) {
		case LOGIN_EMAIL_REQUEST:
			return {
				...state,
				loading: true,
			}
		case LOGIN_EMAIL_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case LOGIN_EMAIL_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		default: 
			return state;
	}
}