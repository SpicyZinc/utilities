import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link, withRouter } from 'react-router-dom';


import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import GradeIcon from '@material-ui/icons/Grade';

import Slide from './slide';

const routes = [{
	name: 'Node',
	path: '/TechnologyStack/Node/',
}, {
	name: 'React',
	path: '/TechnologyStack/React',
}, {
	name: 'Redux',
	path: '/TechnologyStack/Redux',
}, {
	name: 'Router',
	path: '/TechnologyStack/Router',
}, {
	name: 'MUI',
	path: '/TechnologyStack/MUI',
}, {
	name: 'Webpack',
	path: '/TechnologyStack/Webpack',
}];

class TechnologyStack extends React.Component {

	render() {
		const { classes, theme, location } = this.props;
		return (
			<div>
				
				<List component="nav">
					<Link to="/TechnologyStack/Node">
						<ListItem button>
							<ListItemIcon>
								<GradeIcon />
							</ListItemIcon>
							<ListItemText primary="Node and NPM" />
						</ListItem>
					</Link>

					<Link to="/TechnologyStack/React">
						<ListItem button>
							<ListItemIcon>
								<GradeIcon />
							</ListItemIcon>
							<ListItemText primary="ReactJS" />
						</ListItem>
					</Link>

					<Link to="/TechnologyStack/Redux">
						<ListItem button>
							<ListItemIcon>
								<GradeIcon />
							</ListItemIcon>
							<ListItemText primary="Redux" />
						</ListItem>
					</Link>

					<Link to="/TechnologyStack/Router">
						<ListItem button>
							<ListItemIcon>
								<GradeIcon />
							</ListItemIcon>
							<ListItemText primary="React Router" />
						</ListItem>
					</Link>

					<Link to="/TechnologyStack/MUI">
						<ListItem button>
							<ListItemIcon>
								<GradeIcon />
							</ListItemIcon>
							<ListItemText primary="Material UI" />
						</ListItem>
					</Link>

					<Link to="/TechnologyStack/Webpack">
						<ListItem button>
							<ListItemIcon>
								<GradeIcon />
							</ListItemIcon>
							<ListItemText primary="Webpack Tool" />
						</ListItem>
					</Link>
				</List>
					https://stackoverflow.com/questions/42984597/multiple-nested-routes-in-react-router-dom-v4/43846223
					
					<Switch>
						{
							routes.map(({name, path}) => (
								<Route
									key={name}
									path={path}
									component={Slide}
								/>
							))
						}
					</Switch>


			</div>
		);
	}
}

export default TechnologyStack;


