import React from 'react';
import ReactDom from 'react-dom'; 
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx'
import ResolutionSingle from './ResolutionSingle.jsx'

Resolutions = new Mongo.Collection("resolutions");


export default class ResolutionsWrapper extends TrackerReact(React.Component){
	resolutions(){
		return Resolutions.find().fetch();
	}

	render(){ 
		let res = this.resolutions();
		if(res.lenght <1){
			return(<div>Loading ..</div>)
		}
		return(
			<div>
				<p><h1>My Resolutions</h1></p>
				<ResolutionsForm/>
				<ul>
					<ResolutionSingle resolution={res[1]} /> 
				</ul>
			</div>
			)
	}
}

