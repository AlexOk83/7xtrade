import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Translate from 'translate-components'
//import { reactTranslateChangeLanguage } from 'translate-components'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'

import {
    getTerminalData,
    getSearchChartList
} from '../../../actions/terminal'
import {logout} from '../../../actions/authLogout'
import {restoreBalance} from '../../../actions/profile'

import CurrentChartInfo from './currentChartInfo'
//import DivLink from '../../elements/divLink'

import './index.scss'

class TerminalHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 1,
            openedSelectChart: false,
            openedSelectWallet: false,
        };
    }

    componentDidUpdate() {
        //if(!this.props.terminal.current_chart || !this.props.terminal.categories) return false;

        //const { tabIndex, openedSelectChart } = this.state;
        //const { current_chart } = this.props.terminal;

        /*if(current_chart.priority !== tabIndex && !openedSelectChart) {
            this.setState({tabIndex: current_chart.priority});
        }*/
    }

    charts(chartsCategoryId, chartList) {
        const {current_chart} = this.props.terminal;

        const readyList = chartList.map((item, key) => {
            let selected = current_chart.id === item.id;

            if (chartsCategoryId !== item.category_id && chartsCategoryId !== 0) return false;

            return (
                <button className={selected ? 'selected' : ''} key={key}
                        onClick={() => this.switchChart(item.id, item.symbol)}>
                    <CurrentChartInfo data={item}/>
                </button>
            )
        });

        return readyList;
    }

    switchChart(chartId) {
        this.props.getTerminalData({
            chart_id: chartId
        });

        localStorage.removeItem('chartId');
        localStorage.setItem('chartId', chartId);

        this.setState({
            openedSelectChart: false,
        });
    }

    switchWallet(walletName) {
        localStorage.removeItem('wallet');
        localStorage.setItem('wallet', walletName);

        this.setState({
            openedSelectWallet: false
        });
    }

    render() {
        //if(!this.props.terminal.current_chart || !this.props.terminal.categories) return false;

        const {
            tabIndex,
            openedSelectChart,
            openedSelectWallet
        } = this.state;

        const {
            user,
            list,
            categories,
            current_chart,
            search_chart_list,
        } = this.props.terminal;

        const {
            allowCharts = true,
            allowGetBonus = true
        } = this.props;

        let dollars = user ? user.dollars.toFixed(2) : null;
        let virtual_dollars = user ? user.virtual_dollars.toFixed(2) : null;

        if (categories) categories.sort((a, b) => a.priority - b.priority);

        let titleWallet, currentWallet;

        switch (localStorage.wallet) {
            case 'dollars':
                titleWallet = 'Реальный счет';
                currentWallet = dollars;
                break;
            case 'virtual_dollars':
                titleWallet = 'Демо счет';
                currentWallet = virtual_dollars;
                break;
            default:
                currentWallet = null;
                break;
        }

        return (
            <div className="terminal-header">
                <div className="prof_header__wrapper">
                    <div className="prof_header__left">
                        <Link to="/terminal" className="logo">
                            <img src="/images/logo_top.png" alt="логотип 7xtrade.com"/>
                        </Link>
                    </div>

                    <div className="prof_header__right">
                        <div className="prof_header__bonus">
                            {allowGetBonus ?
                                <Link to="/cabinet/increase" className="btn btn_blue bonus_btn">
                                    <div className="bonus_btn__icon">
                                        <img src={`/icons/boost.svg`} alt="бонус"/>
                                    </div>
                                    <div className="bonus_btn__title">Получите бонус 100% на Ваш депозит</div>
                                    <div className="bonus_btn__value">100%</div>
                                </Link>
                                : false}
                        </div>

                        {categories && current_chart && allowCharts ?
                            <div className="currency prof_header__currency" onClick={() => this.setState({
                                tabIndex: 1,
                                openedSelectWallet: false,
                                openedSelectChart: !openedSelectChart
                            })}>
                                <div className="btn btn_arrow btn_terminal" id="btnTerminalArrow">
                                    <img className={` ${openedSelectChart ? 'arrow-up' : 'arrow-down'} arrow`}
                                         src="/icons/arrow_down_smooth.svg" alt=""/>
                                </div>

                                <div className="btn btn_terminal btn_terminal__wide ">
                                    <CurrentChartInfo data={current_chart} switchPreloader={true}/>
                                    <div/>
                                </div>
                                {openedSelectChart ?
                                    <div className="select-chart__wrapper">
                                        <div className={`select-chart ${categories.length === 1 ? 'one-column' : ''}`}>
                                            <Tabs
                                                selectedIndex={tabIndex}
                                                onSelect={newTabIndex => this.setState({tabIndex: newTabIndex})}
                                            >
                                                <div className="search" style={{display: 'flex'}}>
                                                    <button className="searchBtn">
                                                        <div className="fa fa-search"/>
                                                    </button>
                                                    <input placeholder="Искать"
                                                           onChange={e => this.getSearchChartList(e)}/>
                                                    <TabList>
                                                        <Tab style={{display: 'flex'}}>{/*Search*/}</Tab>

                                                        {categories.map((item, key) => (
                                                            <Tab key={key}>
                                                                <button>
                                                                    <Translate>{item.name}</Translate>
                                                                </button>
                                                            </Tab>
                                                        ))}
                                                    </TabList>
                                                </div>

                                                <TabPanel>
                                                    {this.charts(0, search_chart_list)}
                                                </TabPanel>
                                                <div className="info">
                                                    <span>Название</span>
                                                    <span>Доходность</span>
                                                </div>
                                                {categories.map((item, key) => (
                                                    <TabPanel key={key}>
                                                        {this.charts(item.id, list)}
                                                    </TabPanel>
                                                ))}
                                            </Tabs>
                                        </div>
                                        <div className="overlay"
                                             onClick={() => this.setState({openedSelectChart: false})}/>
                                    </div>
                                    : false}
                            </div>
                            : false}

                        {user ?
                            <div className="prof_header__accInfo wallet" onClick={() => this.setState({
                                openedSelectChart: false,
                                openedSelectWallet: !openedSelectWallet
                            })}>

                                {/*<div className={`fa ${openedSelectWallet ? 'fa-angle-up' : 'fa-angle-down'} arrow`}/>*/}
                                {currentWallet ?
                                    <div className="column">
                                        <label className="accInfo__title">{titleWallet}</label>
                                        <div className="accInfo__value">{currentWallet} $</div>
                                    </div>
                                    : false}
                                <a className={`fa ${openedSelectWallet ? 'wallet__icon-open' : 'wallet__icon-close'} wallet__icon`} href="#">
                                    <div className="fa fa-user-o"></div>
                                </a>

                                {openedSelectWallet ?
                                    <div className="select-wallet__wrapper">
                                        <div className="select-wallet">
                                            <div className="info">
                                                <div className="block">
                                                    <div className="row email">{user.email}</div>
                                                    <div className="row uid">UID: {user.uid}</div>
                                                    <div className="row wallet-type">
                                                        <span>Валюта:</span>
                                                        <span className="type">USD</span>
                                                    </div>
                                                </div>

                                                <div className="block">
                                                    <button onClick={() => this.switchWallet('virtual_dollars')}>
                                                        <input type="checkbox" readOnly="readOnly"
                                                               checked={localStorage.wallet === 'virtual_dollars' ? 'checked' : ''}/>
                                                        <div className="text">
                                                            <label>Демо счет</label>
                                                            <div className="title">{virtual_dollars} $</div>
                                                        </div>
                                                        <div
                                                            className="fa fa-refresh restore-balance"
                                                            onClick={() => this.props.restoreBalance()}
                                                        />
                                                    </button>
                                                </div>
                                                <div className="block">
                                                    <button onClick={() => this.switchWallet('dollars')}>
                                                        <input type="checkbox" readOnly="readOnly"
                                                               checked={localStorage.wallet === 'dollars' ? 'checked' : ''}/>
                                                        <div className="text">
                                                            <label>Реальный счет</label>
                                                            <div className="title">{dollars} $</div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="links">
                                                <div className="block">
                                                    <Link to="/cabinet/increase">Пополнение</Link>
                                                    <Link to="/cabinet/output">Вывод</Link>
                                                    <Link to="/cabinet/history-payments">История</Link>
                                                    <Link to="/cabinet/history-deals">Сделки</Link>
                                                    <Link to="/cabinet/profile">Профиль</Link>
                                                </div>

                                                <a href="#/" className="exit" onClick={() => this.logout()}>
                                                    <div className="fa fa-sign-out icon"/>
                                                    <div className="title">Выйти</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="overlay"
                                             onClick={() => this.setState({openedSelectWallet: false})}/>
                                    </div>
                                    : false}

                            </div>
                            : false}

                        <div className="prof_header_btns">
                            <Link to="/cabinet/increase"
                                  className="btn btn_blue refill_btn">&#160;&#160;Пополнение</Link>
                            <Link to="/cabinet/output" className="btn btn_grey withdrawal_btn">Вывод</Link>
                        </div>
                    </div>
                </div>

                {/*<div className="terminal-btn open-mobile-deals" onClick={() => this.openDealsOnMobile()}>Сделки</div>*/}

            </div>
        )
    }

   /* openDealsOnMobile() {
        document.querySelector('.slide-deals').style = 'display: block';
    }*/

    getSearchChartList(e) {
        const {value} = e.target;

        this.setState({tabIndex: value.length > 0 ? 0 : 1});

        this.props.getSearchChartList({search_text: value});
    }

    logout() {
        this.props.logout({});
    }

}

TerminalHeader.propTypes = {
    logout: PropTypes.func.isRequired,
    terminal: PropTypes.object.isRequired,
    authLogout: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    terminal: state.terminal,
    authLogout: state.authLogout
})

const mapDispatchToProps = (dispatch) => ({
    logout: (data) => dispatch(logout(data)),
    restoreBalance: (data) => dispatch(restoreBalance(data)),
    getTerminalData: (data) => dispatch(getTerminalData(data)),
    getSearchChartList: (data) => dispatch(getSearchChartList(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TerminalHeader);