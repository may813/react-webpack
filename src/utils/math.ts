export const add = (a, b) => {
  return a + b;
};
const createData = () => {
  let number = 200000;
  const dataList: (number|undefined)[] = [];
  while (number > 0) {
    dataList.push(number);
    number--;
  }
  return dataList;
};
export const bigData = createData();
