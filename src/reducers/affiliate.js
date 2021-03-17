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
} from '../actions/types';

const initialState = {

}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_AFFILIATE_PROFILE_INFO_REQUEST:
			return {
				...state,
				loading: true,
			}
		case GET_AFFILIATE_PROFILE_INFO_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case GET_AFFILIATE_PROFILE_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
			}

		case CHANGE_AFFILIATE_PASSWORD_REQUEST:
			return {
				...state,
			}
		case CHANGE_AFFILIATE_PASSWORD_FAILURE:
			return {
				...state,
				changePassword: action.payload,
			}
		case CHANGE_AFFILIATE_PASSWORD_SUCCESS:
			return {
				...state,
				changePassword: action.payload,
			}

		case CHANGE_AFFILIATE_PROFILE_INFO_REQUEST:
			return {
				...state,
			}
		case CHANGE_AFFILIATE_PROFILE_INFO_FAILURE:
			return {
				...state,
				editProfileInfo: action.payload,
			}
		case CHANGE_AFFILIATE_PROFILE_INFO_SUCCESS:
			return {
				...state,
				editProfileInfo: action.payload,
			}

		case CHANGE_AFFILIATE_WALLET_INFO_REQUEST:
			return {
				...state,
			}
		case CHANGE_AFFILIATE_WALLET_INFO_FAILURE:
			return {
				...state,
				editWalletInfo: action.payload,
			}
		case CHANGE_AFFILIATE_WALLET_INFO_SUCCESS:
			return {
				...state,
				editWalletInfo: action.payload,
			}

		default: 
			return state;
	}
}