import { combineReducers } from 'redux'

import app from './app'
import site from './site'
import deals from './deals'
import payment from './payment'
import profile from './profile'
import terminal from './terminal'
import affiliate from './affiliate'
import authLogin from './authLogin'
import authLogout from './authLogout'
import promocodes from './promocodes'
import adminDeals from './adminDeals'
import adminUsers from './adminUsers'
import setPageConf from './setPageConf'
import authRecover from './authRecover'
import adminAssets from './adminAssets'
import authRegister from './authRegister'
import adminSettings from './adminSettings'
import affiliatePayment from './affiliatePayment'
import affiliateInvitation from './affiliateInvitation'
import adminPaymentOutputs from './adminPaymentOutputs'

export default combineReducers({
	app: app,
	site: site,
	deals: deals,
	payment: payment,
	profile: profile,
	terminal: terminal,
	affiliate: affiliate,
	authLogin: authLogin,
	pageConf: setPageConf,
	promocodes: promocodes,
	authLogout: authLogout,
	adminUsers: adminUsers,
	adminDeals: adminDeals,
	authRecover: authRecover,
	adminAssets: adminAssets,
	authRegister: authRegister,
	adminSettings: adminSettings,
	affiliatePayment: affiliatePayment,
	affiliateInvitation: affiliateInvitation,
	adminPaymentOutputs: adminPaymentOutputs,
});