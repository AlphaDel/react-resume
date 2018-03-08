import { CALL_API } from 'redux-api-middleware'
import { PAGES_ENDPOINT } from '../constants/endpoints'
import data from '../data/data.json'
import {
  LOAD_PAGES_REQUEST,
  LOAD_PAGES_SUCCESS,
  LOAD_PAGES_FAILURE,

  LOAD_PAGE_REQUEST,
  LOAD_PAGE_SUCCESS,
  LOAD_PAGE_FAILURE
} from '../constants/actionTypes'

export const loadPages = () => ({
  [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
    method: 'GET',
    types: [LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE]
  }
}) 

export const loadPage = (id) => ({
  [CALL_API]: {
    endpoint: `${PAGES_ENDPOINT}?id=${id}`,
    method: 'GET',
    types: [LOAD_PAGE_REQUEST, LOAD_PAGE_SUCCESS, LOAD_PAGE_FAILURE]
  }
})

export const activateGeod = geod => ({  
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = () => ({  
  type: 'CLOSE_GEOD',
});

export function loadPagePortfolio() {
  console.log("loadPagePortfolio work !")
  return { 
    type: "RECEIVE_PAGES",
    data
  }
}
export function loadPagePortfolioSuccess(payload) {
  return { type: LOAD_PAGE_SUCCESS, payload };
}