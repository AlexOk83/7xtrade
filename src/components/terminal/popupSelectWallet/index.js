import React from 'react'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'

class PopupSelectWallet extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			walletSelected: false
		};

	}

	selectWallet(walletName, close) {
		localStorage.removeItem('wallet');
		localStorage.setItem('wallet', walletName);

		this.setState({walletSelected: true});

		close();
	}

	render() {
		//if(process.env.NODE_ENV !== 'production') return false;
		
		const { virtual_dollars } = this.props;

		return (
			<Popup defaultOpen closeOnDocumentClick={false}>
				{close => (
					<div className="terminal-select-wallet">
						<div className="title">На каком счете вы хотите продолжить торговлю?</div>

						<button onClick={() => this.selectWallet('virtual_dollars', close)}>
							<div className="column">
								<div className="title">
									<img src="/img/terminal/select-wallet-1.svg" alt=""/>
									Демо счет
								</div>
								<div className="desc">
									На балансе вашего демо счета - {virtual_dollars} $
								</div>
								<div className="text">
									- Демо счет можно обновить <br/>
									- Учитесь торговать без риска
								</div>
							</div>

							<div className="column">
								<div className="btn btn-white">Торговать на демо счете</div>
							</div>
						</button>

						<button onClick={() => this.selectWallet('dollars', close)}>
							<div className="column">
								<div className="title">
									<img src="/img/terminal/select-wallet-2.svg" alt=""/>
									Реальный счет
								</div>
								<div className="desc">
									Пополните счет на минимальную <br/>
									сумму и начните зарабатывать
								</div>
								<div className="text blue">
									- Неограниченный заработок<br/>
									- Бесплатное обучение<br/>
									- Бонус 100% на первый депозит
								</div>
							</div>

							<div className="column center">
								<div className="title blue">10.00 $</div>
								<div className="text">Минимальная сумма пополнения</div>
								<Link to="/cabinet/increase" className="btn btn-blue">Пополнить счет</Link>
							</div>
						</button>
					</div>
				)}
			</Popup>
		)
	}
}

export default PopupSelectWallet;