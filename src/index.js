import ReactDOM from "react-dom";

//import styles
import "./index.css";

//import store
import store from "./store";
import { Provider } from "react-redux";

//import components
import Counter from "./Components/Counter/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
