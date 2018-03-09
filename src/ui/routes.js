import React from 'react'
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'
import { Pages, ShowPage, Portfolio } from './containers'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <div>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/' component={ Portfolio } />
                </div>
            </Switch>
        </HashRouter>
    )
}