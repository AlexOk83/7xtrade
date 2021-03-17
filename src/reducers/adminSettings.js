import { 
	GET_ADMIN_APP_INFO_REQUEST,
	GET_ADMIN_APP_INFO_FAILURE,
	GET_ADMIN_APP_INFO_SUCCESS,
} from '../actions/types';

const initialState = {
	
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_ADMIN_APP_INFO_REQUEST:
			return {
				...state,
			}
		case GET_ADMIN_APP_INFO_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_ADMIN_APP_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoaded: true
			}

		default: 
			return state;
	}
}