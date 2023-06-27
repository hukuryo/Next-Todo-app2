import React, { useState } from 'react';
import EditModal from "../components/EditModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../interfaces/Todo';


interface CompleteListProps {
    textList: Todo[];
    onDelete: (index: number) => void;
}

export default function CompleteList({ textList, onDelete }: CompleteListProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(-1);

    const handleEdit = (index: number) => {
        setSelectedTodoIndex(index);
        setModalOpen(!modalOpen);
        console.log(modalOpen)
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
                // <EditModal
                //     todo={textList[selectedTodoIndex]}
                //     onSave={(editedTodo: Todo) => {
                //         setModalOpen(true);
                //     }}
                //     onCancel={() => setModalOpen(false)}
                // />
                <div>
                    {modalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                        <div className="bg-white p-4">
                            <h3>Edit Todo</h3>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md" onClick={() => setModalOpen(false)}>
                            Close
                            </button>
                        </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}