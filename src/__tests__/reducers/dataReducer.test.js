import dataReducer from '../../redux/reducers/dataReducer';

describe('User reducer unit tests', () => {
	it('Has a default state', () => {
		expect(dataReducer(undefined, { type: 'default state' })).toEqual({
			waves: [],
			wave: {},
			loading: false
		});
	});
	it('LOADING_DATA test', () => {
		expect(dataReducer(undefined, { type: 'LOADING_DATA' })).toEqual({
			waves: [],
			wave: {},
			loading: true
		});
	});
	it('SET_WAVES test', () => {
		expect(
			dataReducer(undefined, {
				type: 'SET_WAVES',
				payload: {
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				}
			})
		).toEqual({
			waves: {
				waveId: 'B96KYp5Ga6UsK45WZ14a',
				userName: 'John Doe',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				upvoteCount: 2,
				createdAt: '2019-10-09T21:39:54.248Z',
				commentCount: 0,
				userHandle: 'finalUser',
				userImage:
					'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
			},
			wave: {},
			loading: false
		});
	});
	it('SET_WAVE test', () => {
		expect(
			dataReducer(undefined, {
				type: 'SET_WAVE',
				payload: {
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc',
					comments: [
						{
							userHandle: 'defaultUser',
							userImage:
								'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
							waveId: 'eb1NYLuT8HwSADa1Bzin',
							body: 'This is a new comment test2',
							createdAt: '2019-09-26T06:45:26.745Z'
						},
						{
							userHandle: 'defaultUser',
							userImage:
								'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
							waveId: 'eb1NYLuT8HwSADa1Bzin',
							body: 'This is a new comment test',
							createdAt: '2019-09-26T06:45:20.890Z'
						}
					]
				}
			})
		).toEqual({
			waves: [],
			wave: {
				waveId: 'B96KYp5Ga6UsK45WZ14a',
				userName: 'John Doe',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				upvoteCount: 2,
				createdAt: '2019-10-09T21:39:54.248Z',
				commentCount: 0,
				userHandle: 'finalUser',
				userImage:
					'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc',
				comments: [
					{
						userHandle: 'defaultUser',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						body: 'This is a new comment test2',
						createdAt: '2019-09-26T06:45:26.745Z'
					},
					{
						userHandle: 'defaultUser',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						body: 'This is a new comment test',
						createdAt: '2019-09-26T06:45:20.890Z'
					}
				]
			},
			loading: false
		});
	});
	it('UPVOTE_WAVE test', () => {
		const state = {
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2
				}
			],
			wave: {},
			loading: false
		};
		expect(
			dataReducer(state, {
				type: 'UPVOTE_WAVE',
				payload: {
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 3
				}
			})
		).toEqual({
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 3
				}
			],
			wave: {},
			loading: false
		});
	});
	it('UNUPVOTE_WAVE test', () => {
		const state = {
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2
				}
			],
			wave: {},
			loading: false
		};
		expect(
			dataReducer(state, {
				type: 'UPVOTE_WAVE',
				payload: {
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2
				}
			})
		).toEqual({
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2
				}
			],
			wave: {},
			loading: false
		});
	});
	it('DELETE_WAVE test', () => {
		const state = {
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media'
				},
				{
					waveId: 'ilEXMx9VjJzPeQhGHGf3',
					body: 'Thank god for console.log',
					upvoteCount: 2,
					commentCount: 6,
					createdAt: '2019-10-08T19:56:28.796Z',
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media'
				}
			],
			wave: {},
			loading: false
		};
		expect(
			dataReducer(state, {
				type: 'DELETE_WAVE',
				payload: 'MGdqc0eQtzVjmHhbWTPx'
			})
		).toEqual({
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'ilEXMx9VjJzPeQhGHGf3',
					body: 'Thank god for console.log',
					upvoteCount: 2,
					commentCount: 6,
					createdAt: '2019-10-08T19:56:28.796Z',
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media'
				}
			],
			wave: {},
			loading: false
		});
	});
	it('POST_WAVE test', () => {
		expect(
			dataReducer(undefined, {
				type: 'POST_WAVE',
				payload: {
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				}
			})
		).toEqual({
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				}
			],
			wave: {},
			loading: false
		});
	});
	it('POST_COMMENT test', () => {
		const state = {
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media'
				}
			],
			wave: {
				waveId: 'B96KYp5Ga6UsK45WZ14a',
				userName: 'John Doe',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				upvoteCount: 2,
				createdAt: '2019-10-09T21:39:54.248Z',
				commentCount: 2,
				userHandle: 'finalUser',
				userImage:
					'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc',
				comments: [
					{
						userHandle: 'defaultUser',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						body: 'This is a new comment test2',
						createdAt: '2019-09-26T06:45:26.745Z'
					},
					{
						userHandle: 'defaultUser',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						body: 'This is a new comment test',
						createdAt: '2019-09-26T06:45:20.890Z'
					}
				]
			},
			loading: false
		};
		expect(
			dataReducer(state, {
				type: 'POST_COMMENT',
				payload: {
					createdAt: '2019-09-26T06:39:47.346Z',
					userHandle: 'finalUser',
					waveId: 'eb1NYLuT8HwSADa1Bzin',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					imageUrl:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/default-user-image.png?alt=media'
				}
			})
		).toEqual({
			waves: [
				{
					waveId: 'B96KYp5Ga6UsK45WZ14a',
					userName: 'John Doe',
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:39:54.248Z',
					commentCount: 0,
					userHandle: 'finalUser',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc'
				},
				{
					waveId: 'MGdqc0eQtzVjmHhbWTPx',
					userName: 'Andrew Delapaz',
					body: 'This is a test1',
					upvoteCount: 2,
					createdAt: '2019-10-09T21:28:04.303Z',
					commentCount: 2,
					userHandle: 'ardelapaz',
					userImage:
						'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/934765791.jpg?alt=media'
				}
			],
			wave: {
				waveId: 'B96KYp5Ga6UsK45WZ14a',
				userName: 'John Doe',
				body:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				upvoteCount: 2,
				createdAt: '2019-10-09T21:39:54.248Z',
				commentCount: 2,
				userHandle: 'finalUser',
				userImage:
					'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc',
				comments: [
					{
						createdAt: '2019-09-26T06:39:47.346Z',
						userHandle: 'finalUser',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1520813792240-56fc4a3765a7.jpg?alt=media&token=c2b5fa0c-482a-4ce1-b07b-5a15f82da2bc',
						body:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						imageUrl:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/default-user-image.png?alt=media'
					},
					{
						userHandle: 'defaultUser',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						body: 'This is a new comment test2',
						createdAt: '2019-09-26T06:45:26.745Z'
					},
					{
						userHandle: 'defaultUser',
						userImage:
							'https://firebasestorage.googleapis.com/v0/b/vibe-32481.appspot.com/o/photo-1560277153-9090e5cdd9b1.jpg?alt=media&token=36e1b69d-122c-43f8-89f6-7213709d985e',
						waveId: 'eb1NYLuT8HwSADa1Bzin',
						body: 'This is a new comment test',
						createdAt: '2019-09-26T06:45:20.890Z'
					}
				]
			},
			loading: false
		});
	});
});
