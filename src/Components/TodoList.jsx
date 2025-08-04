import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../Redux/Slice/UserDetailSlice";

const WebList = () => {
  const dispatch = useDispatch();
  const WEB = useSelector((state) => state.userDetail.users);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  function handleDelete(id) {}

  const [editToggel, setEditToggel] = useState(false);
  const [editID, setEditID] = useState("");
  const [user, setUser] = useState();

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleStartEditing() {}
  function handleEdit(id) {}

  return (
    <>
      {WEB.map((web) =>
        editID === web.id ? ( //_____________________INPUT SECTION________________________
          <li
            key={web.id}
            className=" INPUT_SECTION grid grid-cols-10 gap-2 place-content-center m-1 w-full h-[13%] bg-transparent font-roboto  "
          >
            <input
              onChange={handleOnChange}
              name="name"
              // value={web.name}
              className="col-span-3 my-5  truncate  rounded-lg bg-white/30 text-black  "
            />
            <input
              onChange={handleOnChange}
              name="email"
              // value={web.email}
              className="col-span-3 my-5 px-1 truncate   rounded-lg bg-white/30 text-black "
            />
            <div className="col-span-3 grid grid-cols-2  my-5 gap-2  rounded-lg ">
              <input
                onChange={handleOnChange}
                name="age"
                // value={web.age}
                type={"number"}
                className=" col-span-1 rounded-lg text-black bg-white/30 truncate"
              />
              <input
                onChange={handleOnChange}
                name="gender"
                // value={web.gender}
                type={"text"}
                className=" col-span-1 rounded-lg text-black bg-white/30 truncate"
              />
            </div>

            <div className="col-span-1 my-5 flex justify-evenly items-center text-teal-400   ">
              <button className="  h-full px-5 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 ">
                Save
              </button>
            </div>
          </li>
        ) : (
          <li
            key={web.id}
            className=" grid grid-cols-10 gap-4 place-content-center m-1 p-2 w-full h-[13%] bg-slate-700 border-2 border-white/30 rounded-lg "
          >
            <div className="col-span-3 m-1 px-1 truncate border-2 border-white/30 rounded-lg text-white   ">
              {web.name}
            </div>
            <div className="col-span-4 m-1 px-1 truncate border-2 border-white/30  rounded-lg text-white  ">
              {web.email}
            </div>
            <div className="col-span-2 grid grid-cols-8 place-content-center gap-2 m-1 px-1 turncate  text-white ">
              <div className="col-span-4 border-2 border-white/30  rounded-lg truncate">
                {web.age}
              </div>
              <div className="col-span-4 border-2 border-white/30  rounded-lg truncate">
                {web.gender}
              </div>
            </div>
            <div className="col-span-1 flex justify-evenly items-center text-teal-400   ">
              <button
                onClick={() => {
                  setEditToggel(!editToggel), setEditID(web.id);
                }}
              >
                {editToggel ? (
                  <MdEdit className="text-2xl hover:text-green-600 " />
                ) : (
                  <MdEdit className="text-2xl bg-blue-600 " />
                )}
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser(web.id));
                }}
              >
                <MdDelete className="text-2xl hover:text-red-500 " />
              </button>
            </div>
          </li>
        )
      )}
    </>
  );
};

export default WebList;
