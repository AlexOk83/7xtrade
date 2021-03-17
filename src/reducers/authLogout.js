import { 
	LOGOUT_EMAIL_REQUEST,
	LOGOUT_EMAIL_FAILURE,
	LOGOUT_EMAIL_SUCCESS,
} from '../actions/types';

const initialState = {

}

export default function(state = initialState, action ) {
	switch(action.type) {
		case LOGOUT_EMAIL_REQUEST:
			return {
				loading: true,
			}
		case LOGOUT_EMAIL_FAILURE:
			return {
				...action.payload,
				loading: false,
			}
		case LOGOUT_EMAIL_SUCCESS:
			return {
				...action.payload,
				loading: false,
			}
		default: 
			return state;
	}
}