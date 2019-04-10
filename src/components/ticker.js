import React, { memo } from 'react';

export function Ticker({dailyChangePerc, lastPrice, volume, high, low}) {
  return (
    <div>
      <div>Daily Change: {dailyChangePerc}</div>
      <div>Last Price: {lastPrice}</div>
      <div>Volume: {volume}</div>
      <div>High: {high}</div>
      <div>Low: {low}</div>
    </div>
  );
}

export default memo(Ticker);