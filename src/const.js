const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};

const adaptData = (rates) => ({
  [Currency.RUB]: rates[Currency.RUB],
  [Currency.GBP]: rates[Currency.GBP],
  [Currency.EUR]: rates[Currency.EUR],
  [Currency.USD]: rates[Currency.USD],
  [Currency.CNY]: rates[Currency.CNY],
});

export {Currency, adaptData};
