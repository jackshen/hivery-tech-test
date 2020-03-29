import React from "react";
import styled from "styled-components";

import { formatCurrencyNoTrailingZeroes } from "#root/helpers/currencyFormatters";

const Table = styled.table`
  font-size: initial;
  margin-top: 0.5rem;

  > tbody {
    > tr {
      > th {
        padding-right: 0.875rem;
        text-align: left;
      }
    }
  }
`;

const ProductCardStatsTable = ({ price, vends }) => (
  <Table>
    <tbody>
      <tr>
        <th>Price:</th>
        <td>{formatCurrencyNoTrailingZeroes(price)}</td>
      </tr>
      <tr>
        <th>Vends:</th>
        <td>{vends.toFixed(2)}</td>
      </tr>
      <tr>
        <th>Revenue:</th>
        <td>{formatCurrencyNoTrailingZeroes(price * vends)}</td>
      </tr>
      <tr>
        {/* Dummy values */}
        <th>Cols:</th>
        <td>8/10</td>
      </tr>
    </tbody>
  </Table>
);

export default ProductCardStatsTable;
