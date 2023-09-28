"use client";
import { useRouter } from 'next/navigation'

export default function Pricing(){
    const router = useRouter()
    console.log(router)
    return(
        <div>
            <h1>Pricing</h1>
        </div>
    )
}