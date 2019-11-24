export default {
	palette: {
		primary: {
			light: '#64dd17',
			main: '#e4e4e4',
			dark: '#b2b2b2',
			contrastText: '#000000'
		},
		secondary: {
			light: '#9cff57',
			main: '#64dd17',
			dark: '#1faa00',
			contrastText: '#000000'
		}
	},
	spread: {
		// General
		paper: {
			padding: 20
		},
		error: {
			color: 'red'
		},
		customError: {
			color: 'red',
			fontSize: '0.8rem',
			marginTop: 10
		},
		submitButton: {
			float: 'right'
		},
		progress: {
			position: 'relative',
			left: '40%',
			top: '40%'
		},
		center: {
			margin: '0 auto'
		},
		typography: {
			useNextVariants: true
		},
		// Nav
		navImage: {
			width: 120,
			height: 60,
			position: 'relative',
			left: '15%'
		},
		navbarButtons: {
			position: 'relative',
			left: '60%',
			display: 'flex',
			justifyContent: 'space-evenly',
			minWidth: 400,
			alignItems: 'center'
		},
		navAvatar: {
			height: 30,
			width: 30,
			marginRight: 5
		},
		// Notifications
		menu: {
			marginTop: 40
		},
		// Profile
		profile: {
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
			alignItems: 'center',
			'& hr': {
				border: 'none',
				margin: '0 0 10px 0'
			},
			'& a': {
				color: '#000000',
				textDecoration: 'none'
			},
			'& svg.button': {
				'&:hover': {
					cursor: 'pointer'
				}
			}
		},
		profileAvatar: {
			width: '200px',
			height: '200px',
			margin: '0 auto',
			marginBottom: 10
		},
		profileDetails: {
			textAlign: 'center'
		},
		profileDetailsItem: {
			display: 'flex',
			justifyContent: 'center',
			marginBottom: 20
		},
		calendar: {
			color: 'black',
			marginRight: 5
		},
		profileLoginButtons: {
			textAlign: 'center',
			'& a': {
				margin: '20px 10px'
			}
		},
		// Edit Profile
		button: {
			position: 'absolute',
			top: '40%',
			left: '60%'
		},

		// Waves and comments
		card: {
			display: 'flex',
			position: 'relative',
			marginBottom: 25,
			boxShadow: '0 8px 20px -12px rgba(0,0,0,0.3)',
			'&:hover': {
				boxShadow: '0 16px 20px -12.125px rgba(0,0,0,0.3)'
			}
		},
		cardContent: {
			width: '80%',
			paddingBottom: '0!important'
		},
		cardBody: {
			marginTop: 10,
			marginBottom: 10
		},
		cardAvatar: {
			marginLeft: '20px',
			marginTop: '2%',
			height: 60,
			width: 60
		},
		postWave: {
			width: '80%',
			paddingBottom: '24px'
		},
		expandedWaveContent: {
			minHeight: 300
		},
		wavePopup: {
			marginTop: 20
		},
		// Delete Wave
		deleteButton: {
			color: 'primary',
			position: 'absolute',
			top: '2%',
			right: '2%',
			padding: 10,
			'&:hover': {
				color: 'red'
			}
		},

		cancel: {
			'&:hover': {
				backgroundColor: 'red',
				color: 'white'
			}
		},

		// Wave Buttons
		buttonsContainer: {
			display: 'flex',
			width: '100%',
			justifyContent: 'space-evenly'
		},
		waveButtons: {
			display: 'flex',
			padding: '5px',
			alignItems: 'center',
			justifyContent: 'space-between'
		},
		favoriteButton: {
			padding: '3px',
			color: '#e4e4e4',
			'&:hover': {
				color: 'red',
				backgroundColor: 'white'
			}
		},
		favoriteButtonIcon: {
			color: 'red'
		},
		commentButton: {
			color: '#b2b2b2',
			padding: '3px',
			'&:hover': {
				color: '#64dd17',
				backgroundColor: 'white'
			}
		},
		expandButton: {
			color: '#e4e4e4',
			padding: '3px',
			'&:hover': {
				color: '#64dd17',
				backgroundColor: 'white'
			}
		},

		// Form
		textField: {
			margin: '10px auto 10px auto'
		},

		// Login and Signup
		root: {
			display: 'flex',
			textAlign: 'center',
			borderBottom: '1px solid black',
			width: '100%'
		},
		formTitle: {
			marginBottom: 20
		},
		form: {
			textAlign: 'center'
		},
		submit: {
			marginTop: 20,
			marginBottom: 20
		},

		// Formatting
		invisibleSeparator: {
			border: 'none',
			margin: 4
		},
		visibleSeparator: {
			width: '100%',
			borderBottom: '1px solid rgba(0,0,0,0.1)',
			marginBottom: 10
		},
		fullLine: {
			height: 15,
			width: '90%',
			backgroundColor: 'rgba(0,0,0, 0.6)',
			margin: '0 auto',
			marginBottom: 10
		},
		halfLine: {
			height: 15,
			width: '50%',
			backgroundColor: 'rgba(0,0,0, 0.6)',
			marginBottom: 10
		},
		// 404 page
		notFound: {
			position: 'relative',
			top: 100,
			display: 'flex',
			justifyContent: 'center',
			flexDirection: 'column',
			margin: '0 auto',
			width: 450
		}
	}
};
