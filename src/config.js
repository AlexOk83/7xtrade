//let prod = process.env.NODE_ENV === 'production';

let prod = true
let protocol = prod ? 'https://' : 'http://';

module.exports = {
	updateTerminalInterval: 3000,
	updateTerminalChartHistoryInterval: 3000,
	clientUrl: window.location.origin,
	//serverUrl: '/api'
	serverUrl: 'https://api.tradecoderproject.xyz'
}