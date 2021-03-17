import {
	REGISTER_EMAIL_REQUEST,
	REGISTER_EMAIL_FAILURE,
	REGISTER_EMAIL_SUCCESS,
} from './types'
import { 
	fetchToAPI,
	createAuthLocalStorageTerminal,
	createAuthLocalStorageAffiliate
} from './optionsApp'

export const registerEmail = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/auth/register',
		data: data,
		method: 'POST',
		request: res => {
			return { 
				type: REGISTER_EMAIL_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: REGISTER_EMAIL_FAILURE,
				payload: res
			}
		},
		success: res => {
			data.affiliate ? dispatch(createAuthLocalStorageAffiliate(res)) : dispatch(createAuthLocalStorageTerminal(res))
			return { 
				type: REGISTER_EMAIL_SUCCESS,
				payload: res
			}
		}
	}))
}