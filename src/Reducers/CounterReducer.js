const initialState = {
  counter: 0
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        counter: state.counter + 1
      };
    case "Minus":
      return {
        counter: state.counter - 1
      };

    case "PlUS_FIVE": {
      return {
        counter: state.counter + action.payload
      };
    }
    case "MULTIPLE": {
      return {
        counter: state.counter * state.counter
      };
    }
    case "ZERO": {
      return {
        counter: 0
      };
    }
    case "DIVISION": {
      return {
        counter: state.counter / 2
      };
    }
    default:
      return state;
  }
};

export default CounterReducer;
