import React from 'react'
import { render } from 'react-dom'
// import './index.css'
import './index.scss'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'

const rootEl = document.getElementById('root')
render(
    <AppContainer>
        <Root />
    </AppContainer>,rootEl
)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextRootApp = require('./containers/Root').default

        render(
            <AppContainer>
                <NextRootApp />
            </AppContainer>,rootEl
        )
    })
}

registerServiceWorker()
