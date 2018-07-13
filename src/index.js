import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, Provider, thunk, creators } from 'andy-redux'
import { counter } from './index.redux'
import App from './App'

const store = createStore(counter, applyMiddleware(thunk, creators))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)