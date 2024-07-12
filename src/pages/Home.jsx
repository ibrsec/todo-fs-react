import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskComp from "../components/TaskComp";
import useTodoApis from "../services/useTodoApis";
import NewTodo from "../components/NewTodo";

const Home = () => {
  const { getTodos } = useTodoApis();
  const todos = useSelector((state) => state.todo.todos) || [];
  const username = useSelector((state) => state.login.username);

  useEffect(() => {
    getTodos();
     // eslint-disable-next-line
  }, []);


  const sortedTodos = [...todos].sort((a, b) => {
    // Replace with your sorting logic, e.g., by a 'title' property
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
console.log('sortedTodos', sortedTodos)

  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
        {/* Component Start */}
        <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
          <div className="flex items-center mb-6">
            <svg
              className="h-8 w-8 text-indigo-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h4 className="font-semibold ml-3 text-lg">
              {username}'s Jobs
            </h4>
          </div>

          {sortedTodos?.map((todo) => {
            console.log(todo?.id);
            return <TaskComp key={todo?.id} {...todo} />;
          })}

          {/* <TaskComp />
          <TaskComp />
          <TaskComp />
          <TaskComp /> */}

          {/* <div>
            <input
              className="hidden"
              type="checkbox"
              id="task_6"
              defaultChecked=""
            />
            <label
              className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              htmlFor="task_6"
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
              <span className="ml-4 text-sm">Trim the verge.</span>
            </label>
          </div>
          <div>
            <input
              className="hidden"
              type="checkbox"
              id="task_7"
              defaultChecked=""
            />
            <label
              className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              htmlFor="task_7"
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
                Eavesdrop on Master Frodo &amp; Gandalf.
              </span>
            </label>
          </div>
          <div>
            <input className="hidden" type="checkbox" id="task_8" />
            <label
              className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              htmlFor="task_8"
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
                Boil, mash, and stick potatoes in stew.
              </span>
            </label>
          </div>
          <div>
            <input className="hidden" type="checkbox" id="task_9" />
            <label
              className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              htmlFor="task_9"
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
              <span className="ml-4 text-sm">Carry Frodo.</span>
            </label>
          </div>
          <div>
            <input className="hidden" type="checkbox" id="task_10" />
            <label
              className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              htmlFor="task_10"
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
              <span className="ml-4 text-sm">Be all round legend.</span>
            </label>
          </div> */}
          

          <NewTodo />

        </div>
        {/* Component End  */}
      </div>
    </div>
  );
};

export default Home;
