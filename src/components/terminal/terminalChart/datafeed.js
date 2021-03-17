import {
	GET_TERMINAL_CHART_HISTORY_REQUEST,
	GET_TERMINAL_CHART_HISTORY_FAILURE,
	GET_TERMINAL_CHART_HISTORY_SUCCESS,
} from '../../../actions/types'
import Store from '../../../store'
import Config from '../../../config'
//import { serverError } from '../../../actions/handleActions'
import { fetchToAPI, updateStream } from '../../../actions/optionsApp'

const config = {
	last_bar: {},
	supported_resolutions: ["1", "3", "5", "15", "30", "60", "120", "240", "D"]
}; 

export default {
	onReady: cb => {
		//console.log('=====onReady running')	
		setTimeout(() => cb(config), 0)
		
	},
	searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
		//console.log('====Search Symbols running')
	},
	resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
		//console.log('======resolveSymbol running')

		let symbol_stub = {
			name: `${window.location.hostname}:${symbolName}`, //config.symbol_name,
			description: '',
			type: '',
			session: '24x7',
			timezone: 'Europe/Moscow',
			//ticker: localStorage.symbol, //config.symbol_name,
			exchange: 'Tradebox', //split_data[0],
			minmov: 1,
			pricescale: 100, //100000000,
			has_intraday: true,
			//has_empty_bars: true,
			//intraday_multipliers: ['1', '60'],
			expired: false,
			expiration_date: false,
			supported_resolution:  config.supportedResolutions,
			volume_precision: 8,
			data_status: 'streaming',
		}

		/*if (split_data[2].match(/USD|EUR|JPY|AUD|GBP|KRW|CNY|RUR/)) {
			symbol_stub.pricescale = 10000;
		}*/
		setTimeout(() => onSymbolResolvedCallback(symbol_stub), 0)
		
		
		// onResolveErrorCallback('Not feeling it today')

	},
	getBars: function(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
		//console.log('=====getBars start')
		// console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)

		let getBarsFetch = (params) => {
			//console.log('=====getBars running')

			Store.dispatch(fetchToAPI({
				url: '/terminal/historyChart',
				data: {
					to: to,
					from: from,
					resolution: params.resolution,
					chart_id: localStorage.chartId
				},
				request: res => {
					return { 
						type: GET_TERMINAL_CHART_HISTORY_REQUEST,
						payload: res
					}
				},
				failure: res => {
					return { 
						type: GET_TERMINAL_CHART_HISTORY_FAILURE,
						payload: res
					}
				},
				success: res => {
					if(!res.length) {
						onHistoryCallback([], {noData: true}); 
						return false;
					}

					res = res.reverse();

					let bars = res.map((el, key) => {
						return {
							time: el[0] * 1000,
							low: el[1],
							high: el[2],
							open: el[3],
							close: el[4],
							volume: el[5]
						}
					})

					config.last_bar = bars[bars.length - 1];

					Store.dispatch(updateStream(config.last_bar.close));

					//console.log(config.last_bar)
					/*onHistoryCallback([{
						time: 1000,
						low: 0,
						high: 0,
						open: 0,
						close: 0,
						volume: 0
					}], {noData: true});*/
					
					onHistoryCallback(bars, {noData: false})

					return { 
						type: GET_TERMINAL_CHART_HISTORY_SUCCESS,
						payload: res
					}
				},
				serverError: err => {
					//clearInterval(window.getBarsFetchInterval);

					onHistoryCallback([], {noData: true});

					Store.dispatch(updateStream(null));
					/*Store.dispatch(serverError({
						description: 'Рынок закрыт'
					}))*/
				},
			}))

		}

		if(firstDataRequest) {
			getBarsFetch({first: true, resolution: 60});

			config.last_bar = {};

			window.getBarsFetchInterval = setInterval(() => 
				getBarsFetch({resolution: 60}), Config.updateTerminalChartHistoryInterval
			);
		} else {
			getBarsFetch({resolution: 60});
		}
	},
	subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
		//console.log('=====subscribeBars runnning')
		window.subscribeBarsInterval = setInterval(() => config.last_bar.close ? onRealtimeCallback(config.last_bar) : false, 0)
	},
	unsubscribeBars: subscriberUID => {
		clearInterval(window.getBarsFetchInterval);
		//console.log('=====unsubscribeBars running')

		//stream.unsubscribeBars(subscriberUID)
	},
	calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
		//optional
		//console.log('=====calculateHistoryDepth running - ' + resolution)
		// while optional, this makes sure we request 24 hours of minute data at a time
		// CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
		//console.log(resolution)d
		//return resolution < 60 ? {resolutionBack: 'D', intervalBack: '1'} : undefined
		return {resolutionBack: 'D', intervalBack: '1'}
	},
	getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
		//optional
		//console.log('=====getMarks running')
	},
	getTimeScaleMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
		//optional
		//console.log('=====getTimeScaleMarks running')
	},
	getServerTime: cb => {
		//console.log('=====getServerTime running')
	}
}
