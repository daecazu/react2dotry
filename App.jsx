import React from 'react';
import ReactDom from 'react-dom'; 
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");



export default class App extends TrackerReact(React.Component){
	resolutions(){
		return Resolutions.find().fetch();
	}

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
		let res = this.resolutions();
		if(res.lenght <1){
			return(<div>Loading ..</div>)
		}
		return(
			<div>
				<p>My Resolutions</p>
				<form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
					<input 
						type="text"
						ref="resolution"
						placeholder="Finish React Meteor Series"/>
				</form>
				<div>
					{res[0].text}
				</div> 
			</div>
			)
	}
}

