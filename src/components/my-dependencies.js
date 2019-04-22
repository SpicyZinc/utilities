import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

import { confirm } from '../../common/mui/confirm-dialog';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit
	}
});

class MyDependencies extends React.Component {

	handleClick = () => {
		this.props.confirm({
			title: 'Demo Confirm',
		}).then(() => console.log('Click confirm, do the real API call'), () => console.log('Error'));
	};

	render() {
		const {classes} = this.props;

		return (
			<React.Fragment>
				<Typography paragraph>
					MyDependencies
				</Typography>

				<Fab
					aria-label="Delete"
					className={classes.fab}
					onClick={this.handleClick}
				>
					<DeleteIcon />
				</Fab>

			</React.Fragment>
		);
	}
}

const styledMyDependencies = withStyles(styles)(MyDependencies);

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
		confirm,
	}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(styledMyDependencies);