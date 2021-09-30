export const Plus = () => {
  return {
    type: "PLUS"
  };
};

export const Minus = () => {
  return {
    type: "Minus"
  };
};

export const PlusFive = number => {
  return {
    type: "PlUS_FIVE",
    payload: number
  };
};

export const Multiple = () => {
  return {
    type: "MULTIPLE"
  };
};

export const Zero = () => {
  return {
    type: "ZERO"
  };
};

export const Division = () => {
  return {
    type: "DIVISION"
  };
};
