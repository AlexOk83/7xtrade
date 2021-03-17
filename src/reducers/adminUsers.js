import { 
	GET_ADMIN_USERS_LIST_REQUEST,
	GET_ADMIN_USERS_LIST_FAILURE,
	GET_ADMIN_USERS_LIST_SUCCESS,
} from '../actions/types';

const initialState = {
	list: []
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_ADMIN_USERS_LIST_REQUEST:
			return {
				...state,
			}
		case GET_ADMIN_USERS_LIST_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_ADMIN_USERS_LIST_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoaded: true
			}

		default: 
			return state;
	}
}