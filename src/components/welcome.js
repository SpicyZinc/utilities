import React from 'react';
import { render } from 'react-dom';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import GradeIcon from '@material-ui/icons/Grade';

class Welcome extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Typography variant="h3" gutterBottom>
					Welcome to Liang Utilities
				</Typography>

				<Typography paragraph>
					This is a showcase what technology I am using currently to build a single page application.
				</Typography>
				<Typography paragraph>
					Also, it contains some logic thought process when I developped the code.
				</Typography>


				<List component="nav">
					<ListItem button>
						<ListItemIcon>
							<GradeIcon />
						</ListItemIcon>
						<ListItemText primary="It's really just one index.html file, with a CSS bundle and a Javascript bundle." />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<GradeIcon />
						</ListItemIcon>
						<ListItemText primary="On a SPA, after the initial page load, no more HTML gets sent over the network. Instead, only data gets requested from the server (or sent to the server)." />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<GradeIcon />
						</ListItemIcon>
						<ListItemText primary="Search Engine Friendly SPAs?" />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<GradeIcon />
						</ListItemIcon>
						<ListItemText primary="We will be able to bring a much-improved experience to the user" />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<GradeIcon />
						</ListItemIcon>
						<ListItemText primary="The frontend part of the application is very simple to version in production, allowing for simplified deployment and rollbacks to previous version of the frontend if needed" />
					</ListItem>

					<ListItem button>
						<ListItemIcon>
							<GradeIcon />
						</ListItemIcon>
						<ListItemText primary="The application will feel faster because less bandwidth is being used, and no full page refreshes are occurring as the user navigates through the application" />
					</ListItem>
				</List>

				<Typography variant="h5" gutterBottom>
					Note, I will keep adding new stuff.
				</Typography>

			</React.Fragment>
		);
	}
}

export default Welcome;