import { createStore } from "redux";

const INI_VALUE = {
  counter: 0,
};

const counterreducer = (store = INI_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  }
  else if (action.type === "ADD") {
    return { counter: store.counter + Number(action.payload.num) };
  }
  else if (action.type === "SUBSTRACT") {
    return { counter: store.counter - Number(action.payload.num) };
  }
  return store;
};
const counterStore = createStore(counterreducer);

export default counterStore;
