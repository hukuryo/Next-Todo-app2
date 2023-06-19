"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';


export default function Form() {
    return (
        <div>
            <form>
                <div>
                    <div className='flex-1'>
                        <input className="w-1/2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                    </div>
                    <div>
                        <button className="bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2" type="submit">追加</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
