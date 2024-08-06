import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const ondispatch = useDispatch();
  const InputElement = useRef();

  const handleIncrement = () => {
    ondispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    ondispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    ondispatch({ type: "ADD", payload: { num: InputElement.current.value } });
    InputElement.current.value = "";
  };
  const handleSubstract = () => {
    ondispatch({
      type: "SUBSTRACT",
      payload: { num: InputElement.current.value },
    });
    InputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="enter number"
          className="number-input"
          ref={InputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
