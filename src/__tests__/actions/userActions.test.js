import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
	loginUser,
	getUserData,
	signupUser,
	uploadImage,
	editUserDetails,
	markNotificationsRead
} from '../../redux/actions/userActions';
import * as types from '../../redux/types';

describe('async actions', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	it('Login user should dispatch login actions', () => {
		const userData = {
			email: 'test@address.com',
			password: 'password'
		};
		const history = [];

		const expectedActions = [
			{ type: types.LOADING_UI },
			{ type: types.LOADING_USER },
			{ type: types.CLEAR_ERRORS }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'Logged in successfully'
			});
		});

		const store = mockStore({});

		return store.dispatch(loginUser(userData, history)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Get user data should dispatch user data actions', () => {
		const userData = {
			email: 'test@address.com',
			password: 'password'
		};

		const expectedActions = [
			{ type: types.LOADING_USER },
			{ type: types.SET_USER, payload: userData }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: userData
			});
		});

		const store = mockStore({});

		return store.dispatch(getUserData()).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Signup user should dispatch signup actions', () => {
		const newUserData = {
			email: 'test@address.com',
			password: 'password'
		};
		const history = [];

		const expectedActions = [
			{ type: types.LOADING_UI },
			{ type: types.LOADING_USER },
			{ type: types.CLEAR_ERRORS }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'Signed up successfully'
			});
		});

		const store = mockStore({});

		return store.dispatch(signupUser(newUserData, history)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Upload image should dispatch image upload actions', () => {
		const formData = {
			image: 'imageUrl'
		};
		const expectedActions = [
			{ type: types.LOADING_USER },
			{ type: types.LOADING_USER }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'Image uploaded successfully'
			});
		});

		const store = mockStore({});

		return store.dispatch(uploadImage(formData)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Edit user details should dispatch edit details actions', () => {
		const newDetails = {
			bio: 'random bio',
			location: 'anywhere',
			image: 'imageUrl'
		};
		const expectedActions = [
			{ type: types.LOADING_USER },
			{ type: types.LOADING_USER }
		];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'Details changed successfully'
			});
		});

		const store = mockStore({});

		return store.dispatch(editUserDetails(newDetails)).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
	it('Edit user details should dispatch edit details actions', () => {
		const expectedActions = [{ type: types.MARK_NOTIFICATIONS_READ }];

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'Marked read successfully'
			});
		});

		const store = mockStore({});

		return store.dispatch(markNotificationsRead()).then(() => {
			const calledActions = store.getActions();
			expect(calledActions).toEqual(expectedActions);
		});
	});
});
