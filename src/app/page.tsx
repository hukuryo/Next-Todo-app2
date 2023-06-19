"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import Form from "../app/components/Form";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Form/>
      <div className=''>
        <ul>
          <li>test</li>
        </ul>
      </div>
  </main>
  )
}
