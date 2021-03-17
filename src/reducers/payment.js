import { 
	SEND_OUTPUT_REQUEST,
	SEND_OUTPUT_FAILURE,
	SEND_OUTPUT_SUCCESS,
	GET_BALANCE_REQUEST,
	GET_BALANCE_FAILURE,
	GET_BALANCE_SUCCESS,
	CHECK_PROMOCODE_REQUEST,
	CHECK_PROMOCODE_FAILURE,
	CHECK_PROMOCODE_SUCCESS,
	GET_URL_INCREASE_REQUEST,
	GET_URL_INCREASE_FAILURE,
	GET_URL_INCREASE_SUCCESS,
	GET_INCREASE_INFO_REQUEST,
	GET_INCREASE_INFO_FAILURE,
	GET_INCREASE_INFO_SUCCESS,
	GET_HISTORY_OUTPUT_REQUEST,
	GET_HISTORY_OUTPUT_FAILURE,
	GET_HISTORY_OUTPUT_SUCCESS,
	GET_HISTORY_INCREASES_REQUEST,
	GET_HISTORY_INCREASES_FAILURE,
	GET_HISTORY_INCREASES_SUCCESS,
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
		case GET_URL_INCREASE_REQUEST:
			return {
				...state,
			}
		case GET_URL_INCREASE_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_URL_INCREASE_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case GET_INCREASE_INFO_REQUEST:
			return {
				...state,
			}
		case GET_INCREASE_INFO_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_INCREASE_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case SEND_OUTPUT_REQUEST:
			return {
				...state,
			}
		case SEND_OUTPUT_FAILURE:
			return {
				...state,
				output: action.payload,
			}
		case SEND_OUTPUT_SUCCESS:
			return {
				...state,
				output: action.payload,
			}

		case GET_BALANCE_REQUEST:
			return {
				...state,
			}
		case GET_BALANCE_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_BALANCE_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case CHECK_PROMOCODE_REQUEST:
			return {
				...state,
			}
		case CHECK_PROMOCODE_FAILURE:
			return {
				...state,
				promocode: action.payload,
			}
		case CHECK_PROMOCODE_SUCCESS:
			return {
				...state,
				promocode: action.payload,
			}

		case GET_HISTORY_OUTPUT_REQUEST:
			return {
				...state,
			}
		case GET_HISTORY_OUTPUT_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_HISTORY_OUTPUT_SUCCESS:
			return {
				...state,
				history_outputs: {
					...action.payload,
					isLoaded: true
				}
			}

		case GET_HISTORY_INCREASES_REQUEST:
			return {
				...state,
			}
		case GET_HISTORY_INCREASES_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_HISTORY_INCREASES_SUCCESS:
			return {
				...state,
				history_increases: {
					...action.payload,
					isLoaded: true
				}
			}

		default: 
			return state;
	}
}