import React from 'react';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx' 
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx'

FlowRouter.route('/',{
	action(){
		mount(MainLayout, {
			content :(<ResolutionsWrapper/>)
		})

	}
});