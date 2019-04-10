import React from 'react';
import renderer from 'react-test-renderer';
import { Trades } from './trades';

describe('Trades Component Test', () => {
  it('renders as expected', () => {
    const tradeList = [
      {id: 349248445, mts: 1554913866540, amount: 0.01054537, price: 5299.5},
      {id: 349248364, mts: 1554913848803, amount: 0.01628212, price: 5299.5},
      {id: 349248325, mts: 1554913825823, amount: 0.1, price: 5299.5},
      {id: 349248320, mts: 1554913822349, amount: 0.05239461, price: 5299.5},
      {id: 349248317, mts: 1554913819804, amount: 0.004, price: 5299.5},
      {id: 349248308, mts: 1554913816230, amount: 0.0176, price: 5299.4},
      {id: 349248305, mts: 1554913814996, amount: 0.01170507, price: 5299.4},
      {id: 349248291, mts: 1554913812072, amount: 0.02298214, price: 5299.4},
      {id: 349248280, mts: 1554913809511, amount: 0.052, price: 5298.2},
      {id: 349248281, mts: 1554913809511, amount: 0.095, price: 5298.3}
    ];
    const componentTree = renderer.create(
      <Trades
        tradesList={tradeList}
      />)
    .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});