import { 
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS,
	GET_PROFILE_INFO_REQUEST,
	GET_PROFILE_INFO_FAILURE,
	GET_PROFILE_INFO_SUCCESS,
	CHANGE_PROFILE_INFO_REQUEST,
	CHANGE_PROFILE_INFO_FAILURE,
	CHANGE_PROFILE_INFO_SUCCESS,
} from '../actions/types';

const initialState = {

}

export default function(state = initialState, action ) {
	switch(action.type) {
		case GET_PROFILE_INFO_REQUEST:
			return {
				...state,
				loading: true,
			}
		case GET_PROFILE_INFO_FAILURE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case GET_PROFILE_INFO_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
			}

		case CHANGE_PASSWORD_REQUEST:
			return {
				...state,
			}
		case CHANGE_PASSWORD_FAILURE:
			return {
				...state,
				changePassword: action.payload,
			}
		case CHANGE_PASSWORD_SUCCESS:
			return {
				...state,
				changePassword: action.payload,
			}

		case CHANGE_PROFILE_INFO_REQUEST:
			return {
				...state,
			}
		case CHANGE_PROFILE_INFO_FAILURE:
			return {
				...state,
				editProfileInfo: action.payload,
			}
		case CHANGE_PROFILE_INFO_SUCCESS:
			return {
				...state,
				editProfileInfo: action.payload,
			}

		default: 
			return state;
	}
}