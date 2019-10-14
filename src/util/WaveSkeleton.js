import React, { Fragment } from 'react';
import NoImg from '../images/no-img.png';

// MUI
import { Card, CardContent, Avatar, withStyles } from '@material-ui/core';

// Components

const styles = (theme) => ({
	...theme.spread,
	date: {
		height: 14,
		width: 60,
		backgroundColor: theme.palette.primary.main,
		marginBottom: 7
	},
	handle: {
		height: 18,
		width: 100,
		backgroundColor: 'rgba(0,0,0, 0.3)',
		marginBottom: 10
	}
});

const WaveSkeleton = (props) => {
	const { classes } = props;

	const content = Array.from({ length: 5 }).map((item, index) => (
		<Card className={classes.card} key={index}>
			<Avatar alt='profile' src={NoImg} className={classes.cardAvatar} />
			<CardContent className={classes.cardContent}>
				<div className={classes.handle} />
				<div className={classes.date} />
				<div className={classes.fullLine} />
				<div className={classes.fullLine} />
				<div className={classes.fullLine} />
				<div className={classes.halfLine} />
			</CardContent>
		</Card>
	));
	return <Fragment>{content}</Fragment>;
};

export default withStyles(styles)(WaveSkeleton);
