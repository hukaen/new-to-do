"use client";

import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [selectedCatigory, setSelectedCatigory] = useState("ALL");

  const addJob = () => {
    if (inputValue.trim) {
      const newJob = {
        id: Date.now(),
        title: inputValue.trim(),
        isDone: false,
      };
      setToDoList([...toDoList, newJob]);
    }

    setInputValue("");
  };
  const deleteJob = (id) => {
    const updateJob = toDoList.filter((job) => {
      return id !== job.id;
    });
    setToDoList(updateJob);
  };

  const changeSelected = (status) => {
    setSelectedCatigory(status);
  };

  const changeStatus = (id, status) => {
    const newList = toDoList.map((todo) => {
      if (id === todo.id) {
        const changedJob = { id: todo.id, title: todo.title, isDone: status };
        return changedJob;
      } else {
        return todo;
      }
    });
    setToDoList(newList);
  };

  const filteredList = toDoList.filter((todo) => {
    if (selectedCatigory === `DONE`) return todo.isDone === true;
    if (selectedCatigory === `PENDING`) return todo.isDone === false;
    if (selectedCatigory === `ALL`) return true;
  });

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
            className={`${selectedCatigory === `ALL` ? `bg-slate-400` : `bg-slate-100`} h-[48px] w-full px-4 rounded-[12px] text-slate-800`}
            onClick={() => {
              changeSelected("ALL");
            }}
          >
            Бүгд
          </button>
          <button
            className={`${selectedCatigory === `PENDING` ? `bg-slate-400` : `bg-slate-100`} h-[48px] w-full px-4 rounded-[12px] text-slate-800`}
            onClick={() => {
              changeSelected("PENDING");
            }}
          >
            Хийх
          </button>
          <button
            className={`${selectedCatigory === `DONE` ? `bg-slate-400` : `bg-slate-100`} h-[48px] w-full px-4 rounded-[12px] text-slate-800`}
            onClick={() => {
              changeSelected("DONE");
            }}
          >
            Дууссан
          </button>
        </div>

        <div className="flex flex-col gap-3 w-full items-center">
          {" "}
          {toDoList.length === 0 && (
            <p className="text-slate-400">Лист хоосон байна ажил нэмнэ үү🙂</p>
          )}
          {filteredList.map((todo) => {
            return (
              <div
                key={todo.id}
                className="h-[48px] w-full flex justify-between gap-3 px-4 items-center bg-slate-100 rounded-[12px] text-slate-800"
              >
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(event) => {
                    changeStatus(todo.id, event.target.checked);
                  }}
                />
                <h1 className="w-full">{todo.title}</h1>
                <button
                  onClick={() => {
                    deleteJob(todo.id);
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
