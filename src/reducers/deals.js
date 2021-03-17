import { 
	GET_DEALS_LIST_REQUEST,
	GET_DEALS_LIST_FAILURE,
	GET_DEALS_LIST_SUCCESS,
} from '../actions/types';

const initialState = {
	list: [],
	isLoaded: false
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_DEALS_LIST_REQUEST:
			return {
				...state,
				loading: true,
			}
		case GET_DEALS_LIST_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case GET_DEALS_LIST_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
				isLoaded: true,
			}
			
		default: 
			return state;
	}
}