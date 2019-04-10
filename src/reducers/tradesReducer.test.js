import tradesReducer from './tradesReducer'

describe('trades reducer', () => {
  const initialState = {
    trades: {

    },
    allIds: [

    ]
  };

  it('should return the initial state', () => {
    const actual = tradesReducer(undefined, {});

    expect(actual).toEqual(initialState);
  });
});