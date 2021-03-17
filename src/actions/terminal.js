import {
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
} from './types'
import { 
	fetchToAPI,
} from './optionsApp'

export const getTerminalData = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/terminal/getData',
		data: data,
		request: res => {
			return { 
				type: GET_TERMINAL_DATA_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_TERMINAL_DATA_FAILURE,
				payload: res
			}
		},
		success: res => {
			//if(!res.chart.info) dispatch(exchangeIsClosed())

			return { 
				type: GET_TERMINAL_DATA_SUCCESS,
				payload: res
			}
		},
		serverError: res => {
			
		}
	}))
}

export const getChartList = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/terminal/getChartList',
		data: data,
		request: res => {
			return { 
				type: GET_TERMINAL_CHART_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_TERMINAL_CHART_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_TERMINAL_CHART_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getSearchChartList = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/terminal/getSearchChartList',
		data: data,
		request: res => {
			return { 
				type: GET_SEARCH_CHART_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_SEARCH_CHART_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_SEARCH_CHART_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getUserInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/terminal/getUserInfo',
		data: data,
		request: res => {
			return { 
				type: GET_USER_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_USER_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_USER_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const notice = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/notice' + window.location.search,
		data: data,
		request: res => {
			return { 
				type: GET_TERMINAL_DATA_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_TERMINAL_DATA_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_TERMINAL_DATA_SUCCESS,
				payload: res
			}
		}
	}))
}