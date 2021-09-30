//Connet react to store
import { connect } from "react-redux";
import {
  Plus,
  Minus,
  PlusFive,
  Multiple,
  Zero,
  Division
} from "../../Actions/CounterActions";

import "./Counter.css";

const Counter = ({
  counter,
  Plus,
  Minus,
  PlusFive,
  Multiple,
  Zero,
  Division
}) => {
  return (
    <div className="container main-block">
      <div className="row">
        <div className="col center">
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ CounterReducer }) => {
  console.log("mapStateProps", CounterReducer);
  const { counter } = CounterReducer;
  return { counter };
};

const mapDispatchToProps = {
  Plus,
  Minus,
  PlusFive,
  Multiple,
  Zero,
  Division
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
