import React from 'react'
import { connect } from 'react-redux'

import Dropdown from '../dropdown'

class ProgramType extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {

		return (
			<div className="section program-type">
				<div className="columns">
					<div className="boxs">
						<div className="box">
							<Dropdown
								open={true}
								title="RevShare"
								desc="Revenue Share с доходов компании (программа «RevShare») 
                                на протяжении отчетного периода обеспечивает партнерам 
                                стабильный доход в виде % от доходов компании с каждого 
                                активного клиента"
							/>
						</div>
						<div className="box">
							<Dropdown
								open={true}
								title="CPA"
								desc="Единоразовое отчисление за каждого привлеченного 
                                    Вами трейдера в размере от 50$. Размер вознаграждения зависит 
                                    от размера первого депозита трейдера. Данный тарифный план 
                                    можно запросить у службы поддержки после привлечения в 
                                    течение месяца более 20 реальных трейдеров. Программа для 
                                    VIP вебмастеров"
							/>
						</div>
						<div className="box">
							<Dropdown
								open={true}
								title="Hybrid (RevShare + CPA)"
								desc="По данной программе вы получаете % RS на 
                                    постоянной основе + $ за каждого реального трейдера, 
                                    чья общая сумма депозитов достигает необходимого уровня. 
                                    Подключить и настроить этот тариф вы можете через поддержку"
							/>
						</div>
						<div className="box">
							<Dropdown
								open={true}
								title="Доход с оборота"
								desc="Процент отчислений составляет от 2% от суммы 
                                каждой сделки, открытой на реальные средства"
							/>
						</div>
						<div className="box">
							<Dropdown
								open={true}
								title="Другие тарифы"
								desc="Зарабатывайте % от оборота, % от депозита и другие гибкие тарифы
                                Вы можете запросить и другие гибкие тарифы через поддержку, 
                                такие как % от оборота, % от депозитов и т.д. 
                                С нами всегда можно договориться!"
							/>
						</div>
					</div>
					<table>
	                    <tbody><tr className="table__tr">
	                        <th className="table__th">FTD Amount</th>
	                        <th className="table__th">RevShare</th>
	                    </tr>
	                    <tr className="table__tr">
	                        <td className="table__td">0-10</td>
	                        <td className="table__td">
	                            <span className="table__arrow fa fa-arrow-right"></span>
	                            <span className="table__value">50%</span>
	                        </td>
	                    </tr>
	                    <tr className="table__tr">
	                        <td className="table__td">11-20</td>
	                        <td className="table__td">
	                            <span className="table__arrow fa fa-arrow-right"></span>
	                            <span className="table__value">55%</span>
	                        </td>
	                    </tr>
	                    <tr className="table__tr">
	                        <td className="table__td">21-50</td>
	                        <td className="table__td">
	                            <span className="table__arrow fa fa-arrow-right"></span>
	                            <span className="table__value">60%</span>
	                        </td>
	                    </tr>
	                    <tr className="table__tr">
	                        <td className="table__td">51-100</td>
	                        <td className="table__td">
	                            <span className="table__arrow fa fa-arrow-right"></span>
	                            <span className="table__value">65%</span>
	                        </td>
	                    </tr>
	                    <tr className="table__tr">
	                        <td className="table__td">101-...</td>
	                        <td className="table__td">
	                            <span className="table__arrow fa fa-arrow-right"></span>
	                            <span className="table__value">70%</span>
	                        </td>
	                    </tr>
	                </tbody>
					</table>
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	app: state.app
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProgramType);