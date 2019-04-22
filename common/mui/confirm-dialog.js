import * as React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const action = (type, payload, meta) => ({
	type, payload, meta
});

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	}
});


const ConfirmDialog = (props) => (
	<Dialog
		open={props.open}
		onClose={props.cancel}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<DialogTitle>{props.title}</DialogTitle>
		<DialogContent>
			<DialogContentText>
				{props.body}
			</DialogContentText>
		</DialogContent>

		<DialogActions>
			<Button
				variant="outlined"
				className={props.classes.button}
				onClick={props.cancel}
				{...props.cancelProps}
			>
				{props.cancelLabel}
			</Button>
			{!props.closeOnly && <Button
				variant="outlined"
				color="primary"
				className={props.classes.button}
				onClick={props.confirm}
				autoFocus
				{...props.confirmProps}
			>
				{props.confirmLabel}
			</Button>}
		</DialogActions>
	</Dialog>
);

const PREFIX = 'zinc/common/confirm/';
const OPEN = PREFIX + 'OPEN';
const CLOSE = PREFIX + 'CLOSE';

const DEFAULT_PARAMS = {
	title: 'Confirm',
	body: 'Are you sure you want to perform this action?',
	confirmLabel: 'Confirm',
	cancelLabel: 'Cancel',
	closeOnly: false,
};

// note the most important part
// dispatch a function, thunk middleware intercept it, and execute it, dispatch the function result
// action
export const confirm = (params) => (dispatch) => {
	const parameters = {
		...DEFAULT_PARAMS,
		...params
	};

	return new Promise((resolve, reject) => {
		const payload = {
			...parameters,
			confirm: () => {
				dispatch(action(CLOSE));
				resolve();
			},
			cancel: () => {
				dispatch(action(CLOSE));
				reject();
			}
		};

		dispatch(action(OPEN, payload));
	});
};

// reducer
const INITIAL_STATE = {
	...DEFAULT_PARAMS,
	open: false,
	cancel: () => {},
	confirm: () => {},
};

export const confirmReducer = (
	state = INITIAL_STATE,
	action
) => {
	const {type, payload} = action;

	switch (type) {
		case OPEN:

			return {
				...state,
				...payload,
				open: true,
			};

		case CLOSE:
			return {
				...state,
				open: false
			};

		default:
			return state;
	}
};

const styledConfirmDialog = withStyles(styles)(ConfirmDialog);

const mapStateToProps = (state) => state.confirm;

export default connect(mapStateToProps)(styledConfirmDialog);


