import { 
	GET_APP_INFO_REQUEST,
	GET_APP_INFO_FAILURE,
	GET_APP_INFO_SUCCESS,
} from '../actions/types';

const initialState = {
	name: '',
	domain: '',
	mail: ''
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_APP_INFO_REQUEST:
			return {
				...state,
				loading: true,
			}
		case GET_APP_INFO_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case GET_APP_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoaded: true,
				loading: false,
			}

		default: 
			return state;
	}
}