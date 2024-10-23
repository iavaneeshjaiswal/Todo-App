import Create from "./components/Create";
import Show from "./components/show";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    getData: [],
    sendData: "",
    visible: true,
  });

  let handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      sendData: e.target.value,
    }));
  };

  let getData = async () => {
    let tasks = await axios.get("http://localhost:4000/");
    setState((prevState) => ({
      ...prevState,
      getData: tasks.data,
    }));
  };

  let Insert = async () => {
    try {
      let tasks = await axios.post("http://localhost:4000/", {
        title: state.sendData,
      });
      setState((prevState) => ({
        ...prevState,
        sendData: "",
      }));
      getData();
    } catch (error) {
      alert("Failed to insert");
      setState((prevState) => ({
        ...prevState,
        sendData: "",
      }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      visible: !state.visible,
    }));
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center  items-center gap-10 my-10">
        <div className="w-full md:w-4/6 flex justify-center  items-center my-10">
          <Create
            OnChange={handleChange}
            Value={state.sendData}
            handleClick={Insert}
          />
        </div>
        <div className="w-full md:w-3/6 flex justify-center  items-center my-10">
          <Show
            data={state.getData}
            refress={getData}
            Visibility={toggleVisibility}
          />
        </div>
      </div>
    </>
  );
}

export default App;
