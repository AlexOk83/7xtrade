import { 
	REGISTER_EMAIL_REQUEST,
	REGISTER_EMAIL_FAILURE,
	REGISTER_EMAIL_SUCCESS,
} from '../actions/types';

const initialState = {

}

export default function(state = initialState, action ) {
	switch(action.type) {
		case REGISTER_EMAIL_REQUEST:
			return {
				...state,
				loading: true,
			}
		case REGISTER_EMAIL_FAILURE:
			return {
				...state,
				loading: false,
				...action.payload
			}
		case REGISTER_EMAIL_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
			}

		default: 
			return state;
	}
}