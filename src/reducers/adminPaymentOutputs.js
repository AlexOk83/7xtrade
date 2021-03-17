import { 
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_REQUEST,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_FAILURE,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_SUCCESS,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_REQUEST,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_FAILURE,
	GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_SUCCESS,
} from '../actions/types';

const initialState = {
	cabinet_outputs: {
		list: []
	},
	affiliate_outputs: {
		list: []
	}
}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_REQUEST:
			return {
				...state,
			}
		case GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_ADMIN_PAYMENT_OUTPUTS_LIST_CABINET_SUCCESS:
			return {
				...state,
				cabinet_outputs: {
					...action.payload,
					isLoaded: true
				}
			}

		case GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_REQUEST:
			return {
				...state,
			}
		case GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_FAILURE:
			return {
				...state,
				...action.payload,
			}
		case GET_ADMIN_PAYMENT_OUTPUTS_LIST_AFFILIATE_SUCCESS:
			return {
				...state,
				affiliate_outputs: {
					...action.payload,
					isLoaded: true
				}
			}

		default: 
			return state;
	}
}