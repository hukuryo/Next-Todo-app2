import React, { useState } from 'react';

interface Todo {
    task: string;
    isCompleted: boolean;
}

export default function CompleteList() {
    const initialState: Todo[] = [
        {
        task: 'Learn vue.js',
        isCompleted: false,
        },
        {
        task: 'Learn React Hook',
        isCompleted: false,
        },
        {
        task: 'Learn Gatsby.js',
        isCompleted: false,
        }
    ];
    const [todos, setTodos] = useState(initialState);

    return (
        <ul className="mt-6 space-y-4">
        {todos.map((todo: Todo, index: number) => (
            <li key={index} className="flex items-center justify-between bg-white border border-gray-300 px-4 py-2 rounded-md">
                <span>{todo.task}</span>
                <button className="text-red-600 hover:text-red-800">削除</button>
            </li>
        ))}
        </ul>
    );
}