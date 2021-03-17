import {
	UPDATE_STREAM,
	SET_DEAL_REQUEST,
	SET_DEAL_FAILURE,
	SET_DEAL_SUCCESS,
	GET_USER_INFO_REQUEST,
	GET_USER_INFO_FAILURE,
	GET_USER_INFO_SUCCESS,
	GET_TERMINAL_DATA_REQUEST,
	GET_TERMINAL_DATA_FAILURE,
	GET_TERMINAL_DATA_SUCCESS,
	GET_SEARCH_CHART_LIST_REQUEST,
	GET_SEARCH_CHART_LIST_FAILURE,
	GET_SEARCH_CHART_LIST_SUCCESS,
	GET_TERMINAL_CHART_LIST_REQUEST,
	GET_TERMINAL_CHART_LIST_FAILURE,
	GET_TERMINAL_CHART_LIST_SUCCESS,
} from '../actions/types';

const initialState = {
	search_chart_list: []
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_TERMINAL_DATA_REQUEST:
			return {
				...state,
				loading: true,
			}
		case GET_TERMINAL_DATA_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case GET_TERMINAL_DATA_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
				isLoaded: true,
			}

		case GET_TERMINAL_CHART_LIST_REQUEST:
			return {
				...state,
			}
		case GET_TERMINAL_CHART_LIST_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_TERMINAL_CHART_LIST_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case GET_SEARCH_CHART_LIST_REQUEST:
			return {
				...state,
			}
		case GET_SEARCH_CHART_LIST_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_SEARCH_CHART_LIST_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case SET_DEAL_REQUEST:
			return {
				...state,
			}
		case SET_DEAL_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case SET_DEAL_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case GET_USER_INFO_REQUEST:
			return {
				...state,
			}
		case GET_USER_INFO_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_USER_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		case UPDATE_STREAM:
			return {
				...state,
				strike: action.payload,
			}
		default: 
			return state;
	}
}