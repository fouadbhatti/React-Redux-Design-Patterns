import { filter, exhaustMap, map } from 'rxjs/operators';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/actions';
import tickerSelector from '../selectors/tickerSelector';
import {
  heartBeat,
  message,
  subscribedEvent,
  subscribeEvent,
} from '../services/serverConfigurations';

export const fetchTickerEpic = (action$, state$, { webSocketServiceInstance }) => action$.pipe(
  filter(action => action.type === types.FETCH_TICKER),
  exhaustMap((action) => {
    let activeChannelId = null;
    return webSocketServiceInstance.query({
      ...action.payload,
      event: subscribeEvent
    }).pipe(
      filter(response => {
        if (response.event === subscribedEvent && activeChannelId === null && response.channel === message.ticker.channel) {
          activeChannelId = response.chanId;
        }
        return !response.event
      }),
      filter(response => {
        const [channelId, data] = response;
        return channelId === activeChannelId && data !== heartBeat
      })
    )
  }),
  map(data => {
    const filteredData = tickerSelector(data);
    return actions.updateTicker(filteredData);
  })
);
