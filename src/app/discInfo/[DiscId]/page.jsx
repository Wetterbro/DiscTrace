"use client"
import React, {useState} from 'react';
import discs from "@/data/discs";
import Link from "next/link";

export default function DiscInfo({ params }) {
    
    const discId = Number(params.DiscId);

    const disc = discs.find(disc => disc.id === discId);
    
    const alertBox = () => {
        alert("Feature not available yet")
    }
    
    return (
        <div className="p-5">
            <Link href="../productpage">
                <svg className=" h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24"
                     stroke="black" fill="none">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"/>
                </svg>
            </Link>
            <div className={"flex justify-center items-center min-h-screen"}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={disc.image} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{disc.name}</div>
                        <p className="font-bold text-base">
                            {disc.brand}
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-center">
                        <button
                            onClick={alertBox}
                            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                            <span>Deregister</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}