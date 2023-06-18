"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import Link from "../app/components/link";
import Title from "../app/components/Title";



export default function Home() {
  
  

  console.log('レンダリング')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title/>
      <Link/>
  </main>
  )
}
