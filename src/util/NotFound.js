import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Button, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
	...theme.spread
});

export class NotFound extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.notFound}>
				<Typography>
					Oops! Whatever you're looking for must not exist.
				</Typography>
				<Button component={Link} to='/' color='secondary' variant='contained'>
					Click here to go back home
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(NotFound);
