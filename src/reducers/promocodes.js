import { 
	GET_HISTORY_PROMOCODES_REQUEST,
	GET_HISTORY_PROMOCODES_FAILURE,
	GET_HISTORY_PROMOCODES_SUCCESS
} from '../actions/types';

const initialState = {
	list: [],
	isLoaded: false
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_HISTORY_PROMOCODES_REQUEST:
			return {
				...state,
			}
		case GET_HISTORY_PROMOCODES_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_HISTORY_PROMOCODES_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoaded: true
			}

		default: 
			return state;
	}
}