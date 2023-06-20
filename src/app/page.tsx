"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import Form from "../app/components/Form";

export default function Home() {
  return (
    // <main className="min-h-screen items-center justify-between p-24">
    //   <Form/>
    
    //   <CompletedList/>
    // </main>
    <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-indigo-600">
          <h1 className="text-lg font-semibold text-white">TODOアプリ</h1>
        </div>
        <Form/>
      </div>
    </main>
  )
}
