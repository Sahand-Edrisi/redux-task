import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../redux/counterSlice";

export default function Counter() {
  const selector = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div
      className="bg-gray-800 fixed m-auto: w-full
     h-full"
    >
      <div className="  text-3xl flex pt-[350px] justify-center">
        <button
          className=" w-[250px] rounded-2xl text-indigo-200 font-bold bg-red-800 m-2 p-2"
          onClick={() => dispatch(Decrement())}
        >
          Decrement
        </button>
        <div className=" rounded-2xl bg-amber-400 text-center text-rose-800 font-bold w-[150px] m-2 p-5">
          {selector}
        </div>
        <button
          className=" w-[250px] text-indigo-200 font-bold rounded-2xl bg-green-800 m-2 p-2 "
          onClick={() => dispatch(Increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
