import { 
	SET_PAGE_CONF,
	ENABLE_ALERT_ERROR,
	ENABLE_ALERT_SUCCESS,
} from '../actions/types';

const initialState = { 

};

export default function(state = initialState, action ) {
	switch(action.type) {
		case SET_PAGE_CONF:
			if(state.name === action.payload.name) return state
			return {
				...state, 
				...action.payload
			}

		case ENABLE_ALERT_ERROR:
			return {
				...state, 
				alert: action.payload
			}

		case ENABLE_ALERT_SUCCESS:
			
			return {
				...state, 
				alert: action.payload
			}

		default: 
			return state;
	}
}