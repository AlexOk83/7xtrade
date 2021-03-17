import {
	SET_DEAL_REQUEST,
	SET_DEAL_FAILURE,
	SET_DEAL_SUCCESS,
	GET_DEALS_LIST_REQUEST,
	GET_DEALS_LIST_FAILURE,
	GET_DEALS_LIST_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getList = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/deals/getList',
		data: data,
		request: res => {
			return { 
				type: GET_DEALS_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_DEALS_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_DEALS_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}

export const setDeal = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/deals/setDeal',
		data: data,
		request: res => {
			return { 
				type: SET_DEAL_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: SET_DEAL_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: SET_DEAL_SUCCESS,
				payload: res
			}
		}
	}))
}