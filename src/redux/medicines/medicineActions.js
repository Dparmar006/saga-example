import {
  GET_MEDICINES_FAILURE,
  GET_MEDICINES_REQUEST,
  GET_MEDICINES_SUCCESS
} from './actionTypes'

export function getMedicines () {
  return {
    type: GET_MEDICINES_REQUEST
  }
}

export function getMedicinesSuccess (payload) {
  return {
    type: GET_MEDICINES_SUCCESS,
    payload
  }
}

export function getMedicinesFailure (error) {
  return {
    type: GET_MEDICINES_FAILURE,
    payload: error
  }
}
