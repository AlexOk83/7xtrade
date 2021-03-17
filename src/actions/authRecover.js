import {
	RECOVER_PASSWORD_REQUEST,
	RECOVER_PASSWORD_FAILURE,
	RECOVER_PASSWORD_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const recoverPassword = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/auth/recover',
		data: data,
		request: res => {
			return { 
				type: RECOVER_PASSWORD_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: RECOVER_PASSWORD_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: RECOVER_PASSWORD_SUCCESS,
				payload: res
			}
		}
	}))
}