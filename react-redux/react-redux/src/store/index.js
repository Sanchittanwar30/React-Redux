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
  return store;
};
const counterStore = createStore(counterreducer);

export default counterStore;
