import {
	UPDATE_ADMIN_USER_REQUEST,
	UPDATE_ADMIN_USER_FAILURE,
	UPDATE_ADMIN_USER_SUCCESS,
	GET_ADMIN_USERS_LIST_REQUEST,
	GET_ADMIN_USERS_LIST_FAILURE,
	GET_ADMIN_USERS_LIST_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getList = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminUsers/getList',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_USERS_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_USERS_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_USERS_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}

export const updateUser = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminUsers/updateUser',
		data: data,
		request: res => {
			return { 
				type: UPDATE_ADMIN_USER_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: UPDATE_ADMIN_USER_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getList())
			return { 
				type: UPDATE_ADMIN_USER_SUCCESS,
				payload: res
			}
		}
	}))
}