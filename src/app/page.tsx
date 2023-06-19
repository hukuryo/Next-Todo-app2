"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import Form from "../app/components/Form";
import CompleteList from "../app/components/CompleteLists";
import CompletedList from "../app/components/CompletedLists";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Form/>
      <CompleteList/>
      <CompletedList/>
  </main>
  )
}
