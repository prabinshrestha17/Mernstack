const printHello = (facebook) => {
  console.log("hi");
  facebook();
};

const printGoodNight = () => {
  console.log("Hi Namastey! I am aaryan and welcome to my facebook page.");
};

// const printGoodMorning = () => {
//   console.log("Goodmorning");
// };

// const printBye = () => {
//   console.log("Bye");
// };

printHello(printGoodNight);
