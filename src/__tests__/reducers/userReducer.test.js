import userReducer from '../../redux/reducers/userReducer';

describe('User reducer unit tests', () => {
	it('Has a default state', () => {
		expect(userReducer(undefined, { type: 'default state' })).toEqual({
			authenticated: false,
			credentials: {},
			upvotes: [],
			notifications: [],
			loading: false
		});
	});
	it('SET_USER test', () => {
		expect(
			userReducer(undefined, { type: 'SET_USER', payload: { user: 'data' } })
		).toEqual({
			authenticated: true,
			loading: false,
			user: 'data' // User data gets set into state from firebase
		});
	});
	it('SET_AUTHENTICATED test', () => {
		expect(userReducer(undefined, { type: 'SET_AUTHENTICATED' })).toEqual({
			authenticated: true,
			credentials: {},
			upvotes: [],
			notifications: [],
			loading: false
		});
	});
	it('SET_UNAUTHENTICATED test', () => {
		expect(userReducer(undefined, { type: 'SET_UNAUTHENTICATED' })).toEqual({
			authenticated: false,
			credentials: {},
			upvotes: [],
			notifications: [],
			loading: false
		});
	});
	it('LOADING_USER test', () => {
		expect(userReducer(undefined, { type: 'LOADING_USER' })).toEqual({
			authenticated: false,
			credentials: {},
			upvotes: [],
			notifications: [],
			loading: true
		});
	});
	it('UPVOTE_WAVE test', () => {
		const state = {
			authenticated: true,
			credentials: { handle: 'username' },
			upvotes: [],
			notifications: [],
			loading: true
		};
		expect(
			userReducer(state, {
				type: 'UPVOTE_WAVE',
				payload: { waveId: 'testId' }
			})
		).toEqual({
			authenticated: true,
			credentials: {
				handle: 'username'
			},
			upvotes: [
				{
					userHandle: 'username',
					waveId: 'testId'
				}
			],
			notifications: [],
			loading: true
		});
	});
	it('UNUPVOTE_WAVE test', () => {
		const state = {
			authenticated: true,
			credentials: {
				handle: 'username'
			},
			upvotes: [
				{
					userHandle: 'username',
					waveId: 'testId'
				}
			],
			notifications: [],
			loading: true
		};
		expect(
			userReducer(state, {
				type: 'UNUPVOTE_WAVE',
				payload: { waveId: 'testId' }
			})
		).toEqual({
			authenticated: true,
			credentials: {
				handle: 'username'
			},
			upvotes: [],
			notifications: [],
			loading: true
		});
	});
	it('MARK_NOTIFICATIONS_READ test', () => {
		const state = {
			authenticated: true,
			credentials: {
				handle: 'username'
			},
			upvotes: [],
			notifications: [
				{
					notificationId: 'BGlrpN0VHUmexR4XBoER',
					type: 'upvote',
					read: false,
					recipient: 'ardelapaz',
					createdAt: '2019-10-12T02:27:13.328Z',
					sender: 'defaultUser',
					waveId: 'nXutnrlb2i7mLLR8X4CW'
				}
			],
			loading: true
		};
		expect(
			userReducer(state, {
				type: 'MARK_NOTIFICATIONS_READ'
			})
		).toEqual({
			authenticated: true,
			credentials: {
				handle: 'username'
			},
			upvotes: [],
			notifications: [
				{
					notificationId: 'BGlrpN0VHUmexR4XBoER',
					type: 'upvote',
					read: true,
					recipient: 'ardelapaz',
					createdAt: '2019-10-12T02:27:13.328Z',
					sender: 'defaultUser',
					waveId: 'nXutnrlb2i7mLLR8X4CW'
				}
			],
			loading: true
		});
	});
});
