import { useSelector } from "react-redux";

const DisplayCount = () => {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current Value : {counter}</p>;
};

export default DisplayCount;
