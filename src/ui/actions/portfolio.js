
import payload from '../data/data.json'
import {
  LOAD_PAGES_REQUEST,
  LOAD_PAGES_SUCCESS,
  LOAD_PAGES_FAILURE,

  LOAD_PAGE_REQUEST,
  LOAD_PAGE_SUCCESS,
  LOAD_PAGE_FAILURE
} from '../constants/actionTypes'

export function loadPagePortfolio() {
    return { 
      type: LOAD_PAGES_SUCCESS,
      payload
    }
  }