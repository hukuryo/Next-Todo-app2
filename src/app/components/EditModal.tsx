import React, { useState } from 'react';
import { Todo } from '../interfaces/Todo';

interface EditModalProps {
    todo: Todo;
    onSave: (editedTodo: Todo) => void;
    onCancel: () => void;
}

export default function EditModal({ todo, onSave, onCancel }: EditModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500">
                <div className="bg-white p-4 max-w-screen-lg mx-auto">
                    <h3 className="p-5">Edit Todo</h3>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md" onClick={() => setModalOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}