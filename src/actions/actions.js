import * as types from '../constants/actionTypes';

export function fetchTicker(payload) {
  return {
    type: types.FETCH_TICKER,
    payload
  }
}

export function updateTicker(payload) {
  return {
    type: types.UPDATE_TICKER,
    payload
  }
}

export function fetchTrades(payload) {
  return {
    type: types.FETCH_TRADES,
    payload
  }
}

export function updateTrades(payload) {
  return {
    type: types.UPDATE_TRADES,
    payload
  }
}

export function disconnect() {
  return {
    type: types.DISCONNECT
  }
}

export function disconnected() {
  return {
    type: types.DISCONNECTED
  }
}

export function fetch() {
  return {
    type: types.FETCH
  }
}