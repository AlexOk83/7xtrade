import {
	GET_ADMIN_DEALS_LIST_REQUEST,
	GET_ADMIN_DEALS_LIST_FAILURE,
	GET_ADMIN_DEALS_LIST_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getList = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminDeals/getList',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_DEALS_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_DEALS_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_DEALS_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}