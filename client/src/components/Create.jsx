import { useState } from "react";
import InputText from "./component/InputText";

function Create(props) {
  

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="w-4/5 flex flex-col gap-2 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <InputText
        type="text"
        placeholder="Enter Your Task"
        OnChange={props.OnChange}
        value={props.Value}
      />
      <input
        type="submit"
        value="Add Task"
        className="bg-indigo-500 hover:bg-indigo-700 p-2 rounded cursor-pointer text-white"
        onClick={props.handleClick}
      />
    </form>
  );
}

export default Create;
