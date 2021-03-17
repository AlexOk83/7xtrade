import { 
	RECOVER_PASSWORD_REQUEST,
	RECOVER_PASSWORD_FAILURE,
	RECOVER_PASSWORD_SUCCESS,
} from '../actions/types';

const initialState = {

}

export default function(state = initialState, action ) {
	switch(action.type) {
		case RECOVER_PASSWORD_REQUEST:
			return {
				loading: true,
			}
		case RECOVER_PASSWORD_FAILURE:
			return {
				...action.payload,
				loading: false,
			}
		case RECOVER_PASSWORD_SUCCESS:
			return {
				...action.payload,
				loading: false,
			}
		default: 
			return state;
	}
}