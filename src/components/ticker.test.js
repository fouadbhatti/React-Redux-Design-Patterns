import React from 'react';
import renderer from 'react-test-renderer';
import { Ticker } from './ticker';

describe('Ticker Component Test', () => {
  it('renders as expected', () => {
    const componentTree = renderer.create(
      <Ticker
        dailyChangePerc={0.1}
        lastPrice={100}
        volume={1000}
        high={5500}
        low={3000}
      />)
    .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});