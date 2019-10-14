import React, { Component, Fragment } from 'react';
import dayjs from 'dayjs';

// MUI
import { Typography } from '@material-ui/core';

export class FormattedDate extends Component {
	formatDate = (createdAt) => {
		const timeFromNow = dayjs(createdAt)
			.fromNow()
			.slice(-8);
		switch (timeFromNow) {
			default:
				return dayjs(createdAt).fromNow();
			case 'days ago':
				return dayjs(createdAt).format('MMM D');
			case ' year ago':
			case 'ears ago':
				return dayjs(createdAt).format('MMM DD, YYYY');
		}
	};
	render() {
		const date = this.formatDate(this.props.createdAt);
		return (
			<Fragment>
				<Typography variant='body2' color='textPrimary'>
					{date}
				</Typography>
			</Fragment>
		);
	}
}

export default FormattedDate;
