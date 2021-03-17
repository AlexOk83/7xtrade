import {
	CHANGE_AFFILIATE_PASSWORD_REQUEST,
	CHANGE_AFFILIATE_PASSWORD_FAILURE,
	CHANGE_AFFILIATE_PASSWORD_SUCCESS,
	GET_AFFILIATE_PROFILE_INFO_REQUEST,
	GET_AFFILIATE_PROFILE_INFO_FAILURE,
	GET_AFFILIATE_PROFILE_INFO_SUCCESS,
	CHANGE_AFFILIATE_WALLET_INFO_REQUEST,
	CHANGE_AFFILIATE_WALLET_INFO_FAILURE,
	CHANGE_AFFILIATE_WALLET_INFO_SUCCESS,
	CHANGE_AFFILIATE_PROFILE_INFO_REQUEST,
	CHANGE_AFFILIATE_PROFILE_INFO_FAILURE,
	CHANGE_AFFILIATE_PROFILE_INFO_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getProfileInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateProfile/getInfo',
		data: data,
		request: res => {
			return { 
				type: GET_AFFILIATE_PROFILE_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_AFFILIATE_PROFILE_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_AFFILIATE_PROFILE_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const changeProfileInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateProfile/changeProfileInfo',
		data: data,
		request: res => {
			return { 
				type: CHANGE_AFFILIATE_PROFILE_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CHANGE_AFFILIATE_PROFILE_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: CHANGE_AFFILIATE_PROFILE_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const changeWalletInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateProfile/changeWalletInfo',
		data: data,
		request: res => {
			return { 
				type: CHANGE_AFFILIATE_WALLET_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CHANGE_AFFILIATE_WALLET_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: CHANGE_AFFILIATE_WALLET_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const changePassword = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateProfile/changePassword',
		data: data,
		request: res => {
			return { 
				type: CHANGE_AFFILIATE_PASSWORD_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CHANGE_AFFILIATE_PASSWORD_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: CHANGE_AFFILIATE_PASSWORD_SUCCESS,
				payload: res
			}
		}
	}))
}