'use client'
import React from 'react'
import { useParams } from 'next/navigation';

export default function Home() {
    const { id } = useParams()
    return (
        <main>
            Dynamic routing test: { id }
        </main>
    );
}
