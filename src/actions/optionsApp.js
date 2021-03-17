import {
	SET_PAGE_CONF,
	UPDATE_STREAM,
	GET_APP_INFO_REQUEST,
	GET_APP_INFO_FAILURE,
	GET_APP_INFO_SUCCESS,
} from './types'
import config from '../config'
import { 
	handleError,
	serverError,
	handleSuccess
} from './handleActions'

export const getAppInfo = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/app/getInfo',
		data: data,
		request: res => {
			return { 
				type: GET_APP_INFO_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_APP_INFO_FAILURE,
				payload: res
			}
		},
		success: res => {
			if(res.support_chat) {
				var s = document['createElement']('script');
				s.type = 'text/javascript'; 
				s.async = true; 
				s.charset = 'utf-8';	
				s.src = '//cleversite.ru/cleversite/widget_new.php?supercode=1&referer_main='+encodeURIComponent(document.referrer)+'&clid=87461BdaSZ&siteNew=110795'; 
				var ss = document['getElementsByTagName']('script')[0]; 
				if(ss) {
					ss.parentNode.insertBefore(s, ss);
				} else {
					document.documentElement.firstChild.appendChild(s);
				};
			}

			return { 
				type: GET_APP_INFO_SUCCESS,
				payload: res
			}
		}
	}))
}


export const setPageConf = (state) => {
	return {
		type: SET_PAGE_CONF,
		payload: {
			showGoBack: !!state.showGoBack,
			name: state.name ? state.name : '',
			title: state.title ? state.title : '',
			urlGoBack: state.urlGoBack ? state.urlGoBack : ''
		}
	}
}

export const fetchToAPI = (obj) => dispatch => {
	dispatch(obj.request())

	let link = document.location.href.split('/');

	let token = link[3] !== 'affiliate' ? {token: localStorage.token} : {};
	let affiliateToken = link[3] === 'affiliate' ? {affiliate_token: localStorage.affiliateToken} : {};

	fetch(config.serverUrl + obj.url, {
		method: obj.method ? obj.method : 'POST',
		/*mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		  },*/
		body: JSON.stringify({
			...obj.data,
			...token,
			...affiliateToken,
			app_domain: window.location.host
		})
	})
	.then(res => res.json())
	.then(data => {
		if(data.error) {
			dispatch(handleError(data))
			if(obj.failure) dispatch(obj.failure(data))
			return false;
		}

		if(data.success && data.description) {
			dispatch(handleSuccess(data))
		}

		if(obj.success) dispatch(obj.success(data))
	})
	.catch(err => {
		if(obj.serverError) {
			obj.serverError();
			return false;
		}
		dispatch(serverError(err))
		console.log('Server Error!')
	})
}

export const updateStream = data => dispatch => {
	dispatch({ 
		type: UPDATE_STREAM,
		payload: data
	});
}

export const cleanLocalStorageTerminal = data => dispatch => {
	localStorage.removeItem('token');
	localStorage.removeItem('isAdmin');
}
export const createAuthLocalStorageTerminal = data => dispatch =>  {
	dispatch(cleanLocalStorageTerminal())
	if(data.token) localStorage.setItem('token', data.token);
	if(data.is_admin) localStorage.setItem('isAdmin', data.is_admin);
}


export const cleanLocalStorageAffiliate = data => dispatch => {
	localStorage.removeItem('isAdmin');
	localStorage.removeItem('affiliateToken');
}
export const createAuthLocalStorageAffiliate = data => dispatch =>  {
	dispatch(cleanLocalStorageAffiliate())
	if(data.is_admin) localStorage.setItem('isAdmin', data.is_admin);
	if(data.affiliateToken) localStorage.setItem('affiliateToken', data.affiliateToken);
}