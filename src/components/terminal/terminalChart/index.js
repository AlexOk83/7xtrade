import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import datafeed from './datafeed'

import './index.scss'

class TerminalChart extends React.Component {

	constructor(props) {
		super(props);

		let defaultSymbol = props.terminal.current_chart.symbol;

		this.state = {
			symbol: defaultSymbol
		};
	}

	getLanguageFromURL() {
		const regex = new RegExp('[\\?&]lang=([^&#]*)');
		const results = regex.exec(window.location.search);
		return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

	startWidget(symbol = null) {
		symbol = symbol ? symbol : this.state.symbol;

		if(!symbol) return false;

		const widgetOptions = {
			debug: false,
			//theme: 'dark',
			custom_css_url: '/charting_library/chart.css',
			timezone: 'Europe/Moscow',
			preset: document.body.clientWidth < 768 ? 'mobile' : false,
			symbol: symbol,// + symbol ? symbol : this.state.symbol,
			datafeed: datafeed,
			interval: '1',
			timeframe: '1D',
			container_id: 'tv_chart_container',
			library_path: '/charting_library/',
			locale: this.getLanguageFromURL() || 'ru',
			disabled_features: [
				'header_resolutions', // Time indicator
				'symbol_info',
				'header_screenshot',
				'snapshot_trading_drawings',
				'header_fullscreen_button',
				'scales_date_format',
				'cropped_tick_marks', 
				'header_saveload',
				'timeframes_toolbar',
				'compare_symbol',
				'header_compare',
				'drawing_templates',
				'items_favoriting',
				'edit_buttons_in_legend',
				'legend_context_menu',
				'show_hide_button_in_legend',
				'border_around_the_chart',
				'chart_property_page_background',
				'legend_widget',
				'move_logo_to_main_pane',
				'main_series_scale_menu',
				'header_fullscreen_button',
				'header_layouttoggle',
				'header_symbol_search',
				'symbol_search_hot_key',
				'create_volume_indicator_by_default',
				'header_layouttoggle',
				'pricescale_currency',
				'header_symbol_search',
				'symbol_search_hot_key',
				'source_selection_markers',
				'uppercase_instrument_names',
				'use_localstorage_for_settings',
				'side_toolbar_in_fullscreen_mode'
			],
			//enabled_features: ['study_templates'],
			//charts_storage_url: 'https://saveload.tradingview.com',
			//charts_storage_api_version: '1.1',
			//client_id: window.location.hostname,
			//user_id: 'public_user_id',
			fullscreen: false,
			autosize: true,
			//auto_save_delay: 1,
			studies_overrides: {},
			overrides: {
				"mainSeriesProperties.style": 3,
				"mainSeriesProperties.priceAxisProperties.autoScale": false,
				"mainSeriesProperties.showCountdown": true,
				"paneProperties.background": "rgba(0, 0, 0, 0)",
				"paneProperties.vertGridProperties.color": "#dfe2e6",
				"paneProperties.horzGridProperties.color": "#dfe2e6",
				"symbolWatermarkProperties.color": 'rgba(0, 0, 0, 0)',
				"scalesProperties.lineColor" : "rgba(0, 0, 0, 0)",
				"scalesProperties.textColor" : "#6e6e6e",
				"mainSeriesProperties.candleStyle.upColor": '#0FAF59',
				"mainSeriesProperties.candleStyle.downColor": '#DB4635',
				//"mainSeriesProperties.barStyle.downColor": "#db4635"

			}
		};

		let deals = [];

		const widget = window.tvWidget = new window.TradingView.widget(widgetOptions);

		widget.onChartReady(() => {
			this.updateDeals = setInterval(() => {
				const { active_deals } = this.props.terminal;

				if(!active_deals || !active_deals.length) {
					if(deals.length === 1) deals[0].remove();
					deals = [];

					return false;
				}

				if(deals.length) deals.map((item, key) => {
					deals[key].remove();
					return true;
				});

				deals = active_deals.map((item, key) => {
					let call = item.type === 'up';
					let title = call ? 'Выше' : 'Ниже';
					let color = call ? '#0FAF59' : '#DB4635';

					return widget.chart().createPositionLine()
					    .setText(title)
					    .setLineColor(color)
					    .setBodyTextColor(color)
					    .setBodyBorderColor(color)
					    .setQuantityBorderColor(color)
					    .setQuantityBackgroundColor(color)
					    .setBodyBackgroundColor("rgb(255,255,255)")
					    .setPrice(item.spot)
					    .setLineStyle(3)
					    .setQuantity(item.amount + " $")
					    .setLineWidth(2);
				});
			}, 0)
		});
	}

	componentDidMount() {
		const script = document.createElement("script");
	    script.src = "/charting_library/charting_library.min.js";
	    script.async = true;
	    document.body.appendChild(script);

	    this.startTerminalChart = setInterval(() => {
	    	if(window.TradingView) {
	    		this.startWidget();
	    		clearInterval(this.startTerminalChart);
	    	}
	    }, 100);

	}

	componentDidUpdate() {
		if(!this.props.terminal.current_chart) return false;

		let symbol = this.props.terminal.current_chart.symbol;

		if(symbol !== this.state.symbol) {
			clearInterval(this.updateDeals);
			this.setState({symbol: symbol});
			this.startWidget(symbol);
		}
	}

	componentWillUnmount() {
		clearInterval(this.updateDeals);
		clearInterval(this.startTerminalChart);
	}

	render() {
		return (
			<div className="terminal-chart">
				<div
					id="tv_chart_container"
					className="TVChartContainer"
				>
					<img src="/img/terminal/preload-chart.gif" alt=""/>
				</div>
			</div>
		)
	}

}

TerminalChart.propTypes = {
	terminal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	terminal: state.terminal
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(TerminalChart);