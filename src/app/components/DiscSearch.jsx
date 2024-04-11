import React, { useState } from 'react';
import usersDiscs from "@/data/usersDiscs";

const DiscSearch = () => {
    const [disc, setDisc] = useState(null);
    const [searched, setSearched] = useState(false);

    const showDisc = () => {
        console.log("showDisc")
        const discId = Number(document.getElementById('discId').value);
        const foundDisc = usersDiscs.find(disc => disc.id === discId);
        console.log(foundDisc);
        setDisc(foundDisc);
        setSearched(true);
    }

    return (
        <div className={"p-7 max-w-7xl mx-auto"}>
            <label className=" flex text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Disc ID
            </label>
            <div className="mb-4 flex items-center">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="discId" type="number" placeholder="ID 1-5 avalible in dev mode"/>
                <button
                    onClick={showDisc}
                    className="inline-block h-full bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button">
                    Search
                </button>
            </div>
            <div>
                {disc ? (
                    <div className="flex justify-center">
                        <div class=" max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={disc.image} alt={disc.discName}/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{disc.discName}</div>
                                <p className="font-bold text-base">{disc.brand}</p>
                                <hr/>
                                <p className="text-gray-700 text-base">{disc.name}</p>
                                <p className="text-gray-700 text-base">{disc.number}</p>
                                <p className="text-gray-700 text-base">{disc.city}</p>
                            </div>
                        </div>
                    </div>
                ) : searched && <div><p>Disc not found</p></div>}
            </div>
        </div>
    );
};

export default DiscSearch;