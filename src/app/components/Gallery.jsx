import React from 'react';
import Card from "@/app/components/Card";

const Gallery = (Prop) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4 px-10">
            {Prop.discs.map((disc) => (

                <Card
                    key={disc.id}
                    id={disc.id}
                    image={disc.image}
                    name={disc.name}
                    brand={disc.brand}
                />
                
            ))}
        </div>
    );
};

export default Gallery;