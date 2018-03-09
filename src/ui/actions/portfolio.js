
import payload from '../data/data.json'
import { LOAD_PAGE_SUCCESS } from '../constants/actionTypes'

export function loadPagePortfolio() {
    return { 
      type: LOAD_PAGE_SUCCESS,
      payload
    }
  }