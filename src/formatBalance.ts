export const formatBalance = (balance: number): string => {
  if (balance <= 1000) {
    return balance.toFixed(2);
  }
  const balanceStr = balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return balanceStr;
};
