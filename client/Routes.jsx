import React from 'react';
import App from '../App.jsx' 
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx'
FlowRouter.route('/',{
	action(){
		mount(MainLayout, {
			content :(<App/>)
		})

	}
});