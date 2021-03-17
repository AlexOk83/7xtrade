import {
	SEND_OUTPUT_REQUEST,
	SEND_OUTPUT_FAILURE,
	SEND_OUTPUT_SUCCESS,
	GET_BALANCE_REQUEST,
	GET_BALANCE_FAILURE,
	GET_BALANCE_SUCCESS,
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
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const increase = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/getUrlIncrease',
		data: data,
		request: res => {
			return { 
				type: GET_URL_INCREASE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_URL_INCREASE_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_URL_INCREASE_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getIncreaseInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/getIncreaseInfo',
		data: data,
		request: res => {
			return { 
				type: GET_INCREASE_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_INCREASE_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_INCREASE_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const output = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/output',
		data: data,
		request: res => {
			return { 
				type: SEND_OUTPUT_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: SEND_OUTPUT_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: SEND_OUTPUT_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getBalance = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/getBalance',
		data: data,
		request: res => {
			return { 
				type: GET_BALANCE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_BALANCE_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_BALANCE_SUCCESS,
				payload: res
			}
		}
	}))
}

export const historyIncreases = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/historyIncreases',
		data: data,
		request: res => {
			return { 
				type: GET_HISTORY_INCREASES_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_HISTORY_INCREASES_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_HISTORY_INCREASES_SUCCESS,
				payload: res
			}
		}
	}))
}

export const historyOutputs = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/payment/historyOutputs',
		data: data,
		request: res => {
			return { 
				type: GET_HISTORY_OUTPUT_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_HISTORY_OUTPUT_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_HISTORY_OUTPUT_SUCCESS,
				payload: res
			}
		}
	}))
}