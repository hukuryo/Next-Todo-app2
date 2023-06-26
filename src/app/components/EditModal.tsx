    import React, { useState } from 'react';
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

interface EditModalProps {
    todo: Todo;
    onSave: (editedTodo: Todo) => void;
    onCancel: () => void;
}

export default function EditModal({ todo, onSave, onCancel }: EditModalProps) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
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
    );
}