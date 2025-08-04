import React from "react";
import Todo from "./Components/Todo";

const App = () => {
  return (
    <center className="h-screen w-screen   bg-slate-800">
      <section className="h-full max-w-screen overflow-x-hidden overflow-y-hidden ">
        <div className="h-[20%]"></div>

        <div className="h-[80%] w-full:">
          <Todo />
        </div>
      </section>
    </center>
  );
};

export default App;
