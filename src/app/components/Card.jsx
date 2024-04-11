import React from 'react';
import Link from "next/link";

const Card = ({id, image, name, brand}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/discInfo/${id}`}>
                <img className="p-8 rounded-t-lg" src={image} alt="product image"/>
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p>{brand}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;