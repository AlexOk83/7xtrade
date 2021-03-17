import {
	ADD_ADMIN_ASSET_REQUEST,
	ADD_ADMIN_ASSET_FAILURE,
	ADD_ADMIN_ASSET_SUCCESS,
	UPDATE_ADMIN_ASSET_REQUEST,
	UPDATE_ADMIN_ASSET_FAILURE,
	UPDATE_ADMIN_ASSET_SUCCESS,
	ADD_ADMIN_CATEGORY_REQUEST,
	ADD_ADMIN_CATEGORY_FAILURE,
	ADD_ADMIN_CATEGORY_SUCCESS,
	DELETE_ADMIN_ASSET_REQUEST,
	DELETE_ADMIN_ASSET_FAILURE,
	DELETE_ADMIN_ASSET_SUCCESS,
	GET_ADMIN_ASSETS_LIST_REQUEST,
	GET_ADMIN_ASSETS_LIST_FAILURE,
	GET_ADMIN_ASSETS_LIST_SUCCESS,
	DELETE_ADMIN_CATEGORY_REQUEST,
	DELETE_ADMIN_CATEGORY_FAILURE,
	DELETE_ADMIN_CATEGORY_SUCCESS,
	UPDATE_ADMIN_CATEGORY_REQUEST,
	UPDATE_ADMIN_CATEGORY_FAILURE,
	UPDATE_ADMIN_CATEGORY_SUCCESS,
	GET_ADMIN_CATEGORIES_ASSETS_LIST_REQUEST,
	GET_ADMIN_CATEGORIES_ASSETS_LIST_FAILURE,
	GET_ADMIN_CATEGORIES_ASSETS_LIST_SUCCESS,
} from './types'
import { 
	fetchToAPI
} from './optionsApp'

export const getList = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/getList',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_ASSETS_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_ASSETS_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_ASSETS_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}

export const updateAsset = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/updateAsset',
		data: data,
		request: res => {
			return { 
				type: UPDATE_ADMIN_ASSET_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: UPDATE_ADMIN_ASSET_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getList({active_page: new URLSearchParams(window.location.search).get('number')}))

			return { 
				type: UPDATE_ADMIN_ASSET_SUCCESS,
				payload: res
			}
		}
	}))
}

export const updateCategory = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/updateCategory',
		data: data,
		request: res => {
			return { 
				type: UPDATE_ADMIN_CATEGORY_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: UPDATE_ADMIN_CATEGORY_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getCategories({active_page: new URLSearchParams(window.location.search).get('number')}))

			return { 
				type: UPDATE_ADMIN_CATEGORY_SUCCESS,
				payload: res
			}
		}
	}))
}

export const getCategories = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/getCategories',
		data: data,
		request: res => {
			return { 
				type: GET_ADMIN_CATEGORIES_ASSETS_LIST_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: GET_ADMIN_CATEGORIES_ASSETS_LIST_FAILURE,
				payload: res
			}
		},
		success: res => {
			return { 
				type: GET_ADMIN_CATEGORIES_ASSETS_LIST_SUCCESS,
				payload: res
			}
		}
	}))
}

export const addAsset = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/addAsset',
		data: data,
		request: res => {
			return { 
				type: ADD_ADMIN_ASSET_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: ADD_ADMIN_ASSET_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getList({active_page: new URLSearchParams(window.location.search).get('number')}))

			return { 
				type: ADD_ADMIN_ASSET_SUCCESS,
				payload: res
			}
		}
	}))
}

export const addCategory = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/addCategory',
		data: data,
		request: res => {
			return { 
				type: ADD_ADMIN_CATEGORY_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: ADD_ADMIN_CATEGORY_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getCategories({active_page: new URLSearchParams(window.location.search).get('number')}))

			return { 
				type: ADD_ADMIN_CATEGORY_SUCCESS,
				payload: res
			}
		}
	}))
}

export const deleteAsset = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/deleteAsset',
		data: data,
		request: res => {
			return { 
				type: DELETE_ADMIN_ASSET_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: DELETE_ADMIN_ASSET_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getList({active_page: new URLSearchParams(window.location.search).get('number')}))

			return { 
				type: DELETE_ADMIN_ASSET_SUCCESS,
				payload: res
			}
		}
	}))
}

export const deleteCategory = data => dispatch => {
	dispatch(fetchToAPI({
		url: '/adminAssets/deleteCategory',
		data: data,
		request: res => {
			return { 
				type: DELETE_ADMIN_CATEGORY_REQUEST,
				payload: res
			}
		},
		failure: res => {
			return { 
				type: DELETE_ADMIN_CATEGORY_FAILURE,
				payload: res
			}
		},
		success: res => {
			dispatch(getCategories({active_page: new URLSearchParams(window.location.search).get('number')}))

			return { 
				type: DELETE_ADMIN_CATEGORY_SUCCESS,
				payload: res
			}
		}
	}))
}