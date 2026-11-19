"use client";

import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addJob = () => {
    const newJob = {
      title: inputValue,
      isDone: false,
    };
    setToDoList([...toDoList, newJob]);
    setInputValue("");
  };
  const deleteJob = (index) => {
    const updateJob = toDoList.filter((job, i) => {
      return index !== i;
    });
    setToDoList(updateJob);
  };

  return (
    <div className="bg-blue-50 h-screen w-full flex justify-center">
      <div className="bg-white w-[600px] h-fit flex flex-col gap-5 p-6 rounded-[24px] mt-[40px]">
        <div className="w-full text-slate-800">
          <h1 className="font-bold text-[32px]">✅ Хийх ажил</h1>
          <p>{toDoList.length} ажил</p>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <input
            value={inputValue}
            className="border-1 border-slate-400 h-[48px] rounded-[12px] w-full pl-4 text-slate-800 font-medium"
            placeholder="Шинэ ажил бичих..."
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            type="text"
          />
          <button
            className="bg-slate-400 h-[48px] px-4 rounded-[12px] font-bold"
            onClick={addJob}
          >
            Нэмэх
          </button>
        </div>

        <div className="flex w-full gap-3">
          <button
            className="bg-slate-100 h-[48px] w-full px-4 rounded-[12px] text-slate-800"
            onClick={addJob}
          >
            Бүгд
          </button>
          <button
            className="bg-slate-100 h-[48px] w-full px-4 rounded-[12px] text-slate-800"
            onClick={addJob}
          >
            Хийх
          </button>
          <button
            className="bg-slate-100 h-[48px] w-full px-4 rounded-[12px] text-slate-800"
            onClick={addJob}
          >
            Дууссан
          </button>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {toDoList.map((todo, index) => {
            return (
              <div className="h-[48px] w-full flex justify-between px-4 items-center bg-slate-100 rounded-[12px] text-slate-800">
                <h1>{todo.title}</h1>
                <button
                  onClick={() => {
                    deleteJob(index);
                  }}
                >
                  🗑️
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
