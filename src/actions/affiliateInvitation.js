import {
	GET_AFFILIATE_INFO_REQUEST,
	GET_AFFILIATE_INFO_FAILURE,
	GET_AFFILIATE_INFO_SUCCESS,
	GET_AFFILIATE_HISTORY_REQUEST,
	GET_AFFILIATE_HISTORY_FAILURE,
	GET_AFFILIATE_HISTORY_SUCCESS,
	CREATE_AFFILIATE_INVITATION_LINK_REQUEST,
	CREATE_AFFILIATE_INVITATION_LINK_FAILURE,
	CREATE_AFFILIATE_INVITATION_LINK_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateInvitation/getInfo',
		data: data,
		request: res => {
			return { 
				type: GET_AFFILIATE_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_AFFILIATE_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_AFFILIATE_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}

export const createLink = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateInvitation/createLink',
		data: data,
		request: res => {
			return { 
				type: CREATE_AFFILIATE_INVITATION_LINK_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: CREATE_AFFILIATE_INVITATION_LINK_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getInfo())

			return { 
				type: CREATE_AFFILIATE_INVITATION_LINK_SUCCESS,
				payload: res
			}
		}
	}))
}

export const history = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/affiliateInvitation/history',
		data: data,
		request: res => {
			return { 
				type: GET_AFFILIATE_HISTORY_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_AFFILIATE_HISTORY_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_AFFILIATE_HISTORY_SUCCESS,
				payload: res
			}
		}
	}))
}