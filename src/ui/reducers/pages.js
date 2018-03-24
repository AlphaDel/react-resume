import { LOAD_PAGE_REQUEST } from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
    
    switch(action.type) {
        case LOAD_PAGE_REQUEST:
            return action.payload
        default:
            return state
    }
}

export const getPageById = (state, id) => (
    state.pages.find(x => x.id === +id) || { title: '', content: '' }
)
 

  

