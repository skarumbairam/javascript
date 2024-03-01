const data = [
  "Apple",
  "Ariun",
  "Area",
  "Orange",
  "Banana",
  "Ball",
  "Bike",
  "Car",
  "Cat",
  "Pappaya",
  "Mango",
  "Lime",
];

export default data;

export const getData = (data, keyWord) => {
  const result = data.filter(
    (item, idx) =>
      item.substring(0, keyWord.length).toLowerCase() === keyWord.toLowerCase()
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

getData(data, "apple");

export const debounce = (fn, delay = 500) => {
  let timer;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(self, args), delay);
  };
};
