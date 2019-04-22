import React from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import GradeIcon from '@material-ui/icons/Grade';


class Slide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name } = this.props;
		console.log('=====');
		return (
			<Typography paragraph>
				using node version
			</Typography>
		);

	}
}


export default Slide;