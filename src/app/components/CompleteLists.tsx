"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';


export default function CompleteList() {
    return (
        <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-between bg-white border border-gray-300 px-4 py-2 rounded-md">
                <span></span>
                <button className="text-red-600 hover:text-red-800">削除</button>
            </li>
        </ul>
    )
}
