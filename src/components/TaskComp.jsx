import { useState } from "react";
import useTodoApis from "../services/useTodoApis";

const TaskComp = ({ id, title, isDone, priority, description }) => {
  const { updateTodo, deleteTodo } = useTodoApis();

  const handleToggleDone = (e) => {
    const payload = {
      title,
      isDone: !isDone,
    };
    console.log("payload=", payload);
    updateTodo(id, payload);
  };

  const [prio, setPrio] = useState(priority);

  // useState(() => {
  //   console.log(prio);
  // }, []);
  // console.log(prio);

  return (
    <div className="flex items-center gap-2">
      <div className="w-[40px]">
        <select
          name=""
          id=""
          className=" cursor-pointer w-full  font-xs bg-gray-800 rounded-full text-center text-blue-400 focus:outline-none"
          value={prio}
          onChange={(e) => {
            const value = e.target.options[e.target.selectedIndex].value;
            setPrio(value);
            const payload = {
              title,
              priority:value,
            };
            updateTodo(id,payload)
          }}
        >
          <option value="1">🔴</option>
          <option value="0">⚪️</option>
          <option value="-1">🟢</option>
        </select>
      </div>
      <div className="flex-grow">
        <input
          className="hidden"
          type="checkbox"
          id={"task_" + id}
          // defaultChecked={false}
          // checked={false}
          checked={isDone}
          onChange={handleToggleDone}
        />
        <label
          className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
          htmlFor={"task_" + id}
        >
          <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="ml-4 text-sm">
            {title}
          </span>
        </label>
      </div>
      <div>
        <button onClick={() => deleteTodo(id)}>🚫</button>
      </div>
    </div>
  );
};

export default TaskComp;
