import { 
	SEND_AFFILIATE_OUTPUT_REQUEST,
	SEND_AFFILIATE_OUTPUT_FAILURE,
	SEND_AFFILIATE_OUTPUT_SUCCESS,
	GET_AFFILIATE_BALANCE_REQUEST,
	GET_AFFILIATE_BALANCE_FAILURE,
	GET_AFFILIATE_BALANCE_SUCCESS,
	GET_AFFILIATE_HISTORY_OUTPUT_REQUEST,
	GET_AFFILIATE_HISTORY_OUTPUT_FAILURE,
	GET_AFFILIATE_HISTORY_OUTPUT_SUCCESS,
} from '../actions/types';

const initialState = {
	output: {},
	promocode: {},
	history_outputs: {
		list: []
	},
	history_increases: {
		list: []
	}
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case SEND_AFFILIATE_OUTPUT_REQUEST:
			return {
				...state,
			}
		case SEND_AFFILIATE_OUTPUT_FAILURE:
			return {
				...state,
				output: action.payload,
			}
		case SEND_AFFILIATE_OUTPUT_SUCCESS:
			return {
				...state,
				output: action.payload,
			}

		case GET_AFFILIATE_BALANCE_REQUEST:
			return {
				...state,
			}
		case GET_AFFILIATE_BALANCE_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_AFFILIATE_BALANCE_SUCCESS:
			return {
				...state,
				...action.payload,
				isLoaded: true
			}

		case GET_AFFILIATE_HISTORY_OUTPUT_REQUEST:
			return {
				...state,
			}
		case GET_AFFILIATE_HISTORY_OUTPUT_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_AFFILIATE_HISTORY_OUTPUT_SUCCESS:
			return {
				...state,
				history_outputs: {
					...action.payload,
					isLoaded: true
				}
			}

		default: 
			return state;
	}
}