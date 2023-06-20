import React, { useState } from 'react';

type CompleteListProps = {
    textList: string[];
};

const CompleteList: React.FC<CompleteListProps> = ({ textList }) => {
    return (
        <ul>
        {textList.map((text, index) => (
            <li key={index}>{text}</li>
        ))}
        </ul>
    );
};

export default function Form() {
    const [todoText, setTodoText] = useState<string[]>([]);
    const setTodoTextInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem('todoInput') as HTMLInputElement;
        const newTodoText = input.value.trim();
        if (newTodoText !== '') {
        setTodoText((prevText) => [...prevText, newTodoText]);
        input.value = '';
        }
    };

    return (
        <div className="px-4 py-4 sm:p-6">
        <div className="mb-4">
            <form onSubmit={setTodoTextInput}>
            <input
                type="text"
                id="todoInput"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="タスクを入力してください"
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                追加する
            </button>
            </form>
        </div>
        <CompleteList textList={todoText} />
        </div>
    );
}