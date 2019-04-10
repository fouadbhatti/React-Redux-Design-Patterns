import React, { memo } from 'react';
import { connect } from 'react-redux';

import { fetch, disconnect } from '../actions/actions';
import getTradesStateSelector from '../selectors/getTradesStateSelector';
import getTickerStateSelector from '../selectors/getTickerStateSelector';

import Ticker from '../components/ticker';
import Trades from '../components/trades';
import Toggle from '../components/toggle';

export function App({ tradesList, ticker, fetch, disconnect }) {
  return (
    <React.Fragment>
      <Toggle onAction={ fetch } offAction={ disconnect } />
      <Ticker { ...ticker } />
      <Trades tradesList={ tradesList }/>
    </React.Fragment>
  );
}

export function mapStateToProps(state) {
 return {
   ticker: getTickerStateSelector(state),
   tradesList: getTradesStateSelector(state)
 }
}

export default connect(mapStateToProps, {
  fetch,
  disconnect
})(memo(App));