export const getDiscount = (orignalPrice, discountPrice) => {
    const discount = orignalPrice - discountPrice

    const percentageDis = (discount/orignalPrice) * 100;

    return percentageDis.toFixed(2);
};
