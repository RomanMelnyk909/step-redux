//Connet react to store
import { connect } from "react-redux";
import {
  // Plus,
  // Minus,
  // PlusFive,
  // Multiple,
  // Zero,
  // Division
  changeFirstNum,
  changeSecondNum,
  changeOperator,
  calculate,
} from "../../Actions/CounterActions";

import "./Counter.css";

const Counter = ({
  // counter,
  // Plus,
  // Minus,
  // PlusFive,
  // Multiple,
  // Zero,
  // Division
  result,
  changeFirstNum,
  changeSecondNum,
  changeOperator,
  calculate,
}) => {
  return (
    <div className="container main-block">
      <div className="row">
        <div className="col center">
          <input
            type="number"
            onChange={(event) => {
              changeFirstNum(event.target.value);
            }}
          />
          <select
            onChange={(event) => {
              changeOperator(event.target.value);
            }}
          >
            <option>Choise operator</option>
            <option value="PLUS">+</option>
            <option value="MINUS">-</option>
            <option value="MULTIPLE">*</option>
            <option value="DIVISION">/</option>
          </select>
          <input
            type="number"
            onChange={(event) => {
              changeSecondNum(event.target.value);
            }}
          />
          <div><button type="button" onClick={calculate}>
            Calculate
          </button>
          <div>Result: {result}</div></div>
          

          {/* <button
            onClick={Plus}
            type="button"
            className="btn btn-success operators"
          >
            Plus
          </button>
          <span className="counter">{counter}</span>
          <button
            onClick={Minus}
            type="button"
            className="btn btn-warning operators"
          >
            Minus
          </button>
          <button
            onClick={() => PlusFive(5)}
            type="button"
            className="btn btn-warning operators"
          >
            +5
          </button>
          <button
            onClick={Multiple}
            type="button"
            className="btn btn-warning operators"
          >
            Multiple
          </button>
          <button
            onClick={Zero}
            type="button"
            className="btn btn-warning operators"
          >
            Zero
          </button>
          <button
            onClick={Division}
            type="button"
            className="btn btn-warning operators"
          >
            /2
          </button> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ CounterReducer }) => {
  console.log("mapStateProps", CounterReducer);
  const { result } = CounterReducer;
  return { result };
};

const mapDispatchToProps = {
  // Plus,
  // Minus,
  // PlusFive,
  // Multiple,
  // Zero,
  // Division
  changeFirstNum,
  changeSecondNum,
  changeOperator,
  calculate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
