import React, { useState } from 'react';
import CompleteList from "../components/CompleteLists";
import { Todo } from '../interfaces/Todo';

export default function Form() {
    const [todoText, setTodoText] = useState<string>('');
    const [textList, setTextList] = useState<Todo[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo: Todo = {
            task: todoText,
            isCompleted: false
        };
        if(todoText == ""){
            window.alert('テキストを入力してください！');
            return;
        }
        setTextList(prevTextList => [...prevTextList, newTodo]);
        setTodoText('');
    };

    const handleDelete = (index: number) => {
        setTextList(prevTextList => {
            const updatedList = [...prevTextList];
            updatedList.splice(index, 1);
            return updatedList;
        });
    };

    return (
        <div className="px-4 py-4 sm:p-6">
            <div className="mb-4">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="タスクを入力してください"
                        value={todoText}
                        onChange={handleInputChange}
                    />
                    <button className="bg-indigo-600 mt-3 text-white px-4 py-2 rounded-md" type="submit">追加する</button>
                </form>
            </div>
            <CompleteList textList={textList} onDelete={handleDelete}/>
        </div>
    );
}