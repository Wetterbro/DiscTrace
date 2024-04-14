"use client";
import React, { useState } from 'react';
import Link from "next/link";
import 'material-icons/iconfont/material-icons.css'
import Gallery from "@/app/components/Gallery";
import DiscSearch from "@/app/components/DiscSearch";
import discs from "@/data/discs";


const Page = () => {
    const [selectedTab, setSelectedTab] = useState('My Discs');

    const renderTab = () => {
        switch (selectedTab) {
            case 'My Discs':
                return <Gallery discs={discs} />;
            case 'Disc Lookup':
                return <DiscSearch/>;
            default:
                return <Gallery discs={discs} />;
        }
    };

    return (
        <main>
            <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
                        <Link href="./" className="order-2 md:order-none">
                            Back to Home
                        </Link>
                        <h1 className="text-3xl font-bold p-4 order-1 md:order-none">DiscTrace</h1>
                        <div className="w-full md:block md:w-auto order-3 md:order-none" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {['My Discs', 'Disc Lookup'].map((tabName) => (
                                    <li key={tabName}>
                                        <a
                                            onClick={() => setSelectedTab(tabName)}
                                            className={`block py-2 px-3 ${selectedTab === tabName
                                                ? 'text-gray-900 bg-blue-700'
                                                : 'text-gray-400 hover:bg-gray-100'
                                            } md:bg-transparent text-gray-900md:p-0 dark:text-white md:dark:text-blue-500`}
                                        >
                                            {tabName}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div>{renderTab()}</div>
        </main>
    );
};

export default Page;
