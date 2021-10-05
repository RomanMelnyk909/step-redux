export const changeOperator = (operation) => {
  return {
    type: operation,
    payload: operation,
  };
};

export const changeFirstNum = (number) => {
  return {
    type: "FIRST_NUM",
    payload: number,
  };
};

export const changeSecondNum = (number) => {
  return {
    type: "SECOND_NUM",
    payload: number,
  };
};

export const calculate = () => {
  return {
    type: "CALCULATE",
  };
};

// export const Plus = () => {
//   return {
//     type: "PLUS"
//   };
// };

// export const Minus = () => {
//   return {
//     type: "Minus"
//   };
// };

// export const PlusFive = number => {
//   return {
//     type: "PlUS_FIVE",
//     payload: number
//   };
// };

// export const Multiple = () => {
//   return {
//     type: "MULTIPLE"
//   };
// };

// export const Zero = () => {
//   return {
//     type: "ZERO"
//   };
// };

// export const Division = () => {
//   return {
//     type: "DIVISION"
//   };
// };
