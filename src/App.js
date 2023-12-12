import UseEffect from "./useEffect/UseEffect"
import UseReducer from "./useReducer/UseReducer";
import UseRef from "./useRef/UseRef"
import UseState from "./useState/UseState";
import UseLayoutEffect from "./useLayoutEffect/UseLayoutEffect";
import UseImperativeHandle from "./useImperativeHandle/UseImperativeHandle";
function App() {
  return (
    <div>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
    </div>
  );
}

export default App;
