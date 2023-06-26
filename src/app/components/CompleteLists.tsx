import React, { useState } from 'react';
import EditModal from "../components/EditModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

interface Todo {
    task: string;
    isCompleted: boolean;
}

interface CompleteListProps {
    textList: Todo[];
    onDelete: (index: number) => void;
}

export default function CompleteList({ textList, onDelete }: CompleteListProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(-1);

    const handleEdit = (index: number) => {
        setSelectedTodoIndex(index);
        setModalOpen(true);
    };

    return (
        <div>
            <ul className="mt-6 space-y-4">
                {textList.map((todo: Todo, index: number) => (
                    <li key={index} className="flex items-center justify-between bg-white border border-gray-300 px-4 py-2 rounded-md">
                        <span>{todo.task}</span>
                        <div>
                            <button className="hover:text-red-800 mr-5" onClick={() => handleEdit(index)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button className="hover:text-red-800" onClick={() => onDelete(index)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {modalOpen && selectedTodoIndex !== -1 && (
                <EditModal
                    todo={textList[selectedTodoIndex]}
                    onSave={(editedTodo: Todo) => {
                        // ここで編集内容を保存する処理を実行する
                        // editedTodoには編集後のTodoオブジェクトが渡される
                        setModalOpen(false);
                    }}
                    onCancel={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}