

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension' // dev

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const preLoadedState = {
    products: [],
    reviews: {}
};

let middleware = [thunk];
const store = createStore(rootReducer, preLoadedState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;