import React from 'react';
import ReactDom from 'react-dom'; 

Resolutions = new Mongo.Collection("resolutions");



export default class App extends React.Component{
	
	addResolution(event){
		event.preventDefault();
		var text = this.refs.resolution.value.trim();
		
		Resolutions.insert({
			text:text, 
			complete: false,
			createdAt: new Date()
		});
		this.refs.resolution.value ="";
	}


	render(){ 
		return(
			<div>
				<p>My Resolutions</p>
				<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
					<input 
						type="text"
						ref="resolution"
						placeholder="Finish React Meteor Series"/>
				</form> 
			</div>
			)
	}
}

