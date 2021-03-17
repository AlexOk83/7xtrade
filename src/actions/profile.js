import {
	USER_DELETE_REQUEST,
	USER_DELETE_FAILURE,
	USER_DELETE_SUCCESS,
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS,
	GET_PROFILE_INFO_REQUEST,
	GET_PROFILE_INFO_FAILURE,
	GET_PROFILE_INFO_SUCCESS,
	CHANGE_PROFILE_INFO_REQUEST,
	CHANGE_PROFILE_INFO_FAILURE,
	CHANGE_PROFILE_INFO_SUCCESS,
	RESTORE_VIRTUAL_BALANCE_REQUEST,
	RESTORE_VIRTUAL_BALANCE_FAILURE,
	RESTORE_VIRTUAL_BALANCE_SUCCESS,
} from './types'
import { fetchToAPI } from './optionsApp'
import { getUserInfo } from './terminal'

export const getProfileInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/profile/getInfo',
		data: data,
		request: res => {
			return { 
				type: GET_PROFILE_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_PROFILE_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_PROFILE_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const changeProfileInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/profile/changeProfileInfo',
		data: data,
		request: res => {
			return { 
				type: CHANGE_PROFILE_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CHANGE_PROFILE_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getProfileInfo())
			
			return { 
				type: CHANGE_PROFILE_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const changePassword = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/profile/changePassword',
		data: data,
		request: res => {
			return { 
				type: CHANGE_PASSWORD_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CHANGE_PASSWORD_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: CHANGE_PASSWORD_SUCCESS,
				payload: res
			}
		}
	}))
}

export const restoreBalance = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/profile/restoreBalance',
		data: data,
		request: res => {
			return { 
				type: RESTORE_VIRTUAL_BALANCE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: RESTORE_VIRTUAL_BALANCE_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getUserInfo({is_request: true}))
			return { 
				type: RESTORE_VIRTUAL_BALANCE_SUCCESS,
				payload: res
			}
		}
	}))
}

export const userDelete = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/profile/userDelete',
		data: data,
		request: res => {
			return { 
				type: USER_DELETE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: USER_DELETE_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: USER_DELETE_SUCCESS,
				payload: res
			}
		}
	}))
}