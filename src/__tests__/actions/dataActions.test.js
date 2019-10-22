import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
import {
	getWave,
	getWaves,
	postWave,
	upvoteWave,
	unupvoteWave,
	deleteWave,
	postComment,
	getUserProfile
} from '../../redux/actions/dataActions';
import * as types from '../../redux/types';

describe('async actions', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	it('Post Wave should dispatch actions', () => {
		const newWave = {
			waveId: '1',
			body: 'test body',
			userHandle: 'username'
		};

		const expectedActions = [
			{ type: types.LOADING_UI },
			{
				type: types.POST_WAVE,
				payload: undefined
			},
			{ type: types.CLEAR_ERRORS }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: { waves: newWave }
			});
		});

		const initialState = {};
		const store = mockStore(initialState);

		return store.dispatch(postWave(newWave)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Get Waves should dispatch actions', () => {
		const initialState = {
			waveId: '1',
			body: 'test body',
			userHandle: 'username'
		};

		const expectedActions = [
			{ type: types.LOADING_DATA },
			{ type: types.SET_WAVES, payload: initialState }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					waveId: '1',
					body: 'test body',
					userHandle: 'username'
				}
			});
		});
		const store = mockStore(initialState);

		return store.dispatch(getWaves()).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Get Wave should dispatch actions', () => {
		const waveId = 'test_id';
		const expectedWave = {
			waveId: 'test_id',
			body: 'test body',
			userHandle: 'username'
		};
		const expectedActions = [
			{ type: types.LOADING_UI },
			{ type: types.SET_WAVE, payload: expectedWave },
			{ type: types.STOP_LOADING_UI }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedWave
			});
		});

		const initialState = {};
		const store = mockStore(initialState);

		return store.dispatch(getWave(waveId)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Upvote wave should dispatch upvote action', () => {
		const waveId = 'test_id';
		const expectedWave = {
			waveId: 'test_id',
			body: 'test body',
			userHandle: 'username'
		};
		const expectedActions = [
			{ type: types.UPVOTE_WAVE, payload: expectedWave }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedWave
			});
		});

		const initialState = expectedWave;
		const store = mockStore(initialState);

		return store.dispatch(upvoteWave(waveId)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Unupvote wave should dispatch unupvote action', () => {
		const waveId = 'test_id';
		const expectedWave = {
			waveId: 'test_id',
			body: 'test body',
			userHandle: 'username'
		};
		const expectedActions = [
			{ type: types.UNUPVOTE_WAVE, payload: expectedWave }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedWave
			});
		});

		const initialState = expectedWave;
		const store = mockStore(initialState);

		return store.dispatch(unupvoteWave(waveId)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Delete wave should dispatch delete action', () => {
		const waveId = 'test_id';
		const expectedWave = {
			waveId: 'test_id',
			body: 'test body',
			userHandle: 'username'
		};
		const expectedActions = [{ type: types.DELETE_WAVE, payload: waveId }];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: waveId
			});
		});

		const initialState = expectedWave;
		const store = mockStore(initialState);

		return store.dispatch(deleteWave(waveId)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Post comment should dispatch comment action', () => {
		const waveId = 'test_id';
		const commentData = {
			body: 'This is a test body',
			userHandle: 'username'
		};
		const expectedActions = [
			{ type: types.POST_COMMENT, payload: commentData },
			{ type: types.CLEAR_ERRORS }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: commentData
			});
		});

		const initialState = {
			waveId: 'test_id',
			body: 'test body',
			userHandle: 'username'
		};
		const store = mockStore(initialState);

		return store.dispatch(postComment(waveId)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Get user profile should dispatch profile actions', () => {
		const userHandle = 'username';
		const userWaves = {
			waveId: 'test_id',
			body: 'test body',
			userHandle: 'username'
		};
		const expectedActions = [
			{ type: types.LOADING_DATA },
			{
				type: types.SET_WAVES,
				payload: userWaves
			}
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					waves: {
						waveId: 'test_id',
						body: 'test body',
						userHandle: 'username'
					}
				}
			});
		});

		const initialState = userWaves;
		const store = mockStore(initialState);

		return store.dispatch(getUserProfile(userHandle)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
});
