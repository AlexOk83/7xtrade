import { 
	GET_INVESTMENTS_REQUEST,
	GET_INVESTMENTS_FAILURE,
	GET_INVESTMENTS_SUCCESS,
} from '../actions/types';

const initialState = {
	investments: null
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_INVESTMENTS_REQUEST:
			return {
				...state,
				loading: true,
			}
		case GET_INVESTMENTS_FAILURE:
			return {
				...state,
				investments: action.payload,
				loading: false,
			}
		case GET_INVESTMENTS_SUCCESS:
			return {
				...state,
				investments: action.payload,
				isLoaded: true,
				loading: false,
			}

		default: 
			return state;
	}
}