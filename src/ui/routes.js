import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { App, Home } from './components'
import { Pages, ShowPage } from './containers'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={ App }/>
                <Route exact path='/' component={ Home } />
                    
                <Route exact path='/pages' component={ Pages } />
                <Route exact path='/page/:id' component={ ShowPage } />
            </div>
        </BrowserRouter>
    )
}