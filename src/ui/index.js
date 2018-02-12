import { render } from 'react-dom'
// import './index.css'
import './index.scss'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'

const root = document.getElementById('root')
render(
    routes(),root
)
registerServiceWorker()
