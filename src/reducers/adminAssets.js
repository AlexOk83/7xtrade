import { 
	GET_ADMIN_ASSETS_LIST_REQUEST,
	GET_ADMIN_ASSETS_LIST_FAILURE,
	GET_ADMIN_ASSETS_LIST_SUCCESS,
	GET_ADMIN_CATEGORIES_ASSETS_LIST_REQUEST,
	GET_ADMIN_CATEGORIES_ASSETS_LIST_FAILURE,
	GET_ADMIN_CATEGORIES_ASSETS_LIST_SUCCESS,
} from '../actions/types';

const initialState = {
	assets: {
		list: []
	},
	categories: {
		list: []
	},
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_ADMIN_ASSETS_LIST_REQUEST:
			return {
				...state,
			}
		case GET_ADMIN_ASSETS_LIST_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_ADMIN_ASSETS_LIST_SUCCESS:
			return {
				...state,
				assets: {
					isLoaded: true,
					...action.payload
				}
			}

		case GET_ADMIN_CATEGORIES_ASSETS_LIST_REQUEST:
			return {
				...state,
			}
		case GET_ADMIN_CATEGORIES_ASSETS_LIST_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_ADMIN_CATEGORIES_ASSETS_LIST_SUCCESS:
			return {
				...state,
				categories: {
					isLoaded: true,
					...action.payload
				}
			}

		default: 
			return state;
	}
}