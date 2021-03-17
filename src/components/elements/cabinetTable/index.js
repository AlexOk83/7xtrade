import React from 'react'
import moment from 'moment'
import { history } from '../../../store'
import Pagination from 'react-js-pagination'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'

import 'react-day-picker/lib/style.css'

class CabinetTable extends React.Component {

	constructor(props) {
		super(props);

	    let activePage = new URLSearchParams(props.location.search).get('number');

	    if(!activePage) {
	    	activePage = 1;
	    	history.replace(this.props.location.pathname + '?number='+activePage);
	    }

	    this.state = {
	    	dateTo: null,
	    	dateFrom: null,
	    	itemsCountPerPage: 10,
	    	activePage: +activePage,
	    };

	    this.handleFromChange = this.handleFromChange.bind(this);
	    this.handleToChange = this.handleToChange.bind(this);
	}

	handlePageChange(activePage) {
		history.replace(this.props.location.pathname + '?number='+activePage);

		this.setState({activePage: activePage});

		this.requestToServer(activePage);
	}

	formatDate(date){
	    if (typeof date == "string"){
	        date = new Date(date);
	    }

	    var year = date.getFullYear();
	    var month = (1 + date.getMonth()).toString();
	    month = month.length > 1 ? month : '0' + month;

	    var day = date.getDate().toString();
	    day = day.length > 1 ? day : '0' + day;

	    return year+'-'+month+'-'+day;
	}

	requestToServer(newActivePage) {
		let { dateFrom, dateTo, activePage } = this.state;

		dateTo = dateTo ? this.formatDate(dateTo) : null;
		dateFrom = dateFrom ? this.formatDate(dateFrom) : null;

		this.props.requestToServer({
			date_to: dateTo,
			date_from: dateFrom,
			active_page: newActivePage ? newActivePage : activePage
		});
	}

	componentDidMount() {
		this.requestToServer();
	}

	showFromMonth() {
		const { dateFrom, dateTo } = this.state;

		if (!dateFrom) return;

		if (moment(dateTo).diff(moment(dateFrom), 'months') < 1) {
			this.dateTo.getDayPicker().showMonth(dateFrom);
		}
	}

	handleFromChange(dateFrom) {
		this.setState({ dateFrom });
	}

	handleToChange(dateTo) {
		this.setState({ dateTo }, this.showFromMonth);
	}

	applyFilter() {
		this.requestToServer();
	}

	render() {
		if(!this.props.isLoaded) return false;

		const { 
			dateTo,
			dateFrom,
			activePage,
			itemsCountPerPage
		} = this.state;

    	const modifiers = { start: dateFrom, end: dateTo };

    	const {
    		thead,
    		tbody,
    		title,
    		filter,
    		countItems,
    		paginationNextBack
    	} = this.props;

		return (
			<div className="cabinet-table">
				<div className="panel full">
					{title ? <div className="head">{title}</div> : false}
					<div className="body">
						<div className="row">
							{filter !== false && countItems ? 
								<div className="InputFromTo">
							        <DayPickerInput
							          value={dateFrom}
							          placeholder="Начало периода"
							          format="YYYY/MM/DD"
							          theme="dark"
							          formatDate={formatDate}
							          parseDate={parseDate}
							          dayPickerProps={{
							            selectedDays: [dateFrom, { dateFrom, dateTo }],
							            disabledDays: { after: dateTo },
							            toMonth: dateTo,
							            modifiers,
							            numberOfMonths: 1,
							            onDayClick: () => this.dateTo.getInput().focus(),
							          }}
							          onDayChange={this.handleFromChange}
							        />
							        <div className="dash">—</div>
							        <span className="InputFromTo-to">
							          <DayPickerInput
							            ref={el => (this.dateTo = el)}
							            value={dateTo}
							            placeholder="Конец периода"
							            format="YYYY/MM/DD"
							            formatDate={formatDate}
							            parseDate={parseDate}
							            dayPickerProps={{
							              selectedDays: [dateFrom, { dateFrom, dateTo }],
							              disabledDays: { before: dateFrom },
							              modifiers,
							              month: dateFrom,
							              fromMonth: dateFrom,
							              numberOfMonths: 1,
							            }}
							            onDayChange={this.handleToChange}
							          />
							        </span>
							        <button className="apply-filter" onClick={() => this.applyFilter()}>Применить</button>
							    </div>
							: false}

							{countItems > itemsCountPerPage ? 
								paginationNextBack ?
									<div className="pages">
										<div className="count">
											{`${activePage}/${Math.ceil(countItems/itemsCountPerPage)}`}
										</div>
										<Pagination
											hideFirstLastPages
											prevPageText="Предыдущая"
											nextPageText="Следущая"
											activePage={activePage}
											itemsCountPerPage={itemsCountPerPage}
											totalItemsCount={countItems}
											pageRangeDisplayed={1}
											activeClass="hidden"
											itemClassNext="link-next"
											onChange={this.handlePageChange.bind(this)}
										/>
									</div>
								:
									<Pagination
										prevPageText="<"
										nextPageText=">"
										activePage={activePage}
										itemsCountPerPage={itemsCountPerPage}
										totalItemsCount={countItems}
										pageRangeDisplayed={5}
										onChange={this.handlePageChange.bind(this)}
									/>
							: false}
						</div>

						<table className="table table-adaptive">
							<thead>
								{thead}
							</thead>
							<tbody>
								{tbody ? tbody : this.emptyTableBody()}
							</tbody>
						</table>

						{this.props.children}
					</div>
				</div>
			</div>
		)
	}

	emptyTableBody() {
		let { emptyTableBodyText } = this.props;

		emptyTableBodyText = emptyTableBodyText ? emptyTableBodyText : "У Вас еще нет операций";

		return (
			<tr className="empty-content">
				<td colSpan="100%">{emptyTableBodyText}</td>
			</tr>
		)
	}
}

export default CabinetTable;