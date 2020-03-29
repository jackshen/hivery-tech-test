export const formatCurrency = price => `${price >= 0 ? "" : "-"}$${(Math.abs(price) / 100).toFixed(2)}`;

export const formatCurrencyNoTrailingZeroes = price =>
  `${price >= 0 ? "" : "-"}$${parseFloat((Math.abs(price) / 100).toFixed(2))}`;
