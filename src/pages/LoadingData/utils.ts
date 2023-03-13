export const loadingByPage = (bigData) => {
  const totalNum = bigData.length;
  const onceNum = 20;
  const page = totalNum / onceNum;
  let index = 0;
  return () => {
    return bigData.splice(0, onceNum);
  };
};
