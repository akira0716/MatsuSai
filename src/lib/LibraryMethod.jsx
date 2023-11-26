// 3桁区切りの数値 → 数値(何をしてるかわかってない。)
export const replaceNumberText = (formatNumber) => {
  if (!formatNumber) {
    return "";
  }
  return String(formatNumber).replace(/,/g, "");
};

// 数値 → 3桁区切りの数値(何をしてるかわかってない。)
export const replaceFormatNumber = (numberText) => {
  if (!numberText) {
    return "";
  }
  return String(numberText).replace(/\d+/, function (m) {
    return m.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  });
};
