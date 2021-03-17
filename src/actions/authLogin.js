import {
	LOGIN_EMAIL_REQUEST,
	LOGIN_EMAIL_FAILURE,
	LOGIN_EMAIL_SUCCESS,
} from './types'
import { 
	fetchToAPI,
	createAuthLocalStorageTerminal,
	createAuthLocalStorageAffiliate
} from './optionsApp'

export const loginEmail = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/auth/login',
		data: data,
		method: 'POST',
		request: res => {
			return { 
				type: LOGIN_EMAIL_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: LOGIN_EMAIL_FAILURE,
				payload: res
			}
		},
		success: res => {
			data.affiliate ? dispatch(createAuthLocalStorageAffiliate(res)) : dispatch(createAuthLocalStorageTerminal(res))
			return { 
				type: LOGIN_EMAIL_SUCCESS,
				payload: res
			}
		}
	}))
}