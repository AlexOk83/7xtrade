import React from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import Chart from 'react-apexcharts'
import {connect} from 'react-redux'
//import { Link } from 'react-router-dom'


import {
    userDelete,
    changePassword,
    getProfileInfo,
    changeProfileInfo
} from '../../../actions/profile'
import {logout} from '../../../actions/authLogout'


import './index.scss'


class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.getProfileInfo();


    }

    componentDidUpdate() {

    }

    changeField(e) {
        let {name, value} = e.target;

        this.setState({[name]: value});
    }

    render() {
        if (!this.props.profile.email || !document.querySelector('.content')) return false;

        let {
            password,
            oldPassword,
            confirmPassword
        } = this.state;

        let {
            city,
            name,
            //email,
            country,
            surname,
            max_loss,
            min_loss,
            max_income,
            min_income,
            count_deals,
            count_deals_win,
            count_deals_loss,
            count_deals_draw,
        } = this.props.profile;

        count_deals_win = count_deals_win ? count_deals_win : 0;
        count_deals_loss = count_deals_loss ? count_deals_loss : 0;
        count_deals_draw = count_deals_draw ? count_deals_draw : 0;
        count_deals = count_deals ? count_deals : 0;

        max_loss = max_loss < 0 ? max_loss * -1 : max_loss;
        min_loss = min_loss < 0 ? min_loss * -1 : min_loss;

        let allowChangePassword = password && oldPassword && confirmPassword;

        let contentWidth = document.querySelector('.content').clientWidth;
        let apexWidth = window.innerWidth > 768 ? (contentWidth / 2) - (10 / 100 * (contentWidth / 2)) : contentWidth - 20;


        return (
            <div className="profile">
                <div className="content__mid-left">
                    <div className="content__mid-col left_col">
                        <div className="data_block">
                            <div className="data_block-title">???????????? ????????????:</div>

                            <div className="data_block-inputs">
                                <div className="input_cover">
                                    <div className="input_label">??????</div>
                                    <input name="name"
                                           className="value"
                                           defaultValue={name}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                                <div className="input_cover">
                                    <div className="input_label">??????????????</div>
                                    <input name="surname"
                                           className="value"
                                           defaultValue={surname}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                                <div className="input_cover">
                                    <div className="input_label">???????? ????????????????</div>
                                    <DayPickerInput name="birthdate" type="date"
                                                    placeholder="??????."/>
                                </div>
                                <div className="input_cover input_cover__email">
                                    <div className="input_label">E-mail</div>
                                    <input name="email"
                                           className="value"
                                           placeholder="??????."
                                        // defaultValue={email}
                                        // disabled="disabled"
                                           onChange={e => this.changeField(e)}/>
                                    <button className="confirm_btn">??????????????????????</button>
                                    <div className="label_mess">
                                        <span>???????????? c ???????????????????????????? ???????????????????? ???? ?????????? oleg_tinkov@mail.ru</span>
                                    </div>
                                </div>
                                <div className="input_cover">
                                    <div className="input_label">????????????</div>
                                    <input name="country"
                                           className="value"
                                           defaultValue={country}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                                <div className="input_cover">
                                    <div className="input_label">??????????</div>
                                    <input name="city"
                                           className="value"
                                           defaultValue={city}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                            </div>
                        </div>

                        <div className="data_block">
                            <div className="data_block-title">??????????????????????:</div>

                            <div className="data_block-content verifi_block">
                                <p>?????? ?????????????????????? ?????????????????????? ?????????????????? ???????????? ???? ??????????
                                    <span> support@7xtrade.com</span></p>
                                <p>???????????????????? ???????? ???????????? ???????????????? ?????? ?????????????????????????? ??????????????????????????</p>
                                <p>?????? ???????????? ?????????????? ???????????? ???? 10.000$ ???????? ???????????????? ???? ??????????????????????
                                    ??????????????????????</p>
                            </div>
                        </div>

                    </div>

                    <div className="content__mid-col right_col">
                        <div className="data_block">
                            <div className="data_block-title">????????????????????????:</div>
                            <div className="data_block-inputs">
                                <div className="input_cover">
                                    <div className="input_label">???????????? ????????????</div>
                                    <input name="oldPassword"
                                           type="password"
                                           className="value"
                                           value={oldPassword}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                                <div className="input_cover">
                                    <div className="input_label">?????????? ????????????</div>
                                    <input name="password"
                                           type="password"
                                           className="value"
                                           value={password}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                                <div className="input_cover">
                                    <div className="input_label">?????????????????????? ?????????? ????????????</div>
                                    <input name="confirmPassword"
                                           type="password"
                                           className="value"
                                           value={confirmPassword}
                                           onChange={e => this.changeField(e)} placeholder="??????."/>
                                </div>
                            </div>
                            <button className="btn btn_blue submit_btn"
                                    onClick={() => allowChangePassword ? this.changePassword() : false}
                                    disabled={allowChangePassword ? '' : 'disabled'}>???????????????? ????????????
                            </button>
                        </div>
                        <div className="data_block">
                            <div className="data_block-title">??????????????????:</div>
                            <div className="data_block-select">
                                <div className="select_label">?????????? ??????????</div>

                                <select className="prof_language_select" id="profLangSelect">
                                    <option data-imagesrc="icons/profile/lang_rus.png" selected
                                            value="RUS">
                                        ??????????????
                                    </option>
                                    <option data-imagesrc="icons/profile/lang_eng.png" value="ENG">
                                        ????????????????????
                                    </option>
                                    <option data-imagesrc="icons/profile/lang_rus.png" value="FRA">
                                        ??????????????????????
                                    </option>
                                </select>
                                <button data-fancybox data-modal="true" data-src="#profDelAccModal"
                                        href="javascript:;" className="btn btn_red delete_btn">??????????????
                                    ??????????????
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__mid-right">
                    <div className="data_block chart_block">
                        <div className="data_block-title">????????????????????:</div>
                        <div className="chart">
                            <div className="body apexcharts">
                                <Chart
                                    options={{
                                        labels: ['???????????? ?? ????????????????', '???????????? ?? ??????????????', '???????????? ?? ??????????????????'],
                                        fill: {
                                            colors: ['#00E396', '#E30029', '#34A8F5']
                                        },
                                        legend: {
                                            markers: {
                                                fillColors: ['#00E396', '#E30029', '#34A8F5'],
                                            },
                                        },
                                        tooltip: {
                                            enabled: false,
                                            fillSeriesColor: true,
                                            onDatasetHover: {
                                                highlightDataSeries: false,
                                            }
                                        },
                                        plotOptions: {
                                            pie: {
                                                donut: {
                                                    size: '50%'
                                                }
                                            }
                                        },
                                    }}
                                    series={[count_deals_win, count_deals_loss, count_deals_draw]}
                                    type="donut"
                                />
                                <div className="count-deals">
                                    <div className="row">
                                        <div className="title">?????????? ????????????:</div>
                                        <div className="value">{count_deals}</div>
                                    </div>
                                    {/*<Link to={`/cabinet/history-deals`}>???????????? ???????? ???????????? ???</Link>*/}
                                </div>
                            </div>


                            <div className="total_trades">
                                <div className="total_trades__row">
                                    <div className="total_trades__prop">?????????? ????????????:</div>
                                    <div className="total_trades__value">331</div>
                                </div>
                                <a href="#">???????????? ???????? ???????????? ???</a>
                            </div>
                        </div>
                    </div>

                    <div className="data_block chart_bar_block">
                        <div className="data_block-title">???????????????????????? ?????????? / ????????????:</div>
                        <div className="chart">
                        </div>

                        <div className="body">
                            <Chart
                                options={{
                                    chart: {
                                        type: 'bar',
                                        height: 380
                                    },
                                    plotOptions: {
                                        bar: {
                                            barHeight: '100%',
                                            distributed: false,
                                            horizontal: false,
                                            dataLabels: {
                                                position: 'bottom'
                                            },
                                        }
                                    },
                                    colors: [
                                        '#00E396',
                                        '#E30029',
                                    ],
                                    dataLabels: {
                                        enabled: true,
                                        textAnchor: 'start',
                                        style: {
                                            colors: ['#fff']
                                        },
                                        formatter: function (val, opt) {
                                            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                                        },
                                        offsetX: -20,
                                        dropShadow: {
                                            enabled: true
                                        }
                                    },
                                    stroke: {
                                        width: 1,
                                        colors: ['#fff']
                                    },
                                    xaxis: {
                                        categories: [
                                            '??????????',
                                            '????????????',
                                        ],
                                    },
                                    tooltip: {
                                        theme: 'dark',
                                        x: {
                                            show: false
                                        },
                                        y: {
                                            title: {
                                                formatter: function () {
                                                    return ''
                                                }
                                            }
                                        }
                                    }
                                }}
                                series={[{
                                    name: '??????????????????????',
                                    data: [+max_income, +max_loss]
                                }, {
                                    name: '????????????????????',
                                    data: [+min_income, +min_loss]
                                }]}
                                type="bar"
                                height={"300"}

                            />
                        </div>
                    </div>
                </div>


                {/*<div className="row">
					<div className="column">
						<div className="head">????????????</div>
						<div className="body apexcharts">
							<Chart
								options={{
						              labels: ['???????????? ?? ????????????????', '???????????? ?? ??????????????', '???????????? ?? ??????????????????'],
						            }}
								series={[count_deals_win, count_deals_loss, count_deals_draw]}
	      						type="donut"
	      						width={apexWidth}
	      						height={300}
	      					/>
	      					<div className="count-deals">
	      						<div className="row">
									<div className="title">?????????? ????????????</div>
									<div className="value">{count_deals}</div>
								</div>
								<Link to={`/cabinet/history-deals`}>???????????? ???????? ???????????? ???</Link>
							</div>
	      				</div>
					</div>

					<div className="column">
						<div className="head">??????????????</div>
						<div className="body">
							<Chart
								options={{
								chart: {
					                type: 'bar',
					                height: 380
					              },
					              plotOptions: {
					                bar: {
					                  barHeight: '100%',
					                  distributed: false,
					                  horizontal: false,
					                  dataLabels: {
					                    position: 'bottom'
					                  },
					                }
					              },
					              colors: [
					              	'#00e333',
					              	'#be050a',
					              ],
					              dataLabels: {
					                enabled: true,
					                textAnchor: 'start',
					                style: {
					                  colors: ['#fff']
					                },
					                formatter: function (val, opt) {
					                  return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
					                },
					                offsetX: -20,
					                dropShadow: {
					                  enabled: true
					                }
					              },
					              stroke: {
					                width: 1,
					                colors: ['#fff']
					              },
					              xaxis: {
					                categories: [
					                	'??????????',
					                	'????????????',
					                ],
					              },
					              tooltip: {
					                theme: 'dark',
					                x: {
					                  show: false
					                },
					                y: {
					                  title: {
					                    formatter: function () {
					                      return ''
					                    }
					                  }
					                }
					              }
					              }}
								series={[{
									name: '??????????????????????',
					            	data: [+max_income, +max_loss]
					            }, {
					            	name: '????????????????????',
					            	data: [+min_income, +min_loss]
					            }]}
	      						type="bar"
	      						width={apexWidth}
	      						height={300}
	      					/>
	      				</div>
					</div>
				</div>*/}


                {/* <div className="row">
                    <div className="column">
                        <div className="head">???????????????????????? ????????????</div>
                        <div className="body">
                            <div className="field">
                                <div className="title">??????</div>
                                <input
                                    name="name"
                                    className="value"
                                    placeholder="??????????"
                                    defaultValue={name}
                                    onChange={e => this.changeField(e)}
                                />
                            </div>
                            <div className="field">
                                <div className="title">??????????????</div>
                                <input
                                    name="surname"
                                    className="value"
                                    placeholder="??????????"
                                    defaultValue={surname}
                                    onChange={e => this.changeField(e)}
                                />
                            </div>
                            <div className="field">
                                <div className="title">????????????</div>
                                <input
                                    name="country"
                                    className="value"
                                    placeholder="??????????"
                                    defaultValue={country}
                                    onChange={e => this.changeField(e)}
                                />
                            </div>
                            <div className="field">
                                <div className="title">??????????</div>
                                <input
                                    name="city"
                                    className="value"
                                    placeholder="??????????"
                                    defaultValue={city}
                                    onChange={e => this.changeField(e)}
                                />
                            </div>
                            <div className="field">
								<div className="title">Email</div>
								<input 
									name="email" 
									className="value" 
									placeholder="??????????"
									defaultValue={email} 
									disabled="disabled"
									onChange={e => this.changeField(e)}
								/>
							</div>

                            <button
                                className="btn btn-blue apply"
                                onClick={() => this.changeProfileInfo()}
                            >
                                ?????????????????? ??????????????????
                            </button>
                        </div>

                        <div className="change-password">
                            <div className="head">?????????? ????????????</div>
                            <div className="body">

                                <div className="field">
                                    <div className="title">???????????? ????????????</div>
                                    <input
                                        name="oldPassword"
                                        type="password"
                                        className="value"
                                        value={oldPassword}
                                        onChange={e => this.changeField(e)}
                                    />
                                </div>

                                <div className="field">
                                    <div className="title">?????????? ????????????</div>
                                    <input
                                        name="password"
                                        type="password"
                                        className="value"
                                        value={password}
                                        onChange={e => this.changeField(e)}
                                    />
                                </div>

                                <div className="field">
                                    <div className="title">???????????? ???????????? ????????????</div>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        className="value"
                                        value={confirmPassword}
                                        onChange={e => this.changeField(e)}
                                    />
                                </div>

                                <button
                                    className="btn btn-blue apply"
                                    onClick={() => allowChangePassword ? this.changePassword() : false}
                                    disabled={allowChangePassword ? '' : 'disabled'}
                                >
                                    ?????????????? ????????????
                                </button>

                            </div>
                        </div>
                    </div>


                    <div className="column info-blocks">
                        <div>
                            <div className="info-block">
                                <div className="title">???????????? ?? ????????????????</div>
                                <div className="value">{count_deals_win}</div>
                            </div>

                            <div className="info-block">
                                <div className="title">???????????? ?? ??????????????</div>
                                <div className="value">{count_deals_loss}</div>
                            </div>

                            <div className="info-block">
                                <div className="title">???????????? ?? ??????????????????</div>
                                <div className="value">{count_deals_draw}</div>
                            </div>

                            <div className="info-block">
                                <div className="title">?????????? ????????????</div>
                                <div className="value">{count_deals}</div>
                            </div>
                        </div>

                        <div>
                            <div className="info-block">
                                <div className="title">???????????????????????? ??????????</div>
                                <div className="value">{max_income} $</div>
                            </div>

                            <div className="info-block">
                                <div className="title">?????????????????????? ??????????</div>
                                <div className="value">{min_income} $</div>
                            </div>

                            <div className="info-block">
                                <div className="title">???????????????????????? ????????????</div>
                                <div className="value">{max_loss} $</div>
                            </div>

                            <div className="info-block">
                                <div className="title">?????????????????????? ????????????</div>
                                <div className="value">{min_loss} $</div>
                            </div>
                        </div>

                        <Popup
                            trigger={
                                <button
                                    className="btn btn-red apply"
                                >
                                    ?????????????? ??????????????
                                </button>
                            }
                            modal
                        >
                            {close => (
                                <div className="cabinet-modal-delete">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="content">
                                        <div className="fa fa-info-circle"/>
                                        <div className="title">?????????????? ??????????????</div>
                                        <div className="desc">
                                            ???? ?????????????????????????? ???????????????? ?????????? ?????????????? ?????????????
                                            ?????? ???????????????? ???? ?????????? ???????? ????????????????.
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <a href="#/" className="btn btn-transparent" onClick={() => this.userDelete()}>
                                            ????, ??????????????????????
                                        </a>
                                        <button className="btn btn-white" onClick={close}>
                                            ????????????????
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>

                </div>*/}

            </div>
        )
    }

    userDelete() {
        this.props.logout({});
        this.props.userDelete();
    }

    changeProfileInfo() {
        const {
            name,
            city,
            surname,
            country,
        } = this.state;

        this.props.changeProfileInfo({
            name: name,
            city: city,
            surname: surname,
            country: country
        })
    }

    changePassword() {
        const {
            password,
            oldPassword,
            confirmPassword
        } = this.state;

        this.props.changePassword({
            password: password,
            old_password: oldPassword,
            confirm_password: confirmPassword
        });

        this.setState({
            password: '',
            oldPassword: '',
            confirmPassword: ''
        });
    }

}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile,
})

const mapDispatchToProps = (dispatch) => ({
    logout: (data) => dispatch(logout(data)),
    userDelete: (data) => dispatch(userDelete(data)),
    changePassword: (data) => dispatch(changePassword(data)),
    getProfileInfo: (data) => dispatch(getProfileInfo(data)),
    changeProfileInfo: (data) => dispatch(changeProfileInfo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);