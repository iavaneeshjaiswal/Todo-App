import { useEffect, useState } from "react";
import ShowCard from "./component/showCard";
import axios from "axios";

function Show(props) {
  let tasks = props.data;

  let deleteFunc = async (id) => {
    try {
      let tasks = await axios.delete(`http://localhost:4000/${id}`);
      props.refress();
    } catch (error) {
      alert("Failed to Delete");
    }
  };


  return (
    <>
      <div className="w-full flex flex-col items-center gap-2 p-1  rounded-lg ">
        {tasks != "" ? (
          tasks.map((task) => {
            return (
              <ShowCard
                key={task._id}
                title={task.title}
                status={task.status}
                deleteTask={deleteFunc}
                id={task._id}
              />
            );
          })
        ) : (
          <p className="font-semibold capitalize">There is no tasks created</p>
        )}
      </div>
    </>
  );
}

export default Show;
