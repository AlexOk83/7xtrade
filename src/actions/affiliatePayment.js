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
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const output = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliatePayment/output',
		data: data,
		request: res => {
			return { 
				type: SEND_AFFILIATE_OUTPUT_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: SEND_AFFILIATE_OUTPUT_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: SEND_AFFILIATE_OUTPUT_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getBalance = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliatePayment/getBalance',
		data: data,
		request: res => {
			return { 
				type: GET_AFFILIATE_BALANCE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_AFFILIATE_BALANCE_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_AFFILIATE_BALANCE_SUCCESS,
				payload: res
			}
		}
	}))
}

export const historyOutputs = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliatePayment/historyOutputs',
		data: data,
		request: res => {
			return { 
				type: GET_AFFILIATE_HISTORY_OUTPUT_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_AFFILIATE_HISTORY_OUTPUT_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_AFFILIATE_HISTORY_OUTPUT_SUCCESS,
				payload: res
			}
		}
	}))
}