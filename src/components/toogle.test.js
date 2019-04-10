import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toogle from './toggle';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    onAction: jest.fn(),
    offAction: jest.fn()
  };

  return { wrapper: shallow(<Toogle {...props}/>), props }
}

describe('AddFriend Component Test', () => {
  const noop = () => {};

  it('should check state on defaults to true', () => {
    const { wrapper } = setup();

    expect(wrapper.state().on).toBe(true);
  });

  it('should update state.on when toggle button clicked', () => {
    const { wrapper } = setup();
    const select = wrapper.find('button');
    const mockedEvent = { target: {}, stopPropagation:noop, preventDefault:noop };
    select.simulate('click', mockedEvent);
    expect(wrapper.state().on).toBe(false);
  });
});