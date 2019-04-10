import { filter, map, mergeMap } from 'rxjs/operators';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/actions';
import { message } from '../services/serverConfigurations';

const fetchTickerAction = actions.fetchTicker({
  symbol: message.ticker.symbol,
  channel: message.ticker.channel
});

const fetchTradesAction = actions.fetchTrades({
  symbol: message.trades.symbol,
  channel: message.trades.channel
});

export const disconnectEpic = (action$, state$, { webSocketServiceInstance }) => action$.pipe(
  filter(action => action.type === types.DISCONNECT),
  mergeMap(() => {
    return webSocketServiceInstance.disconnect();
  }),
  map(data => {
    return { type: types.DISCONNECTED };
  })
);

export const fetchEpic = (action$) => action$.pipe(
  filter(action => action.type === types.FETCH),
  mergeMap(() => [fetchTickerAction, fetchTradesAction])
);