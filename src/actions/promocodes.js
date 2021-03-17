import {
	CHECK_PROMOCODE_REQUEST,
	CHECK_PROMOCODE_FAILURE,
	CHECK_PROMOCODE_SUCCESS,
	GET_HISTORY_PROMOCODES_REQUEST,
	GET_HISTORY_PROMOCODES_FAILURE,
	GET_HISTORY_PROMOCODES_SUCCESS
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const check = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/promocodes/check',
		data: data,
		request: res => {
			return { 
				type: CHECK_PROMOCODE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CHECK_PROMOCODE_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: CHECK_PROMOCODE_SUCCESS,
				payload: res
			}
		}
	}))
}

export const history = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/promocodes/history',
		data: data,
		request: res => {
			return { 
				type: GET_HISTORY_PROMOCODES_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_HISTORY_PROMOCODES_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_HISTORY_PROMOCODES_SUCCESS,
				payload: res
			}
		}
	}))
}
