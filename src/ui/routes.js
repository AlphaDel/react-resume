import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'
import { Pages, ShowPage, Portfolio } from './containers'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={ App }/>
{/*                     
                <Route exact path='/pages' component={ Pages } />
                <Route exact path='/page/:id' component={ ShowPage } /> */}
                <Route path='/portfolio' component={ Portfolio } />
            </div>
        </BrowserRouter>
    )
}