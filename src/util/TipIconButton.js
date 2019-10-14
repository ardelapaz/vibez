import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';

export default ({
	tip,
	children,
	onClick,
	btnClassName,
	tipClassName,
	placement
}) => (
	<Tooltip title={tip} className={tipClassName} placement={placement}>
		<IconButton onClick={onClick} className={btnClassName}>
			{children}
		</IconButton>
	</Tooltip>
);
