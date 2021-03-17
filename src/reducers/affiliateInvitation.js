import { 
	GET_AFFILIATE_INFO_REQUEST,
	GET_AFFILIATE_INFO_FAILURE,
	GET_AFFILIATE_INFO_SUCCESS,
	GET_AFFILIATE_HISTORY_REQUEST,
	GET_AFFILIATE_HISTORY_FAILURE,
	GET_AFFILIATE_HISTORY_SUCCESS,
	CREATE_AFFILIATE_INVITATION_LINK_REQUEST,
	CREATE_AFFILIATE_INVITATION_LINK_FAILURE,
	CREATE_AFFILIATE_INVITATION_LINK_SUCCESS,
} from '../actions/types';

const initialState = {
	list: [],
	offers: [],
	history: {
		list: []
	}
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_AFFILIATE_INFO_REQUEST:
			return {
				...state,
			}
		case GET_AFFILIATE_INFO_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_AFFILIATE_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoaded: true
			}

		case CREATE_AFFILIATE_INVITATION_LINK_REQUEST:
			return {
				...state,
			}
		case CREATE_AFFILIATE_INVITATION_LINK_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case CREATE_AFFILIATE_INVITATION_LINK_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case GET_AFFILIATE_HISTORY_REQUEST:
			return {
				...state,
			}
		case GET_AFFILIATE_HISTORY_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_AFFILIATE_HISTORY_SUCCESS:
			return {
				...state,
				isLoaded: true,
				history: {
					isLoaded: true,
					...action.payload,
				}
			}


		default: 
			return state;
	}
}