export const orderBookPrecision = {
  P0: 'P0',
  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
  P4: 'P4',
};

export const heartBeat = 'hb';

export const subscribeEvent = 'subscribe';

export const subscribedEvent = 'subscribed';

export const endpoint = 'wss://api-pub.bitfinex.com/ws/2';

export const message = {
  ticker: {
    channel: 'ticker',
    symbol: 'tBTCUSD'
  },
  trades: {
    channel: 'trades',
    symbol: 'tBTCUSD'
  },
  book: {
    channel:"book",
    prec:"P1",
    symbol:"tBTCUSD"
  },
};