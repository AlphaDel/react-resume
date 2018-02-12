import config from '../../config'
const API_ROOT = `http://${config.host}:${config.apiPort}/api/v1`

export const PAGES_ENDPOINT = `${API_ROOT}/pages`