import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { getInvestments } from '../../../../actions/site'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class Investments extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			investments: [
				{
					name: 'Bitcoin',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg',
					background: '#f7931a',
					textColor: '#fff',
				},
				{
					name: 'Ethereum',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg',
					background: '#627eea',
					textColor: '#fff',
				},
				{
					name: 'Litecoin',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCLTC--big.svg',
					background: '#345d9d',
					textColor: '#fff',
				},
				{
					name: 'Chainlink',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCLINK--big.svg',
					background: '#2e61de',
					textColor: '#fff',
				},
				{
					name: 'DASH',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCDASH--big.svg',
					background: '#1c75bc',
					textColor: '#fff',
				},
				{
					name: "Zcash",
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCZEC--big.svg',
					background: '#ecb244',
					textColor: '#333',
				},
				{
					name: 'Tezos',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCXTZ--big.svg',
					background: '#2e84fd',
					textColor: '#fff',
				},
				{
					name: 'Wrapped Bitcoin',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCWBTC--big.svg',
					background: '#312541',
					textColor: '#fff',
				},
				{
					name: 'Maker',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCMKR--big.svg',
					background: '#33a092',
					textColor: '#fff',
				},
				{
					name: 'Compound',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCCOMP--big.svg',
					background: '#00d395',
					textColor: '#fff',
				},
				{
					name: 'Bitcoin Cash',
					icon: 'https://s3-symbol-logo.tradingview.com/crypto/XTVCBCH--big.svg',
					background: '#f7931a',
					textColor: '#fff',
				},
			]
		};

	}

	componentDidMount() {
		this.props.getInvestments();
	}

	render() {
		if(!this.props.site) return false;
		if(!this.props.site.investments) return false;

		return (
			<div className="investments">
				<div className="container">
					<div className="investments__wrapper">
						<div className="title">Самостоятельная торговля на бирже</div>
						<div className="desc">Самые перспективные криптовалюты</div>
						<Swiper
							spaceBetween={30}
							slidesPerView={localStorage.mobileVersion ? 1 : 3}
							slidesPerGroup={1}
							navigation
						>
							{this.state.investments.map((item, key) => {
								let obj = this.props.site.investments.find(investment => investment.name === item.name);
								let percent = obj ? obj.yield : '';

								return (
									<SwiperSlide style={{background: item.background, color: item.textColor}} key={key}>
										<div>
											<div className="row">
												<div className="title">{item.name}</div>
												<img src={item.icon} className="icon" alt=""/>
											</div>
											<div className="income">
												<div className="text">Среднесуточная доходность</div>
												<div className="percent">+ {percent} %</div>
											</div>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</div>
			</div>
		)
	}

}

Investments.propTypes = {
	site: PropTypes.object.isRequired,
	getInvestments: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	site: state.site
})

const mapDispatchToProps = (dispatch) => ({
	getInvestments: (data) => dispatch(getInvestments(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Investments);