import React from 'react'
import { Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'

import Header from '../../header'
import Footer from '../../footer'

import Data from './data'
import Toggle from './toggle'

import './index.scss'

class Topic extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			pageData: null,
			viewAuth: false,
			headerBackground: false,
		};

		this.data = null;
	}

	componentDidMount() {
		const {
			category
		} = this.props.match.params;

		let pageData;

		Data.map(item => category === item.category_url ? pageData = item : false);

		this.setState({pageData: pageData});
	}

	render() {
		if(!this.state.pageData) return false;
		if(this.state.pageData === 'error') return <Redirect to='/error'/>;


		const {
			viewAuth
		} = this.state;

		const {
			category_name,
			category_desc,
			subcategories,
		} = this.state.pageData;

		const {
			page,
			part,
			category
		} = this.props.match.params;

		let subcategoriesName = subcategories[part].pages[page].name;
		let subcategoriesImage = subcategories[part].pages[page].image;

		const pageText = subcategories[part].pages[page].texts.map((text, key) => 
			<div className="text" key={key} dangerouslySetInnerHTML={{__html: text}}/>
		);

		const toggles = subcategories.map((data, key) => 
			<Toggle 
				data={data} 
				category={category} 
				part={key} 
				key={key}
				open={+part === key}
			/>
		);

		return (
			<div className="topic">
				<Header 
					viewAuth={viewAuth}
					openAuth={() => this.setState({viewAuth: !viewAuth})} 
				/>

				<div className="section first">
					<NavLink to="/education" className="btn btn-white back">← Назад</NavLink>
					<h1>{category_name}</h1>
					<div className="desc">{category_desc}</div>
					<div className="box">
						<div className="menu">
							{toggles}
						</div>
						<div className="content">
							<h2>{subcategoriesName}</h2>
							{subcategoriesImage ? <img src={subcategoriesImage} alt=""/> : false}
							{pageText}
						</div>
					</div>
				</div>

				<Footer />

			</div>
		)
	}

}

export default Topic;