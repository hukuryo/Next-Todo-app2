import React, { useState } from 'react';

interface Todo {
    task: string;
    isCompleted: boolean;
}

interface CompleteListProps {
    textList: Todo[];
    onDelete: (index: number) => void;
}

export default function CompleteList({ textList, onDelete }: CompleteListProps) {
    return (
        <ul className="mt-6 space-y-4">
        {textList.map((todo: Todo, index: number) => (
            <li key={index} className="flex items-center justify-between bg-white border border-gray-300 px-4 py-2 rounded-md">
            <span>{todo.task}</span>
            <button className="text-red-600 hover:text-red-800" onClick={() => onDelete(index)}>削除</button>
            </li>
        ))}
        </ul>
    );
}