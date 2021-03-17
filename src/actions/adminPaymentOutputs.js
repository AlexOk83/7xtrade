import {
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_REQUEST,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_FAILURE,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_SUCCESS,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_REQUEST,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_FAILURE,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getListCabinet = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminPaymentOutputs/getListCabinet',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getListAffiliate = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminPaymentOutputs/getListAffiliate',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_SUCCESS,
				payload: res
			}
		}
	}))
}