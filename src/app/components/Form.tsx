"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import CompleteList from "../components/CompleteLists";

export default function Form() {
    const [todoText, setTodoText] = useState<string[]>([]);
    const setTodoTextInput = (e: any) => {
        setTodoText(e.target.value);
    }
    type TodoListProps = {
        textList: string[];
    };
    return (
        <div className="px-4 py-4 sm:p-6">
            <div className="mb-4">
                <form onSubmit={setTodoTextInput}>
                    <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="タスクを入力してください"/>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">追加する</button>
                </form>
            </div>
            <CompleteList/>
        </div>
    )
}
