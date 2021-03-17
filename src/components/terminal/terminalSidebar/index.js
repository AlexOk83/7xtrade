import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'

import {logout} from '../../../actions/authLogout'

import SlideHelp from './slideHelp/'

import './index.scss'
import {Select} from "../../formElements/select";

class TerminalSidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabIndex: -1,
            expanded: false,
        };

    }

    logout() {
        this.props.logout({});
    }

    closeTab() {
        this.setState({tabIndex: -1});
    }

    render() {
        if (this.props.authLogout.success) {
            delete (this.props.authLogout.success)
            return <Redirect to='/'/>;
        }

        const {tabIndex, expanded} = this.state;

        let pathname = window.location.pathname;

        if (pathname.slice(-1) === '/') pathname = pathname.substring(0, pathname.length - 1);

        return (
            <div className={`terminal-sidebar terminal__sidebar ${expanded ? 'expanded' : ''}`}>

                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={newTabIndex => this.setState({tabIndex: newTabIndex !== tabIndex ? newTabIndex : -1})}
                >
                    <TabList>

                        <Tab className="change-active">
                            <div className="fa fa-align-left"/>
                        </Tab>

                        <Link to="/terminal" className={pathname === "/terminal" ? 'active' : ''}
                              onClick={() => this.closeTab()}>
                            <div className="fa fa-line-chart"/>
                            <div className="title">Терминал</div>
                        </Link>

                        <Link to="/cabinet/profile" className={pathname === "/cabinet/profile" ? 'active' : ''}
                              onClick={() => this.closeTab()}>
                            <div className="fa fa-user"/>
                            <div className="title">Профиль</div>
                        </Link>

                        <Link to="/cabinet/increase" className={pathname === "/cabinet/increase" ? 'active' : ''}
                              onClick={() => this.closeTab()}>
                            <div className="fa fa-credit-card"/>
                            <div className="title">Пополнение</div>
                        </Link>

                        <Link to="/cabinet/output" className={pathname === "/cabinet/output" ? 'active' : ''}
                              onClick={() => this.closeTab()}>
                            <div className="fa fa-undo"/>
                            <div className="title">Вывод</div>
                        </Link>

                        <Link to="/cabinet/guide" className={pathname === "/cabinet/guide" ? 'active' : ''}
                              onClick={() => this.closeTab()}>
                            <div className="fa fa-graduation-cap"/>
                            <div className="title">Обучение</div>
                        </Link>

                        <Link to="/cabinet/history-deals"
                              className={pathname === "/cabinet/history-deals" ? 'active' : ''}
                              onClick={() => this.closeTab()}>
                            <div className="fa fa-list"/>
                            <div className="title">Сделки</div>
                        </Link>

                        <Tab className="change-active">
                            <Link to="#/" className="exit" onClick={() => this.logout()}>
                                <div className="fa fa-sign-out"></div>
                                <div className="title">Выйти</div>
                            </Link>
                        </Tab>

                        {/*<button onClick={() => this.clickOnChat()}>
							<div className="fa fa-info-circle"/>
							<div className="title">Помощь</div>
						</button>*/}


                        {/*<li className="expand" onClick={() => this.setState({expanded: !expanded})}>
							<div className={`fa fa-long-arrow-${expanded ? 'left' : 'right'} icon`}/>
						</li>*/}
                    </TabList>

                    <TabPanel>
                        {this.tabPanel('Помощь',
                            <SlideHelp
                                closeTab={() => this.closeTab()}
                                clickOnChat={() => this.clickOnChat()}
                            />
                        )}
                    </TabPanel>
                </Tabs>

            </div>
        )
    }

    tabPanel(title, children = null) {
        const {tabIndex} = this.state;

        if (tabIndex < 0) return false;

        return (
            <div style={{height: '100%'}}>
                <div className="tab-panel-title">
                    <div className="title">{title}</div>
                    <div className="line"></div>
                    <div className="dots-bg">
                        <img src="/img/dots-bg.png" alt=""/>
                    </div>
                </div>

                <div className="tab-panel-content">
                    {children}
                </div>

				<div className="tab-panel-close" onClick={() => this.setState({tabIndex: -1})}>
					<img src="/icons/x.svg" alt="Закрыть"/>
				</div>

            </div>
        )
    }

    clickOnChat() {
        if (document.querySelector('#cleversite_clever')) {
            let hidden = document.querySelector('#cleversite_clever').classList.contains('cleversite_clever_hide');
            let chatButton = document.querySelector('.cleversite_clever_button_cont_inner');
            let chatButtonClose = document.querySelector('.cleversite_closes');

            if (hidden && chatButton) {
                chatButton.click();
            } else {
                if (chatButtonClose) chatButtonClose.click();
            }
        }
    }
}

TerminalSidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    authLogout: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    authLogout: state.authLogout
})

const mapDispatchToProps = (dispatch) => ({
    logout: (data) => dispatch(logout(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TerminalSidebar);