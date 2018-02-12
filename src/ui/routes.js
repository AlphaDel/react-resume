import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import { Pages } from './containers'

export default () => {
    return (
        <Provider store={store} key='provider'>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/" component={App}/>
                    <Route path="/pages" component={Pages} />
                </div>
            </BrowserRouter>
        </Provider>

    )
}