import React, { memo } from 'react';

export function Trades({ tradesList = [] }) {
  return (
        <table>
          <tbody>
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
            {
              tradesList.map((item, index) =>
                <tr id={item.id} key={index}>
                  <td>
                    { new Date(item.mts).toLocaleTimeString() }
                  </td>
                  <td>
                    { item.price }
                  </td>
                  <td>
                    { item.amount }
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
  );
}

export default memo(Trades);