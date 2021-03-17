import {
	LOGOUT_EMAIL_REQUEST,
	LOGOUT_EMAIL_FAILURE,
	LOGOUT_EMAIL_SUCCESS,
} from './types'
import { 
	fetchToAPI,
	cleanLocalStorageTerminal,
	cleanLocalStorageAffiliate
} from './optionsApp'

export const logout = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/auth/logout',
		data: data,
		request: res => {
			return { 
				type: LOGOUT_EMAIL_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: LOGOUT_EMAIL_FAILURE,
				payload: res
			}
		},
		success: res => {
			data.affiliate ? dispatch(cleanLocalStorageAffiliate(res)) : dispatch(cleanLocalStorageTerminal(res))
			
			return { 
				type: LOGOUT_EMAIL_SUCCESS,
				payload: res
			}
		}
	}))
}