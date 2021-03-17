import {
	GET_INVESTMENTS_REQUEST,
	GET_INVESTMENTS_FAILURE,
	GET_INVESTMENTS_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getInvestments = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/site/getInvestments',
		data: data,
		request: res => {
			return { 
				type: GET_INVESTMENTS_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_INVESTMENTS_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_INVESTMENTS_SUCCESS,
				payload: res
			}
		}
	}))
}