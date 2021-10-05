const initialState = {
  result: 0,
  firstNum: 0,
  secondNum: 0,
  operator: "",
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRST_NUM":
      return { ...state, firstNum: +action.payload };

    case "SECOND_NUM":
      return { ...state, secondNum: +action.payload };

    case "PLUS":
      return { ...state, operator: action.payload };

    case "MINUS":
      return { ...state, operator: action.payload };

    case "MULTIPLE":
      return { ...state, operator: action.payload };

    case "DIVISION":
      return { ...state, operator: action.payload };

    case "CALCULATE": {
      switch (state.operator) {
        case "PLUS":
          return { ...state, result: state.firstNum + state.secondNum };

        case "MINUS":
          return { ...state, result: state.firstNum - state.secondNum };

        case "MULTIPLE":
          return { ...state, result: state.firstNum * state.secondNum };

        case "DIVISION":
          return { ...state, result: state.firstNum / state.secondNum };
        default : return true  
      }
      
    }

    // case "PLUS":
    //   return {
    //     counter: state.counter + 1
    //   };
    // case "Minus":
    //   return {
    //     counter: state.counter - 1
    //   };

    // case "PlUS_FIVE": {
    //   return {
    //     counter: state.counter + action.payload
    //   };
    // }
    // case "MULTIPLE": {
    //   return {
    //     counter: state.counter * state.counter
    //   };
    // }
    // case "ZERO": {
    //   return {
    //     counter: 0
    //   };
    // }
    // case "DIVISION": {
    //   return {
    //     counter: state.counter / 2
    //   };
    // }
    default:
      return state;
  }
};

export default CounterReducer;
