import React from 'react';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import TechnologyStackIcon from '@material-ui/icons/WorkOutlined';
import MyDependenciesIcon from '@material-ui/icons/GroupOutlined';
import UtilitiesIcon from '@material-ui/icons/LibraryBooksOutlined';
import Icons from '@material-ui/icons/HowToRegOutlined';

import HomePage from './components/home';
import WelcomePage from './components/welcome';

import TechnologyStackPage from './components/technology-stack';
import MyDependenciesPage from './components/my-dependencies';
import UtilitiesPage from './components/utilities';
import IconsPage from './components/icons';

const routes = ['Home', 'Technology Stack', 'My Dependencies', 'Utilities', 'Icons'];

const Routes = [{
	path: '/',
	name: 'Home', // fake Home
	icon: <HomeIcon />,
	component: WelcomePage
}, {
	path: '/TechnologyStack',
	name: 'Technology Stack',
	icon: <TechnologyStackIcon />,
	component: TechnologyStackPage
}, {
	path: '/MyDependencies',
	name: 'My Dependencies',
	icon: <MyDependenciesIcon />,
	component: MyDependenciesPage
}, {
	path: '/utilities',
	name: 'Utilities',
	icon: <UtilitiesIcon />,
	component: UtilitiesPage
}, {
	path: '/icons',
	name: 'Icons',
	icon: <Icons />,
	component: IconsPage
}];

export default Routes;