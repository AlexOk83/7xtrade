import {
	GET_ADMIN_APP_INFO_REQUEST,
	GET_ADMIN_APP_INFO_FAILURE,
	GET_ADMIN_APP_INFO_SUCCESS,
	UPDATE_ADMIN_APP_INFO_REQUEST,
	UPDATE_ADMIN_APP_INFO_FAILURE,
	UPDATE_ADMIN_APP_INFO_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminSettings/getInfo',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_APP_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_APP_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_APP_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const updateInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminSettings/updateInfo',
		data: data,
		request: res => {
			return { 
				type: UPDATE_ADMIN_APP_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: UPDATE_ADMIN_APP_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getInfo())
			
			return { 
				type: UPDATE_ADMIN_APP_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}