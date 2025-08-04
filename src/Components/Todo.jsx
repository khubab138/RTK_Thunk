import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

import { useState } from "react";
import { createUser } from "../Redux/Slice/UserDetailSlice";

const Website = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleAdd() {
    console.log(user);
    dispatch(createUser(user));
    setUser("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-2  text-white bg-transparent bg-opacity-0  rounded-xl   ">
      <div className="grid grid-cols-7  gap-6 place-content-center   p-4 w-[90%] h-[10%] m-3  ">
        <input
          name="name"
          className="col-span-3  border-white/30 text-white border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
          type="url"
          placeholder="Enter Name..."
          onChange={handleOnChange}
        />
        <input
          name="email"
          className="col-span-2 border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
          type="email"
          placeholder="Email"
          onChange={handleOnChange}
        />
        <div className="col-span-1 grid grid-cols-4 gap-2">
          <input
            className="col-span-2  border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
            name="age"
            type="number"
            placeholder="age"
            onChange={handleOnChange}
          />
          <input
            className="col-span-2    border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
            name="gender"
            type={"text"}
            placeholder="gender"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleAdd}
            className=" col-span-1 m-1  py-2 px-5 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
          >
            Save
          </button>
        </div>
      </div>
      <ul
        className="flex flex-col items-center w-[90%] h-[75%] p-5   m-3 border-2 border-white/30 rounded-xl  overflow-y-auto overflow-x-hidden 
 
 "
      >
        <TodoList />
      </ul>
    </div>
  );
};

export default Website;
